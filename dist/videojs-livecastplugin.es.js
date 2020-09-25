/*! @name videojs-livecastplugin @version 0.0.3 @license UNLICENSED */
import videojs from 'video.js';
import document$1 from 'global/document';

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var version = "0.0.3";

var bind = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                           navigator.product === 'NativeScript' ||
                                           navigator.product === 'NS')) {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Function equal to merge with the difference being that no reference
 * to original objects is kept.
 *
 * @see merge
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function deepMerge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = deepMerge(result[key], val);
    } else if (typeof val === 'object') {
      result[key] = deepMerge({}, val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

var utils = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  deepMerge: deepMerge,
  extend: extend,
  trim: trim
};

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
var buildURL = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

var InterceptorManager_1 = InterceptorManager;

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
var transformData = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};

var isCancel = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};

var normalizeHeaderName = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};

/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
var enhanceError = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }

  error.request = request;
  error.response = response;
  error.isAxiosError = true;

  error.toJSON = function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code
    };
  };
  return error;
};

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
var createError = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
var settle = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};

/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
var isAbsoluteURL = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};

/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
var combineURLs = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};

/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */
var buildFullPath = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
};

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
var parseHeaders = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};

var isURLSameOrigin = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
    (function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement('a');
      var originURL;

      /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
      function resolveURL(url) {
        var href = url;

        if (msie) {
        // IE needs attribute set twice to normalize properties
          urlParsingNode.setAttribute('href', href);
          href = urlParsingNode.href;
        }

        urlParsingNode.setAttribute('href', href);

        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
            urlParsingNode.pathname :
            '/' + urlParsingNode.pathname
        };
      }

      originURL = resolveURL(window.location.href);

      /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
      return function isURLSameOrigin(requestURL) {
        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
        return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
      };
    })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    })()
);

var cookies = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
    (function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + '=' + encodeURIComponent(value));

          if (utils.isNumber(expires)) {
            cookie.push('expires=' + new Date(expires).toGMTString());
          }

          if (utils.isString(path)) {
            cookie.push('path=' + path);
          }

          if (utils.isString(domain)) {
            cookie.push('domain=' + domain);
          }

          if (secure === true) {
            cookie.push('secure');
          }

          document.cookie = cookie.join('; ');
        },

        read: function read(name) {
          var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
          return (match ? decodeURIComponent(match[3]) : null);
        },

        remove: function remove(name) {
          this.write(name, '', Date.now() - 86400000);
        }
      };
    })() :

  // Non standard browser env (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return {
        write: function write() {},
        read: function read() { return null; },
        remove: function remove() {}
      };
    })()
);

var xhr = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    var fullPath = buildFullPath(config.baseURL, config.url);
    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request.onreadystatechange = function handleLoad() {
      if (!request || request.readyState !== 4) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(createError('Request aborted', config, 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      var timeoutErrorMessage = 'timeout of ' + config.timeout + 'ms exceeded';
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(createError(timeoutErrorMessage, config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies$1 = cookies;

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
        cookies$1.read(config.xsrfCookieName) :
        undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (!utils.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = xhr;
  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = xhr;
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

var defaults_1 = defaults;

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
var dispatchRequest = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults_1.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */
var mergeConfig = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};

  var valueFromConfig2Keys = ['url', 'method', 'params', 'data'];
  var mergeDeepPropertiesKeys = ['headers', 'auth', 'proxy'];
  var defaultToConfig2Keys = [
    'baseURL', 'url', 'transformRequest', 'transformResponse', 'paramsSerializer',
    'timeout', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',
    'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress',
    'maxContentLength', 'validateStatus', 'maxRedirects', 'httpAgent',
    'httpsAgent', 'cancelToken', 'socketPath'
  ];

  utils.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    }
  });

  utils.forEach(mergeDeepPropertiesKeys, function mergeDeepProperties(prop) {
    if (utils.isObject(config2[prop])) {
      config[prop] = utils.deepMerge(config1[prop], config2[prop]);
    } else if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (utils.isObject(config1[prop])) {
      config[prop] = utils.deepMerge(config1[prop]);
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  utils.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  var axiosKeys = valueFromConfig2Keys
    .concat(mergeDeepPropertiesKeys)
    .concat(defaultToConfig2Keys);

  var otherKeys = Object
    .keys(config2)
    .filter(function filterAxiosKeys(key) {
      return axiosKeys.indexOf(key) === -1;
    });

  utils.forEach(otherKeys, function otherKeysDefaultToConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  return config;
};

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager_1(),
    response: new InterceptorManager_1()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
  }

  config = mergeConfig(this.defaults, config);

  // Set config.method
  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = 'get';
  }

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

var Axios_1 = Axios;

/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

var Cancel_1 = Cancel;

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel_1(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

var CancelToken_1 = CancelToken;

/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
var spread = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios_1(defaultConfig);
  var instance = bind(Axios_1.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios_1.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults_1);

// Expose Axios class to allow class inheritance
axios.Axios = Axios_1;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(mergeConfig(axios.defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = Cancel_1;
axios.CancelToken = CancelToken_1;
axios.isCancel = isCancel;

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = spread;

var axios_1 = axios;

// Allow use of default import syntax in TypeScript
var default_1 = axios;
axios_1.default = default_1;

var axios$1 = axios_1;

/*! @name videojs-contrib-quality-levels @version 2.0.9 @license Apache-2.0 */

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/**
 * A single QualityLevel.
 *
 * interface QualityLevel {
 *   readonly attribute DOMString id;
 *            attribute DOMString label;
 *   readonly attribute long width;
 *   readonly attribute long height;
 *   readonly attribute long bitrate;
 *            attribute boolean enabled;
 * };
 *
 * @class QualityLevel
 */

var QualityLevel =
/**
 * Creates a QualityLevel
 *
 * @param {Representation|Object} representation The representation of the quality level
 * @param {string}   representation.id        Unique id of the QualityLevel
 * @param {number=}  representation.width     Resolution width of the QualityLevel
 * @param {number=}  representation.height    Resolution height of the QualityLevel
 * @param {number}   representation.bandwidth Bitrate of the QualityLevel
 * @param {Function} representation.enabled   Callback to enable/disable QualityLevel
 */
function QualityLevel(representation) {
  var level = this; // eslint-disable-line

  if (videojs.browser.IS_IE8) {
    level = document$1.createElement('custom');

    for (var prop in QualityLevel.prototype) {
      if (prop !== 'constructor') {
        level[prop] = QualityLevel.prototype[prop];
      }
    }
  }

  level.id = representation.id;
  level.label = level.id;
  level.width = representation.width;
  level.height = representation.height;
  level.bitrate = representation.bandwidth;
  level.enabled_ = representation.enabled;
  Object.defineProperty(level, 'enabled', {
    /**
     * Get whether the QualityLevel is enabled.
     *
     * @return {boolean} True if the QualityLevel is enabled.
     */
    get: function get() {
      return level.enabled_();
    },

    /**
     * Enable or disable the QualityLevel.
     *
     * @param {boolean} enable true to enable QualityLevel, false to disable.
     */
    set: function set(enable) {
      level.enabled_(enable);
    }
  });
  return level;
};

/**
 * A list of QualityLevels.
 *
 * interface QualityLevelList : EventTarget {
 *   getter QualityLevel (unsigned long index);
 *   readonly attribute unsigned long length;
 *   readonly attribute long selectedIndex;
 *
 *   void addQualityLevel(QualityLevel qualityLevel)
 *   void removeQualityLevel(QualityLevel remove)
 *   QualityLevel? getQualityLevelById(DOMString id);
 *
 *   attribute EventHandler onchange;
 *   attribute EventHandler onaddqualitylevel;
 *   attribute EventHandler onremovequalitylevel;
 * };
 *
 * @extends videojs.EventTarget
 * @class QualityLevelList
 */

var QualityLevelList =
/*#__PURE__*/
function (_videojs$EventTarget) {
  _inheritsLoose(QualityLevelList, _videojs$EventTarget);

  function QualityLevelList() {
    var _this;

    _this = _videojs$EventTarget.call(this) || this;

    var list = _assertThisInitialized(_assertThisInitialized(_this)); // eslint-disable-line


    if (videojs.browser.IS_IE8) {
      list = document$1.createElement('custom');

      for (var prop in QualityLevelList.prototype) {
        if (prop !== 'constructor') {
          list[prop] = QualityLevelList.prototype[prop];
        }
      }
    }

    list.levels_ = [];
    list.selectedIndex_ = -1;
    /**
     * Get the index of the currently selected QualityLevel.
     *
     * @returns {number} The index of the selected QualityLevel. -1 if none selected.
     * @readonly
     */

    Object.defineProperty(list, 'selectedIndex', {
      get: function get() {
        return list.selectedIndex_;
      }
    });
    /**
     * Get the length of the list of QualityLevels.
     *
     * @returns {number} The length of the list.
     * @readonly
     */

    Object.defineProperty(list, 'length', {
      get: function get() {
        return list.levels_.length;
      }
    });
    return list || _assertThisInitialized(_this);
  }
  /**
   * Adds a quality level to the list.
   *
   * @param {Representation|Object} representation The representation of the quality level
   * @param {string}   representation.id        Unique id of the QualityLevel
   * @param {number=}  representation.width     Resolution width of the QualityLevel
   * @param {number=}  representation.height    Resolution height of the QualityLevel
   * @param {number}   representation.bandwidth Bitrate of the QualityLevel
   * @param {Function} representation.enabled   Callback to enable/disable QualityLevel
   * @return {QualityLevel} the QualityLevel added to the list
   * @method addQualityLevel
   */


  var _proto = QualityLevelList.prototype;

  _proto.addQualityLevel = function addQualityLevel(representation) {
    var qualityLevel = this.getQualityLevelById(representation.id); // Do not add duplicate quality levels

    if (qualityLevel) {
      return qualityLevel;
    }

    var index = this.levels_.length;
    qualityLevel = new QualityLevel(representation);

    if (!('' + index in this)) {
      Object.defineProperty(this, index, {
        get: function get() {
          return this.levels_[index];
        }
      });
    }

    this.levels_.push(qualityLevel);
    this.trigger({
      qualityLevel: qualityLevel,
      type: 'addqualitylevel'
    });
    return qualityLevel;
  };
  /**
   * Removes a quality level from the list.
   *
   * @param {QualityLevel} remove QualityLevel to remove to the list.
   * @return {QualityLevel|null} the QualityLevel removed or null if nothing removed
   * @method removeQualityLevel
   */


  _proto.removeQualityLevel = function removeQualityLevel(qualityLevel) {
    var removed = null;

    for (var i = 0, l = this.length; i < l; i++) {
      if (this[i] === qualityLevel) {
        removed = this.levels_.splice(i, 1)[0];

        if (this.selectedIndex_ === i) {
          this.selectedIndex_ = -1;
        } else if (this.selectedIndex_ > i) {
          this.selectedIndex_--;
        }

        break;
      }
    }

    if (removed) {
      this.trigger({
        qualityLevel: qualityLevel,
        type: 'removequalitylevel'
      });
    }

    return removed;
  };
  /**
   * Searches for a QualityLevel with the given id.
   *
   * @param {string} id The id of the QualityLevel to find.
   * @return {QualityLevel|null} The QualityLevel with id, or null if not found.
   * @method getQualityLevelById
   */


  _proto.getQualityLevelById = function getQualityLevelById(id) {
    for (var i = 0, l = this.length; i < l; i++) {
      var level = this[i];

      if (level.id === id) {
        return level;
      }
    }

    return null;
  };
  /**
   * Resets the list of QualityLevels to empty
   *
   * @method dispose
   */


  _proto.dispose = function dispose() {
    this.selectedIndex_ = -1;
    this.levels_.length = 0;
  };

  return QualityLevelList;
}(videojs.EventTarget);
/**
 * change - The selected QualityLevel has changed.
 * addqualitylevel - A QualityLevel has been added to the QualityLevelList.
 * removequalitylevel - A QualityLevel has been removed from the QualityLevelList.
 */


QualityLevelList.prototype.allowedEvents_ = {
  change: 'change',
  addqualitylevel: 'addqualitylevel',
  removequalitylevel: 'removequalitylevel'
}; // emulate attribute EventHandler support to allow for feature detection

for (var event in QualityLevelList.prototype.allowedEvents_) {
  QualityLevelList.prototype['on' + event] = null;
}

var version$1 = "2.0.9";

var registerPlugin = videojs.registerPlugin || videojs.plugin;
/**
 * Initialization function for the qualityLevels plugin. Sets up the QualityLevelList and
 * event handlers.
 *
 * @param {Player} player Player object.
 * @param {Object} options Plugin options object.
 * @function initPlugin
 */

var initPlugin = function initPlugin(player, options) {
  var originalPluginFn = player.qualityLevels;
  var qualityLevelList = new QualityLevelList();

  var disposeHandler = function disposeHandler() {
    qualityLevelList.dispose();
    player.qualityLevels = originalPluginFn;
    player.off('dispose', disposeHandler);
  };

  player.on('dispose', disposeHandler);

  player.qualityLevels = function () {
    return qualityLevelList;
  };

  player.qualityLevels.VERSION = version$1;
  return qualityLevelList;
};
/**
 * A video.js plugin.
 *
 * In the plugin function, the value of `this` is a video.js `Player`
 * instance. You cannot rely on the player being in a "ready" state here,
 * depending on how the plugin is invoked. This may or may not be important
 * to you; if not, remove the wait for "ready"!
 *
 * @param {Object} options Plugin options object
 * @function qualityLevels
 */


var qualityLevels = function qualityLevels(options) {
  return initPlugin(this, videojs.mergeOptions({}, options));
}; // Register the plugin with video.js.


registerPlugin('qualityLevels', qualityLevels); // Include the version number.

qualityLevels.VERSION = version$1;

var version$2 = "1.1.1";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};





var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};











var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};











var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var VideoJsButtonClass = videojs.getComponent('MenuButton');
var VideoJsMenuClass = videojs.getComponent('Menu');
var VideoJsComponent = videojs.getComponent('Component');
var Dom = videojs.dom;

/**
 * Convert string to title case.
 *
 * @param {string} string - the string to convert
 * @return {string} the returned titlecase string
 */
function toTitleCase(string) {
  if (typeof string !== 'string') {
    return string;
  }

  return string.charAt(0).toUpperCase() + string.slice(1);
}

/**
 * Extend vjs button class for quality button.
 */

var ConcreteButton = function (_VideoJsButtonClass) {
  inherits(ConcreteButton, _VideoJsButtonClass);

  /**
   * Button constructor.
   *
   * @param {Player} player - videojs player instance
   */
  function ConcreteButton(player) {
    classCallCheck(this, ConcreteButton);
    return possibleConstructorReturn(this, _VideoJsButtonClass.call(this, player, { title: player.localize('Quality') }));
  }

  /**
   * Creates button items.
   *
   * @return {Array} - Button items
   */


  ConcreteButton.prototype.createItems = function createItems() {
    return [];
  };

  /**
   * Create the menu and add all items to it.
   *
   * @return {Menu}
   *         The constructed menu
   */


  ConcreteButton.prototype.createMenu = function createMenu() {
    var menu = new VideoJsMenuClass(this.player_, { menuButton: this });

    this.hideThreshold_ = 0;

    // Add a title list item to the top
    if (this.options_.title) {
      var titleEl = Dom.createEl('li', {
        className: 'vjs-menu-title',
        innerHTML: toTitleCase(this.options_.title),
        tabIndex: -1
      });
      var titleComponent = new VideoJsComponent(this.player_, { el: titleEl });

      this.hideThreshold_ += 1;

      menu.addItem(titleComponent);
    }

    this.items = this.createItems();

    if (this.items) {
      // Add menu items to the menu
      for (var i = 0; i < this.items.length; i++) {
        menu.addItem(this.items[i]);
      }
    }

    return menu;
  };

  return ConcreteButton;
}(VideoJsButtonClass);

// Concrete classes
var VideoJsMenuItemClass = videojs.getComponent('MenuItem');

/**
 * Extend vjs menu item class.
 */

var ConcreteMenuItem = function (_VideoJsMenuItemClass) {
  inherits(ConcreteMenuItem, _VideoJsMenuItemClass);

  /**
   * Menu item constructor.
   *
   * @param {Player} player - vjs player
   * @param {Object} item - Item object
   * @param {ConcreteButton} qualityButton - The containing button.
   * @param {HlsQualitySelectorPlugin} plugin - This plugin instance.
   */
  function ConcreteMenuItem(player, item, qualityButton, plugin) {
    classCallCheck(this, ConcreteMenuItem);

    var _this = possibleConstructorReturn(this, _VideoJsMenuItemClass.call(this, player, {
      label: item.label,
      selectable: true,
      selected: item.selected || false
    }));

    _this.item = item;
    _this.qualityButton = qualityButton;
    _this.plugin = plugin;
    return _this;
  }

  /**
   * Click event for menu item.
   */


  ConcreteMenuItem.prototype.handleClick = function handleClick() {

    // Reset other menu items selected status.
    for (var i = 0; i < this.qualityButton.items.length; ++i) {
      this.qualityButton.items[i].selected(false);
    }

    // Set this menu item to selected, and set quality.
    this.plugin.setQuality(this.item.value);
    this.selected(true);
  };

  return ConcreteMenuItem;
}(VideoJsMenuItemClass);

// Default options for the plugin.
var defaults$1 = {};

// Cross-compatibility for Video.js 5 and 6.
var registerPlugin$1 = videojs.registerPlugin || videojs.plugin;
// const dom = videojs.dom || videojs;

/**
 * VideoJS HLS Quality Selector Plugin class.
 */

var HlsQualitySelectorPlugin = function () {

  /**
   * Plugin Constructor.
   *
   * @param {Player} player - The videojs player instance.
   * @param {Object} options - The plugin options.
   */
  function HlsQualitySelectorPlugin(player, options) {
    classCallCheck(this, HlsQualitySelectorPlugin);

    this.player = player;
    this.config = options;

    // If there is quality levels plugin and the HLS tech exists
    // then continue.
    if (this.player.qualityLevels && this.getHls()) {
      // Create the quality button.
      this.createQualityButton();
      this.bindPlayerEvents();
    }
  }

  /**
   * Returns HLS Plugin
   *
   * @return {*} - videojs-hls-contrib plugin.
   */


  HlsQualitySelectorPlugin.prototype.getHls = function getHls() {
    return this.player.tech({ IWillNotUseThisInPlugins: true }).hls;
  };

  /**
   * Binds listener for quality level changes.
   */


  HlsQualitySelectorPlugin.prototype.bindPlayerEvents = function bindPlayerEvents() {
    this.player.qualityLevels().on('addqualitylevel', this.onAddQualityLevel.bind(this));
  };

  /**
   * Adds the quality menu button to the player control bar.
   */


  HlsQualitySelectorPlugin.prototype.createQualityButton = function createQualityButton() {

    var player = this.player;

    this._qualityButton = new ConcreteButton(player);

    var placementIndex = player.controlBar.children().length - 2;
    var concreteButtonInstance = player.controlBar.addChild(this._qualityButton, { componentClass: 'qualitySelector' }, this.config.placementIndex || placementIndex);

    concreteButtonInstance.addClass('vjs-quality-selector');
    if (!this.config.displayCurrentQuality) {
      var icon = ' ' + (this.config.vjsIconClass || 'vjs-icon-hd');

      concreteButtonInstance.menuButton_.$('.vjs-icon-placeholder').className += icon;
    } else {
      this.setButtonInnerText('auto');
    }
    concreteButtonInstance.removeClass('vjs-hidden');
  };

  /**
   *Set inner button text.
   *
   * @param {string} text - the text to display in the button.
   */


  HlsQualitySelectorPlugin.prototype.setButtonInnerText = function setButtonInnerText(text) {
    this._qualityButton.menuButton_.$('.vjs-icon-placeholder').innerHTML = text;
  };

  /**
   * Builds individual quality menu items.
   *
   * @param {Object} item - Individual quality menu item.
   * @return {ConcreteMenuItem} - Menu item
   */


  HlsQualitySelectorPlugin.prototype.getQualityMenuItem = function getQualityMenuItem(item) {
    var player = this.player;

    return new ConcreteMenuItem(player, item, this._qualityButton, this);
  };

  /**
   * Executed when a quality level is added from HLS playlist.
   */


  HlsQualitySelectorPlugin.prototype.onAddQualityLevel = function onAddQualityLevel() {
    var _this = this;

    var player = this.player;
    var qualityList = player.qualityLevels();
    var levels = qualityList.levels_ || [];
    var levelItems = [];

    var _loop = function _loop(i) {
      if (!levelItems.filter(function (_existingItem) {
        return _existingItem.item && _existingItem.item.value === levels[i].height;
      }).length) {
        var levelItem = _this.getQualityMenuItem.call(_this, {
          label: levels[i].height + 'p',
          value: levels[i].height
        });

        levelItems.push(levelItem);
      }
    };

    for (var i = 0; i < levels.length; ++i) {
      _loop(i);
    }

    levelItems.sort(function (current, next) {
      if ((typeof current === 'undefined' ? 'undefined' : _typeof(current)) !== 'object' || (typeof next === 'undefined' ? 'undefined' : _typeof(next)) !== 'object') {
        return -1;
      }
      if (current.item.value < next.item.value) {
        return -1;
      }
      if (current.item.value > next.item.value) {
        return 1;
      }
      return 0;
    });

    levelItems.push(this.getQualityMenuItem.call(this, {
      label: player.localize('Auto'),
      value: 'auto',
      selected: true
    }));

    if (this._qualityButton) {
      this._qualityButton.createItems = function () {
        return levelItems;
      };
      this._qualityButton.update();
    }
  };

  /**
   * Sets quality (based on media height)
   *
   * @param {number} height - A number representing HLS playlist.
   */


  HlsQualitySelectorPlugin.prototype.setQuality = function setQuality(height) {
    var qualityList = this.player.qualityLevels();

    if (this.config.displayCurrentQuality) {
      this.setButtonInnerText(height === 'auto' ? height : height + 'p');
    }

    for (var i = 0; i < qualityList.length; ++i) {
      var quality = qualityList[i];

      quality.enabled = quality.height === height || height === 'auto';
    }
    this._qualityButton.unpressButton();
  };

  return HlsQualitySelectorPlugin;
}();

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


var onPlayerReady = function onPlayerReady(player, options) {
  player.addClass('vjs-hls-quality-selector');
  player.hlsQualitySelector = new HlsQualitySelectorPlugin(player, options);
};

/**
 * A video.js plugin.
 *
 * In the plugin function, the value of `this` is a video.js `Player`
 * instance. You cannot rely on the player being in a "ready" state here,
 * depending on how the plugin is invoked. This may or may not be important
 * to you; if not, remove the wait for "ready"!
 *
 * @function hlsQualitySelector
 * @param    {Object} [options={}]
 *           An object of options left to the plugin author to define.
 */
var hlsQualitySelector = function hlsQualitySelector(options) {
  var _this2 = this;

  this.ready(function () {
    onPlayerReady(_this2, videojs.mergeOptions(defaults$1, options));
  });
};

// Register the plugin with video.js.
registerPlugin$1('hlsQualitySelector', hlsQualitySelector);

// Include the version number.
hlsQualitySelector.VERSION = version$2;

/*! @name videojs-event-tracking @version 1.0.1 @license MIT */
var version$3 = "1.0.1";
/**
 * @function BufferTracking
 * @param    {Object} [options={}]
 *           An object of options left to the plugin author to define.
 *
 *           Can contain the following optional configuration, passed during plugin initialization:
 *           bufferingConfig.includeScrub => Boolean indicating whether buffering metrics
 *           should be considered for computation while user is scrubbing on the video player.
 *
 *
 * Tracks when the video player is marked as buffering and waits until the player
 * has made some progress.
 *
 * Example Usage:
 * player.on('tracking:buffered', (e, data) => console.log(data))
 *
 * Data Attributes:
 * => currentTime:    current second of video playback
 * => readyState:     video#readyState value
 * => secondsToLoad:  Total amount of time in seconds buffering took
 * => bufferCount:    Total buffer events for this source
 */

var BufferTracking = function BufferTracking(config) {
  var _this = this;

  var timer = null;
  var scrubbing = false;
  var bufferPosition = false;
  var bufferStart = false;
  var bufferEnd = false;
  var bufferCount = 0;
  var readyState = false;

  var reset = function reset() {
    if (timer) {
      clearTimeout(timer);
    }

    scrubbing = false;
    bufferPosition = false;
    bufferStart = false;
    bufferEnd = false;
    bufferCount = 0;
    readyState = false;
  };

  var onPause = function onPause() {
    bufferStart = false;

    if (_this.scrubbing() && !(config.bufferingConfig && config.bufferingConfig.includeScrub)) {
      scrubbing = true;
      timer = setTimeout(function () {
        scrubbing = false;
      }, 200);
    }
  };

  var onPlayerWaiting = function onPlayerWaiting() {
    if (bufferStart === false && scrubbing === false && _this.currentTime() > 0) {
      bufferStart = new Date();
      bufferPosition = +_this.currentTime().toFixed(0);
      readyState = +_this.readyState();
    }
  };

  var onTimeupdate = function onTimeupdate() {
    var curTime = +_this.currentTime().toFixed(0);

    if (bufferStart && curTime !== bufferPosition) {
      bufferEnd = new Date();
      var secondsToLoad = (bufferEnd - bufferStart) / 1000;
      bufferStart = false;
      bufferPosition = false;
      bufferCount++;

      _this.trigger('tracking:buffered', {
        currentTime: +curTime,
        readyState: +readyState,
        secondsToLoad: +secondsToLoad.toFixed(3),
        bufferCount: +bufferCount
      });
    }
  };

  this.on('dispose', reset);
  this.on('loadstart', reset);
  this.on('ended', reset);
  this.on('pause', onPause);
  this.on('waiting', onPlayerWaiting);
  this.on('timeupdate', onTimeupdate);
};
/**
 * Tracks when users pause the video.
 *
 * Example Usage:
 * player.on('tracking:pause', (e, data) => console.log(data))
 *
 * Data Attributes:
 * => pauseCount:       Total number of Pause events triggered
 *
 * @function PauseTracking
 * @param    {Object} [config={}]
 *           An object of config left to the plugin author to define.
 */


var PauseTracking = function PauseTracking(config) {
  var player = this;
  var pauseCount = 0;
  var timer = null;
  var locked = false;

  var reset = function reset(e) {
    if (timer) {
      clearTimeout(timer);
    }

    pauseCount = 0;
    locked = false;
  };

  player.on('dispose', reset);
  player.on('loadstart', reset);
  player.on('ended', reset);
  player.on('pause', function () {
    if (player.scrubbing() || locked) {
      return;
    }

    timer = setTimeout(function () {
      pauseCount++;
      player.trigger('tracking:pause', {
        pauseCount: pauseCount
      });
    }, 300);
  });
};
/**
 * Track Overall Percentile (1st, 2nd, 3rd, and 4th) of Completion
 * This event triggers each quarter of a video.
 *
 * Example Usage:
 * player.on('tracking:first-quarter', (e, data) => console.log(data))
 * player.on('tracking:second-quarter', (e, data) => console.log(data))
 * player.on('tracking:third-quarter', (e, data) => console.log(data))
 * player.on('tracking:fourth-quarter', (e, data) => console.log(data))
 *
 * Data Attributes:
 * => pauseCount:       Total number of Pause events triggered
 * => seekCount:        Total number of Seek events triggered
 * => currentTime:      Current second video is on
 * => duration:         Total duration of video
 *
 * @function PercentileTracking
 * @param    {Object} [config={}]
 *           An object of config left to the plugin author to define.
 */


var PercentileTracking = function PercentileTracking(config) {
  var player = this;
  var first = false;
  var second = false;
  var third = false;
  var duration = 0;
  var pauseCount = 0;
  var seekCount = 0;

  var reset = function reset(e) {
    first = false;
    second = false;
    third = false;
    duration = 0;
    pauseCount = 0;
    seekCount = 0;
  };

  var incPause = function incPause() {
    return pauseCount++;
  };

  var incSeek = function incSeek() {
    return seekCount++;
  };

  player.on('dispose', reset);
  player.on('loadstart', reset);
  player.on('tracking:pause', incPause);
  player.on('tracking:seek', incSeek);
  player.on('timeupdate', function () {
    var curTime = +player.currentTime().toFixed(0);
    var data = {
      seekCount: seekCount,
      pauseCount: pauseCount,
      currentTime: curTime,
      duration: duration
    };

    switch (curTime) {
      case first:
        first = false;
        player.trigger('tracking:first-quarter', data);
        break;

      case second:
        second = false;
        player.trigger('tracking:second-quarter', data);
        break;

      case third:
        third = false;
        player.trigger('tracking:third-quarter', data);
        break;
    }
  });
  player.on('ended', function () {
    var data = {
      seekCount: seekCount,
      pauseCount: pauseCount,
      currentTime: duration,
      duration: duration
    };
    player.trigger('tracking:fourth-quarter', data);
  });
  player.on('durationchange', function () {
    duration = +player.duration().toFixed(0);

    if (duration > 0) {
      var quarter = (duration / 4).toFixed(0);
      first = +quarter;
      second = +quarter * 2;
      third = +quarter * 3;
    }
  });
};
/**
 * Track Overall Performance
 * This event triggers when the player has changed sources, has ended, or
 * has been destroyed.
 *
 * Example Usage:
 * player.on('tracking:performance', (e, data) => console.log(data))
 *
 * Data Attributes:
 * => pauseCount:       Total number of Pause events triggered
 * => seekCount:        Total number of Seek events triggered
 * => bufferCount:      Total number of Buffer events triggered
 * => totalDuration:    Total duration provided by the file
 * => watchedDuration:  Total number of seconds watched (not seeked past)
 * => bufferDuration:   Total seconds that buffering has occured
 * => initialLoadTime:  Seconds it took for the initial frame to appear
 *
 * @function PerformanceTracking
 * @param    {Object} [config={}]
 *           An object of config left to the plugin author to define.
 */


var PerformanceTracking = function PerformanceTracking(config) {
  if (typeof config === "undefined" || typeof config.performance !== "function") {
    return;
  }

  var player = this;
  var seekCount = 0;
  var pauseCount = 0;
  var bufferCount = 0;
  var totalDuration = 0;
  var watchedDuration = 0;
  var bufferDuration = 0;
  var initialLoadTime = 0;
  var timestamps = [];

  var reset = function reset() {
    seekCount = 0;
    pauseCount = 0;
    bufferCount = 0;
    totalDuration = 0;
    watchedDuration = 0;
    bufferDuration = 0;
    initialLoadTime = 0;
    timestamps = [];
  };

  var trigger = function trigger() {
    var data = {
      pauseCount: pauseCount,
      seekCount: seekCount,
      bufferCount: bufferCount,
      totalDuration: totalDuration,
      watchedDuration: watchedDuration,
      bufferDuration: bufferDuration,
      initialLoadTime: initialLoadTime
    };
    config.performance.call(player, data);
  };

  var triggerAndReset = function triggerAndReset() {
    clearInterval(timeInt);
    trigger();
    reset();
  };

  var timeInt = setInterval(function () {
    trigger();
  }, config.interval);

  if (typeof window.addEventListener === "function") {
    window.addEventListener("beforeunload", triggerAndReset);
    player.on("dispose", function () {
      window.removeEventListener("beforeunload", triggerAndReset);
    });
  }

  player.on("loadstart", function () {
    if (totalDuration > 0) {
      trigger();
    }

    reset();
  });
  player.on("ended", triggerAndReset);
  player.on("dispose", triggerAndReset);
  player.on("timeupdate", function () {
    var curTime = +player.currentTime().toFixed(0);

    if (timestamps.indexOf(curTime) < 0) {
      timestamps.push(curTime);
    }

    watchedDuration = timestamps.length;
  });
  player.on("loadeddata", function (e, data) {
    totalDuration = +player.duration().toFixed(0);
  });
  player.on("tracking:seek", function (e, data) {
    seekCount = data.seekCount;
  });
  player.on("tracking:pause", function (e, data) {
    pauseCount = data.pauseCount;
  });
  player.on("tracking:buffered", function (e, data) {
    bufferCount = data.bufferCount;
    bufferDuration = +(bufferDuration + data.secondsToLoad).toFixed(3);
  });
  player.on("tracking:firstplay", function (e, data) {
    initialLoadTime = data.secondsToLoad;
  });
};
/**
 * Track Initial Play Event
 * This event is triggered when the video has been played for the first time.
 * If you are looking to track play events, simply listen on the player for a normal
 * "play" or "playing" event.
 *
 * Example Usage:
 * player.on('tracking:firstplay', (e, data) => console.log(data))
 *
 * Data Attributes:
 * => secondsToLoad: Total number of seconds between the player initializing
 *                   a play request and when the first frame begins.
 *
 * @function PlayTracking
 * @param    {Object} [config={}]
 *           An object of config left to the plugin author to define.
 */


var PlayTracking = function PlayTracking(config) {
  var _this = this;

  var firstplay = false;
  var loadstart = 0;
  var loadend = 0;
  var secondsToLoad = 0;

  var reset = function reset() {
    firstplay = false;
    loadstart = 0;
    loadend = 0;
    secondsToLoad = 0;
  };

  var onLoadStart = function onLoadStart() {
    reset();
    loadstart = new Date();
  };

  var onLoadedData = function onLoadedData() {
    loadend = new Date();
    secondsToLoad = (loadend - loadstart) / 1000;
  };

  var onPlaying = function onPlaying() {
    if (!firstplay) {
      firstplay = true;

      _this.trigger('tracking:firstplay', {
        secondsToLoad: +secondsToLoad.toFixed(3)
      });
    }
  };

  this.on('dispose', reset);
  this.on('loadstart', onLoadStart);
  this.on('loadeddata', onLoadedData);
  this.on('playing', onPlaying);
};
/**
 * Track Seeking Events
 * During playback, we are tracking how many times a person seeks, and
 * the position a user has seeked to.
 *
 * Example Usage:
 * player.on('tracking:seek', (e, data) => console.log(data))
 *
 * Data Attributes:
 * => seekCount: total number of seeks that has occuring during this file
 * => seekTo: Position, in seconds, that has been seeked to.
 *
 * @function SeekTracking
 * @param    {Object} [config={}]
 *           An object of config left to the plugin author to define.
 */


var SeekTracking = function SeekTracking(config) {
  var player = this;
  var seekCount = 0;
  var locked = true;

  var reset = function reset() {
    seekCount = 0;
    locked = true;
  };

  player.on('dispose', reset);
  player.on('loadstart', reset);
  player.on('ended', reset);
  player.on('play', function () {
    locked = false;
  });
  player.on('pause', function () {
    if (locked || !player.scrubbing()) {
      return;
    }

    var curTime = +player.currentTime().toFixed(0);
    seekCount++;
    player.trigger('tracking:seek', {
      seekCount: +seekCount,
      seekTo: curTime
    });
  });
};

var registerPlugin$2 = videojs.registerPlugin || videojs.plugin;
var getPlugin = videojs.getPlugin || videojs.plugin;
/**
 * Event Tracking for VideoJS
 *
 * @function eventTracking
 * @param    {Object} [options={}]
 *           An object of options left to the plugin author to define.
 */

var eventTracking = function eventTracking(options) {
  PauseTracking.apply(this, arguments);
  BufferTracking.apply(this, arguments);
  PercentileTracking.apply(this, arguments);
  PlayTracking.apply(this, arguments);
  SeekTracking.apply(this, arguments);
  PerformanceTracking.apply(this, arguments);
}; // Register the plugin with video.js, avoid double registration


if (typeof getPlugin('eventTracking') === 'undefined') {
  registerPlugin$2('eventTracking', eventTracking);
} // Include the version number.


eventTracking.VERSION = version$3;

var defaults$2 = {}; // Cross-compatibility for Video.js 5 and 6.

var registerPlugin$3 = videojs.registerPlugin || videojs.plugin; // const dom = videojs.dom || videojs;

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

var onPlayerReady$1 = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(player, options) {
    var _player$options_, eventId, _player$options_$user, user, _player$options_$toke, token, _player$options_$apiH, apiHost, streamRes, stream, _id, playerUrl, streamId, seshRes, userId, seshId, deviceId;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            player.addClass("vjs-livecastplugin");
            _player$options_ = player.options_, eventId = _player$options_.eventId, _player$options_$user = _player$options_.user, user = _player$options_$user === void 0 ? null : _player$options_$user, _player$options_$toke = _player$options_.token, token = _player$options_$toke === void 0 ? null : _player$options_$toke, _player$options_$apiH = _player$options_.apiHost, apiHost = _player$options_$apiH === void 0 ? '' : _player$options_$apiH;
            _context4.prev = 2;
            _context4.next = 5;
            return axios$1({
              method: "get",
              url: apiHost + "stream",
              params: {
                webcastId: eventId
              },
              headers: {
                Authorization: token
              }
            });

          case 5:
            streamRes = _context4.sent;
            _context4.next = 11;
            break;

          case 8:
            _context4.prev = 8;
            _context4.t0 = _context4["catch"](2);
            console.log(_context4.t0);

          case 11:
            stream = streamRes.data[0];
            _id = stream._id, playerUrl = stream.playerUrl;
            streamId = _id; // halihazırda player, user ya da token olmadan da izlenilmesine izin veriyor

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
            // player.src({
            //   type: "application/x-mpegURL",
            //   src: playerUrl,
            // });
            // Player source set etme işlemi sonu

            player.hlsQualitySelector();
            userId = user._id || null; // token varsa authorization header'ına ekle
            // elimizde userId varsa bunu regId olarak yolla
            // elimizde user objesi varsa reg olarak gönder

            _context4.prev = 16;
            _context4.next = 19;
            return axios$1({
              method: "post",
              url: apiHost + "session-connections",
              data: _extends({
                streamId: streamId,
                webcastId: eventId
              }, user ? {
                reg: user
              } : null, userId ? {
                regId: userId
              } : null, {
                watchStarted: new Date()
              }),
              headers: _extends({}, token ? {
                Authorization: token
              } : null)
            });

          case 19:
            seshRes = _context4.sent;
            _context4.next = 25;
            break;

          case 22:
            _context4.prev = 22;
            _context4.t1 = _context4["catch"](16);
            console.log(_context4.t1);

          case 25:
            seshId = seshRes.data._id || null;
            deviceId = seshRes.data.deviceId || null;
            player.eventTracking({
              performance: function () {
                var _performance = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(data) {
                  return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          _context.prev = 0;
                          _context.next = 3;
                          return axios$1({
                            method: "post",
                            url: apiHost + "session-connections",
                            data: _extends({
                              streamId: streamId,
                              webcastId: eventId
                            }, user ? {
                              reg: user
                            } : null, userId ? {
                              regId: userId
                            } : null, {
                              metrics: data,
                              id: seshId
                            }, deviceId ? {
                              deviceId: deviceId
                            } : null),
                            headers: _extends({}, token ? {
                              Authorization: token
                            } : null)
                          });

                        case 3:
                          _context.next = 8;
                          break;

                        case 5:
                          _context.prev = 5;
                          _context.t0 = _context["catch"](0);
                          console.log(_context.t0);

                        case 8:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee, null, [[0, 5]]);
                }));

                function performance(_x3) {
                  return _performance.apply(this, arguments);
                }

                return performance;
              }(),
              interval: 20000
            });
            player.on("play", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return axios$1({
                        method: "post",
                        url: apiHost + "session-connections",
                        data: _extends({
                          isWatching: true,
                          id: seshId
                        }, deviceId ? {
                          deviceId: deviceId
                        } : null),
                        headers: _extends({}, token ? {
                          Authorization: token
                        } : null)
                      });

                    case 2:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2);
            })));
            player.on("pause", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return axios$1({
                        method: "post",
                        url: apiHost + "session-connections",
                        data: _extends({
                          isWatching: false,
                          id: seshId
                        }, deviceId ? {
                          deviceId: deviceId
                        } : null),
                        headers: _extends({}, token ? {
                          Authorization: token
                        } : null)
                      });

                    case 2:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3);
            })));

          case 30:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[2, 8], [16, 22]]);
  }));

  return function onPlayerReady(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
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


var livecastplugin = function livecastplugin(options) {
  var _this = this;

  this.ready(function () {
    onPlayerReady$1(_this, videojs.mergeOptions(defaults$2, options));
  });
}; // Register the plugin with video.js.


registerPlugin$3("livecastplugin", livecastplugin); // Include the version number.

livecastplugin.VERSION = version;

export default livecastplugin;
