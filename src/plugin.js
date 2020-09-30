import videojs from "video.js";
import { version as VERSION } from "../package.json";
import axios from "axios";
import "videojs-contrib-quality-levels";
import "videojs-hls-quality-selector";
import "../videojs-event-tracking/dist/videojs-event-tracking.es";

// Default options for the plugin.
const defaults = {};

// Cross-compatibility for Video.js 5 and 6.
const registerPlugin = videojs.registerPlugin || videojs.plugin;
// const dom = videojs.dom || videojs;

/**
 * Function to invoke when the player is ready.
 *
 * This is a great place for your plugin to initialize itself. When this
 * function is called, the player will have its DOM and child components
 * in place.
 *
 * @function onPlayerReady
 * @param    {Player} player
 *           A Video.js player object.
 *
 * @param    {Object} [options={}]
 *           A plain object containing options for the plugin.
 */
const onPlayerReady = async (player, options) => {
  player.addClass("vjs-livecastplugin");

  let {
    eventId,
    user = null,
    // playerUrl,
    // streamId,
    token = null,
    apiHost = "",
  } = player.options_;
  let streamRes;

  try {
    streamRes = await axios({
      method: "get",
      url: `${apiHost}stream`,
      params: { webcastId: eventId },
      headers: { Authorization: token },
    });
  } catch (err) {
    console.log(err);
  }

  let stream = streamRes.data[0];
  let { _id, playerUrl } = stream;
  let streamId = _id;

  // halihazırda player, user ya da token olmadan da izlenilmesine izin veriyor

  /**
   * Player source'unu set etme işlemi
   * dil seçimlerinin ayrı sourceları olduğundan
   * pluginin kullanılacağı kaynaktan veya dil seçim plugin'i tarafından
   * dil seçimine göre set edileceği için
   * burada devre dışı bırakıldı.
   * hlsQualitySelector plugini çalışıyor ve çalışmaya devam etmesi gerekiyor.
   *
   * Author: Erdoğan Bulut
   */

  // şimdilik comment dışına alındı
  player.src({
    type: "application/x-mpegURL",
    src: playerUrl,
  });
  // Player source set etme işlemi sonu

  player.hlsQualitySelector();

  let seshRes;
  let userId = user._id || null;

  // token varsa authorization header'ına ekle
  // elimizde userId varsa bunu regId olarak yolla
  // elimizde user objesi varsa reg olarak gönder

  try {
    seshRes = await axios({
      method: "post",
      url: `${apiHost}session-connections`,
      data: {
        streamId,
        webcastId: eventId,
        ...(user ? { reg: user } : null),
        ...(userId ? { regId: userId } : null),
        watchStarted: new Date(),
      },
      headers: { ...(token ? { Authorization: token } : null) },
    });
  } catch (err) {
    console.log(err);
  }

  let seshId = seshRes.data._id || null;
  let deviceId = seshRes.data.deviceId || null;

  player.eventTracking({
    performance: async (data) => {
      try {
        await axios({
          method: "post",
          url: `${apiHost}session-connections`,
          data: {
            streamId,
            webcastId: eventId,
            ...(user ? { reg: user } : null),
            ...(userId ? { regId: userId } : null),
            metrics: data,
            id: seshId,
            ...(deviceId ? { deviceId } : null),
          },
          headers: { ...(token ? { Authorization: token } : null) },
        });
      } catch (err) {
        console.log(err);
      }
    },
    interval: 20000,
  });

  player.on("play", async () => {
    await axios({
      method: "post",
      url: `${apiHost}session-connections`,
      data: {
        isWatching: true,
        id: seshId,
        ...(deviceId ? { deviceId } : null),
      },
      headers: { ...(token ? { Authorization: token } : null) },
    });
  });
  player.on("pause", async () => {
    await axios({
      method: "post",
      url: `${apiHost}session-connections`,
      data: {
        isWatching: false,
        id: seshId,
        ...(deviceId ? { deviceId } : null),
      },
      headers: { ...(token ? { Authorization: token } : null) },
    });
  });
};

/**
 * A video.js plugin.
 *
 * In the plugin function, the value of `this` is a video.js `Player`
 * instance. You cannot rely on the player being in a "ready" state here,
 * depending on how the plugin is invoked. This may or may not be important
 * to you; if not, remove the wait for "ready"!
 *
 * @function livecastplugin
 * @param    {Object} [options={}]
 *           An object of options left to the plugin author to define.
 */
const livecastplugin = function (options) {
  this.ready(() => {
    onPlayerReady(this, videojs.mergeOptions(defaults, options));
  });
};

// Register the plugin with video.js.
registerPlugin("livecastplugin", livecastplugin);

// Include the version number.
livecastplugin.VERSION = VERSION;

export default livecastplugin;
