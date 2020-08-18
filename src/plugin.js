import videojs from "video.js";
import { version as VERSION } from "../package.json";
import axios from "axios";
import "videojs-contrib-quality-levels";
import "videojs-hls-quality-selector";
import "videojs-event-tracking";

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

  let { eventId, user, playerUrl, streamId, token } = player.options_;

  player.src({
    type: "application/x-mpegURL",
    src: playerUrl,
  });
  player.hlsQualitySelector();

  let seshRes;

  try {
    seshRes = await axios({
      method: "post",
      url: "session-connections",
      data: {
        streamId,
        webcastId: eventId,
        regId: user._id,
        watchStarted: new Date(),
      },
      headers: { Authorization: token },
    });
  } catch (err) {
    console.log(err);
  }

  let seshId = seshRes.data._id;

  player.eventTracking({
    performance: async (data) => {
      try {
        await axios({
          method: "post",
          url: "session-connections",
          data: {
            streamId,
            webcastId: eventId,
            regId: user._id,
            metrics: data,
            id: seshId,
          },
          headers: { Authorization: token },
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
      url: "session-connections",
      data: { isWatching: true, id: seshId },
      headers: { Authorization: token },
    });
  });
  player.on("pause", async () => {
    await axios({
      method: "post",
      url: "session-connections",
      data: { isWatching: false, id: seshId },
      headers: { Authorization: token },
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
