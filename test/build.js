(function (global) {
  var babelHelpers = global.babelHelpers = {};

  function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      babelHelpers.typeof = _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      babelHelpers.typeof = _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  babelHelpers.typeof = _typeof;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  babelHelpers.classCallCheck = _classCallCheck;

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  babelHelpers.createClass = _createClass;

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) babelHelpers.setPrototypeOf(subClass, superClass);
  }

  babelHelpers.inherits = _inherits;

  function _getPrototypeOf(o) {
    babelHelpers.getPrototypeOf = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  babelHelpers.getPrototypeOf = _getPrototypeOf;

  function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;

    babelHelpers.wrapNativeSuper = _wrapNativeSuper = function _wrapNativeSuper(Class) {
      if (Class === null || !babelHelpers.isNativeFunction(Class)) return Class;

      if (typeof Class !== "function") {
        throw new TypeError("Super expression must either be null or a function");
      }

      if (typeof _cache !== "undefined") {
        if (_cache.has(Class)) return _cache.get(Class);

        _cache.set(Class, Wrapper);
      }

      function Wrapper() {
        return babelHelpers.construct(Class, arguments, babelHelpers.getPrototypeOf(this).constructor);
      }

      Wrapper.prototype = Object.create(Class.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      return babelHelpers.setPrototypeOf(Wrapper, Class);
    };

    return _wrapNativeSuper(Class);
  }

  babelHelpers.wrapNativeSuper = _wrapNativeSuper;

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  babelHelpers.assertThisInitialized = _assertThisInitialized;

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return babelHelpers.assertThisInitialized(self);
  }

  babelHelpers.possibleConstructorReturn = _possibleConstructorReturn;
})(typeof global === "undefined" ? self : global);

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 29);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

/*
 * Copyright 2009-2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE.txt or:
 * http://opensource.org/licenses/BSD-3-Clause
 */
exports.SourceMapGenerator = __webpack_require__(14).SourceMapGenerator;
exports.SourceMapConsumer = __webpack_require__(33).SourceMapConsumer;
exports.SourceNode = __webpack_require__(36).SourceNode;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/


var SourceNode = __webpack_require__(0).SourceNode;

var SourceMapConsumer = __webpack_require__(0).SourceMapConsumer;

var Source =
/*#__PURE__*/
function () {
  function Source() {
    babelHelpers.classCallCheck(this, Source);
  }

  babelHelpers.createClass(Source, [{
    key: "source",
    value: function source() {
      throw new Error("Abstract");
    }
  }, {
    key: "size",
    value: function size() {
      return this.source().length;
    }
  }, {
    key: "map",
    value: function map(options) {
      return null;
    }
  }, {
    key: "sourceAndMap",
    value: function sourceAndMap(options) {
      return {
        source: this.source(),
        map: this.map()
      };
    }
  }, {
    key: "node",
    value: function node() {
      throw new Error("Abstract");
    }
  }, {
    key: "listNode",
    value: function listNode() {
      throw new Error("Abstract");
    }
  }, {
    key: "updateHash",
    value: function updateHash(hash) {
      var source = this.source();
      hash.update(source || "");
    }
  }]);
  return Source;
}();

module.exports = Source;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

exports.SourceListMap = __webpack_require__(17);
exports.SourceNode = __webpack_require__(7);
exports.SingleLineNode = __webpack_require__(18);
exports.CodeNode = __webpack_require__(8);
exports.MappingsContext = __webpack_require__(19);
exports.fromStringWithSourceMap = __webpack_require__(38);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/


exports.getNumberOfLines = function getNumberOfLines(str) {
  var nr = -1;
  var idx = -1;

  do {
    nr++;
    idx = str.indexOf("\n", idx + 1);
  } while (idx >= 0);

  return nr;
};

exports.getUnfinishedLine = function getUnfinishedLine(str) {
  var idx = str.lastIndexOf("\n");
  if (idx === -1) return str.length;else return str.length - idx - 1;
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/


module.exports = function mixinSourceAndMap(proto) {
  proto.map = function (options) {
    options = options || {};

    if (options.columns === false) {
      return this.listMap(options).toStringWithSourceMap({
        file: "x"
      }).map;
    }

    return this.node(options).toStringWithSourceMap({
      file: "x"
    }).map.toJSON();
  };

  proto.sourceAndMap = function (options) {
    options = options || {};

    if (options.columns === false) {
      //console.log(this.listMap(options).debugInfo());
      return this.listMap(options).toStringWithSourceMap({
        file: "x"
      });
    }

    var res = this.node(options).toStringWithSourceMap({
      file: "x"
    });
    return {
      source: res.code,
      map: res.map.toJSON()
    };
  };
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  copy: copy,
  checkDataType: checkDataType,
  checkDataTypes: checkDataTypes,
  coerceToTypes: coerceToTypes,
  toHash: toHash,
  getProperty: getProperty,
  escapeQuotes: escapeQuotes,
  equal: __webpack_require__(11),
  ucs2length: __webpack_require__(54),
  varOccurences: varOccurences,
  varReplace: varReplace,
  cleanUpCode: cleanUpCode,
  finalCleanUpCode: finalCleanUpCode,
  schemaHasRules: schemaHasRules,
  schemaHasRulesExcept: schemaHasRulesExcept,
  toQuotedString: toQuotedString,
  getPathExpr: getPathExpr,
  getPath: getPath,
  getData: getData,
  unescapeFragment: unescapeFragment,
  unescapeJsonPointer: unescapeJsonPointer,
  escapeFragment: escapeFragment,
  escapeJsonPointer: escapeJsonPointer
};

function copy(o, to) {
  to = to || {};

  for (var key in o) {
    to[key] = o[key];
  }

  return to;
}

function checkDataType(dataType, data, negate) {
  var EQUAL = negate ? ' !== ' : ' === ',
      AND = negate ? ' || ' : ' && ',
      OK = negate ? '!' : '',
      NOT = negate ? '' : '!';

  switch (dataType) {
    case 'null':
      return data + EQUAL + 'null';

    case 'array':
      return OK + 'Array.isArray(' + data + ')';

    case 'object':
      return '(' + OK + data + AND + 'typeof ' + data + EQUAL + '"object"' + AND + NOT + 'Array.isArray(' + data + '))';

    case 'integer':
      return '(typeof ' + data + EQUAL + '"number"' + AND + NOT + '(' + data + ' % 1)' + AND + data + EQUAL + data + ')';

    default:
      return 'typeof ' + data + EQUAL + '"' + dataType + '"';
  }
}

function checkDataTypes(dataTypes, data) {
  switch (dataTypes.length) {
    case 1:
      return checkDataType(dataTypes[0], data, true);

    default:
      var code = '';
      var types = toHash(dataTypes);

      if (types.array && types.object) {
        code = types.null ? '(' : '(!' + data + ' || ';
        code += 'typeof ' + data + ' !== "object")';
        delete types.null;
        delete types.array;
        delete types.object;
      }

      if (types.number) delete types.integer;

      for (var t in types) {
        code += (code ? ' && ' : '') + checkDataType(t, data, true);
      }

      return code;
  }
}

var COERCE_TO_TYPES = toHash(['string', 'number', 'integer', 'boolean', 'null']);

function coerceToTypes(optionCoerceTypes, dataTypes) {
  if (Array.isArray(dataTypes)) {
    var types = [];

    for (var i = 0; i < dataTypes.length; i++) {
      var t = dataTypes[i];
      if (COERCE_TO_TYPES[t]) types[types.length] = t;else if (optionCoerceTypes === 'array' && t === 'array') types[types.length] = t;
    }

    if (types.length) return types;
  } else if (COERCE_TO_TYPES[dataTypes]) {
    return [dataTypes];
  } else if (optionCoerceTypes === 'array' && dataTypes === 'array') {
    return ['array'];
  }
}

function toHash(arr) {
  var hash = {};

  for (var i = 0; i < arr.length; i++) {
    hash[arr[i]] = true;
  }

  return hash;
}

var IDENTIFIER = /^[a-z$_][a-z$_0-9]*$/i;
var SINGLE_QUOTE = /'|\\/g;

function getProperty(key) {
  return typeof key == 'number' ? '[' + key + ']' : IDENTIFIER.test(key) ? '.' + key : "['" + escapeQuotes(key) + "']";
}

function escapeQuotes(str) {
  return str.replace(SINGLE_QUOTE, '\\$&').replace(/\n/g, '\\n').replace(/\r/g, '\\r').replace(/\f/g, '\\f').replace(/\t/g, '\\t');
}

function varOccurences(str, dataVar) {
  dataVar += '[^0-9]';
  var matches = str.match(new RegExp(dataVar, 'g'));
  return matches ? matches.length : 0;
}

function varReplace(str, dataVar, expr) {
  dataVar += '([^0-9])';
  expr = expr.replace(/\$/g, '$$$$');
  return str.replace(new RegExp(dataVar, 'g'), expr + '$1');
}

var EMPTY_ELSE = /else\s*{\s*}/g,
    EMPTY_IF_NO_ELSE = /if\s*\([^)]+\)\s*\{\s*\}(?!\s*else)/g,
    EMPTY_IF_WITH_ELSE = /if\s*\(([^)]+)\)\s*\{\s*\}\s*else(?!\s*if)/g;

function cleanUpCode(out) {
  return out.replace(EMPTY_ELSE, '').replace(EMPTY_IF_NO_ELSE, '').replace(EMPTY_IF_WITH_ELSE, 'if (!($1))');
}

var ERRORS_REGEXP = /[^v.]errors/g,
    REMOVE_ERRORS = /var errors = 0;|var vErrors = null;|validate.errors = vErrors;/g,
    REMOVE_ERRORS_ASYNC = /var errors = 0;|var vErrors = null;/g,
    RETURN_VALID = 'return errors === 0;',
    RETURN_TRUE = 'validate.errors = null; return true;',
    RETURN_ASYNC = /if \(errors === 0\) return data;\s*else throw new ValidationError\(vErrors\);/,
    RETURN_DATA_ASYNC = 'return data;',
    ROOTDATA_REGEXP = /[^A-Za-z_$]rootData[^A-Za-z0-9_$]/g,
    REMOVE_ROOTDATA = /if \(rootData === undefined\) rootData = data;/;

function finalCleanUpCode(out, async) {
  var matches = out.match(ERRORS_REGEXP);

  if (matches && matches.length == 2) {
    out = async ? out.replace(REMOVE_ERRORS_ASYNC, '').replace(RETURN_ASYNC, RETURN_DATA_ASYNC) : out.replace(REMOVE_ERRORS, '').replace(RETURN_VALID, RETURN_TRUE);
  }

  matches = out.match(ROOTDATA_REGEXP);
  if (!matches || matches.length !== 3) return out;
  return out.replace(REMOVE_ROOTDATA, '');
}

function schemaHasRules(schema, rules) {
  if (typeof schema == 'boolean') return !schema;

  for (var key in schema) {
    if (rules[key]) return true;
  }
}

function schemaHasRulesExcept(schema, rules, exceptKeyword) {
  if (typeof schema == 'boolean') return !schema && exceptKeyword != 'not';

  for (var key in schema) {
    if (key != exceptKeyword && rules[key]) return true;
  }
}

function toQuotedString(str) {
  return '\'' + escapeQuotes(str) + '\'';
}

function getPathExpr(currentPath, expr, jsonPointers, isNumber) {
  var path = jsonPointers // false by default
  ? '\'/\' + ' + expr + (isNumber ? '' : '.replace(/~/g, \'~0\').replace(/\\//g, \'~1\')') : isNumber ? '\'[\' + ' + expr + ' + \']\'' : '\'[\\\'\' + ' + expr + ' + \'\\\']\'';
  return joinPaths(currentPath, path);
}

function getPath(currentPath, prop, jsonPointers) {
  var path = jsonPointers // false by default
  ? toQuotedString('/' + escapeJsonPointer(prop)) : toQuotedString(getProperty(prop));
  return joinPaths(currentPath, path);
}

var JSON_POINTER = /^\/(?:[^~]|~0|~1)*$/;
var RELATIVE_JSON_POINTER = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;

function getData($data, lvl, paths) {
  var up, jsonPointer, data, matches;
  if ($data === '') return 'rootData';

  if ($data[0] == '/') {
    if (!JSON_POINTER.test($data)) throw new Error('Invalid JSON-pointer: ' + $data);
    jsonPointer = $data;
    data = 'rootData';
  } else {
    matches = $data.match(RELATIVE_JSON_POINTER);
    if (!matches) throw new Error('Invalid JSON-pointer: ' + $data);
    up = +matches[1];
    jsonPointer = matches[2];

    if (jsonPointer == '#') {
      if (up >= lvl) throw new Error('Cannot access property/index ' + up + ' levels up, current level is ' + lvl);
      return paths[lvl - up];
    }

    if (up > lvl) throw new Error('Cannot access data ' + up + ' levels up, current level is ' + lvl);
    data = 'data' + (lvl - up || '');
    if (!jsonPointer) return data;
  }

  var expr = data;
  var segments = jsonPointer.split('/');

  for (var i = 0; i < segments.length; i++) {
    var segment = segments[i];

    if (segment) {
      data += getProperty(unescapeJsonPointer(segment));
      expr += ' && ' + data;
    }
  }

  return expr;
}

function joinPaths(a, b) {
  if (a == '""') return b;
  return (a + ' + ' + b).replace(/' \+ '/g, '');
}

function unescapeFragment(str) {
  return unescapeJsonPointer(decodeURIComponent(str));
}

function escapeFragment(str) {
  return encodeURIComponent(escapeJsonPointer(str));
}

function escapeJsonPointer(str) {
  return str.replace(/~/g, '~0').replace(/\//g, '~1');
}

function unescapeJsonPointer(str) {
  return str.replace(/~1/g, '/').replace(/~0/g, '~');
}

/***/ }),
/* 6 */
/***/ (function(module, exports) {

/* -*- Mode: js; js-indent-level: 2; -*- */

/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

/**
 * This is a helper function for getting values from parameter/options
 * objects.
 *
 * @param args The object we are extracting values from
 * @param name The name of the property we are getting.
 * @param defaultValue An optional value to return if the property is missing
 * from the object. If this is not specified and the property is missing, an
 * error will be thrown.
 */
function getArg(aArgs, aName, aDefaultValue) {
  if (aName in aArgs) {
    return aArgs[aName];
  } else if (arguments.length === 3) {
    return aDefaultValue;
  } else {
    throw new Error('"' + aName + '" is a required argument.');
  }
}

exports.getArg = getArg;
var urlRegexp = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/;
var dataUrlRegexp = /^data:.+\,.+$/;

function urlParse(aUrl) {
  var match = aUrl.match(urlRegexp);

  if (!match) {
    return null;
  }

  return {
    scheme: match[1],
    auth: match[2],
    host: match[3],
    port: match[4],
    path: match[5]
  };
}

exports.urlParse = urlParse;

function urlGenerate(aParsedUrl) {
  var url = '';

  if (aParsedUrl.scheme) {
    url += aParsedUrl.scheme + ':';
  }

  url += '//';

  if (aParsedUrl.auth) {
    url += aParsedUrl.auth + '@';
  }

  if (aParsedUrl.host) {
    url += aParsedUrl.host;
  }

  if (aParsedUrl.port) {
    url += ":" + aParsedUrl.port;
  }

  if (aParsedUrl.path) {
    url += aParsedUrl.path;
  }

  return url;
}

exports.urlGenerate = urlGenerate;
/**
 * Normalizes a path, or the path portion of a URL:
 *
 * - Replaces consecutive slashes with one slash.
 * - Removes unnecessary '.' parts.
 * - Removes unnecessary '<dir>/..' parts.
 *
 * Based on code in the Node.js 'path' core module.
 *
 * @param aPath The path or url to normalize.
 */

function normalize(aPath) {
  var path = aPath;
  var url = urlParse(aPath);

  if (url) {
    if (!url.path) {
      return aPath;
    }

    path = url.path;
  }

  var isAbsolute = exports.isAbsolute(path);
  var parts = path.split(/\/+/);

  for (var part, up = 0, i = parts.length - 1; i >= 0; i--) {
    part = parts[i];

    if (part === '.') {
      parts.splice(i, 1);
    } else if (part === '..') {
      up++;
    } else if (up > 0) {
      if (part === '') {
        // The first part is blank if the path is absolute. Trying to go
        // above the root is a no-op. Therefore we can remove all '..' parts
        // directly after the root.
        parts.splice(i + 1, up);
        up = 0;
      } else {
        parts.splice(i, 2);
        up--;
      }
    }
  }

  path = parts.join('/');

  if (path === '') {
    path = isAbsolute ? '/' : '.';
  }

  if (url) {
    url.path = path;
    return urlGenerate(url);
  }

  return path;
}

exports.normalize = normalize;
/**
 * Joins two paths/URLs.
 *
 * @param aRoot The root path or URL.
 * @param aPath The path or URL to be joined with the root.
 *
 * - If aPath is a URL or a data URI, aPath is returned, unless aPath is a
 *   scheme-relative URL: Then the scheme of aRoot, if any, is prepended
 *   first.
 * - Otherwise aPath is a path. If aRoot is a URL, then its path portion
 *   is updated with the result and aRoot is returned. Otherwise the result
 *   is returned.
 *   - If aPath is absolute, the result is aPath.
 *   - Otherwise the two paths are joined with a slash.
 * - Joining for example 'http://' and 'www.example.com' is also supported.
 */

function join(aRoot, aPath) {
  if (aRoot === "") {
    aRoot = ".";
  }

  if (aPath === "") {
    aPath = ".";
  }

  var aPathUrl = urlParse(aPath);
  var aRootUrl = urlParse(aRoot);

  if (aRootUrl) {
    aRoot = aRootUrl.path || '/';
  } // `join(foo, '//www.example.org')`


  if (aPathUrl && !aPathUrl.scheme) {
    if (aRootUrl) {
      aPathUrl.scheme = aRootUrl.scheme;
    }

    return urlGenerate(aPathUrl);
  }

  if (aPathUrl || aPath.match(dataUrlRegexp)) {
    return aPath;
  } // `join('http://', 'www.example.com')`


  if (aRootUrl && !aRootUrl.host && !aRootUrl.path) {
    aRootUrl.host = aPath;
    return urlGenerate(aRootUrl);
  }

  var joined = aPath.charAt(0) === '/' ? aPath : normalize(aRoot.replace(/\/+$/, '') + '/' + aPath);

  if (aRootUrl) {
    aRootUrl.path = joined;
    return urlGenerate(aRootUrl);
  }

  return joined;
}

exports.join = join;

exports.isAbsolute = function (aPath) {
  return aPath.charAt(0) === '/' || urlRegexp.test(aPath);
};
/**
 * Make a path relative to a URL or another path.
 *
 * @param aRoot The root path or URL.
 * @param aPath The path or URL to be made relative to aRoot.
 */


function relative(aRoot, aPath) {
  if (aRoot === "") {
    aRoot = ".";
  }

  aRoot = aRoot.replace(/\/$/, ''); // It is possible for the path to be above the root. In this case, simply
  // checking whether the root is a prefix of the path won't work. Instead, we
  // need to remove components from the root one by one, until either we find
  // a prefix that fits, or we run out of components to remove.

  var level = 0;

  while (aPath.indexOf(aRoot + '/') !== 0) {
    var index = aRoot.lastIndexOf("/");

    if (index < 0) {
      return aPath;
    } // If the only part of the root that is left is the scheme (i.e. http://,
    // file:///, etc.), one or more slashes (/), or simply nothing at all, we
    // have exhausted all components, so the path is not relative to the root.


    aRoot = aRoot.slice(0, index);

    if (aRoot.match(/^([^\/]+:\/)?\/*$/)) {
      return aPath;
    }

    ++level;
  } // Make sure we add a "../" for each component we removed from the root.


  return Array(level + 1).join("../") + aPath.substr(aRoot.length + 1);
}

exports.relative = relative;

var supportsNullProto = function () {
  var obj = Object.create(null);
  return !('__proto__' in obj);
}();

function identity(s) {
  return s;
}
/**
 * Because behavior goes wacky when you set `__proto__` on objects, we
 * have to prefix all the strings in our set with an arbitrary character.
 *
 * See https://github.com/mozilla/source-map/pull/31 and
 * https://github.com/mozilla/source-map/issues/30
 *
 * @param String aStr
 */


function toSetString(aStr) {
  if (isProtoString(aStr)) {
    return '$' + aStr;
  }

  return aStr;
}

exports.toSetString = supportsNullProto ? identity : toSetString;

function fromSetString(aStr) {
  if (isProtoString(aStr)) {
    return aStr.slice(1);
  }

  return aStr;
}

exports.fromSetString = supportsNullProto ? identity : fromSetString;

function isProtoString(s) {
  if (!s) {
    return false;
  }

  var length = s.length;

  if (length < 9
  /* "__proto__".length */
  ) {
      return false;
    }

  if (s.charCodeAt(length - 1) !== 95
  /* '_' */
  || s.charCodeAt(length - 2) !== 95
  /* '_' */
  || s.charCodeAt(length - 3) !== 111
  /* 'o' */
  || s.charCodeAt(length - 4) !== 116
  /* 't' */
  || s.charCodeAt(length - 5) !== 111
  /* 'o' */
  || s.charCodeAt(length - 6) !== 114
  /* 'r' */
  || s.charCodeAt(length - 7) !== 112
  /* 'p' */
  || s.charCodeAt(length - 8) !== 95
  /* '_' */
  || s.charCodeAt(length - 9) !== 95
  /* '_' */
  ) {
      return false;
    }

  for (var i = length - 10; i >= 0; i--) {
    if (s.charCodeAt(i) !== 36
    /* '$' */
    ) {
        return false;
      }
  }

  return true;
}
/**
 * Comparator between two mappings where the original positions are compared.
 *
 * Optionally pass in `true` as `onlyCompareGenerated` to consider two
 * mappings with the same original source/line/column, but different generated
 * line and column the same. Useful when searching for a mapping with a
 * stubbed out mapping.
 */


function compareByOriginalPositions(mappingA, mappingB, onlyCompareOriginal) {
  var cmp = strcmp(mappingA.source, mappingB.source);

  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalLine - mappingB.originalLine;

  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalColumn - mappingB.originalColumn;

  if (cmp !== 0 || onlyCompareOriginal) {
    return cmp;
  }

  cmp = mappingA.generatedColumn - mappingB.generatedColumn;

  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.generatedLine - mappingB.generatedLine;

  if (cmp !== 0) {
    return cmp;
  }

  return strcmp(mappingA.name, mappingB.name);
}

exports.compareByOriginalPositions = compareByOriginalPositions;
/**
 * Comparator between two mappings with deflated source and name indices where
 * the generated positions are compared.
 *
 * Optionally pass in `true` as `onlyCompareGenerated` to consider two
 * mappings with the same generated line and column, but different
 * source/name/original line and column the same. Useful when searching for a
 * mapping with a stubbed out mapping.
 */

function compareByGeneratedPositionsDeflated(mappingA, mappingB, onlyCompareGenerated) {
  var cmp = mappingA.generatedLine - mappingB.generatedLine;

  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.generatedColumn - mappingB.generatedColumn;

  if (cmp !== 0 || onlyCompareGenerated) {
    return cmp;
  }

  cmp = strcmp(mappingA.source, mappingB.source);

  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalLine - mappingB.originalLine;

  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalColumn - mappingB.originalColumn;

  if (cmp !== 0) {
    return cmp;
  }

  return strcmp(mappingA.name, mappingB.name);
}

exports.compareByGeneratedPositionsDeflated = compareByGeneratedPositionsDeflated;

function strcmp(aStr1, aStr2) {
  if (aStr1 === aStr2) {
    return 0;
  }

  if (aStr1 === null) {
    return 1; // aStr2 !== null
  }

  if (aStr2 === null) {
    return -1; // aStr1 !== null
  }

  if (aStr1 > aStr2) {
    return 1;
  }

  return -1;
}
/**
 * Comparator between two mappings with inflated source and name strings where
 * the generated positions are compared.
 */


function compareByGeneratedPositionsInflated(mappingA, mappingB) {
  var cmp = mappingA.generatedLine - mappingB.generatedLine;

  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.generatedColumn - mappingB.generatedColumn;

  if (cmp !== 0) {
    return cmp;
  }

  cmp = strcmp(mappingA.source, mappingB.source);

  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalLine - mappingB.originalLine;

  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalColumn - mappingB.originalColumn;

  if (cmp !== 0) {
    return cmp;
  }

  return strcmp(mappingA.name, mappingB.name);
}

exports.compareByGeneratedPositionsInflated = compareByGeneratedPositionsInflated;
/**
 * Strip any JSON XSSI avoidance prefix from the string (as documented
 * in the source maps specification), and then parse the string as
 * JSON.
 */

function parseSourceMapInput(str) {
  return JSON.parse(str.replace(/^\)]}'[^\n]*\n/, ''));
}

exports.parseSourceMapInput = parseSourceMapInput;
/**
 * Compute the URL of a source given the the source root, the source's
 * URL, and the source map's URL.
 */

function computeSourceURL(sourceRoot, sourceURL, sourceMapURL) {
  sourceURL = sourceURL || '';

  if (sourceRoot) {
    // This follows what Chrome does.
    if (sourceRoot[sourceRoot.length - 1] !== '/' && sourceURL[0] !== '/') {
      sourceRoot += '/';
    } // The spec says:
    //   Line 4: An optional source root, useful for relocating source
    //   files on a server or removing repeated values in the
    //   “sources” entry.  This value is prepended to the individual
    //   entries in the “source” field.


    sourceURL = sourceRoot + sourceURL;
  } // Historically, SourceMapConsumer did not take the sourceMapURL as
  // a parameter.  This mode is still somewhat supported, which is why
  // this code block is conditional.  However, it's preferable to pass
  // the source map URL to SourceMapConsumer, so that this function
  // can implement the source URL resolution algorithm as outlined in
  // the spec.  This block is basically the equivalent of:
  //    new URL(sourceURL, sourceMapURL).toString()
  // ... except it avoids using URL, which wasn't available in the
  // older releases of node still supported by this library.
  //
  // The spec says:
  //   If the sources are not absolute URLs after prepending of the
  //   “sourceRoot”, the sources are resolved relative to the
  //   SourceMap (like resolving script src in a html document).


  if (sourceMapURL) {
    var parsed = urlParse(sourceMapURL);

    if (!parsed) {
      throw new Error("sourceMapURL could not be parsed");
    }

    if (parsed.path) {
      // Strip the last path component, but keep the "/".
      var index = parsed.path.lastIndexOf('/');

      if (index >= 0) {
        parsed.path = parsed.path.substring(0, index + 1);
      }
    }

    sourceURL = join(urlGenerate(parsed), sourceURL);
  }

  return normalize(sourceURL);
}

exports.computeSourceURL = computeSourceURL;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/


var base64VLQ = __webpack_require__(9);

var getNumberOfLines = __webpack_require__(3).getNumberOfLines;

var getUnfinishedLine = __webpack_require__(3).getUnfinishedLine;

var LINE_MAPPING = ";AACA";

var SourceNode =
/*#__PURE__*/
function () {
  function SourceNode(generatedCode, source, originalSource, startingLine) {
    babelHelpers.classCallCheck(this, SourceNode);
    this.generatedCode = generatedCode;
    this.originalSource = originalSource;
    this.source = source;
    this.startingLine = startingLine || 1;
    this._numberOfLines = getNumberOfLines(this.generatedCode);
    this._endsWithNewLine = generatedCode[generatedCode.length - 1] === "\n";
  }

  babelHelpers.createClass(SourceNode, [{
    key: "clone",
    value: function clone() {
      return new SourceNode(this.generatedCode, this.source, this.originalSource, this.startingLine);
    }
  }, {
    key: "getGeneratedCode",
    value: function getGeneratedCode() {
      return this.generatedCode;
    }
  }, {
    key: "addGeneratedCode",
    value: function addGeneratedCode(code) {
      this.generatedCode += code;
      this._numberOfLines += getNumberOfLines(code);
      this._endsWithNewLine = code[code.length - 1] === "\n";
    }
  }, {
    key: "getMappings",
    value: function getMappings(mappingsContext) {
      if (!this.generatedCode) return "";
      var lines = this._numberOfLines;
      var sourceIdx = mappingsContext.ensureSource(this.source, this.originalSource);
      var mappings = "A"; // generated column 0

      if (mappingsContext.unfinishedGeneratedLine) mappings = "," + base64VLQ.encode(mappingsContext.unfinishedGeneratedLine);
      mappings += base64VLQ.encode(sourceIdx - mappingsContext.currentSource); // source index

      mappings += base64VLQ.encode(this.startingLine - mappingsContext.currentOriginalLine); // original line index

      mappings += "A"; // original column 0

      mappingsContext.currentSource = sourceIdx;
      mappingsContext.currentOriginalLine = this.startingLine + lines - 1;
      var unfinishedGeneratedLine = mappingsContext.unfinishedGeneratedLine = getUnfinishedLine(this.generatedCode);
      mappings += Array(lines).join(LINE_MAPPING);

      if (unfinishedGeneratedLine === 0) {
        mappings += ";";
      } else {
        if (lines !== 0) {
          mappings += LINE_MAPPING;
        }

        mappingsContext.currentOriginalLine++;
      }

      return mappings;
    }
  }, {
    key: "mapGeneratedCode",
    value: function mapGeneratedCode(fn) {
      throw new Error("Cannot map generated code on a SourceMap. Normalize to SingleLineNode first.");
    }
  }, {
    key: "getNormalizedNodes",
    value: function getNormalizedNodes() {
      var results = [];
      var currentLine = this.startingLine;
      var generatedCode = this.generatedCode;
      var index = 0;
      var indexEnd = generatedCode.length;

      while (index < indexEnd) {
        // get one generated line
        var nextLine = generatedCode.indexOf("\n", index) + 1;
        if (nextLine === 0) nextLine = indexEnd;
        var lineGenerated = generatedCode.substr(index, nextLine - index);
        results.push(new SingleLineNode(lineGenerated, this.source, this.originalSource, currentLine)); // move cursors

        index = nextLine;
        currentLine++;
      }

      return results;
    }
  }, {
    key: "merge",
    value: function merge(otherNode) {
      if (otherNode instanceof SourceNode) {
        return this.mergeSourceNode(otherNode);
      } else if (otherNode instanceof SingleLineNode) {
        return this.mergeSingleLineNode(otherNode);
      }

      return false;
    }
  }, {
    key: "mergeSourceNode",
    value: function mergeSourceNode(otherNode) {
      if (this.source === otherNode.source && this._endsWithNewLine && this.startingLine + this._numberOfLines === otherNode.startingLine) {
        this.generatedCode += otherNode.generatedCode;
        this._numberOfLines += otherNode._numberOfLines;
        this._endsWithNewLine = otherNode._endsWithNewLine;
        return this;
      }

      return false;
    }
  }, {
    key: "mergeSingleLineNode",
    value: function mergeSingleLineNode(otherNode) {
      if (this.source === otherNode.source && this._endsWithNewLine && this.startingLine + this._numberOfLines === otherNode.line && otherNode._numberOfLines <= 1) {
        this.addSingleLineNode(otherNode);
        return this;
      }

      return false;
    }
  }, {
    key: "addSingleLineNode",
    value: function addSingleLineNode(otherNode) {
      this.generatedCode += otherNode.generatedCode;
      this._numberOfLines += otherNode._numberOfLines;
      this._endsWithNewLine = otherNode._endsWithNewLine;
    }
  }]);
  return SourceNode;
}();

module.exports = SourceNode;

var SingleLineNode = __webpack_require__(18); // circular dependency

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/


var getNumberOfLines = __webpack_require__(3).getNumberOfLines;

var getUnfinishedLine = __webpack_require__(3).getUnfinishedLine;

var CodeNode =
/*#__PURE__*/
function () {
  function CodeNode(generatedCode) {
    babelHelpers.classCallCheck(this, CodeNode);
    this.generatedCode = generatedCode;
  }

  babelHelpers.createClass(CodeNode, [{
    key: "clone",
    value: function clone() {
      return new CodeNode(this.generatedCode);
    }
  }, {
    key: "getGeneratedCode",
    value: function getGeneratedCode() {
      return this.generatedCode;
    }
  }, {
    key: "getMappings",
    value: function getMappings(mappingsContext) {
      var lines = getNumberOfLines(this.generatedCode);
      var mapping = Array(lines + 1).join(";");

      if (lines > 0) {
        mappingsContext.unfinishedGeneratedLine = getUnfinishedLine(this.generatedCode);

        if (mappingsContext.unfinishedGeneratedLine > 0) {
          return mapping + "A";
        } else {
          return mapping;
        }
      } else {
        var prevUnfinished = mappingsContext.unfinishedGeneratedLine;
        mappingsContext.unfinishedGeneratedLine += getUnfinishedLine(this.generatedCode);

        if (prevUnfinished === 0 && mappingsContext.unfinishedGeneratedLine > 0) {
          return "A";
        } else {
          return "";
        }
      }
    }
  }, {
    key: "addGeneratedCode",
    value: function addGeneratedCode(generatedCode) {
      this.generatedCode += generatedCode;
    }
  }, {
    key: "mapGeneratedCode",
    value: function mapGeneratedCode(fn) {
      var generatedCode = fn(this.generatedCode);
      return new CodeNode(generatedCode);
    }
  }, {
    key: "getNormalizedNodes",
    value: function getNormalizedNodes() {
      return [this];
    }
  }, {
    key: "merge",
    value: function merge(otherNode) {
      if (otherNode instanceof CodeNode) {
        this.generatedCode += otherNode.generatedCode;
        return this;
      }

      return false;
    }
  }]);
  return CodeNode;
}();

module.exports = CodeNode;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

/* -*- Mode: js; js-indent-level: 2; -*- */

/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 *
 * Based on the Base 64 VLQ implementation in Closure Compiler:
 * https://code.google.com/p/closure-compiler/source/browse/trunk/src/com/google/debugging/sourcemap/Base64VLQ.java
 *
 * Copyright 2011 The Closure Compiler Authors. All rights reserved.
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *  * Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 *  * Redistributions in binary form must reproduce the above
 *    copyright notice, this list of conditions and the following
 *    disclaimer in the documentation and/or other materials provided
 *    with the distribution.
 *  * Neither the name of Google Inc. nor the names of its
 *    contributors may be used to endorse or promote products derived
 *    from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

/*eslint no-bitwise:0,quotes:0,global-strict:0*/
var charToIntMap = {};
var intToCharMap = {};
'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.split('').forEach(function (ch, index) {
  charToIntMap[ch] = index;
  intToCharMap[index] = ch;
});
var base64 = {};
/**
 * Encode an integer in the range of 0 to 63 to a single base 64 digit.
 */

base64.encode = function base64_encode(aNumber) {
  if (aNumber in intToCharMap) {
    return intToCharMap[aNumber];
  }

  throw new TypeError("Must be between 0 and 63: " + aNumber);
};
/**
 * Decode a single base 64 digit to an integer.
 */


base64.decode = function base64_decode(aChar) {
  if (aChar in charToIntMap) {
    return charToIntMap[aChar];
  }

  throw new TypeError("Not a valid base 64 digit: " + aChar);
}; // A single base 64 digit can contain 6 bits of data. For the base 64 variable
// length quantities we use in the source map spec, the first bit is the sign,
// the next four bits are the actual value, and the 6th bit is the
// continuation bit. The continuation bit tells us whether there are more
// digits in this value following this digit.
//
//   Continuation
//   |    Sign
//   |    |
//   V    V
//   101011


var VLQ_BASE_SHIFT = 5; // binary: 100000

var VLQ_BASE = 1 << VLQ_BASE_SHIFT; // binary: 011111

var VLQ_BASE_MASK = VLQ_BASE - 1; // binary: 100000

var VLQ_CONTINUATION_BIT = VLQ_BASE;
/**
 * Converts from a two-complement value to a value where the sign bit is
 * placed in the least significant bit.  For example, as decimals:
 *   1 becomes 2 (10 binary), -1 becomes 3 (11 binary)
 *   2 becomes 4 (100 binary), -2 becomes 5 (101 binary)
 */

function toVLQSigned(aValue) {
  return aValue < 0 ? (-aValue << 1) + 1 : (aValue << 1) + 0;
}
/**
 * Converts to a two-complement value from a value where the sign bit is
 * placed in the least significant bit.  For example, as decimals:
 *   2 (10 binary) becomes 1, 3 (11 binary) becomes -1
 *   4 (100 binary) becomes 2, 5 (101 binary) becomes -2
 */


function fromVLQSigned(aValue) {
  var isNegative = (aValue & 1) === 1;
  var shifted = aValue >> 1;
  return isNegative ? -shifted : shifted;
}
/**
 * Returns the base 64 VLQ encoded value.
 */


exports.encode = function base64VLQ_encode(aValue) {
  var encoded = "";
  var digit;
  var vlq = toVLQSigned(aValue);

  do {
    digit = vlq & VLQ_BASE_MASK;
    vlq >>>= VLQ_BASE_SHIFT;

    if (vlq > 0) {
      // There are still more digits in this value, so we must make sure the
      // continuation bit is marked.
      digit |= VLQ_CONTINUATION_BIT;
    }

    encoded += base64.encode(digit);
  } while (vlq > 0);

  return encoded;
};
/**
 * Decodes the next base 64 VLQ value from the given string and returns the
 * value and the rest of the string via the out parameter.
 */


exports.decode = function base64VLQ_decode(aStr, aOutParam) {
  var i = 0;
  var strLen = aStr.length;
  var result = 0;
  var shift = 0;
  var continuation, digit;

  do {
    if (i >= strLen) {
      throw new Error("Expected more digits in base 64 VLQ value.");
    }

    digit = base64.decode(aStr.charAt(i++));
    continuation = !!(digit & VLQ_CONTINUATION_BIT);
    digit &= VLQ_BASE_MASK;
    result = result + (digit << shift);
    shift += VLQ_BASE_SHIFT;
  } while (continuation);

  aOutParam.value = fromVLQSigned(result);
  aOutParam.rest = aStr.slice(i);
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var URI = __webpack_require__(53),
    equal = __webpack_require__(11),
    util = __webpack_require__(5),
    SchemaObject = __webpack_require__(20),
    traverse = __webpack_require__(55);

module.exports = resolve;
resolve.normalizeId = normalizeId;
resolve.fullPath = getFullPath;
resolve.url = resolveUrl;
resolve.ids = resolveIds;
resolve.inlineRef = inlineRef;
resolve.schema = resolveSchema;
/**
 * [resolve and compile the references ($ref)]
 * @this   Ajv
 * @param  {Function} compile reference to schema compilation funciton (localCompile)
 * @param  {Object} root object with information about the root schema for the current schema
 * @param  {String} ref reference to resolve
 * @return {Object|Function} schema object (if the schema can be inlined) or validation function
 */

function resolve(compile, root, ref) {
  /* jshint validthis: true */
  var refVal = this._refs[ref];

  if (typeof refVal == 'string') {
    if (this._refs[refVal]) refVal = this._refs[refVal];else return resolve.call(this, compile, root, refVal);
  }

  refVal = refVal || this._schemas[ref];

  if (refVal instanceof SchemaObject) {
    return inlineRef(refVal.schema, this._opts.inlineRefs) ? refVal.schema : refVal.validate || this._compile(refVal);
  }

  var res = resolveSchema.call(this, root, ref);
  var schema, v, baseId;

  if (res) {
    schema = res.schema;
    root = res.root;
    baseId = res.baseId;
  }

  if (schema instanceof SchemaObject) {
    v = schema.validate || compile.call(this, schema.schema, root, undefined, baseId);
  } else if (schema !== undefined) {
    v = inlineRef(schema, this._opts.inlineRefs) ? schema : compile.call(this, schema, root, undefined, baseId);
  }

  return v;
}
/**
 * Resolve schema, its root and baseId
 * @this Ajv
 * @param  {Object} root root object with properties schema, refVal, refs
 * @param  {String} ref  reference to resolve
 * @return {Object} object with properties schema, root, baseId
 */


function resolveSchema(root, ref) {
  /* jshint validthis: true */
  var p = URI.parse(ref),
      refPath = _getFullPath(p),
      baseId = getFullPath(this._getId(root.schema));

  if (Object.keys(root.schema).length === 0 || refPath !== baseId) {
    var id = normalizeId(refPath);
    var refVal = this._refs[id];

    if (typeof refVal == 'string') {
      return resolveRecursive.call(this, root, refVal, p);
    } else if (refVal instanceof SchemaObject) {
      if (!refVal.validate) this._compile(refVal);
      root = refVal;
    } else {
      refVal = this._schemas[id];

      if (refVal instanceof SchemaObject) {
        if (!refVal.validate) this._compile(refVal);
        if (id == normalizeId(ref)) return {
          schema: refVal,
          root: root,
          baseId: baseId
        };
        root = refVal;
      } else {
        return;
      }
    }

    if (!root.schema) return;
    baseId = getFullPath(this._getId(root.schema));
  }

  return getJsonPointer.call(this, p, baseId, root.schema, root);
}
/* @this Ajv */


function resolveRecursive(root, ref, parsedRef) {
  /* jshint validthis: true */
  var res = resolveSchema.call(this, root, ref);

  if (res) {
    var schema = res.schema;
    var baseId = res.baseId;
    root = res.root;

    var id = this._getId(schema);

    if (id) baseId = resolveUrl(baseId, id);
    return getJsonPointer.call(this, parsedRef, baseId, schema, root);
  }
}

var PREVENT_SCOPE_CHANGE = util.toHash(['properties', 'patternProperties', 'enum', 'dependencies', 'definitions']);
/* @this Ajv */

function getJsonPointer(parsedRef, baseId, schema, root) {
  /* jshint validthis: true */
  parsedRef.fragment = parsedRef.fragment || '';
  if (parsedRef.fragment.slice(0, 1) != '/') return;
  var parts = parsedRef.fragment.split('/');

  for (var i = 1; i < parts.length; i++) {
    var part = parts[i];

    if (part) {
      part = util.unescapeFragment(part);
      schema = schema[part];
      if (schema === undefined) break;
      var id;

      if (!PREVENT_SCOPE_CHANGE[part]) {
        id = this._getId(schema);
        if (id) baseId = resolveUrl(baseId, id);

        if (schema.$ref) {
          var $ref = resolveUrl(baseId, schema.$ref);
          var res = resolveSchema.call(this, root, $ref);

          if (res) {
            schema = res.schema;
            root = res.root;
            baseId = res.baseId;
          }
        }
      }
    }
  }

  if (schema !== undefined && schema !== root.schema) return {
    schema: schema,
    root: root,
    baseId: baseId
  };
}

var SIMPLE_INLINED = util.toHash(['type', 'format', 'pattern', 'maxLength', 'minLength', 'maxProperties', 'minProperties', 'maxItems', 'minItems', 'maximum', 'minimum', 'uniqueItems', 'multipleOf', 'required', 'enum']);

function inlineRef(schema, limit) {
  if (limit === false) return false;
  if (limit === undefined || limit === true) return checkNoRef(schema);else if (limit) return countKeys(schema) <= limit;
}

function checkNoRef(schema) {
  var item;

  if (Array.isArray(schema)) {
    for (var i = 0; i < schema.length; i++) {
      item = schema[i];
      if (babelHelpers.typeof(item) == 'object' && !checkNoRef(item)) return false;
    }
  } else {
    for (var key in schema) {
      if (key == '$ref') return false;
      item = schema[key];
      if (babelHelpers.typeof(item) == 'object' && !checkNoRef(item)) return false;
    }
  }

  return true;
}

function countKeys(schema) {
  var count = 0,
      item;

  if (Array.isArray(schema)) {
    for (var i = 0; i < schema.length; i++) {
      item = schema[i];
      if (babelHelpers.typeof(item) == 'object') count += countKeys(item);
      if (count == Infinity) return Infinity;
    }
  } else {
    for (var key in schema) {
      if (key == '$ref') return Infinity;

      if (SIMPLE_INLINED[key]) {
        count++;
      } else {
        item = schema[key];
        if (babelHelpers.typeof(item) == 'object') count += countKeys(item) + 1;
        if (count == Infinity) return Infinity;
      }
    }
  }

  return count;
}

function getFullPath(id, normalize) {
  if (normalize !== false) id = normalizeId(id);
  var p = URI.parse(id);
  return _getFullPath(p);
}

function _getFullPath(p) {
  return URI.serialize(p).split('#')[0] + '#';
}

var TRAILING_SLASH_HASH = /#\/?$/;

function normalizeId(id) {
  return id ? id.replace(TRAILING_SLASH_HASH, '') : '';
}

function resolveUrl(baseId, id) {
  id = normalizeId(id);
  return URI.resolve(baseId, id);
}
/* @this Ajv */


function resolveIds(schema) {
  var schemaId = normalizeId(this._getId(schema));
  var baseIds = {
    '': schemaId
  };
  var fullPaths = {
    '': getFullPath(schemaId, false)
  };
  var localRefs = {};
  var self = this;
  traverse(schema, {
    allKeys: true
  }, function (sch, jsonPtr, rootSchema, parentJsonPtr, parentKeyword, parentSchema, keyIndex) {
    if (jsonPtr === '') return;

    var id = self._getId(sch);

    var baseId = baseIds[parentJsonPtr];
    var fullPath = fullPaths[parentJsonPtr] + '/' + parentKeyword;
    if (keyIndex !== undefined) fullPath += '/' + (typeof keyIndex == 'number' ? keyIndex : util.escapeFragment(keyIndex));

    if (typeof id == 'string') {
      id = baseId = normalizeId(baseId ? URI.resolve(baseId, id) : id);
      var refVal = self._refs[id];
      if (typeof refVal == 'string') refVal = self._refs[refVal];

      if (refVal && refVal.schema) {
        if (!equal(sch, refVal.schema)) throw new Error('id "' + id + '" resolves to more than one schema');
      } else if (id != normalizeId(fullPath)) {
        if (id[0] == '#') {
          if (localRefs[id] && !equal(sch, localRefs[id])) throw new Error('id "' + id + '" resolves to more than one schema');
          localRefs[id] = sch;
        } else {
          self._refs[id] = fullPath;
        }
      }
    }

    baseIds[jsonPtr] = baseId;
    fullPaths[jsonPtr] = fullPath;
  });
  return localRefs;
}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isArray = Array.isArray;
var keyList = Object.keys;
var hasProp = Object.prototype.hasOwnProperty;

module.exports = function equal(a, b) {
  if (a === b) return true;

  if (a && b && babelHelpers.typeof(a) == 'object' && babelHelpers.typeof(b) == 'object') {
    var arrA = isArray(a),
        arrB = isArray(b),
        i,
        length,
        key;

    if (arrA && arrB) {
      length = a.length;
      if (length != b.length) return false;

      for (i = length; i-- !== 0;) {
        if (!equal(a[i], b[i])) return false;
      }

      return true;
    }

    if (arrA != arrB) return false;
    var dateA = a instanceof Date,
        dateB = b instanceof Date;
    if (dateA != dateB) return false;
    if (dateA && dateB) return a.getTime() == b.getTime();
    var regexpA = a instanceof RegExp,
        regexpB = b instanceof RegExp;
    if (regexpA != regexpB) return false;
    if (regexpA && regexpB) return a.toString() == b.toString();
    var keys = keyList(a);
    length = keys.length;
    if (length !== keyList(b).length) return false;

    for (i = length; i-- !== 0;) {
      if (!hasProp.call(b, keys[i])) return false;
    }

    for (i = length; i-- !== 0;) {
      key = keys[i];
      if (!equal(a[key], b[key])) return false;
    }

    return true;
  }

  return a !== a && b !== b;
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var resolve = __webpack_require__(10);

module.exports = {
  Validation: errorSubclass(ValidationError),
  MissingRef: errorSubclass(MissingRefError)
};

function ValidationError(errors) {
  this.message = 'validation failed';
  this.errors = errors;
  this.ajv = this.validation = true;
}

MissingRefError.message = function (baseId, ref) {
  return 'can\'t resolve reference ' + ref + ' from id ' + baseId;
};

function MissingRefError(baseId, ref, message) {
  this.message = message || MissingRefError.message(baseId, ref);
  this.missingRef = resolve.url(baseId, ref);
  this.missingSchema = resolve.normalizeId(resolve.fullPath(this.missingRef));
}

function errorSubclass(Subclass) {
  Subclass.prototype = Object.create(Error.prototype);
  Subclass.prototype.constructor = Subclass;
  return Subclass;
}

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  metaSchemaRef: metaSchemaRef
};
var META_SCHEMA_ID = 'http://json-schema.org/draft-06/schema';

function metaSchemaRef(ajv) {
  var defaultMeta = ajv._opts.defaultMeta;
  if (typeof defaultMeta == 'string') return {
    $ref: defaultMeta
  };
  if (ajv.getSchema(META_SCHEMA_ID)) return {
    $ref: META_SCHEMA_ID
  };
  console.warn('meta schema not defined');
  return {};
}

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

/* -*- Mode: js; js-indent-level: 2; -*- */

/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */
var base64VLQ = __webpack_require__(15);

var util = __webpack_require__(6);

var ArraySet = __webpack_require__(16).ArraySet;

var MappingList = __webpack_require__(32).MappingList;
/**
 * An instance of the SourceMapGenerator represents a source map which is
 * being built incrementally. You may pass an object with the following
 * properties:
 *
 *   - file: The filename of the generated source.
 *   - sourceRoot: A root for all relative URLs in this source map.
 */


function SourceMapGenerator(aArgs) {
  if (!aArgs) {
    aArgs = {};
  }

  this._file = util.getArg(aArgs, 'file', null);
  this._sourceRoot = util.getArg(aArgs, 'sourceRoot', null);
  this._skipValidation = util.getArg(aArgs, 'skipValidation', false);
  this._sources = new ArraySet();
  this._names = new ArraySet();
  this._mappings = new MappingList();
  this._sourcesContents = null;
}

SourceMapGenerator.prototype._version = 3;
/**
 * Creates a new SourceMapGenerator based on a SourceMapConsumer
 *
 * @param aSourceMapConsumer The SourceMap.
 */

SourceMapGenerator.fromSourceMap = function SourceMapGenerator_fromSourceMap(aSourceMapConsumer) {
  var sourceRoot = aSourceMapConsumer.sourceRoot;
  var generator = new SourceMapGenerator({
    file: aSourceMapConsumer.file,
    sourceRoot: sourceRoot
  });
  aSourceMapConsumer.eachMapping(function (mapping) {
    var newMapping = {
      generated: {
        line: mapping.generatedLine,
        column: mapping.generatedColumn
      }
    };

    if (mapping.source != null) {
      newMapping.source = mapping.source;

      if (sourceRoot != null) {
        newMapping.source = util.relative(sourceRoot, newMapping.source);
      }

      newMapping.original = {
        line: mapping.originalLine,
        column: mapping.originalColumn
      };

      if (mapping.name != null) {
        newMapping.name = mapping.name;
      }
    }

    generator.addMapping(newMapping);
  });
  aSourceMapConsumer.sources.forEach(function (sourceFile) {
    var sourceRelative = sourceFile;

    if (sourceRoot !== null) {
      sourceRelative = util.relative(sourceRoot, sourceFile);
    }

    if (!generator._sources.has(sourceRelative)) {
      generator._sources.add(sourceRelative);
    }

    var content = aSourceMapConsumer.sourceContentFor(sourceFile);

    if (content != null) {
      generator.setSourceContent(sourceFile, content);
    }
  });
  return generator;
};
/**
 * Add a single mapping from original source line and column to the generated
 * source's line and column for this source map being created. The mapping
 * object should have the following properties:
 *
 *   - generated: An object with the generated line and column positions.
 *   - original: An object with the original line and column positions.
 *   - source: The original source file (relative to the sourceRoot).
 *   - name: An optional original token name for this mapping.
 */


SourceMapGenerator.prototype.addMapping = function SourceMapGenerator_addMapping(aArgs) {
  var generated = util.getArg(aArgs, 'generated');
  var original = util.getArg(aArgs, 'original', null);
  var source = util.getArg(aArgs, 'source', null);
  var name = util.getArg(aArgs, 'name', null);

  if (!this._skipValidation) {
    this._validateMapping(generated, original, source, name);
  }

  if (source != null) {
    source = String(source);

    if (!this._sources.has(source)) {
      this._sources.add(source);
    }
  }

  if (name != null) {
    name = String(name);

    if (!this._names.has(name)) {
      this._names.add(name);
    }
  }

  this._mappings.add({
    generatedLine: generated.line,
    generatedColumn: generated.column,
    originalLine: original != null && original.line,
    originalColumn: original != null && original.column,
    source: source,
    name: name
  });
};
/**
 * Set the source content for a source file.
 */


SourceMapGenerator.prototype.setSourceContent = function SourceMapGenerator_setSourceContent(aSourceFile, aSourceContent) {
  var source = aSourceFile;

  if (this._sourceRoot != null) {
    source = util.relative(this._sourceRoot, source);
  }

  if (aSourceContent != null) {
    // Add the source content to the _sourcesContents map.
    // Create a new _sourcesContents map if the property is null.
    if (!this._sourcesContents) {
      this._sourcesContents = Object.create(null);
    }

    this._sourcesContents[util.toSetString(source)] = aSourceContent;
  } else if (this._sourcesContents) {
    // Remove the source file from the _sourcesContents map.
    // If the _sourcesContents map is empty, set the property to null.
    delete this._sourcesContents[util.toSetString(source)];

    if (Object.keys(this._sourcesContents).length === 0) {
      this._sourcesContents = null;
    }
  }
};
/**
 * Applies the mappings of a sub-source-map for a specific source file to the
 * source map being generated. Each mapping to the supplied source file is
 * rewritten using the supplied source map. Note: The resolution for the
 * resulting mappings is the minimium of this map and the supplied map.
 *
 * @param aSourceMapConsumer The source map to be applied.
 * @param aSourceFile Optional. The filename of the source file.
 *        If omitted, SourceMapConsumer's file property will be used.
 * @param aSourceMapPath Optional. The dirname of the path to the source map
 *        to be applied. If relative, it is relative to the SourceMapConsumer.
 *        This parameter is needed when the two source maps aren't in the same
 *        directory, and the source map to be applied contains relative source
 *        paths. If so, those relative source paths need to be rewritten
 *        relative to the SourceMapGenerator.
 */


SourceMapGenerator.prototype.applySourceMap = function SourceMapGenerator_applySourceMap(aSourceMapConsumer, aSourceFile, aSourceMapPath) {
  var sourceFile = aSourceFile; // If aSourceFile is omitted, we will use the file property of the SourceMap

  if (aSourceFile == null) {
    if (aSourceMapConsumer.file == null) {
      throw new Error('SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, ' + 'or the source map\'s "file" property. Both were omitted.');
    }

    sourceFile = aSourceMapConsumer.file;
  }

  var sourceRoot = this._sourceRoot; // Make "sourceFile" relative if an absolute Url is passed.

  if (sourceRoot != null) {
    sourceFile = util.relative(sourceRoot, sourceFile);
  } // Applying the SourceMap can add and remove items from the sources and
  // the names array.


  var newSources = new ArraySet();
  var newNames = new ArraySet(); // Find mappings for the "sourceFile"

  this._mappings.unsortedForEach(function (mapping) {
    if (mapping.source === sourceFile && mapping.originalLine != null) {
      // Check if it can be mapped by the source map, then update the mapping.
      var original = aSourceMapConsumer.originalPositionFor({
        line: mapping.originalLine,
        column: mapping.originalColumn
      });

      if (original.source != null) {
        // Copy mapping
        mapping.source = original.source;

        if (aSourceMapPath != null) {
          mapping.source = util.join(aSourceMapPath, mapping.source);
        }

        if (sourceRoot != null) {
          mapping.source = util.relative(sourceRoot, mapping.source);
        }

        mapping.originalLine = original.line;
        mapping.originalColumn = original.column;

        if (original.name != null) {
          mapping.name = original.name;
        }
      }
    }

    var source = mapping.source;

    if (source != null && !newSources.has(source)) {
      newSources.add(source);
    }

    var name = mapping.name;

    if (name != null && !newNames.has(name)) {
      newNames.add(name);
    }
  }, this);

  this._sources = newSources;
  this._names = newNames; // Copy sourcesContents of applied map.

  aSourceMapConsumer.sources.forEach(function (sourceFile) {
    var content = aSourceMapConsumer.sourceContentFor(sourceFile);

    if (content != null) {
      if (aSourceMapPath != null) {
        sourceFile = util.join(aSourceMapPath, sourceFile);
      }

      if (sourceRoot != null) {
        sourceFile = util.relative(sourceRoot, sourceFile);
      }

      this.setSourceContent(sourceFile, content);
    }
  }, this);
};
/**
 * A mapping can have one of the three levels of data:
 *
 *   1. Just the generated position.
 *   2. The Generated position, original position, and original source.
 *   3. Generated and original position, original source, as well as a name
 *      token.
 *
 * To maintain consistency, we validate that any new mapping being added falls
 * in to one of these categories.
 */


SourceMapGenerator.prototype._validateMapping = function SourceMapGenerator_validateMapping(aGenerated, aOriginal, aSource, aName) {
  // When aOriginal is truthy but has empty values for .line and .column,
  // it is most likely a programmer error. In this case we throw a very
  // specific error message to try to guide them the right way.
  // For example: https://github.com/Polymer/polymer-bundler/pull/519
  if (aOriginal && typeof aOriginal.line !== 'number' && typeof aOriginal.column !== 'number') {
    throw new Error('original.line and original.column are not numbers -- you probably meant to omit ' + 'the original mapping entirely and only map the generated position. If so, pass ' + 'null for the original mapping instead of an object with empty or null values.');
  }

  if (aGenerated && 'line' in aGenerated && 'column' in aGenerated && aGenerated.line > 0 && aGenerated.column >= 0 && !aOriginal && !aSource && !aName) {
    // Case 1.
    return;
  } else if (aGenerated && 'line' in aGenerated && 'column' in aGenerated && aOriginal && 'line' in aOriginal && 'column' in aOriginal && aGenerated.line > 0 && aGenerated.column >= 0 && aOriginal.line > 0 && aOriginal.column >= 0 && aSource) {
    // Cases 2 and 3.
    return;
  } else {
    throw new Error('Invalid mapping: ' + JSON.stringify({
      generated: aGenerated,
      source: aSource,
      original: aOriginal,
      name: aName
    }));
  }
};
/**
 * Serialize the accumulated mappings in to the stream of base 64 VLQs
 * specified by the source map format.
 */


SourceMapGenerator.prototype._serializeMappings = function SourceMapGenerator_serializeMappings() {
  var previousGeneratedColumn = 0;
  var previousGeneratedLine = 1;
  var previousOriginalColumn = 0;
  var previousOriginalLine = 0;
  var previousName = 0;
  var previousSource = 0;
  var result = '';
  var next;
  var mapping;
  var nameIdx;
  var sourceIdx;

  var mappings = this._mappings.toArray();

  for (var i = 0, len = mappings.length; i < len; i++) {
    mapping = mappings[i];
    next = '';

    if (mapping.generatedLine !== previousGeneratedLine) {
      previousGeneratedColumn = 0;

      while (mapping.generatedLine !== previousGeneratedLine) {
        next += ';';
        previousGeneratedLine++;
      }
    } else {
      if (i > 0) {
        if (!util.compareByGeneratedPositionsInflated(mapping, mappings[i - 1])) {
          continue;
        }

        next += ',';
      }
    }

    next += base64VLQ.encode(mapping.generatedColumn - previousGeneratedColumn);
    previousGeneratedColumn = mapping.generatedColumn;

    if (mapping.source != null) {
      sourceIdx = this._sources.indexOf(mapping.source);
      next += base64VLQ.encode(sourceIdx - previousSource);
      previousSource = sourceIdx; // lines are stored 0-based in SourceMap spec version 3

      next += base64VLQ.encode(mapping.originalLine - 1 - previousOriginalLine);
      previousOriginalLine = mapping.originalLine - 1;
      next += base64VLQ.encode(mapping.originalColumn - previousOriginalColumn);
      previousOriginalColumn = mapping.originalColumn;

      if (mapping.name != null) {
        nameIdx = this._names.indexOf(mapping.name);
        next += base64VLQ.encode(nameIdx - previousName);
        previousName = nameIdx;
      }
    }

    result += next;
  }

  return result;
};

SourceMapGenerator.prototype._generateSourcesContent = function SourceMapGenerator_generateSourcesContent(aSources, aSourceRoot) {
  return aSources.map(function (source) {
    if (!this._sourcesContents) {
      return null;
    }

    if (aSourceRoot != null) {
      source = util.relative(aSourceRoot, source);
    }

    var key = util.toSetString(source);
    return Object.prototype.hasOwnProperty.call(this._sourcesContents, key) ? this._sourcesContents[key] : null;
  }, this);
};
/**
 * Externalize the source map.
 */


SourceMapGenerator.prototype.toJSON = function SourceMapGenerator_toJSON() {
  var map = {
    version: this._version,
    sources: this._sources.toArray(),
    names: this._names.toArray(),
    mappings: this._serializeMappings()
  };

  if (this._file != null) {
    map.file = this._file;
  }

  if (this._sourceRoot != null) {
    map.sourceRoot = this._sourceRoot;
  }

  if (this._sourcesContents) {
    map.sourcesContent = this._generateSourcesContent(map.sources, map.sourceRoot);
  }

  return map;
};
/**
 * Render the source map being generated to a string.
 */


SourceMapGenerator.prototype.toString = function SourceMapGenerator_toString() {
  return JSON.stringify(this.toJSON());
};

exports.SourceMapGenerator = SourceMapGenerator;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

/* -*- Mode: js; js-indent-level: 2; -*- */

/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 *
 * Based on the Base 64 VLQ implementation in Closure Compiler:
 * https://code.google.com/p/closure-compiler/source/browse/trunk/src/com/google/debugging/sourcemap/Base64VLQ.java
 *
 * Copyright 2011 The Closure Compiler Authors. All rights reserved.
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *  * Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 *  * Redistributions in binary form must reproduce the above
 *    copyright notice, this list of conditions and the following
 *    disclaimer in the documentation and/or other materials provided
 *    with the distribution.
 *  * Neither the name of Google Inc. nor the names of its
 *    contributors may be used to endorse or promote products derived
 *    from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
var base64 = __webpack_require__(31); // A single base 64 digit can contain 6 bits of data. For the base 64 variable
// length quantities we use in the source map spec, the first bit is the sign,
// the next four bits are the actual value, and the 6th bit is the
// continuation bit. The continuation bit tells us whether there are more
// digits in this value following this digit.
//
//   Continuation
//   |    Sign
//   |    |
//   V    V
//   101011


var VLQ_BASE_SHIFT = 5; // binary: 100000

var VLQ_BASE = 1 << VLQ_BASE_SHIFT; // binary: 011111

var VLQ_BASE_MASK = VLQ_BASE - 1; // binary: 100000

var VLQ_CONTINUATION_BIT = VLQ_BASE;
/**
 * Converts from a two-complement value to a value where the sign bit is
 * placed in the least significant bit.  For example, as decimals:
 *   1 becomes 2 (10 binary), -1 becomes 3 (11 binary)
 *   2 becomes 4 (100 binary), -2 becomes 5 (101 binary)
 */

function toVLQSigned(aValue) {
  return aValue < 0 ? (-aValue << 1) + 1 : (aValue << 1) + 0;
}
/**
 * Converts to a two-complement value from a value where the sign bit is
 * placed in the least significant bit.  For example, as decimals:
 *   2 (10 binary) becomes 1, 3 (11 binary) becomes -1
 *   4 (100 binary) becomes 2, 5 (101 binary) becomes -2
 */


function fromVLQSigned(aValue) {
  var isNegative = (aValue & 1) === 1;
  var shifted = aValue >> 1;
  return isNegative ? -shifted : shifted;
}
/**
 * Returns the base 64 VLQ encoded value.
 */


exports.encode = function base64VLQ_encode(aValue) {
  var encoded = "";
  var digit;
  var vlq = toVLQSigned(aValue);

  do {
    digit = vlq & VLQ_BASE_MASK;
    vlq >>>= VLQ_BASE_SHIFT;

    if (vlq > 0) {
      // There are still more digits in this value, so we must make sure the
      // continuation bit is marked.
      digit |= VLQ_CONTINUATION_BIT;
    }

    encoded += base64.encode(digit);
  } while (vlq > 0);

  return encoded;
};
/**
 * Decodes the next base 64 VLQ value from the given string and returns the
 * value and the rest of the string via the out parameter.
 */


exports.decode = function base64VLQ_decode(aStr, aIndex, aOutParam) {
  var strLen = aStr.length;
  var result = 0;
  var shift = 0;
  var continuation, digit;

  do {
    if (aIndex >= strLen) {
      throw new Error("Expected more digits in base 64 VLQ value.");
    }

    digit = base64.decode(aStr.charCodeAt(aIndex++));

    if (digit === -1) {
      throw new Error("Invalid base64 digit: " + aStr.charAt(aIndex - 1));
    }

    continuation = !!(digit & VLQ_CONTINUATION_BIT);
    digit &= VLQ_BASE_MASK;
    result = result + (digit << shift);
    shift += VLQ_BASE_SHIFT;
  } while (continuation);

  aOutParam.value = fromVLQSigned(result);
  aOutParam.rest = aIndex;
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

/* -*- Mode: js; js-indent-level: 2; -*- */

/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */
var util = __webpack_require__(6);

var has = Object.prototype.hasOwnProperty;
var hasNativeMap = typeof Map !== "undefined";
/**
 * A data structure which is a combination of an array and a set. Adding a new
 * member is O(1), testing for membership is O(1), and finding the index of an
 * element is O(1). Removing elements from the set is not supported. Only
 * strings are supported for membership.
 */

function ArraySet() {
  this._array = [];
  this._set = hasNativeMap ? new Map() : Object.create(null);
}
/**
 * Static method for creating ArraySet instances from an existing array.
 */


ArraySet.fromArray = function ArraySet_fromArray(aArray, aAllowDuplicates) {
  var set = new ArraySet();

  for (var i = 0, len = aArray.length; i < len; i++) {
    set.add(aArray[i], aAllowDuplicates);
  }

  return set;
};
/**
 * Return how many unique items are in this ArraySet. If duplicates have been
 * added, than those do not count towards the size.
 *
 * @returns Number
 */


ArraySet.prototype.size = function ArraySet_size() {
  return hasNativeMap ? this._set.size : Object.getOwnPropertyNames(this._set).length;
};
/**
 * Add the given string to this set.
 *
 * @param String aStr
 */


ArraySet.prototype.add = function ArraySet_add(aStr, aAllowDuplicates) {
  var sStr = hasNativeMap ? aStr : util.toSetString(aStr);
  var isDuplicate = hasNativeMap ? this.has(aStr) : has.call(this._set, sStr);
  var idx = this._array.length;

  if (!isDuplicate || aAllowDuplicates) {
    this._array.push(aStr);
  }

  if (!isDuplicate) {
    if (hasNativeMap) {
      this._set.set(aStr, idx);
    } else {
      this._set[sStr] = idx;
    }
  }
};
/**
 * Is the given string a member of this set?
 *
 * @param String aStr
 */


ArraySet.prototype.has = function ArraySet_has(aStr) {
  if (hasNativeMap) {
    return this._set.has(aStr);
  } else {
    var sStr = util.toSetString(aStr);
    return has.call(this._set, sStr);
  }
};
/**
 * What is the index of the given string in the array?
 *
 * @param String aStr
 */


ArraySet.prototype.indexOf = function ArraySet_indexOf(aStr) {
  if (hasNativeMap) {
    var idx = this._set.get(aStr);

    if (idx >= 0) {
      return idx;
    }
  } else {
    var sStr = util.toSetString(aStr);

    if (has.call(this._set, sStr)) {
      return this._set[sStr];
    }
  }

  throw new Error('"' + aStr + '" is not in the set.');
};
/**
 * What is the element at the given index?
 *
 * @param Number aIdx
 */


ArraySet.prototype.at = function ArraySet_at(aIdx) {
  if (aIdx >= 0 && aIdx < this._array.length) {
    return this._array[aIdx];
  }

  throw new Error('No element indexed by ' + aIdx);
};
/**
 * Returns the array representation of this set (which has the proper indices
 * indicated by indexOf). Note that this is a copy of the internal array used
 * for storing the members so that no one can mess with internal state.
 */


ArraySet.prototype.toArray = function ArraySet_toArray() {
  return this._array.slice();
};

exports.ArraySet = ArraySet;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/


var CodeNode = __webpack_require__(8);

var SourceNode = __webpack_require__(7);

var MappingsContext = __webpack_require__(19);

var getNumberOfLines = __webpack_require__(3).getNumberOfLines;

var SourceListMap =
/*#__PURE__*/
function () {
  function SourceListMap(generatedCode, source, originalSource) {
    babelHelpers.classCallCheck(this, SourceListMap);

    if (Array.isArray(generatedCode)) {
      this.children = generatedCode;
    } else {
      this.children = [];
      if (generatedCode || source) this.add(generatedCode, source, originalSource);
    }
  }

  babelHelpers.createClass(SourceListMap, [{
    key: "add",
    value: function add(generatedCode, source, originalSource) {
      if (typeof generatedCode === "string") {
        if (source) {
          this.children.push(new SourceNode(generatedCode, source, originalSource));
        } else if (this.children.length > 0 && this.children[this.children.length - 1] instanceof CodeNode) {
          this.children[this.children.length - 1].addGeneratedCode(generatedCode);
        } else {
          this.children.push(new CodeNode(generatedCode));
        }
      } else if (generatedCode.getMappings && generatedCode.getGeneratedCode) {
        this.children.push(generatedCode);
      } else if (generatedCode.children) {
        generatedCode.children.forEach(function (sln) {
          this.children.push(sln);
        }, this);
      } else {
        throw new Error("Invalid arguments to SourceListMap.protfotype.add: Expected string, Node or SourceListMap");
      }
    }
  }, {
    key: "preprend",
    value: function preprend(generatedCode, source, originalSource) {
      if (typeof generatedCode === "string") {
        if (source) {
          this.children.unshift(new SourceNode(generatedCode, source, originalSource));
        } else if (this.children.length > 0 && this.children[this.children.length - 1].preprendGeneratedCode) {
          this.children[this.children.length - 1].preprendGeneratedCode(generatedCode);
        } else {
          this.children.unshift(new CodeNode(generatedCode));
        }
      } else if (generatedCode.getMappings && generatedCode.getGeneratedCode) {
        this.children.unshift(generatedCode);
      } else if (generatedCode.children) {
        generatedCode.children.slice().reverse().forEach(function (sln) {
          this.children.unshift(sln);
        }, this);
      } else {
        throw new Error("Invalid arguments to SourceListMap.protfotype.prerend: Expected string, Node or SourceListMap");
      }
    }
  }, {
    key: "mapGeneratedCode",
    value: function mapGeneratedCode(fn) {
      var normalizedNodes = [];
      this.children.forEach(function (sln) {
        sln.getNormalizedNodes().forEach(function (newNode) {
          normalizedNodes.push(newNode);
        });
      });
      var optimizedNodes = [];
      normalizedNodes.forEach(function (sln) {
        sln = sln.mapGeneratedCode(fn);

        if (optimizedNodes.length === 0) {
          optimizedNodes.push(sln);
        } else {
          var last = optimizedNodes[optimizedNodes.length - 1];
          var mergedNode = last.merge(sln);

          if (mergedNode) {
            optimizedNodes[optimizedNodes.length - 1] = mergedNode;
          } else {
            optimizedNodes.push(sln);
          }
        }
      });
      return new SourceListMap(optimizedNodes);
    }
  }, {
    key: "toString",
    value: function toString() {
      return this.children.map(function (sln) {
        return sln.getGeneratedCode();
      }).join("");
    }
  }, {
    key: "toStringWithSourceMap",
    value: function toStringWithSourceMap(options) {
      var mappingsContext = new MappingsContext();
      var source = this.children.map(function (sln) {
        return sln.getGeneratedCode();
      }).join("");
      var mappings = this.children.map(function (sln) {
        return sln.getMappings(mappingsContext);
      }).join("");
      var arrays = mappingsContext.getArrays();
      return {
        source: source,
        map: {
          version: 3,
          file: options && options.file,
          sources: arrays.sources,
          sourcesContent: mappingsContext.hasSourceContent ? arrays.sourcesContent : undefined,
          mappings: mappings
        }
      };
    }
  }]);
  return SourceListMap;
}();

module.exports = SourceListMap;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/


var base64VLQ = __webpack_require__(9);

var getNumberOfLines = __webpack_require__(3).getNumberOfLines;

var getUnfinishedLine = __webpack_require__(3).getUnfinishedLine;

var LINE_MAPPING = ";AAAA";

var SingleLineNode =
/*#__PURE__*/
function () {
  function SingleLineNode(generatedCode, source, originalSource, line) {
    babelHelpers.classCallCheck(this, SingleLineNode);
    this.generatedCode = generatedCode;
    this.originalSource = originalSource;
    this.source = source;
    this.line = line || 1;
    this._numberOfLines = getNumberOfLines(this.generatedCode);
    this._endsWithNewLine = generatedCode[generatedCode.length - 1] === "\n";
  }

  babelHelpers.createClass(SingleLineNode, [{
    key: "clone",
    value: function clone() {
      return new SingleLineNode(this.generatedCode, this.source, this.originalSource, this.line);
    }
  }, {
    key: "getGeneratedCode",
    value: function getGeneratedCode() {
      return this.generatedCode;
    }
  }, {
    key: "getMappings",
    value: function getMappings(mappingsContext) {
      if (!this.generatedCode) return "";
      var lines = this._numberOfLines;
      var sourceIdx = mappingsContext.ensureSource(this.source, this.originalSource);
      var mappings = "A"; // generated column 0

      if (mappingsContext.unfinishedGeneratedLine) mappings = "," + base64VLQ.encode(mappingsContext.unfinishedGeneratedLine);
      mappings += base64VLQ.encode(sourceIdx - mappingsContext.currentSource); // source index

      mappings += base64VLQ.encode(this.line - mappingsContext.currentOriginalLine); // original line index

      mappings += "A"; // original column 0

      mappingsContext.currentSource = sourceIdx;
      mappingsContext.currentOriginalLine = this.line;
      var unfinishedGeneratedLine = mappingsContext.unfinishedGeneratedLine = getUnfinishedLine(this.generatedCode);
      mappings += Array(lines).join(LINE_MAPPING);

      if (unfinishedGeneratedLine === 0) {
        mappings += ";";
      } else {
        if (lines !== 0) mappings += LINE_MAPPING;
      }

      return mappings;
    }
  }, {
    key: "getNormalizedNodes",
    value: function getNormalizedNodes() {
      return [this];
    }
  }, {
    key: "mapGeneratedCode",
    value: function mapGeneratedCode(fn) {
      var generatedCode = fn(this.generatedCode);
      return new SingleLineNode(generatedCode, this.source, this.originalSource, this.line);
    }
  }, {
    key: "merge",
    value: function merge(otherNode) {
      if (otherNode instanceof SingleLineNode) {
        return this.mergeSingleLineNode(otherNode);
      }

      return false;
    }
  }, {
    key: "mergeSingleLineNode",
    value: function mergeSingleLineNode(otherNode) {
      if (this.source === otherNode.source && this.originalSource === otherNode.originalSource) {
        if (this.line === otherNode.line) {
          this.generatedCode += otherNode.generatedCode;
          this._numberOfLines += otherNode._numberOfLines;
          this._endsWithNewLine = otherNode._endsWithNewLine;
          return this;
        } else if (this.line + 1 === otherNode.line && this._endsWithNewLine && this._numberOfLines === 1 && otherNode._numberOfLines <= 1) {
          return new SourceNode(this.generatedCode + otherNode.generatedCode, this.source, this.originalSource, this.line);
        }
      }

      return false;
    }
  }]);
  return SingleLineNode;
}();

module.exports = SingleLineNode;

var SourceNode = __webpack_require__(7); // circular dependency

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/


var MappingsContext =
/*#__PURE__*/
function () {
  function MappingsContext() {
    babelHelpers.classCallCheck(this, MappingsContext);
    this.sourcesIndices = new Map();
    this.sourcesContent = new Map();
    this.hasSourceContent = false;
    this.currentOriginalLine = 1;
    this.currentSource = 0;
    this.unfinishedGeneratedLine = false;
  }

  babelHelpers.createClass(MappingsContext, [{
    key: "ensureSource",
    value: function ensureSource(source, originalSource) {
      var idx = this.sourcesIndices.get(source);

      if (typeof idx === "number") {
        return idx;
      }

      idx = this.sourcesIndices.size;
      this.sourcesIndices.set(source, idx);
      this.sourcesContent.set(source, originalSource);
      if (typeof originalSource === "string") this.hasSourceContent = true;
      return idx;
    }
  }, {
    key: "getArrays",
    value: function getArrays() {
      var sources = [];
      var sourcesContent = [];
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.sourcesContent[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var pair = _step.value;
          sources.push(pair[0]);
          sourcesContent.push(pair[1]);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return {
        sources: sources,
        sourcesContent: sourcesContent
      };
    }
  }]);
  return MappingsContext;
}();

module.exports = MappingsContext;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var util = __webpack_require__(5);

module.exports = SchemaObject;

function SchemaObject(obj) {
  util.copy(obj, this);
}

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (data, opts) {
  if (!opts) opts = {};
  if (typeof opts === 'function') opts = {
    cmp: opts
  };
  var cycles = typeof opts.cycles === 'boolean' ? opts.cycles : false;

  var cmp = opts.cmp && function (f) {
    return function (node) {
      return function (a, b) {
        var aobj = {
          key: a,
          value: node[a]
        };
        var bobj = {
          key: b,
          value: node[b]
        };
        return f(aobj, bobj);
      };
    };
  }(opts.cmp);

  var seen = [];
  return function stringify(node) {
    if (node && node.toJSON && typeof node.toJSON === 'function') {
      node = node.toJSON();
    }

    if (node === undefined) return;
    if (typeof node == 'number') return isFinite(node) ? '' + node : 'null';
    if (babelHelpers.typeof(node) !== 'object') return JSON.stringify(node);
    var i, out;

    if (Array.isArray(node)) {
      out = '[';

      for (i = 0; i < node.length; i++) {
        if (i) out += ',';
        out += stringify(node[i]) || 'null';
      }

      return out + ']';
    }

    if (node === null) return 'null';

    if (seen.indexOf(node) !== -1) {
      if (cycles) return JSON.stringify('__cycle__');
      throw new TypeError('Converting circular structure to JSON');
    }

    var seenIndex = seen.push(node) - 1;
    var keys = Object.keys(node).sort(cmp && cmp(node));
    out = '';

    for (i = 0; i < keys.length; i++) {
      var key = keys[i];
      var value = stringify(node[key]);
      if (!value) continue;
      if (out) out += ',';
      out += JSON.stringify(key) + ':' + value;
    }

    seen.splice(seenIndex, 1);
    return '{' + out + '}';
  }(data);
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function generate_validate(it, $keyword, $ruleType) {
  var out = '';

  var $async = it.schema.$async === true,
      $refKeywords = it.util.schemaHasRulesExcept(it.schema, it.RULES.all, '$ref'),
      $id = it.self._getId(it.schema);

  if (it.isTop) {
    out += ' var validate = ';

    if ($async) {
      it.async = true;
      out += 'async ';
    }

    out += 'function(data, dataPath, parentData, parentDataProperty, rootData) { \'use strict\'; ';

    if ($id && (it.opts.sourceCode || it.opts.processCode)) {
      out += ' ' + ('/\*# sourceURL=' + $id + ' */') + ' ';
    }
  }

  if (typeof it.schema == 'boolean' || !($refKeywords || it.schema.$ref)) {
    var $keyword = 'false schema';
    var $lvl = it.level;
    var $dataLvl = it.dataLevel;
    var $schema = it.schema[$keyword];
    var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
    var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
    var $breakOnError = !it.opts.allErrors;
    var $errorKeyword;
    var $data = 'data' + ($dataLvl || '');
    var $valid = 'valid' + $lvl;

    if (it.schema === false) {
      if (it.isTop) {
        $breakOnError = true;
      } else {
        out += ' var ' + $valid + ' = false; ';
      }

      var $$outStack = $$outStack || [];
      $$outStack.push(out);
      out = '';
      /* istanbul ignore else */

      if (it.createErrors !== false) {
        out += ' { keyword: \'' + ($errorKeyword || 'false schema') + '\' , dataPath: (dataPath || \'\') + ' + it.errorPath + ' , schemaPath: ' + it.util.toQuotedString($errSchemaPath) + ' , params: {} ';

        if (it.opts.messages !== false) {
          out += ' , message: \'boolean schema is false\' ';
        }

        if (it.opts.verbose) {
          out += ' , schema: false , parentSchema: validate.schema' + it.schemaPath + ' , data: ' + $data + ' ';
        }

        out += ' } ';
      } else {
        out += ' {} ';
      }

      var __err = out;
      out = $$outStack.pop();

      if (!it.compositeRule && $breakOnError) {
        /* istanbul ignore if */
        if (it.async) {
          out += ' throw new ValidationError([' + __err + ']); ';
        } else {
          out += ' validate.errors = [' + __err + ']; return false; ';
        }
      } else {
        out += ' var err = ' + __err + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
      }
    } else {
      if (it.isTop) {
        if ($async) {
          out += ' return data; ';
        } else {
          out += ' validate.errors = null; return true; ';
        }
      } else {
        out += ' var ' + $valid + ' = true; ';
      }
    }

    if (it.isTop) {
      out += ' }; return validate; ';
    }

    return out;
  }

  if (it.isTop) {
    var $top = it.isTop,
        $lvl = it.level = 0,
        $dataLvl = it.dataLevel = 0,
        $data = 'data';
    it.rootId = it.resolve.fullPath(it.self._getId(it.root.schema));
    it.baseId = it.baseId || it.rootId;
    delete it.isTop;
    it.dataPathArr = [undefined];
    out += ' var vErrors = null; ';
    out += ' var errors = 0;     ';
    out += ' if (rootData === undefined) rootData = data; ';
  } else {
    var $lvl = it.level,
        $dataLvl = it.dataLevel,
        $data = 'data' + ($dataLvl || '');
    if ($id) it.baseId = it.resolve.url(it.baseId, $id);
    if ($async && !it.async) throw new Error('async schema in sync schema');
    out += ' var errs_' + $lvl + ' = errors;';
  }

  var $valid = 'valid' + $lvl,
      $breakOnError = !it.opts.allErrors,
      $closingBraces1 = '',
      $closingBraces2 = '';
  var $errorKeyword;
  var $typeSchema = it.schema.type,
      $typeIsArray = Array.isArray($typeSchema);

  if ($typeSchema && it.opts.nullable && it.schema.nullable === true) {
    if ($typeIsArray) {
      if ($typeSchema.indexOf('null') == -1) $typeSchema = $typeSchema.concat('null');
    } else if ($typeSchema != 'null') {
      $typeSchema = [$typeSchema, 'null'];
      $typeIsArray = true;
    }
  }

  if ($typeIsArray && $typeSchema.length == 1) {
    $typeSchema = $typeSchema[0];
    $typeIsArray = false;
  }

  if (it.schema.$ref && $refKeywords) {
    if (it.opts.extendRefs == 'fail') {
      throw new Error('$ref: validation keywords used in schema at path "' + it.errSchemaPath + '" (see option extendRefs)');
    } else if (it.opts.extendRefs !== true) {
      $refKeywords = false;
      it.logger.warn('$ref: keywords ignored in schema at path "' + it.errSchemaPath + '"');
    }
  }

  if (it.schema.$comment && it.opts.$comment) {
    out += ' ' + it.RULES.all.$comment.code(it, '$comment');
  }

  if ($typeSchema) {
    if (it.opts.coerceTypes) {
      var $coerceToTypes = it.util.coerceToTypes(it.opts.coerceTypes, $typeSchema);
    }

    var $rulesGroup = it.RULES.types[$typeSchema];

    if ($coerceToTypes || $typeIsArray || $rulesGroup === true || $rulesGroup && !$shouldUseGroup($rulesGroup)) {
      var $schemaPath = it.schemaPath + '.type',
          $errSchemaPath = it.errSchemaPath + '/type';
      var $schemaPath = it.schemaPath + '.type',
          $errSchemaPath = it.errSchemaPath + '/type',
          $method = $typeIsArray ? 'checkDataTypes' : 'checkDataType';
      out += ' if (' + it.util[$method]($typeSchema, $data, true) + ') { ';

      if ($coerceToTypes) {
        var $dataType = 'dataType' + $lvl,
            $coerced = 'coerced' + $lvl;
        out += ' var ' + $dataType + ' = typeof ' + $data + '; ';

        if (it.opts.coerceTypes == 'array') {
          out += ' if (' + $dataType + ' == \'object\' && Array.isArray(' + $data + ')) ' + $dataType + ' = \'array\'; ';
        }

        out += ' var ' + $coerced + ' = undefined; ';
        var $bracesCoercion = '';
        var arr1 = $coerceToTypes;

        if (arr1) {
          var $type,
              $i = -1,
              l1 = arr1.length - 1;

          while ($i < l1) {
            $type = arr1[$i += 1];

            if ($i) {
              out += ' if (' + $coerced + ' === undefined) { ';
              $bracesCoercion += '}';
            }

            if (it.opts.coerceTypes == 'array' && $type != 'array') {
              out += ' if (' + $dataType + ' == \'array\' && ' + $data + '.length == 1) { ' + $coerced + ' = ' + $data + ' = ' + $data + '[0]; ' + $dataType + ' = typeof ' + $data + ';  } ';
            }

            if ($type == 'string') {
              out += ' if (' + $dataType + ' == \'number\' || ' + $dataType + ' == \'boolean\') ' + $coerced + ' = \'\' + ' + $data + '; else if (' + $data + ' === null) ' + $coerced + ' = \'\'; ';
            } else if ($type == 'number' || $type == 'integer') {
              out += ' if (' + $dataType + ' == \'boolean\' || ' + $data + ' === null || (' + $dataType + ' == \'string\' && ' + $data + ' && ' + $data + ' == +' + $data + ' ';

              if ($type == 'integer') {
                out += ' && !(' + $data + ' % 1)';
              }

              out += ')) ' + $coerced + ' = +' + $data + '; ';
            } else if ($type == 'boolean') {
              out += ' if (' + $data + ' === \'false\' || ' + $data + ' === 0 || ' + $data + ' === null) ' + $coerced + ' = false; else if (' + $data + ' === \'true\' || ' + $data + ' === 1) ' + $coerced + ' = true; ';
            } else if ($type == 'null') {
              out += ' if (' + $data + ' === \'\' || ' + $data + ' === 0 || ' + $data + ' === false) ' + $coerced + ' = null; ';
            } else if (it.opts.coerceTypes == 'array' && $type == 'array') {
              out += ' if (' + $dataType + ' == \'string\' || ' + $dataType + ' == \'number\' || ' + $dataType + ' == \'boolean\' || ' + $data + ' == null) ' + $coerced + ' = [' + $data + ']; ';
            }
          }
        }

        out += ' ' + $bracesCoercion + ' if (' + $coerced + ' === undefined) {   ';
        var $$outStack = $$outStack || [];
        $$outStack.push(out);
        out = '';
        /* istanbul ignore else */

        if (it.createErrors !== false) {
          out += ' { keyword: \'' + ($errorKeyword || 'type') + '\' , dataPath: (dataPath || \'\') + ' + it.errorPath + ' , schemaPath: ' + it.util.toQuotedString($errSchemaPath) + ' , params: { type: \'';

          if ($typeIsArray) {
            out += '' + $typeSchema.join(",");
          } else {
            out += '' + $typeSchema;
          }

          out += '\' } ';

          if (it.opts.messages !== false) {
            out += ' , message: \'should be ';

            if ($typeIsArray) {
              out += '' + $typeSchema.join(",");
            } else {
              out += '' + $typeSchema;
            }

            out += '\' ';
          }

          if (it.opts.verbose) {
            out += ' , schema: validate.schema' + $schemaPath + ' , parentSchema: validate.schema' + it.schemaPath + ' , data: ' + $data + ' ';
          }

          out += ' } ';
        } else {
          out += ' {} ';
        }

        var __err = out;
        out = $$outStack.pop();

        if (!it.compositeRule && $breakOnError) {
          /* istanbul ignore if */
          if (it.async) {
            out += ' throw new ValidationError([' + __err + ']); ';
          } else {
            out += ' validate.errors = [' + __err + ']; return false; ';
          }
        } else {
          out += ' var err = ' + __err + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
        }

        out += ' } else {  ';
        var $parentData = $dataLvl ? 'data' + ($dataLvl - 1 || '') : 'parentData',
            $parentDataProperty = $dataLvl ? it.dataPathArr[$dataLvl] : 'parentDataProperty';
        out += ' ' + $data + ' = ' + $coerced + '; ';

        if (!$dataLvl) {
          out += 'if (' + $parentData + ' !== undefined)';
        }

        out += ' ' + $parentData + '[' + $parentDataProperty + '] = ' + $coerced + '; } ';
      } else {
        var $$outStack = $$outStack || [];
        $$outStack.push(out);
        out = '';
        /* istanbul ignore else */

        if (it.createErrors !== false) {
          out += ' { keyword: \'' + ($errorKeyword || 'type') + '\' , dataPath: (dataPath || \'\') + ' + it.errorPath + ' , schemaPath: ' + it.util.toQuotedString($errSchemaPath) + ' , params: { type: \'';

          if ($typeIsArray) {
            out += '' + $typeSchema.join(",");
          } else {
            out += '' + $typeSchema;
          }

          out += '\' } ';

          if (it.opts.messages !== false) {
            out += ' , message: \'should be ';

            if ($typeIsArray) {
              out += '' + $typeSchema.join(",");
            } else {
              out += '' + $typeSchema;
            }

            out += '\' ';
          }

          if (it.opts.verbose) {
            out += ' , schema: validate.schema' + $schemaPath + ' , parentSchema: validate.schema' + it.schemaPath + ' , data: ' + $data + ' ';
          }

          out += ' } ';
        } else {
          out += ' {} ';
        }

        var __err = out;
        out = $$outStack.pop();

        if (!it.compositeRule && $breakOnError) {
          /* istanbul ignore if */
          if (it.async) {
            out += ' throw new ValidationError([' + __err + ']); ';
          } else {
            out += ' validate.errors = [' + __err + ']; return false; ';
          }
        } else {
          out += ' var err = ' + __err + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
        }
      }

      out += ' } ';
    }
  }

  if (it.schema.$ref && !$refKeywords) {
    out += ' ' + it.RULES.all.$ref.code(it, '$ref') + ' ';

    if ($breakOnError) {
      out += ' } if (errors === ';

      if ($top) {
        out += '0';
      } else {
        out += 'errs_' + $lvl;
      }

      out += ') { ';
      $closingBraces2 += '}';
    }
  } else {
    var arr2 = it.RULES;

    if (arr2) {
      var $rulesGroup,
          i2 = -1,
          l2 = arr2.length - 1;

      while (i2 < l2) {
        $rulesGroup = arr2[i2 += 1];

        if ($shouldUseGroup($rulesGroup)) {
          if ($rulesGroup.type) {
            out += ' if (' + it.util.checkDataType($rulesGroup.type, $data) + ') { ';
          }

          if (it.opts.useDefaults && !it.compositeRule) {
            if ($rulesGroup.type == 'object' && it.schema.properties) {
              var $schema = it.schema.properties,
                  $schemaKeys = Object.keys($schema);
              var arr3 = $schemaKeys;

              if (arr3) {
                var $propertyKey,
                    i3 = -1,
                    l3 = arr3.length - 1;

                while (i3 < l3) {
                  $propertyKey = arr3[i3 += 1];
                  var $sch = $schema[$propertyKey];

                  if ($sch.default !== undefined) {
                    var $passData = $data + it.util.getProperty($propertyKey);
                    out += '  if (' + $passData + ' === undefined ';

                    if (it.opts.useDefaults == 'empty') {
                      out += ' || ' + $passData + ' === null || ' + $passData + ' === \'\' ';
                    }

                    out += ' ) ' + $passData + ' = ';

                    if (it.opts.useDefaults == 'shared') {
                      out += ' ' + it.useDefault($sch.default) + ' ';
                    } else {
                      out += ' ' + JSON.stringify($sch.default) + ' ';
                    }

                    out += '; ';
                  }
                }
              }
            } else if ($rulesGroup.type == 'array' && Array.isArray(it.schema.items)) {
              var arr4 = it.schema.items;

              if (arr4) {
                var $sch,
                    $i = -1,
                    l4 = arr4.length - 1;

                while ($i < l4) {
                  $sch = arr4[$i += 1];

                  if ($sch.default !== undefined) {
                    var $passData = $data + '[' + $i + ']';
                    out += '  if (' + $passData + ' === undefined ';

                    if (it.opts.useDefaults == 'empty') {
                      out += ' || ' + $passData + ' === null || ' + $passData + ' === \'\' ';
                    }

                    out += ' ) ' + $passData + ' = ';

                    if (it.opts.useDefaults == 'shared') {
                      out += ' ' + it.useDefault($sch.default) + ' ';
                    } else {
                      out += ' ' + JSON.stringify($sch.default) + ' ';
                    }

                    out += '; ';
                  }
                }
              }
            }
          }

          var arr5 = $rulesGroup.rules;

          if (arr5) {
            var $rule,
                i5 = -1,
                l5 = arr5.length - 1;

            while (i5 < l5) {
              $rule = arr5[i5 += 1];

              if ($shouldUseRule($rule)) {
                var $code = $rule.code(it, $rule.keyword, $rulesGroup.type);

                if ($code) {
                  out += ' ' + $code + ' ';

                  if ($breakOnError) {
                    $closingBraces1 += '}';
                  }
                }
              }
            }
          }

          if ($breakOnError) {
            out += ' ' + $closingBraces1 + ' ';
            $closingBraces1 = '';
          }

          if ($rulesGroup.type) {
            out += ' } ';

            if ($typeSchema && $typeSchema === $rulesGroup.type && !$coerceToTypes) {
              out += ' else { ';
              var $schemaPath = it.schemaPath + '.type',
                  $errSchemaPath = it.errSchemaPath + '/type';
              var $$outStack = $$outStack || [];
              $$outStack.push(out);
              out = '';
              /* istanbul ignore else */

              if (it.createErrors !== false) {
                out += ' { keyword: \'' + ($errorKeyword || 'type') + '\' , dataPath: (dataPath || \'\') + ' + it.errorPath + ' , schemaPath: ' + it.util.toQuotedString($errSchemaPath) + ' , params: { type: \'';

                if ($typeIsArray) {
                  out += '' + $typeSchema.join(",");
                } else {
                  out += '' + $typeSchema;
                }

                out += '\' } ';

                if (it.opts.messages !== false) {
                  out += ' , message: \'should be ';

                  if ($typeIsArray) {
                    out += '' + $typeSchema.join(",");
                  } else {
                    out += '' + $typeSchema;
                  }

                  out += '\' ';
                }

                if (it.opts.verbose) {
                  out += ' , schema: validate.schema' + $schemaPath + ' , parentSchema: validate.schema' + it.schemaPath + ' , data: ' + $data + ' ';
                }

                out += ' } ';
              } else {
                out += ' {} ';
              }

              var __err = out;
              out = $$outStack.pop();

              if (!it.compositeRule && $breakOnError) {
                /* istanbul ignore if */
                if (it.async) {
                  out += ' throw new ValidationError([' + __err + ']); ';
                } else {
                  out += ' validate.errors = [' + __err + ']; return false; ';
                }
              } else {
                out += ' var err = ' + __err + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
              }

              out += ' } ';
            }
          }

          if ($breakOnError) {
            out += ' if (errors === ';

            if ($top) {
              out += '0';
            } else {
              out += 'errs_' + $lvl;
            }

            out += ') { ';
            $closingBraces2 += '}';
          }
        }
      }
    }
  }

  if ($breakOnError) {
    out += ' ' + $closingBraces2 + ' ';
  }

  if ($top) {
    if ($async) {
      out += ' if (errors === 0) return data;           ';
      out += ' else throw new ValidationError(vErrors); ';
    } else {
      out += ' validate.errors = vErrors; ';
      out += ' return errors === 0;       ';
    }

    out += ' }; return validate;';
  } else {
    out += ' var ' + $valid + ' = errors === errs_' + $lvl + ';';
  }

  out = it.util.cleanUpCode(out);

  if ($top) {
    out = it.util.finalCleanUpCode(out, $async);
  }

  function $shouldUseGroup($rulesGroup) {
    var rules = $rulesGroup.rules;

    for (var i = 0; i < rules.length; i++) {
      if ($shouldUseRule(rules[i])) return true;
    }
  }

  function $shouldUseRule($rule) {
    return it.schema[$rule.keyword] !== undefined || $rule.implements && $ruleImplementsSomeKeyword($rule);
  }

  function $ruleImplementsSomeKeyword($rule) {
    var impl = $rule.implements;

    for (var i = 0; i < impl.length; i++) {
      if (it.schema[impl[i]] !== undefined) return true;
    }
  }

  return out;
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function generate__limit(it, $keyword, $ruleType) {
  var out = ' ';
  var $lvl = it.level;
  var $dataLvl = it.dataLevel;
  var $schema = it.schema[$keyword];
  var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
  var $breakOnError = !it.opts.allErrors;
  var $errorKeyword;
  var $data = 'data' + ($dataLvl || '');
  var $isData = it.opts.$data && $schema && $schema.$data,
      $schemaValue;

  if ($isData) {
    out += ' var schema' + $lvl + ' = ' + it.util.getData($schema.$data, $dataLvl, it.dataPathArr) + '; ';
    $schemaValue = 'schema' + $lvl;
  } else {
    $schemaValue = $schema;
  }

  var $isMax = $keyword == 'maximum',
      $exclusiveKeyword = $isMax ? 'exclusiveMaximum' : 'exclusiveMinimum',
      $schemaExcl = it.schema[$exclusiveKeyword],
      $isDataExcl = it.opts.$data && $schemaExcl && $schemaExcl.$data,
      $op = $isMax ? '<' : '>',
      $notOp = $isMax ? '>' : '<',
      $errorKeyword = undefined;

  if ($isDataExcl) {
    var $schemaValueExcl = it.util.getData($schemaExcl.$data, $dataLvl, it.dataPathArr),
        $exclusive = 'exclusive' + $lvl,
        $exclType = 'exclType' + $lvl,
        $exclIsNumber = 'exclIsNumber' + $lvl,
        $opExpr = 'op' + $lvl,
        $opStr = '\' + ' + $opExpr + ' + \'';
    out += ' var schemaExcl' + $lvl + ' = ' + $schemaValueExcl + '; ';
    $schemaValueExcl = 'schemaExcl' + $lvl;
    out += ' var ' + $exclusive + '; var ' + $exclType + ' = typeof ' + $schemaValueExcl + '; if (' + $exclType + ' != \'boolean\' && ' + $exclType + ' != \'undefined\' && ' + $exclType + ' != \'number\') { ';
    var $errorKeyword = $exclusiveKeyword;
    var $$outStack = $$outStack || [];
    $$outStack.push(out);
    out = '';
    /* istanbul ignore else */

    if (it.createErrors !== false) {
      out += ' { keyword: \'' + ($errorKeyword || '_exclusiveLimit') + '\' , dataPath: (dataPath || \'\') + ' + it.errorPath + ' , schemaPath: ' + it.util.toQuotedString($errSchemaPath) + ' , params: {} ';

      if (it.opts.messages !== false) {
        out += ' , message: \'' + $exclusiveKeyword + ' should be boolean\' ';
      }

      if (it.opts.verbose) {
        out += ' , schema: validate.schema' + $schemaPath + ' , parentSchema: validate.schema' + it.schemaPath + ' , data: ' + $data + ' ';
      }

      out += ' } ';
    } else {
      out += ' {} ';
    }

    var __err = out;
    out = $$outStack.pop();

    if (!it.compositeRule && $breakOnError) {
      /* istanbul ignore if */
      if (it.async) {
        out += ' throw new ValidationError([' + __err + ']); ';
      } else {
        out += ' validate.errors = [' + __err + ']; return false; ';
      }
    } else {
      out += ' var err = ' + __err + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
    }

    out += ' } else if ( ';

    if ($isData) {
      out += ' (' + $schemaValue + ' !== undefined && typeof ' + $schemaValue + ' != \'number\') || ';
    }

    out += ' ' + $exclType + ' == \'number\' ? ( (' + $exclusive + ' = ' + $schemaValue + ' === undefined || ' + $schemaValueExcl + ' ' + $op + '= ' + $schemaValue + ') ? ' + $data + ' ' + $notOp + '= ' + $schemaValueExcl + ' : ' + $data + ' ' + $notOp + ' ' + $schemaValue + ' ) : ( (' + $exclusive + ' = ' + $schemaValueExcl + ' === true) ? ' + $data + ' ' + $notOp + '= ' + $schemaValue + ' : ' + $data + ' ' + $notOp + ' ' + $schemaValue + ' ) || ' + $data + ' !== ' + $data + ') { var op' + $lvl + ' = ' + $exclusive + ' ? \'' + $op + '\' : \'' + $op + '=\'; ';

    if ($schema === undefined) {
      $errorKeyword = $exclusiveKeyword;
      $errSchemaPath = it.errSchemaPath + '/' + $exclusiveKeyword;
      $schemaValue = $schemaValueExcl;
      $isData = $isDataExcl;
    }
  } else {
    var $exclIsNumber = typeof $schemaExcl == 'number',
        $opStr = $op;

    if ($exclIsNumber && $isData) {
      var $opExpr = '\'' + $opStr + '\'';
      out += ' if ( ';

      if ($isData) {
        out += ' (' + $schemaValue + ' !== undefined && typeof ' + $schemaValue + ' != \'number\') || ';
      }

      out += ' ( ' + $schemaValue + ' === undefined || ' + $schemaExcl + ' ' + $op + '= ' + $schemaValue + ' ? ' + $data + ' ' + $notOp + '= ' + $schemaExcl + ' : ' + $data + ' ' + $notOp + ' ' + $schemaValue + ' ) || ' + $data + ' !== ' + $data + ') { ';
    } else {
      if ($exclIsNumber && $schema === undefined) {
        $exclusive = true;
        $errorKeyword = $exclusiveKeyword;
        $errSchemaPath = it.errSchemaPath + '/' + $exclusiveKeyword;
        $schemaValue = $schemaExcl;
        $notOp += '=';
      } else {
        if ($exclIsNumber) $schemaValue = Math[$isMax ? 'min' : 'max']($schemaExcl, $schema);

        if ($schemaExcl === ($exclIsNumber ? $schemaValue : true)) {
          $exclusive = true;
          $errorKeyword = $exclusiveKeyword;
          $errSchemaPath = it.errSchemaPath + '/' + $exclusiveKeyword;
          $notOp += '=';
        } else {
          $exclusive = false;
          $opStr += '=';
        }
      }

      var $opExpr = '\'' + $opStr + '\'';
      out += ' if ( ';

      if ($isData) {
        out += ' (' + $schemaValue + ' !== undefined && typeof ' + $schemaValue + ' != \'number\') || ';
      }

      out += ' ' + $data + ' ' + $notOp + ' ' + $schemaValue + ' || ' + $data + ' !== ' + $data + ') { ';
    }
  }

  $errorKeyword = $errorKeyword || $keyword;
  var $$outStack = $$outStack || [];
  $$outStack.push(out);
  out = '';
  /* istanbul ignore else */

  if (it.createErrors !== false) {
    out += ' { keyword: \'' + ($errorKeyword || '_limit') + '\' , dataPath: (dataPath || \'\') + ' + it.errorPath + ' , schemaPath: ' + it.util.toQuotedString($errSchemaPath) + ' , params: { comparison: ' + $opExpr + ', limit: ' + $schemaValue + ', exclusive: ' + $exclusive + ' } ';

    if (it.opts.messages !== false) {
      out += ' , message: \'should be ' + $opStr + ' ';

      if ($isData) {
        out += '\' + ' + $schemaValue;
      } else {
        out += '' + $schemaValue + '\'';
      }
    }

    if (it.opts.verbose) {
      out += ' , schema:  ';

      if ($isData) {
        out += 'validate.schema' + $schemaPath;
      } else {
        out += '' + $schema;
      }

      out += '         , parentSchema: validate.schema' + it.schemaPath + ' , data: ' + $data + ' ';
    }

    out += ' } ';
  } else {
    out += ' {} ';
  }

  var __err = out;
  out = $$outStack.pop();

  if (!it.compositeRule && $breakOnError) {
    /* istanbul ignore if */
    if (it.async) {
      out += ' throw new ValidationError([' + __err + ']); ';
    } else {
      out += ' validate.errors = [' + __err + ']; return false; ';
    }
  } else {
    out += ' var err = ' + __err + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
  }

  out += ' } ';

  if ($breakOnError) {
    out += ' else { ';
  }

  return out;
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function generate__limitItems(it, $keyword, $ruleType) {
  var out = ' ';
  var $lvl = it.level;
  var $dataLvl = it.dataLevel;
  var $schema = it.schema[$keyword];
  var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
  var $breakOnError = !it.opts.allErrors;
  var $errorKeyword;
  var $data = 'data' + ($dataLvl || '');
  var $isData = it.opts.$data && $schema && $schema.$data,
      $schemaValue;

  if ($isData) {
    out += ' var schema' + $lvl + ' = ' + it.util.getData($schema.$data, $dataLvl, it.dataPathArr) + '; ';
    $schemaValue = 'schema' + $lvl;
  } else {
    $schemaValue = $schema;
  }

  var $op = $keyword == 'maxItems' ? '>' : '<';
  out += 'if ( ';

  if ($isData) {
    out += ' (' + $schemaValue + ' !== undefined && typeof ' + $schemaValue + ' != \'number\') || ';
  }

  out += ' ' + $data + '.length ' + $op + ' ' + $schemaValue + ') { ';
  var $errorKeyword = $keyword;
  var $$outStack = $$outStack || [];
  $$outStack.push(out);
  out = '';
  /* istanbul ignore else */

  if (it.createErrors !== false) {
    out += ' { keyword: \'' + ($errorKeyword || '_limitItems') + '\' , dataPath: (dataPath || \'\') + ' + it.errorPath + ' , schemaPath: ' + it.util.toQuotedString($errSchemaPath) + ' , params: { limit: ' + $schemaValue + ' } ';

    if (it.opts.messages !== false) {
      out += ' , message: \'should NOT have ';

      if ($keyword == 'maxItems') {
        out += 'more';
      } else {
        out += 'fewer';
      }

      out += ' than ';

      if ($isData) {
        out += '\' + ' + $schemaValue + ' + \'';
      } else {
        out += '' + $schema;
      }

      out += ' items\' ';
    }

    if (it.opts.verbose) {
      out += ' , schema:  ';

      if ($isData) {
        out += 'validate.schema' + $schemaPath;
      } else {
        out += '' + $schema;
      }

      out += '         , parentSchema: validate.schema' + it.schemaPath + ' , data: ' + $data + ' ';
    }

    out += ' } ';
  } else {
    out += ' {} ';
  }

  var __err = out;
  out = $$outStack.pop();

  if (!it.compositeRule && $breakOnError) {
    /* istanbul ignore if */
    if (it.async) {
      out += ' throw new ValidationError([' + __err + ']); ';
    } else {
      out += ' validate.errors = [' + __err + ']; return false; ';
    }
  } else {
    out += ' var err = ' + __err + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
  }

  out += '} ';

  if ($breakOnError) {
    out += ' else { ';
  }

  return out;
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function generate__limitLength(it, $keyword, $ruleType) {
  var out = ' ';
  var $lvl = it.level;
  var $dataLvl = it.dataLevel;
  var $schema = it.schema[$keyword];
  var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
  var $breakOnError = !it.opts.allErrors;
  var $errorKeyword;
  var $data = 'data' + ($dataLvl || '');
  var $isData = it.opts.$data && $schema && $schema.$data,
      $schemaValue;

  if ($isData) {
    out += ' var schema' + $lvl + ' = ' + it.util.getData($schema.$data, $dataLvl, it.dataPathArr) + '; ';
    $schemaValue = 'schema' + $lvl;
  } else {
    $schemaValue = $schema;
  }

  var $op = $keyword == 'maxLength' ? '>' : '<';
  out += 'if ( ';

  if ($isData) {
    out += ' (' + $schemaValue + ' !== undefined && typeof ' + $schemaValue + ' != \'number\') || ';
  }

  if (it.opts.unicode === false) {
    out += ' ' + $data + '.length ';
  } else {
    out += ' ucs2length(' + $data + ') ';
  }

  out += ' ' + $op + ' ' + $schemaValue + ') { ';
  var $errorKeyword = $keyword;
  var $$outStack = $$outStack || [];
  $$outStack.push(out);
  out = '';
  /* istanbul ignore else */

  if (it.createErrors !== false) {
    out += ' { keyword: \'' + ($errorKeyword || '_limitLength') + '\' , dataPath: (dataPath || \'\') + ' + it.errorPath + ' , schemaPath: ' + it.util.toQuotedString($errSchemaPath) + ' , params: { limit: ' + $schemaValue + ' } ';

    if (it.opts.messages !== false) {
      out += ' , message: \'should NOT be ';

      if ($keyword == 'maxLength') {
        out += 'longer';
      } else {
        out += 'shorter';
      }

      out += ' than ';

      if ($isData) {
        out += '\' + ' + $schemaValue + ' + \'';
      } else {
        out += '' + $schema;
      }

      out += ' characters\' ';
    }

    if (it.opts.verbose) {
      out += ' , schema:  ';

      if ($isData) {
        out += 'validate.schema' + $schemaPath;
      } else {
        out += '' + $schema;
      }

      out += '         , parentSchema: validate.schema' + it.schemaPath + ' , data: ' + $data + ' ';
    }

    out += ' } ';
  } else {
    out += ' {} ';
  }

  var __err = out;
  out = $$outStack.pop();

  if (!it.compositeRule && $breakOnError) {
    /* istanbul ignore if */
    if (it.async) {
      out += ' throw new ValidationError([' + __err + ']); ';
    } else {
      out += ' validate.errors = [' + __err + ']; return false; ';
    }
  } else {
    out += ' var err = ' + __err + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
  }

  out += '} ';

  if ($breakOnError) {
    out += ' else { ';
  }

  return out;
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function generate__limitProperties(it, $keyword, $ruleType) {
  var out = ' ';
  var $lvl = it.level;
  var $dataLvl = it.dataLevel;
  var $schema = it.schema[$keyword];
  var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
  var $breakOnError = !it.opts.allErrors;
  var $errorKeyword;
  var $data = 'data' + ($dataLvl || '');
  var $isData = it.opts.$data && $schema && $schema.$data,
      $schemaValue;

  if ($isData) {
    out += ' var schema' + $lvl + ' = ' + it.util.getData($schema.$data, $dataLvl, it.dataPathArr) + '; ';
    $schemaValue = 'schema' + $lvl;
  } else {
    $schemaValue = $schema;
  }

  var $op = $keyword == 'maxProperties' ? '>' : '<';
  out += 'if ( ';

  if ($isData) {
    out += ' (' + $schemaValue + ' !== undefined && typeof ' + $schemaValue + ' != \'number\') || ';
  }

  out += ' Object.keys(' + $data + ').length ' + $op + ' ' + $schemaValue + ') { ';
  var $errorKeyword = $keyword;
  var $$outStack = $$outStack || [];
  $$outStack.push(out);
  out = '';
  /* istanbul ignore else */

  if (it.createErrors !== false) {
    out += ' { keyword: \'' + ($errorKeyword || '_limitProperties') + '\' , dataPath: (dataPath || \'\') + ' + it.errorPath + ' , schemaPath: ' + it.util.toQuotedString($errSchemaPath) + ' , params: { limit: ' + $schemaValue + ' } ';

    if (it.opts.messages !== false) {
      out += ' , message: \'should NOT have ';

      if ($keyword == 'maxProperties') {
        out += 'more';
      } else {
        out += 'fewer';
      }

      out += ' than ';

      if ($isData) {
        out += '\' + ' + $schemaValue + ' + \'';
      } else {
        out += '' + $schema;
      }

      out += ' properties\' ';
    }

    if (it.opts.verbose) {
      out += ' , schema:  ';

      if ($isData) {
        out += 'validate.schema' + $schemaPath;
      } else {
        out += '' + $schema;
      }

      out += '         , parentSchema: validate.schema' + it.schemaPath + ' , data: ' + $data + ' ';
    }

    out += ' } ';
  } else {
    out += ' {} ';
  }

  var __err = out;
  out = $$outStack.pop();

  if (!it.compositeRule && $breakOnError) {
    /* istanbul ignore if */
    if (it.async) {
      out += ' throw new ValidationError([' + __err + ']); ';
    } else {
      out += ' validate.errors = [' + __err + ']; return false; ';
    }
  } else {
    out += ' var err = ' + __err + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
  }

  out += '} ';

  if ($breakOnError) {
    out += ' else { ';
  }

  return out;
};

/***/ }),
/* 27 */
/***/ (function(module) {

module.exports = {"$schema":"http://json-schema.org/draft-07/schema#","$id":"http://json-schema.org/draft-07/schema#","title":"Core schema meta-schema","definitions":{"schemaArray":{"type":"array","minItems":1,"items":{"$ref":"#"}},"nonNegativeInteger":{"type":"integer","minimum":0},"nonNegativeIntegerDefault0":{"allOf":[{"$ref":"#/definitions/nonNegativeInteger"},{"default":0}]},"simpleTypes":{"enum":["array","boolean","integer","null","number","object","string"]},"stringArray":{"type":"array","items":{"type":"string"},"uniqueItems":true,"default":[]}},"type":["object","boolean"],"properties":{"$id":{"type":"string","format":"uri-reference"},"$schema":{"type":"string","format":"uri"},"$ref":{"type":"string","format":"uri-reference"},"$comment":{"type":"string"},"title":{"type":"string"},"description":{"type":"string"},"default":true,"readOnly":{"type":"boolean","default":false},"examples":{"type":"array","items":true},"multipleOf":{"type":"number","exclusiveMinimum":0},"maximum":{"type":"number"},"exclusiveMaximum":{"type":"number"},"minimum":{"type":"number"},"exclusiveMinimum":{"type":"number"},"maxLength":{"$ref":"#/definitions/nonNegativeInteger"},"minLength":{"$ref":"#/definitions/nonNegativeIntegerDefault0"},"pattern":{"type":"string","format":"regex"},"additionalItems":{"$ref":"#"},"items":{"anyOf":[{"$ref":"#"},{"$ref":"#/definitions/schemaArray"}],"default":true},"maxItems":{"$ref":"#/definitions/nonNegativeInteger"},"minItems":{"$ref":"#/definitions/nonNegativeIntegerDefault0"},"uniqueItems":{"type":"boolean","default":false},"contains":{"$ref":"#"},"maxProperties":{"$ref":"#/definitions/nonNegativeInteger"},"minProperties":{"$ref":"#/definitions/nonNegativeIntegerDefault0"},"required":{"$ref":"#/definitions/stringArray"},"additionalProperties":{"$ref":"#"},"definitions":{"type":"object","additionalProperties":{"$ref":"#"},"default":{}},"properties":{"type":"object","additionalProperties":{"$ref":"#"},"default":{}},"patternProperties":{"type":"object","additionalProperties":{"$ref":"#"},"propertyNames":{"format":"regex"},"default":{}},"dependencies":{"type":"object","additionalProperties":{"anyOf":[{"$ref":"#"},{"$ref":"#/definitions/stringArray"}]}},"propertyNames":{"$ref":"#"},"const":true,"enum":{"type":"array","items":true,"minItems":1,"uniqueItems":true},"type":{"anyOf":[{"$ref":"#/definitions/simpleTypes"},{"type":"array","items":{"$ref":"#/definitions/simpleTypes"},"minItems":1,"uniqueItems":true}]},"format":{"type":"string"},"contentMediaType":{"type":"string"},"contentEncoding":{"type":"string"},"if":{"$ref":"#"},"then":{"$ref":"#"},"else":{"$ref":"#"},"allOf":{"$ref":"#/definitions/schemaArray"},"anyOf":{"$ref":"#/definitions/schemaArray"},"oneOf":{"$ref":"#/definitions/schemaArray"},"not":{"$ref":"#"}},"default":true};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var TIME = /^(\d\d):(\d\d):(\d\d)(\.\d+)?(z|[+-]\d\d:\d\d)?$/i;
var DATE_TIME_SEPARATOR = /t|\s/i;
var COMPARE_FORMATS = {
  date: compareDate,
  time: compareTime,
  'date-time': compareDateTime
};
var $dataMetaSchema = {
  type: 'object',
  required: ['$data'],
  properties: {
    $data: {
      type: 'string',
      anyOf: [{
        format: 'relative-json-pointer'
      }, {
        format: 'json-pointer'
      }]
    }
  },
  additionalProperties: false
};

module.exports = function (minMax) {
  var keyword = 'format' + minMax;
  return function defFunc(ajv) {
    defFunc.definition = {
      type: 'string',
      inline: __webpack_require__(105),
      statements: true,
      errors: 'full',
      dependencies: ['format'],
      metaSchema: {
        anyOf: [{
          type: 'string'
        }, $dataMetaSchema]
      }
    };
    ajv.addKeyword(keyword, defFunc.definition);
    ajv.addKeyword('formatExclusive' + minMax, {
      dependencies: ['format' + minMax],
      metaSchema: {
        anyOf: [{
          type: 'boolean'
        }, $dataMetaSchema]
      }
    });
    extendFormats(ajv);
    return ajv;
  };
};

function extendFormats(ajv) {
  var formats = ajv._formats;

  for (var name in COMPARE_FORMATS) {
    var format = formats[name]; // the last condition is needed if it's RegExp from another window

    if (babelHelpers.typeof(format) != 'object' || format instanceof RegExp || !format.validate) format = formats[name] = {
      validate: format
    };
    if (!format.compare) format.compare = COMPARE_FORMATS[name];
  }
}

function compareDate(d1, d2) {
  if (!(d1 && d2)) return;
  if (d1 > d2) return 1;
  if (d1 < d2) return -1;
  if (d1 === d2) return 0;
}

function compareTime(t1, t2) {
  if (!(t1 && t2)) return;
  t1 = t1.match(TIME);
  t2 = t2.match(TIME);
  if (!(t1 && t2)) return;
  t1 = t1[1] + t1[2] + t1[3] + (t1[4] || '');
  t2 = t2[1] + t2[2] + t2[3] + (t2[4] || '');
  if (t1 > t2) return 1;
  if (t1 < t2) return -1;
  if (t1 === t2) return 0;
}

function compareDateTime(dt1, dt2) {
  if (!(dt1 && dt2)) return;
  dt1 = dt1.split(DATE_TIME_SEPARATOR);
  dt2 = dt2.split(DATE_TIME_SEPARATOR);
  var res = compareDate(dt1[0], dt2[0]);
  if (res === undefined) return;
  return res || compareTime(dt1[1], dt2[1]);
}

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(30),
    ConcatSource = _require.ConcatSource;

var validateOptions = __webpack_require__(46);

var schema = __webpack_require__(114);

var BabelExternalHelpersWebpackPlugin =
/*#__PURE__*/
function () {
  function BabelExternalHelpersWebpackPlugin(options) {
    babelHelpers.classCallCheck(this, BabelExternalHelpersWebpackPlugin);
    this.options = options || {};
    validateOptions(schema, this.options, 'BabelExternalHelpersWebpackPlugin');
  }

  babelHelpers.createClass(BabelExternalHelpersWebpackPlugin, [{
    key: "apply",
    value: function apply(compiler) {
      var _this$options = this.options,
          _this$options$outputT = _this$options.outputType,
          outputType = _this$options$outputT === void 0 ? 'global' : _this$options$outputT,
          _this$options$whiteli = _this$options.whitelist,
          whitelist = _this$options$whiteli === void 0 ? 'auto' : _this$options$whiteli,
          babel = _this$options.babel;

      if (typeof babel === 'string') {
        babel = __webpack_require__(115)(babel);
      }

      compiler.hooks.compilation.tap("BabelExternalHelpersWebpackPlugin", function (compilation) {
        compilation.hooks.optimizeChunkAssets.tap("BabelExternalHelpersWebpackPlugin", function (chunks) {
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = chunks[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var chunk = _step.value;

              if (!chunk.canBeInitial()) {
                continue;
              }

              var _iteratorNormalCompletion2 = true;
              var _didIteratorError2 = false;
              var _iteratorError2 = undefined;

              try {
                for (var _iterator2 = chunk.files[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                  var file = _step2.value;

                  if (whitelist === 'auto') {
                    (function () {
                      var code = compilation.assets[file].source();
                      var helpers = code.match(/babelHelpers\.(\w+)/g);
                      whitelist = helpers && helpers.length ? helpers.filter(function (m, i) {
                        return helpers.indexOf(m) === i;
                      }).map(function (m) {
                        return m.split('.')[1];
                      }) : null;
                    })();
                  }

                  compilation.assets[file] = new ConcatSource(babel.buildExternalHelpers(whitelist, outputType), "\n\n", compilation.assets[file]);
                }
              } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                    _iterator2.return();
                  }
                } finally {
                  if (_didIteratorError2) {
                    throw _iteratorError2;
                  }
                }
              }
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }
        });
      });
    }
  }]);
  return BabelExternalHelpersWebpackPlugin;
}();

module.exports = BabelExternalHelpersWebpackPlugin;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
exports.Source = __webpack_require__(1);
exports.RawSource = __webpack_require__(37);
exports.OriginalSource = __webpack_require__(39);
exports.SourceMapSource = __webpack_require__(40);
exports.LineToLineMappedSource = __webpack_require__(41);
exports.CachedSource = __webpack_require__(42);
exports.ConcatSource = __webpack_require__(43);
exports.ReplaceSource = __webpack_require__(44);
exports.PrefixSource = __webpack_require__(45);

/***/ }),
/* 31 */
/***/ (function(module, exports) {

/* -*- Mode: js; js-indent-level: 2; -*- */

/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */
var intToCharMap = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.split('');
/**
 * Encode an integer in the range of 0 to 63 to a single base 64 digit.
 */

exports.encode = function (number) {
  if (0 <= number && number < intToCharMap.length) {
    return intToCharMap[number];
  }

  throw new TypeError("Must be between 0 and 63: " + number);
};
/**
 * Decode a single base 64 character code digit to an integer. Returns -1 on
 * failure.
 */


exports.decode = function (charCode) {
  var bigA = 65; // 'A'

  var bigZ = 90; // 'Z'

  var littleA = 97; // 'a'

  var littleZ = 122; // 'z'

  var zero = 48; // '0'

  var nine = 57; // '9'

  var plus = 43; // '+'

  var slash = 47; // '/'

  var littleOffset = 26;
  var numberOffset = 52; // 0 - 25: ABCDEFGHIJKLMNOPQRSTUVWXYZ

  if (bigA <= charCode && charCode <= bigZ) {
    return charCode - bigA;
  } // 26 - 51: abcdefghijklmnopqrstuvwxyz


  if (littleA <= charCode && charCode <= littleZ) {
    return charCode - littleA + littleOffset;
  } // 52 - 61: 0123456789


  if (zero <= charCode && charCode <= nine) {
    return charCode - zero + numberOffset;
  } // 62: +


  if (charCode == plus) {
    return 62;
  } // 63: /


  if (charCode == slash) {
    return 63;
  } // Invalid base64 digit.


  return -1;
};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

/* -*- Mode: js; js-indent-level: 2; -*- */

/*
 * Copyright 2014 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */
var util = __webpack_require__(6);
/**
 * Determine whether mappingB is after mappingA with respect to generated
 * position.
 */


function generatedPositionAfter(mappingA, mappingB) {
  // Optimized for most common case
  var lineA = mappingA.generatedLine;
  var lineB = mappingB.generatedLine;
  var columnA = mappingA.generatedColumn;
  var columnB = mappingB.generatedColumn;
  return lineB > lineA || lineB == lineA && columnB >= columnA || util.compareByGeneratedPositionsInflated(mappingA, mappingB) <= 0;
}
/**
 * A data structure to provide a sorted view of accumulated mappings in a
 * performance conscious manner. It trades a neglibable overhead in general
 * case for a large speedup in case of mappings being added in order.
 */


function MappingList() {
  this._array = [];
  this._sorted = true; // Serves as infimum

  this._last = {
    generatedLine: -1,
    generatedColumn: 0
  };
}
/**
 * Iterate through internal items. This method takes the same arguments that
 * `Array.prototype.forEach` takes.
 *
 * NOTE: The order of the mappings is NOT guaranteed.
 */


MappingList.prototype.unsortedForEach = function MappingList_forEach(aCallback, aThisArg) {
  this._array.forEach(aCallback, aThisArg);
};
/**
 * Add the given source mapping.
 *
 * @param Object aMapping
 */


MappingList.prototype.add = function MappingList_add(aMapping) {
  if (generatedPositionAfter(this._last, aMapping)) {
    this._last = aMapping;

    this._array.push(aMapping);
  } else {
    this._sorted = false;

    this._array.push(aMapping);
  }
};
/**
 * Returns the flat, sorted array of mappings. The mappings are sorted by
 * generated position.
 *
 * WARNING: This method returns internal data without copying, for
 * performance. The return value must NOT be mutated, and should be treated as
 * an immutable borrow. If you want to take ownership, you must make your own
 * copy.
 */


MappingList.prototype.toArray = function MappingList_toArray() {
  if (!this._sorted) {
    this._array.sort(util.compareByGeneratedPositionsInflated);

    this._sorted = true;
  }

  return this._array;
};

exports.MappingList = MappingList;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

/* -*- Mode: js; js-indent-level: 2; -*- */

/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */
var util = __webpack_require__(6);

var binarySearch = __webpack_require__(34);

var ArraySet = __webpack_require__(16).ArraySet;

var base64VLQ = __webpack_require__(15);

var quickSort = __webpack_require__(35).quickSort;

function SourceMapConsumer(aSourceMap, aSourceMapURL) {
  var sourceMap = aSourceMap;

  if (typeof aSourceMap === 'string') {
    sourceMap = util.parseSourceMapInput(aSourceMap);
  }

  return sourceMap.sections != null ? new IndexedSourceMapConsumer(sourceMap, aSourceMapURL) : new BasicSourceMapConsumer(sourceMap, aSourceMapURL);
}

SourceMapConsumer.fromSourceMap = function (aSourceMap, aSourceMapURL) {
  return BasicSourceMapConsumer.fromSourceMap(aSourceMap, aSourceMapURL);
};
/**
 * The version of the source mapping spec that we are consuming.
 */


SourceMapConsumer.prototype._version = 3; // `__generatedMappings` and `__originalMappings` are arrays that hold the
// parsed mapping coordinates from the source map's "mappings" attribute. They
// are lazily instantiated, accessed via the `_generatedMappings` and
// `_originalMappings` getters respectively, and we only parse the mappings
// and create these arrays once queried for a source location. We jump through
// these hoops because there can be many thousands of mappings, and parsing
// them is expensive, so we only want to do it if we must.
//
// Each object in the arrays is of the form:
//
//     {
//       generatedLine: The line number in the generated code,
//       generatedColumn: The column number in the generated code,
//       source: The path to the original source file that generated this
//               chunk of code,
//       originalLine: The line number in the original source that
//                     corresponds to this chunk of generated code,
//       originalColumn: The column number in the original source that
//                       corresponds to this chunk of generated code,
//       name: The name of the original symbol which generated this chunk of
//             code.
//     }
//
// All properties except for `generatedLine` and `generatedColumn` can be
// `null`.
//
// `_generatedMappings` is ordered by the generated positions.
//
// `_originalMappings` is ordered by the original positions.

SourceMapConsumer.prototype.__generatedMappings = null;
Object.defineProperty(SourceMapConsumer.prototype, '_generatedMappings', {
  configurable: true,
  enumerable: true,
  get: function get() {
    if (!this.__generatedMappings) {
      this._parseMappings(this._mappings, this.sourceRoot);
    }

    return this.__generatedMappings;
  }
});
SourceMapConsumer.prototype.__originalMappings = null;
Object.defineProperty(SourceMapConsumer.prototype, '_originalMappings', {
  configurable: true,
  enumerable: true,
  get: function get() {
    if (!this.__originalMappings) {
      this._parseMappings(this._mappings, this.sourceRoot);
    }

    return this.__originalMappings;
  }
});

SourceMapConsumer.prototype._charIsMappingSeparator = function SourceMapConsumer_charIsMappingSeparator(aStr, index) {
  var c = aStr.charAt(index);
  return c === ";" || c === ",";
};
/**
 * Parse the mappings in a string in to a data structure which we can easily
 * query (the ordered arrays in the `this.__generatedMappings` and
 * `this.__originalMappings` properties).
 */


SourceMapConsumer.prototype._parseMappings = function SourceMapConsumer_parseMappings(aStr, aSourceRoot) {
  throw new Error("Subclasses must implement _parseMappings");
};

SourceMapConsumer.GENERATED_ORDER = 1;
SourceMapConsumer.ORIGINAL_ORDER = 2;
SourceMapConsumer.GREATEST_LOWER_BOUND = 1;
SourceMapConsumer.LEAST_UPPER_BOUND = 2;
/**
 * Iterate over each mapping between an original source/line/column and a
 * generated line/column in this source map.
 *
 * @param Function aCallback
 *        The function that is called with each mapping.
 * @param Object aContext
 *        Optional. If specified, this object will be the value of `this` every
 *        time that `aCallback` is called.
 * @param aOrder
 *        Either `SourceMapConsumer.GENERATED_ORDER` or
 *        `SourceMapConsumer.ORIGINAL_ORDER`. Specifies whether you want to
 *        iterate over the mappings sorted by the generated file's line/column
 *        order or the original's source/line/column order, respectively. Defaults to
 *        `SourceMapConsumer.GENERATED_ORDER`.
 */

SourceMapConsumer.prototype.eachMapping = function SourceMapConsumer_eachMapping(aCallback, aContext, aOrder) {
  var context = aContext || null;
  var order = aOrder || SourceMapConsumer.GENERATED_ORDER;
  var mappings;

  switch (order) {
    case SourceMapConsumer.GENERATED_ORDER:
      mappings = this._generatedMappings;
      break;

    case SourceMapConsumer.ORIGINAL_ORDER:
      mappings = this._originalMappings;
      break;

    default:
      throw new Error("Unknown order of iteration.");
  }

  var sourceRoot = this.sourceRoot;
  mappings.map(function (mapping) {
    var source = mapping.source === null ? null : this._sources.at(mapping.source);
    source = util.computeSourceURL(sourceRoot, source, this._sourceMapURL);
    return {
      source: source,
      generatedLine: mapping.generatedLine,
      generatedColumn: mapping.generatedColumn,
      originalLine: mapping.originalLine,
      originalColumn: mapping.originalColumn,
      name: mapping.name === null ? null : this._names.at(mapping.name)
    };
  }, this).forEach(aCallback, context);
};
/**
 * Returns all generated line and column information for the original source,
 * line, and column provided. If no column is provided, returns all mappings
 * corresponding to a either the line we are searching for or the next
 * closest line that has any mappings. Otherwise, returns all mappings
 * corresponding to the given line and either the column we are searching for
 * or the next closest column that has any offsets.
 *
 * The only argument is an object with the following properties:
 *
 *   - source: The filename of the original source.
 *   - line: The line number in the original source.  The line number is 1-based.
 *   - column: Optional. the column number in the original source.
 *    The column number is 0-based.
 *
 * and an array of objects is returned, each with the following properties:
 *
 *   - line: The line number in the generated source, or null.  The
 *    line number is 1-based.
 *   - column: The column number in the generated source, or null.
 *    The column number is 0-based.
 */


SourceMapConsumer.prototype.allGeneratedPositionsFor = function SourceMapConsumer_allGeneratedPositionsFor(aArgs) {
  var line = util.getArg(aArgs, 'line'); // When there is no exact match, BasicSourceMapConsumer.prototype._findMapping
  // returns the index of the closest mapping less than the needle. By
  // setting needle.originalColumn to 0, we thus find the last mapping for
  // the given line, provided such a mapping exists.

  var needle = {
    source: util.getArg(aArgs, 'source'),
    originalLine: line,
    originalColumn: util.getArg(aArgs, 'column', 0)
  };
  needle.source = this._findSourceIndex(needle.source);

  if (needle.source < 0) {
    return [];
  }

  var mappings = [];

  var index = this._findMapping(needle, this._originalMappings, "originalLine", "originalColumn", util.compareByOriginalPositions, binarySearch.LEAST_UPPER_BOUND);

  if (index >= 0) {
    var mapping = this._originalMappings[index];

    if (aArgs.column === undefined) {
      var originalLine = mapping.originalLine; // Iterate until either we run out of mappings, or we run into
      // a mapping for a different line than the one we found. Since
      // mappings are sorted, this is guaranteed to find all mappings for
      // the line we found.

      while (mapping && mapping.originalLine === originalLine) {
        mappings.push({
          line: util.getArg(mapping, 'generatedLine', null),
          column: util.getArg(mapping, 'generatedColumn', null),
          lastColumn: util.getArg(mapping, 'lastGeneratedColumn', null)
        });
        mapping = this._originalMappings[++index];
      }
    } else {
      var originalColumn = mapping.originalColumn; // Iterate until either we run out of mappings, or we run into
      // a mapping for a different line than the one we were searching for.
      // Since mappings are sorted, this is guaranteed to find all mappings for
      // the line we are searching for.

      while (mapping && mapping.originalLine === line && mapping.originalColumn == originalColumn) {
        mappings.push({
          line: util.getArg(mapping, 'generatedLine', null),
          column: util.getArg(mapping, 'generatedColumn', null),
          lastColumn: util.getArg(mapping, 'lastGeneratedColumn', null)
        });
        mapping = this._originalMappings[++index];
      }
    }
  }

  return mappings;
};

exports.SourceMapConsumer = SourceMapConsumer;
/**
 * A BasicSourceMapConsumer instance represents a parsed source map which we can
 * query for information about the original file positions by giving it a file
 * position in the generated source.
 *
 * The first parameter is the raw source map (either as a JSON string, or
 * already parsed to an object). According to the spec, source maps have the
 * following attributes:
 *
 *   - version: Which version of the source map spec this map is following.
 *   - sources: An array of URLs to the original source files.
 *   - names: An array of identifiers which can be referrenced by individual mappings.
 *   - sourceRoot: Optional. The URL root from which all sources are relative.
 *   - sourcesContent: Optional. An array of contents of the original source files.
 *   - mappings: A string of base64 VLQs which contain the actual mappings.
 *   - file: Optional. The generated file this source map is associated with.
 *
 * Here is an example source map, taken from the source map spec[0]:
 *
 *     {
 *       version : 3,
 *       file: "out.js",
 *       sourceRoot : "",
 *       sources: ["foo.js", "bar.js"],
 *       names: ["src", "maps", "are", "fun"],
 *       mappings: "AA,AB;;ABCDE;"
 *     }
 *
 * The second parameter, if given, is a string whose value is the URL
 * at which the source map was found.  This URL is used to compute the
 * sources array.
 *
 * [0]: https://docs.google.com/document/d/1U1RGAehQwRypUTovF1KRlpiOFze0b-_2gc6fAH0KY0k/edit?pli=1#
 */

function BasicSourceMapConsumer(aSourceMap, aSourceMapURL) {
  var sourceMap = aSourceMap;

  if (typeof aSourceMap === 'string') {
    sourceMap = util.parseSourceMapInput(aSourceMap);
  }

  var version = util.getArg(sourceMap, 'version');
  var sources = util.getArg(sourceMap, 'sources'); // Sass 3.3 leaves out the 'names' array, so we deviate from the spec (which
  // requires the array) to play nice here.

  var names = util.getArg(sourceMap, 'names', []);
  var sourceRoot = util.getArg(sourceMap, 'sourceRoot', null);
  var sourcesContent = util.getArg(sourceMap, 'sourcesContent', null);
  var mappings = util.getArg(sourceMap, 'mappings');
  var file = util.getArg(sourceMap, 'file', null); // Once again, Sass deviates from the spec and supplies the version as a
  // string rather than a number, so we use loose equality checking here.

  if (version != this._version) {
    throw new Error('Unsupported version: ' + version);
  }

  if (sourceRoot) {
    sourceRoot = util.normalize(sourceRoot);
  }

  sources = sources.map(String) // Some source maps produce relative source paths like "./foo.js" instead of
  // "foo.js".  Normalize these first so that future comparisons will succeed.
  // See bugzil.la/1090768.
  .map(util.normalize) // Always ensure that absolute sources are internally stored relative to
  // the source root, if the source root is absolute. Not doing this would
  // be particularly problematic when the source root is a prefix of the
  // source (valid, but why??). See github issue #199 and bugzil.la/1188982.
  .map(function (source) {
    return sourceRoot && util.isAbsolute(sourceRoot) && util.isAbsolute(source) ? util.relative(sourceRoot, source) : source;
  }); // Pass `true` below to allow duplicate names and sources. While source maps
  // are intended to be compressed and deduplicated, the TypeScript compiler
  // sometimes generates source maps with duplicates in them. See Github issue
  // #72 and bugzil.la/889492.

  this._names = ArraySet.fromArray(names.map(String), true);
  this._sources = ArraySet.fromArray(sources, true);
  this._absoluteSources = this._sources.toArray().map(function (s) {
    return util.computeSourceURL(sourceRoot, s, aSourceMapURL);
  });
  this.sourceRoot = sourceRoot;
  this.sourcesContent = sourcesContent;
  this._mappings = mappings;
  this._sourceMapURL = aSourceMapURL;
  this.file = file;
}

BasicSourceMapConsumer.prototype = Object.create(SourceMapConsumer.prototype);
BasicSourceMapConsumer.prototype.consumer = SourceMapConsumer;
/**
 * Utility function to find the index of a source.  Returns -1 if not
 * found.
 */

BasicSourceMapConsumer.prototype._findSourceIndex = function (aSource) {
  var relativeSource = aSource;

  if (this.sourceRoot != null) {
    relativeSource = util.relative(this.sourceRoot, relativeSource);
  }

  if (this._sources.has(relativeSource)) {
    return this._sources.indexOf(relativeSource);
  } // Maybe aSource is an absolute URL as returned by |sources|.  In
  // this case we can't simply undo the transform.


  var i;

  for (i = 0; i < this._absoluteSources.length; ++i) {
    if (this._absoluteSources[i] == aSource) {
      return i;
    }
  }

  return -1;
};
/**
 * Create a BasicSourceMapConsumer from a SourceMapGenerator.
 *
 * @param SourceMapGenerator aSourceMap
 *        The source map that will be consumed.
 * @param String aSourceMapURL
 *        The URL at which the source map can be found (optional)
 * @returns BasicSourceMapConsumer
 */


BasicSourceMapConsumer.fromSourceMap = function SourceMapConsumer_fromSourceMap(aSourceMap, aSourceMapURL) {
  var smc = Object.create(BasicSourceMapConsumer.prototype);
  var names = smc._names = ArraySet.fromArray(aSourceMap._names.toArray(), true);
  var sources = smc._sources = ArraySet.fromArray(aSourceMap._sources.toArray(), true);
  smc.sourceRoot = aSourceMap._sourceRoot;
  smc.sourcesContent = aSourceMap._generateSourcesContent(smc._sources.toArray(), smc.sourceRoot);
  smc.file = aSourceMap._file;
  smc._sourceMapURL = aSourceMapURL;
  smc._absoluteSources = smc._sources.toArray().map(function (s) {
    return util.computeSourceURL(smc.sourceRoot, s, aSourceMapURL);
  }); // Because we are modifying the entries (by converting string sources and
  // names to indices into the sources and names ArraySets), we have to make
  // a copy of the entry or else bad things happen. Shared mutable state
  // strikes again! See github issue #191.

  var generatedMappings = aSourceMap._mappings.toArray().slice();

  var destGeneratedMappings = smc.__generatedMappings = [];
  var destOriginalMappings = smc.__originalMappings = [];

  for (var i = 0, length = generatedMappings.length; i < length; i++) {
    var srcMapping = generatedMappings[i];
    var destMapping = new Mapping();
    destMapping.generatedLine = srcMapping.generatedLine;
    destMapping.generatedColumn = srcMapping.generatedColumn;

    if (srcMapping.source) {
      destMapping.source = sources.indexOf(srcMapping.source);
      destMapping.originalLine = srcMapping.originalLine;
      destMapping.originalColumn = srcMapping.originalColumn;

      if (srcMapping.name) {
        destMapping.name = names.indexOf(srcMapping.name);
      }

      destOriginalMappings.push(destMapping);
    }

    destGeneratedMappings.push(destMapping);
  }

  quickSort(smc.__originalMappings, util.compareByOriginalPositions);
  return smc;
};
/**
 * The version of the source mapping spec that we are consuming.
 */


BasicSourceMapConsumer.prototype._version = 3;
/**
 * The list of original sources.
 */

Object.defineProperty(BasicSourceMapConsumer.prototype, 'sources', {
  get: function get() {
    return this._absoluteSources.slice();
  }
});
/**
 * Provide the JIT with a nice shape / hidden class.
 */

function Mapping() {
  this.generatedLine = 0;
  this.generatedColumn = 0;
  this.source = null;
  this.originalLine = null;
  this.originalColumn = null;
  this.name = null;
}
/**
 * Parse the mappings in a string in to a data structure which we can easily
 * query (the ordered arrays in the `this.__generatedMappings` and
 * `this.__originalMappings` properties).
 */


BasicSourceMapConsumer.prototype._parseMappings = function SourceMapConsumer_parseMappings(aStr, aSourceRoot) {
  var generatedLine = 1;
  var previousGeneratedColumn = 0;
  var previousOriginalLine = 0;
  var previousOriginalColumn = 0;
  var previousSource = 0;
  var previousName = 0;
  var length = aStr.length;
  var index = 0;
  var cachedSegments = {};
  var temp = {};
  var originalMappings = [];
  var generatedMappings = [];
  var mapping, str, segment, end, value;

  while (index < length) {
    if (aStr.charAt(index) === ';') {
      generatedLine++;
      index++;
      previousGeneratedColumn = 0;
    } else if (aStr.charAt(index) === ',') {
      index++;
    } else {
      mapping = new Mapping();
      mapping.generatedLine = generatedLine; // Because each offset is encoded relative to the previous one,
      // many segments often have the same encoding. We can exploit this
      // fact by caching the parsed variable length fields of each segment,
      // allowing us to avoid a second parse if we encounter the same
      // segment again.

      for (end = index; end < length; end++) {
        if (this._charIsMappingSeparator(aStr, end)) {
          break;
        }
      }

      str = aStr.slice(index, end);
      segment = cachedSegments[str];

      if (segment) {
        index += str.length;
      } else {
        segment = [];

        while (index < end) {
          base64VLQ.decode(aStr, index, temp);
          value = temp.value;
          index = temp.rest;
          segment.push(value);
        }

        if (segment.length === 2) {
          throw new Error('Found a source, but no line and column');
        }

        if (segment.length === 3) {
          throw new Error('Found a source and line, but no column');
        }

        cachedSegments[str] = segment;
      } // Generated column.


      mapping.generatedColumn = previousGeneratedColumn + segment[0];
      previousGeneratedColumn = mapping.generatedColumn;

      if (segment.length > 1) {
        // Original source.
        mapping.source = previousSource + segment[1];
        previousSource += segment[1]; // Original line.

        mapping.originalLine = previousOriginalLine + segment[2];
        previousOriginalLine = mapping.originalLine; // Lines are stored 0-based

        mapping.originalLine += 1; // Original column.

        mapping.originalColumn = previousOriginalColumn + segment[3];
        previousOriginalColumn = mapping.originalColumn;

        if (segment.length > 4) {
          // Original name.
          mapping.name = previousName + segment[4];
          previousName += segment[4];
        }
      }

      generatedMappings.push(mapping);

      if (typeof mapping.originalLine === 'number') {
        originalMappings.push(mapping);
      }
    }
  }

  quickSort(generatedMappings, util.compareByGeneratedPositionsDeflated);
  this.__generatedMappings = generatedMappings;
  quickSort(originalMappings, util.compareByOriginalPositions);
  this.__originalMappings = originalMappings;
};
/**
 * Find the mapping that best matches the hypothetical "needle" mapping that
 * we are searching for in the given "haystack" of mappings.
 */


BasicSourceMapConsumer.prototype._findMapping = function SourceMapConsumer_findMapping(aNeedle, aMappings, aLineName, aColumnName, aComparator, aBias) {
  // To return the position we are searching for, we must first find the
  // mapping for the given position and then return the opposite position it
  // points to. Because the mappings are sorted, we can use binary search to
  // find the best mapping.
  if (aNeedle[aLineName] <= 0) {
    throw new TypeError('Line must be greater than or equal to 1, got ' + aNeedle[aLineName]);
  }

  if (aNeedle[aColumnName] < 0) {
    throw new TypeError('Column must be greater than or equal to 0, got ' + aNeedle[aColumnName]);
  }

  return binarySearch.search(aNeedle, aMappings, aComparator, aBias);
};
/**
 * Compute the last column for each generated mapping. The last column is
 * inclusive.
 */


BasicSourceMapConsumer.prototype.computeColumnSpans = function SourceMapConsumer_computeColumnSpans() {
  for (var index = 0; index < this._generatedMappings.length; ++index) {
    var mapping = this._generatedMappings[index]; // Mappings do not contain a field for the last generated columnt. We
    // can come up with an optimistic estimate, however, by assuming that
    // mappings are contiguous (i.e. given two consecutive mappings, the
    // first mapping ends where the second one starts).

    if (index + 1 < this._generatedMappings.length) {
      var nextMapping = this._generatedMappings[index + 1];

      if (mapping.generatedLine === nextMapping.generatedLine) {
        mapping.lastGeneratedColumn = nextMapping.generatedColumn - 1;
        continue;
      }
    } // The last mapping for each line spans the entire line.


    mapping.lastGeneratedColumn = Infinity;
  }
};
/**
 * Returns the original source, line, and column information for the generated
 * source's line and column positions provided. The only argument is an object
 * with the following properties:
 *
 *   - line: The line number in the generated source.  The line number
 *     is 1-based.
 *   - column: The column number in the generated source.  The column
 *     number is 0-based.
 *   - bias: Either 'SourceMapConsumer.GREATEST_LOWER_BOUND' or
 *     'SourceMapConsumer.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 *     Defaults to 'SourceMapConsumer.GREATEST_LOWER_BOUND'.
 *
 * and an object is returned with the following properties:
 *
 *   - source: The original source file, or null.
 *   - line: The line number in the original source, or null.  The
 *     line number is 1-based.
 *   - column: The column number in the original source, or null.  The
 *     column number is 0-based.
 *   - name: The original identifier, or null.
 */


BasicSourceMapConsumer.prototype.originalPositionFor = function SourceMapConsumer_originalPositionFor(aArgs) {
  var needle = {
    generatedLine: util.getArg(aArgs, 'line'),
    generatedColumn: util.getArg(aArgs, 'column')
  };

  var index = this._findMapping(needle, this._generatedMappings, "generatedLine", "generatedColumn", util.compareByGeneratedPositionsDeflated, util.getArg(aArgs, 'bias', SourceMapConsumer.GREATEST_LOWER_BOUND));

  if (index >= 0) {
    var mapping = this._generatedMappings[index];

    if (mapping.generatedLine === needle.generatedLine) {
      var source = util.getArg(mapping, 'source', null);

      if (source !== null) {
        source = this._sources.at(source);
        source = util.computeSourceURL(this.sourceRoot, source, this._sourceMapURL);
      }

      var name = util.getArg(mapping, 'name', null);

      if (name !== null) {
        name = this._names.at(name);
      }

      return {
        source: source,
        line: util.getArg(mapping, 'originalLine', null),
        column: util.getArg(mapping, 'originalColumn', null),
        name: name
      };
    }
  }

  return {
    source: null,
    line: null,
    column: null,
    name: null
  };
};
/**
 * Return true if we have the source content for every source in the source
 * map, false otherwise.
 */


BasicSourceMapConsumer.prototype.hasContentsOfAllSources = function BasicSourceMapConsumer_hasContentsOfAllSources() {
  if (!this.sourcesContent) {
    return false;
  }

  return this.sourcesContent.length >= this._sources.size() && !this.sourcesContent.some(function (sc) {
    return sc == null;
  });
};
/**
 * Returns the original source content. The only argument is the url of the
 * original source file. Returns null if no original source content is
 * available.
 */


BasicSourceMapConsumer.prototype.sourceContentFor = function SourceMapConsumer_sourceContentFor(aSource, nullOnMissing) {
  if (!this.sourcesContent) {
    return null;
  }

  var index = this._findSourceIndex(aSource);

  if (index >= 0) {
    return this.sourcesContent[index];
  }

  var relativeSource = aSource;

  if (this.sourceRoot != null) {
    relativeSource = util.relative(this.sourceRoot, relativeSource);
  }

  var url;

  if (this.sourceRoot != null && (url = util.urlParse(this.sourceRoot))) {
    // XXX: file:// URIs and absolute paths lead to unexpected behavior for
    // many users. We can help them out when they expect file:// URIs to
    // behave like it would if they were running a local HTTP server. See
    // https://bugzilla.mozilla.org/show_bug.cgi?id=885597.
    var fileUriAbsPath = relativeSource.replace(/^file:\/\//, "");

    if (url.scheme == "file" && this._sources.has(fileUriAbsPath)) {
      return this.sourcesContent[this._sources.indexOf(fileUriAbsPath)];
    }

    if ((!url.path || url.path == "/") && this._sources.has("/" + relativeSource)) {
      return this.sourcesContent[this._sources.indexOf("/" + relativeSource)];
    }
  } // This function is used recursively from
  // IndexedSourceMapConsumer.prototype.sourceContentFor. In that case, we
  // don't want to throw if we can't find the source - we just want to
  // return null, so we provide a flag to exit gracefully.


  if (nullOnMissing) {
    return null;
  } else {
    throw new Error('"' + relativeSource + '" is not in the SourceMap.');
  }
};
/**
 * Returns the generated line and column information for the original source,
 * line, and column positions provided. The only argument is an object with
 * the following properties:
 *
 *   - source: The filename of the original source.
 *   - line: The line number in the original source.  The line number
 *     is 1-based.
 *   - column: The column number in the original source.  The column
 *     number is 0-based.
 *   - bias: Either 'SourceMapConsumer.GREATEST_LOWER_BOUND' or
 *     'SourceMapConsumer.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 *     Defaults to 'SourceMapConsumer.GREATEST_LOWER_BOUND'.
 *
 * and an object is returned with the following properties:
 *
 *   - line: The line number in the generated source, or null.  The
 *     line number is 1-based.
 *   - column: The column number in the generated source, or null.
 *     The column number is 0-based.
 */


BasicSourceMapConsumer.prototype.generatedPositionFor = function SourceMapConsumer_generatedPositionFor(aArgs) {
  var source = util.getArg(aArgs, 'source');
  source = this._findSourceIndex(source);

  if (source < 0) {
    return {
      line: null,
      column: null,
      lastColumn: null
    };
  }

  var needle = {
    source: source,
    originalLine: util.getArg(aArgs, 'line'),
    originalColumn: util.getArg(aArgs, 'column')
  };

  var index = this._findMapping(needle, this._originalMappings, "originalLine", "originalColumn", util.compareByOriginalPositions, util.getArg(aArgs, 'bias', SourceMapConsumer.GREATEST_LOWER_BOUND));

  if (index >= 0) {
    var mapping = this._originalMappings[index];

    if (mapping.source === needle.source) {
      return {
        line: util.getArg(mapping, 'generatedLine', null),
        column: util.getArg(mapping, 'generatedColumn', null),
        lastColumn: util.getArg(mapping, 'lastGeneratedColumn', null)
      };
    }
  }

  return {
    line: null,
    column: null,
    lastColumn: null
  };
};

exports.BasicSourceMapConsumer = BasicSourceMapConsumer;
/**
 * An IndexedSourceMapConsumer instance represents a parsed source map which
 * we can query for information. It differs from BasicSourceMapConsumer in
 * that it takes "indexed" source maps (i.e. ones with a "sections" field) as
 * input.
 *
 * The first parameter is a raw source map (either as a JSON string, or already
 * parsed to an object). According to the spec for indexed source maps, they
 * have the following attributes:
 *
 *   - version: Which version of the source map spec this map is following.
 *   - file: Optional. The generated file this source map is associated with.
 *   - sections: A list of section definitions.
 *
 * Each value under the "sections" field has two fields:
 *   - offset: The offset into the original specified at which this section
 *       begins to apply, defined as an object with a "line" and "column"
 *       field.
 *   - map: A source map definition. This source map could also be indexed,
 *       but doesn't have to be.
 *
 * Instead of the "map" field, it's also possible to have a "url" field
 * specifying a URL to retrieve a source map from, but that's currently
 * unsupported.
 *
 * Here's an example source map, taken from the source map spec[0], but
 * modified to omit a section which uses the "url" field.
 *
 *  {
 *    version : 3,
 *    file: "app.js",
 *    sections: [{
 *      offset: {line:100, column:10},
 *      map: {
 *        version : 3,
 *        file: "section.js",
 *        sources: ["foo.js", "bar.js"],
 *        names: ["src", "maps", "are", "fun"],
 *        mappings: "AAAA,E;;ABCDE;"
 *      }
 *    }],
 *  }
 *
 * The second parameter, if given, is a string whose value is the URL
 * at which the source map was found.  This URL is used to compute the
 * sources array.
 *
 * [0]: https://docs.google.com/document/d/1U1RGAehQwRypUTovF1KRlpiOFze0b-_2gc6fAH0KY0k/edit#heading=h.535es3xeprgt
 */

function IndexedSourceMapConsumer(aSourceMap, aSourceMapURL) {
  var sourceMap = aSourceMap;

  if (typeof aSourceMap === 'string') {
    sourceMap = util.parseSourceMapInput(aSourceMap);
  }

  var version = util.getArg(sourceMap, 'version');
  var sections = util.getArg(sourceMap, 'sections');

  if (version != this._version) {
    throw new Error('Unsupported version: ' + version);
  }

  this._sources = new ArraySet();
  this._names = new ArraySet();
  var lastOffset = {
    line: -1,
    column: 0
  };
  this._sections = sections.map(function (s) {
    if (s.url) {
      // The url field will require support for asynchronicity.
      // See https://github.com/mozilla/source-map/issues/16
      throw new Error('Support for url field in sections not implemented.');
    }

    var offset = util.getArg(s, 'offset');
    var offsetLine = util.getArg(offset, 'line');
    var offsetColumn = util.getArg(offset, 'column');

    if (offsetLine < lastOffset.line || offsetLine === lastOffset.line && offsetColumn < lastOffset.column) {
      throw new Error('Section offsets must be ordered and non-overlapping.');
    }

    lastOffset = offset;
    return {
      generatedOffset: {
        // The offset fields are 0-based, but we use 1-based indices when
        // encoding/decoding from VLQ.
        generatedLine: offsetLine + 1,
        generatedColumn: offsetColumn + 1
      },
      consumer: new SourceMapConsumer(util.getArg(s, 'map'), aSourceMapURL)
    };
  });
}

IndexedSourceMapConsumer.prototype = Object.create(SourceMapConsumer.prototype);
IndexedSourceMapConsumer.prototype.constructor = SourceMapConsumer;
/**
 * The version of the source mapping spec that we are consuming.
 */

IndexedSourceMapConsumer.prototype._version = 3;
/**
 * The list of original sources.
 */

Object.defineProperty(IndexedSourceMapConsumer.prototype, 'sources', {
  get: function get() {
    var sources = [];

    for (var i = 0; i < this._sections.length; i++) {
      for (var j = 0; j < this._sections[i].consumer.sources.length; j++) {
        sources.push(this._sections[i].consumer.sources[j]);
      }
    }

    return sources;
  }
});
/**
 * Returns the original source, line, and column information for the generated
 * source's line and column positions provided. The only argument is an object
 * with the following properties:
 *
 *   - line: The line number in the generated source.  The line number
 *     is 1-based.
 *   - column: The column number in the generated source.  The column
 *     number is 0-based.
 *
 * and an object is returned with the following properties:
 *
 *   - source: The original source file, or null.
 *   - line: The line number in the original source, or null.  The
 *     line number is 1-based.
 *   - column: The column number in the original source, or null.  The
 *     column number is 0-based.
 *   - name: The original identifier, or null.
 */

IndexedSourceMapConsumer.prototype.originalPositionFor = function IndexedSourceMapConsumer_originalPositionFor(aArgs) {
  var needle = {
    generatedLine: util.getArg(aArgs, 'line'),
    generatedColumn: util.getArg(aArgs, 'column')
  }; // Find the section containing the generated position we're trying to map
  // to an original position.

  var sectionIndex = binarySearch.search(needle, this._sections, function (needle, section) {
    var cmp = needle.generatedLine - section.generatedOffset.generatedLine;

    if (cmp) {
      return cmp;
    }

    return needle.generatedColumn - section.generatedOffset.generatedColumn;
  });
  var section = this._sections[sectionIndex];

  if (!section) {
    return {
      source: null,
      line: null,
      column: null,
      name: null
    };
  }

  return section.consumer.originalPositionFor({
    line: needle.generatedLine - (section.generatedOffset.generatedLine - 1),
    column: needle.generatedColumn - (section.generatedOffset.generatedLine === needle.generatedLine ? section.generatedOffset.generatedColumn - 1 : 0),
    bias: aArgs.bias
  });
};
/**
 * Return true if we have the source content for every source in the source
 * map, false otherwise.
 */


IndexedSourceMapConsumer.prototype.hasContentsOfAllSources = function IndexedSourceMapConsumer_hasContentsOfAllSources() {
  return this._sections.every(function (s) {
    return s.consumer.hasContentsOfAllSources();
  });
};
/**
 * Returns the original source content. The only argument is the url of the
 * original source file. Returns null if no original source content is
 * available.
 */


IndexedSourceMapConsumer.prototype.sourceContentFor = function IndexedSourceMapConsumer_sourceContentFor(aSource, nullOnMissing) {
  for (var i = 0; i < this._sections.length; i++) {
    var section = this._sections[i];
    var content = section.consumer.sourceContentFor(aSource, true);

    if (content) {
      return content;
    }
  }

  if (nullOnMissing) {
    return null;
  } else {
    throw new Error('"' + aSource + '" is not in the SourceMap.');
  }
};
/**
 * Returns the generated line and column information for the original source,
 * line, and column positions provided. The only argument is an object with
 * the following properties:
 *
 *   - source: The filename of the original source.
 *   - line: The line number in the original source.  The line number
 *     is 1-based.
 *   - column: The column number in the original source.  The column
 *     number is 0-based.
 *
 * and an object is returned with the following properties:
 *
 *   - line: The line number in the generated source, or null.  The
 *     line number is 1-based. 
 *   - column: The column number in the generated source, or null.
 *     The column number is 0-based.
 */


IndexedSourceMapConsumer.prototype.generatedPositionFor = function IndexedSourceMapConsumer_generatedPositionFor(aArgs) {
  for (var i = 0; i < this._sections.length; i++) {
    var section = this._sections[i]; // Only consider this section if the requested source is in the list of
    // sources of the consumer.

    if (section.consumer._findSourceIndex(util.getArg(aArgs, 'source')) === -1) {
      continue;
    }

    var generatedPosition = section.consumer.generatedPositionFor(aArgs);

    if (generatedPosition) {
      var ret = {
        line: generatedPosition.line + (section.generatedOffset.generatedLine - 1),
        column: generatedPosition.column + (section.generatedOffset.generatedLine === generatedPosition.line ? section.generatedOffset.generatedColumn - 1 : 0)
      };
      return ret;
    }
  }

  return {
    line: null,
    column: null
  };
};
/**
 * Parse the mappings in a string in to a data structure which we can easily
 * query (the ordered arrays in the `this.__generatedMappings` and
 * `this.__originalMappings` properties).
 */


IndexedSourceMapConsumer.prototype._parseMappings = function IndexedSourceMapConsumer_parseMappings(aStr, aSourceRoot) {
  this.__generatedMappings = [];
  this.__originalMappings = [];

  for (var i = 0; i < this._sections.length; i++) {
    var section = this._sections[i];
    var sectionMappings = section.consumer._generatedMappings;

    for (var j = 0; j < sectionMappings.length; j++) {
      var mapping = sectionMappings[j];

      var source = section.consumer._sources.at(mapping.source);

      source = util.computeSourceURL(section.consumer.sourceRoot, source, this._sourceMapURL);

      this._sources.add(source);

      source = this._sources.indexOf(source);
      var name = null;

      if (mapping.name) {
        name = section.consumer._names.at(mapping.name);

        this._names.add(name);

        name = this._names.indexOf(name);
      } // The mappings coming from the consumer for the section have
      // generated positions relative to the start of the section, so we
      // need to offset them to be relative to the start of the concatenated
      // generated file.


      var adjustedMapping = {
        source: source,
        generatedLine: mapping.generatedLine + (section.generatedOffset.generatedLine - 1),
        generatedColumn: mapping.generatedColumn + (section.generatedOffset.generatedLine === mapping.generatedLine ? section.generatedOffset.generatedColumn - 1 : 0),
        originalLine: mapping.originalLine,
        originalColumn: mapping.originalColumn,
        name: name
      };

      this.__generatedMappings.push(adjustedMapping);

      if (typeof adjustedMapping.originalLine === 'number') {
        this.__originalMappings.push(adjustedMapping);
      }
    }
  }

  quickSort(this.__generatedMappings, util.compareByGeneratedPositionsDeflated);
  quickSort(this.__originalMappings, util.compareByOriginalPositions);
};

exports.IndexedSourceMapConsumer = IndexedSourceMapConsumer;

/***/ }),
/* 34 */
/***/ (function(module, exports) {

/* -*- Mode: js; js-indent-level: 2; -*- */

/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */
exports.GREATEST_LOWER_BOUND = 1;
exports.LEAST_UPPER_BOUND = 2;
/**
 * Recursive implementation of binary search.
 *
 * @param aLow Indices here and lower do not contain the needle.
 * @param aHigh Indices here and higher do not contain the needle.
 * @param aNeedle The element being searched for.
 * @param aHaystack The non-empty array being searched.
 * @param aCompare Function which takes two elements and returns -1, 0, or 1.
 * @param aBias Either 'binarySearch.GREATEST_LOWER_BOUND' or
 *     'binarySearch.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 */

function recursiveSearch(aLow, aHigh, aNeedle, aHaystack, aCompare, aBias) {
  // This function terminates when one of the following is true:
  //
  //   1. We find the exact element we are looking for.
  //
  //   2. We did not find the exact element, but we can return the index of
  //      the next-closest element.
  //
  //   3. We did not find the exact element, and there is no next-closest
  //      element than the one we are searching for, so we return -1.
  var mid = Math.floor((aHigh - aLow) / 2) + aLow;
  var cmp = aCompare(aNeedle, aHaystack[mid], true);

  if (cmp === 0) {
    // Found the element we are looking for.
    return mid;
  } else if (cmp > 0) {
    // Our needle is greater than aHaystack[mid].
    if (aHigh - mid > 1) {
      // The element is in the upper half.
      return recursiveSearch(mid, aHigh, aNeedle, aHaystack, aCompare, aBias);
    } // The exact needle element was not found in this haystack. Determine if
    // we are in termination case (3) or (2) and return the appropriate thing.


    if (aBias == exports.LEAST_UPPER_BOUND) {
      return aHigh < aHaystack.length ? aHigh : -1;
    } else {
      return mid;
    }
  } else {
    // Our needle is less than aHaystack[mid].
    if (mid - aLow > 1) {
      // The element is in the lower half.
      return recursiveSearch(aLow, mid, aNeedle, aHaystack, aCompare, aBias);
    } // we are in termination case (3) or (2) and return the appropriate thing.


    if (aBias == exports.LEAST_UPPER_BOUND) {
      return mid;
    } else {
      return aLow < 0 ? -1 : aLow;
    }
  }
}
/**
 * This is an implementation of binary search which will always try and return
 * the index of the closest element if there is no exact hit. This is because
 * mappings between original and generated line/col pairs are single points,
 * and there is an implicit region between each of them, so a miss just means
 * that you aren't on the very start of a region.
 *
 * @param aNeedle The element you are looking for.
 * @param aHaystack The array that is being searched.
 * @param aCompare A function which takes the needle and an element in the
 *     array and returns -1, 0, or 1 depending on whether the needle is less
 *     than, equal to, or greater than the element, respectively.
 * @param aBias Either 'binarySearch.GREATEST_LOWER_BOUND' or
 *     'binarySearch.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 *     Defaults to 'binarySearch.GREATEST_LOWER_BOUND'.
 */


exports.search = function search(aNeedle, aHaystack, aCompare, aBias) {
  if (aHaystack.length === 0) {
    return -1;
  }

  var index = recursiveSearch(-1, aHaystack.length, aNeedle, aHaystack, aCompare, aBias || exports.GREATEST_LOWER_BOUND);

  if (index < 0) {
    return -1;
  } // We have found either the exact element, or the next-closest element than
  // the one we are searching for. However, there may be more than one such
  // element. Make sure we always return the smallest of these.


  while (index - 1 >= 0) {
    if (aCompare(aHaystack[index], aHaystack[index - 1], true) !== 0) {
      break;
    }

    --index;
  }

  return index;
};

/***/ }),
/* 35 */
/***/ (function(module, exports) {

/* -*- Mode: js; js-indent-level: 2; -*- */

/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */
// It turns out that some (most?) JavaScript engines don't self-host
// `Array.prototype.sort`. This makes sense because C++ will likely remain
// faster than JS when doing raw CPU-intensive sorting. However, when using a
// custom comparator function, calling back and forth between the VM's C++ and
// JIT'd JS is rather slow *and* loses JIT type information, resulting in
// worse generated code for the comparator function than would be optimal. In
// fact, when sorting with a comparator, these costs outweigh the benefits of
// sorting in C++. By using our own JS-implemented Quick Sort (below), we get
// a ~3500ms mean speed-up in `bench/bench.html`.

/**
 * Swap the elements indexed by `x` and `y` in the array `ary`.
 *
 * @param {Array} ary
 *        The array.
 * @param {Number} x
 *        The index of the first item.
 * @param {Number} y
 *        The index of the second item.
 */
function swap(ary, x, y) {
  var temp = ary[x];
  ary[x] = ary[y];
  ary[y] = temp;
}
/**
 * Returns a random integer within the range `low .. high` inclusive.
 *
 * @param {Number} low
 *        The lower bound on the range.
 * @param {Number} high
 *        The upper bound on the range.
 */


function randomIntInRange(low, high) {
  return Math.round(low + Math.random() * (high - low));
}
/**
 * The Quick Sort algorithm.
 *
 * @param {Array} ary
 *        An array to sort.
 * @param {function} comparator
 *        Function to use to compare two items.
 * @param {Number} p
 *        Start index of the array
 * @param {Number} r
 *        End index of the array
 */


function doQuickSort(ary, comparator, p, r) {
  // If our lower bound is less than our upper bound, we (1) partition the
  // array into two pieces and (2) recurse on each half. If it is not, this is
  // the empty array and our base case.
  if (p < r) {
    // (1) Partitioning.
    //
    // The partitioning chooses a pivot between `p` and `r` and moves all
    // elements that are less than or equal to the pivot to the before it, and
    // all the elements that are greater than it after it. The effect is that
    // once partition is done, the pivot is in the exact place it will be when
    // the array is put in sorted order, and it will not need to be moved
    // again. This runs in O(n) time.
    // Always choose a random pivot so that an input array which is reverse
    // sorted does not cause O(n^2) running time.
    var pivotIndex = randomIntInRange(p, r);
    var i = p - 1;
    swap(ary, pivotIndex, r);
    var pivot = ary[r]; // Immediately after `j` is incremented in this loop, the following hold
    // true:
    //
    //   * Every element in `ary[p .. i]` is less than or equal to the pivot.
    //
    //   * Every element in `ary[i+1 .. j-1]` is greater than the pivot.

    for (var j = p; j < r; j++) {
      if (comparator(ary[j], pivot) <= 0) {
        i += 1;
        swap(ary, i, j);
      }
    }

    swap(ary, i + 1, j);
    var q = i + 1; // (2) Recurse on each half.

    doQuickSort(ary, comparator, p, q - 1);
    doQuickSort(ary, comparator, q + 1, r);
  }
}
/**
 * Sort the given array in-place with the given comparator function.
 *
 * @param {Array} ary
 *        An array to sort.
 * @param {function} comparator
 *        Function to use to compare two items.
 */


exports.quickSort = function (ary, comparator) {
  doQuickSort(ary, comparator, 0, ary.length - 1);
};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

/* -*- Mode: js; js-indent-level: 2; -*- */

/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */
var SourceMapGenerator = __webpack_require__(14).SourceMapGenerator;

var util = __webpack_require__(6); // Matches a Windows-style `\r\n` newline or a `\n` newline used by all other
// operating systems these days (capturing the result).


var REGEX_NEWLINE = /(\r?\n)/; // Newline character code for charCodeAt() comparisons

var NEWLINE_CODE = 10; // Private symbol for identifying `SourceNode`s when multiple versions of
// the source-map library are loaded. This MUST NOT CHANGE across
// versions!

var isSourceNode = "$$$isSourceNode$$$";
/**
 * SourceNodes provide a way to abstract over interpolating/concatenating
 * snippets of generated JavaScript source code while maintaining the line and
 * column information associated with the original source code.
 *
 * @param aLine The original line number.
 * @param aColumn The original column number.
 * @param aSource The original source's filename.
 * @param aChunks Optional. An array of strings which are snippets of
 *        generated JS, or other SourceNodes.
 * @param aName The original identifier.
 */

function SourceNode(aLine, aColumn, aSource, aChunks, aName) {
  this.children = [];
  this.sourceContents = {};
  this.line = aLine == null ? null : aLine;
  this.column = aColumn == null ? null : aColumn;
  this.source = aSource == null ? null : aSource;
  this.name = aName == null ? null : aName;
  this[isSourceNode] = true;
  if (aChunks != null) this.add(aChunks);
}
/**
 * Creates a SourceNode from generated code and a SourceMapConsumer.
 *
 * @param aGeneratedCode The generated code
 * @param aSourceMapConsumer The SourceMap for the generated code
 * @param aRelativePath Optional. The path that relative sources in the
 *        SourceMapConsumer should be relative to.
 */


SourceNode.fromStringWithSourceMap = function SourceNode_fromStringWithSourceMap(aGeneratedCode, aSourceMapConsumer, aRelativePath) {
  // The SourceNode we want to fill with the generated code
  // and the SourceMap
  var node = new SourceNode(); // All even indices of this array are one line of the generated code,
  // while all odd indices are the newlines between two adjacent lines
  // (since `REGEX_NEWLINE` captures its match).
  // Processed fragments are accessed by calling `shiftNextLine`.

  var remainingLines = aGeneratedCode.split(REGEX_NEWLINE);
  var remainingLinesIndex = 0;

  var shiftNextLine = function shiftNextLine() {
    var lineContents = getNextLine(); // The last line of a file might not have a newline.

    var newLine = getNextLine() || "";
    return lineContents + newLine;

    function getNextLine() {
      return remainingLinesIndex < remainingLines.length ? remainingLines[remainingLinesIndex++] : undefined;
    }
  }; // We need to remember the position of "remainingLines"


  var lastGeneratedLine = 1,
      lastGeneratedColumn = 0; // The generate SourceNodes we need a code range.
  // To extract it current and last mapping is used.
  // Here we store the last mapping.

  var lastMapping = null;
  aSourceMapConsumer.eachMapping(function (mapping) {
    if (lastMapping !== null) {
      // We add the code from "lastMapping" to "mapping":
      // First check if there is a new line in between.
      if (lastGeneratedLine < mapping.generatedLine) {
        // Associate first line with "lastMapping"
        addMappingWithCode(lastMapping, shiftNextLine());
        lastGeneratedLine++;
        lastGeneratedColumn = 0; // The remaining code is added without mapping
      } else {
        // There is no new line in between.
        // Associate the code between "lastGeneratedColumn" and
        // "mapping.generatedColumn" with "lastMapping"
        var nextLine = remainingLines[remainingLinesIndex] || '';
        var code = nextLine.substr(0, mapping.generatedColumn - lastGeneratedColumn);
        remainingLines[remainingLinesIndex] = nextLine.substr(mapping.generatedColumn - lastGeneratedColumn);
        lastGeneratedColumn = mapping.generatedColumn;
        addMappingWithCode(lastMapping, code); // No more remaining code, continue

        lastMapping = mapping;
        return;
      }
    } // We add the generated code until the first mapping
    // to the SourceNode without any mapping.
    // Each line is added as separate string.


    while (lastGeneratedLine < mapping.generatedLine) {
      node.add(shiftNextLine());
      lastGeneratedLine++;
    }

    if (lastGeneratedColumn < mapping.generatedColumn) {
      var nextLine = remainingLines[remainingLinesIndex] || '';
      node.add(nextLine.substr(0, mapping.generatedColumn));
      remainingLines[remainingLinesIndex] = nextLine.substr(mapping.generatedColumn);
      lastGeneratedColumn = mapping.generatedColumn;
    }

    lastMapping = mapping;
  }, this); // We have processed all mappings.

  if (remainingLinesIndex < remainingLines.length) {
    if (lastMapping) {
      // Associate the remaining code in the current line with "lastMapping"
      addMappingWithCode(lastMapping, shiftNextLine());
    } // and add the remaining lines without any mapping


    node.add(remainingLines.splice(remainingLinesIndex).join(""));
  } // Copy sourcesContent into SourceNode


  aSourceMapConsumer.sources.forEach(function (sourceFile) {
    var content = aSourceMapConsumer.sourceContentFor(sourceFile);

    if (content != null) {
      if (aRelativePath != null) {
        sourceFile = util.join(aRelativePath, sourceFile);
      }

      node.setSourceContent(sourceFile, content);
    }
  });
  return node;

  function addMappingWithCode(mapping, code) {
    if (mapping === null || mapping.source === undefined) {
      node.add(code);
    } else {
      var source = aRelativePath ? util.join(aRelativePath, mapping.source) : mapping.source;
      node.add(new SourceNode(mapping.originalLine, mapping.originalColumn, source, code, mapping.name));
    }
  }
};
/**
 * Add a chunk of generated JS to this source node.
 *
 * @param aChunk A string snippet of generated JS code, another instance of
 *        SourceNode, or an array where each member is one of those things.
 */


SourceNode.prototype.add = function SourceNode_add(aChunk) {
  if (Array.isArray(aChunk)) {
    aChunk.forEach(function (chunk) {
      this.add(chunk);
    }, this);
  } else if (aChunk[isSourceNode] || typeof aChunk === "string") {
    if (aChunk) {
      this.children.push(aChunk);
    }
  } else {
    throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + aChunk);
  }

  return this;
};
/**
 * Add a chunk of generated JS to the beginning of this source node.
 *
 * @param aChunk A string snippet of generated JS code, another instance of
 *        SourceNode, or an array where each member is one of those things.
 */


SourceNode.prototype.prepend = function SourceNode_prepend(aChunk) {
  if (Array.isArray(aChunk)) {
    for (var i = aChunk.length - 1; i >= 0; i--) {
      this.prepend(aChunk[i]);
    }
  } else if (aChunk[isSourceNode] || typeof aChunk === "string") {
    this.children.unshift(aChunk);
  } else {
    throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + aChunk);
  }

  return this;
};
/**
 * Walk over the tree of JS snippets in this node and its children. The
 * walking function is called once for each snippet of JS and is passed that
 * snippet and the its original associated source's line/column location.
 *
 * @param aFn The traversal function.
 */


SourceNode.prototype.walk = function SourceNode_walk(aFn) {
  var chunk;

  for (var i = 0, len = this.children.length; i < len; i++) {
    chunk = this.children[i];

    if (chunk[isSourceNode]) {
      chunk.walk(aFn);
    } else {
      if (chunk !== '') {
        aFn(chunk, {
          source: this.source,
          line: this.line,
          column: this.column,
          name: this.name
        });
      }
    }
  }
};
/**
 * Like `String.prototype.join` except for SourceNodes. Inserts `aStr` between
 * each of `this.children`.
 *
 * @param aSep The separator.
 */


SourceNode.prototype.join = function SourceNode_join(aSep) {
  var newChildren;
  var i;
  var len = this.children.length;

  if (len > 0) {
    newChildren = [];

    for (i = 0; i < len - 1; i++) {
      newChildren.push(this.children[i]);
      newChildren.push(aSep);
    }

    newChildren.push(this.children[i]);
    this.children = newChildren;
  }

  return this;
};
/**
 * Call String.prototype.replace on the very right-most source snippet. Useful
 * for trimming whitespace from the end of a source node, etc.
 *
 * @param aPattern The pattern to replace.
 * @param aReplacement The thing to replace the pattern with.
 */


SourceNode.prototype.replaceRight = function SourceNode_replaceRight(aPattern, aReplacement) {
  var lastChild = this.children[this.children.length - 1];

  if (lastChild[isSourceNode]) {
    lastChild.replaceRight(aPattern, aReplacement);
  } else if (typeof lastChild === 'string') {
    this.children[this.children.length - 1] = lastChild.replace(aPattern, aReplacement);
  } else {
    this.children.push(''.replace(aPattern, aReplacement));
  }

  return this;
};
/**
 * Set the source content for a source file. This will be added to the SourceMapGenerator
 * in the sourcesContent field.
 *
 * @param aSourceFile The filename of the source file
 * @param aSourceContent The content of the source file
 */


SourceNode.prototype.setSourceContent = function SourceNode_setSourceContent(aSourceFile, aSourceContent) {
  this.sourceContents[util.toSetString(aSourceFile)] = aSourceContent;
};
/**
 * Walk over the tree of SourceNodes. The walking function is called for each
 * source file content and is passed the filename and source content.
 *
 * @param aFn The traversal function.
 */


SourceNode.prototype.walkSourceContents = function SourceNode_walkSourceContents(aFn) {
  for (var i = 0, len = this.children.length; i < len; i++) {
    if (this.children[i][isSourceNode]) {
      this.children[i].walkSourceContents(aFn);
    }
  }

  var sources = Object.keys(this.sourceContents);

  for (var i = 0, len = sources.length; i < len; i++) {
    aFn(util.fromSetString(sources[i]), this.sourceContents[sources[i]]);
  }
};
/**
 * Return the string representation of this source node. Walks over the tree
 * and concatenates all the various snippets together to one string.
 */


SourceNode.prototype.toString = function SourceNode_toString() {
  var str = "";
  this.walk(function (chunk) {
    str += chunk;
  });
  return str;
};
/**
 * Returns the string representation of this source node along with a source
 * map.
 */


SourceNode.prototype.toStringWithSourceMap = function SourceNode_toStringWithSourceMap(aArgs) {
  var generated = {
    code: "",
    line: 1,
    column: 0
  };
  var map = new SourceMapGenerator(aArgs);
  var sourceMappingActive = false;
  var lastOriginalSource = null;
  var lastOriginalLine = null;
  var lastOriginalColumn = null;
  var lastOriginalName = null;
  this.walk(function (chunk, original) {
    generated.code += chunk;

    if (original.source !== null && original.line !== null && original.column !== null) {
      if (lastOriginalSource !== original.source || lastOriginalLine !== original.line || lastOriginalColumn !== original.column || lastOriginalName !== original.name) {
        map.addMapping({
          source: original.source,
          original: {
            line: original.line,
            column: original.column
          },
          generated: {
            line: generated.line,
            column: generated.column
          },
          name: original.name
        });
      }

      lastOriginalSource = original.source;
      lastOriginalLine = original.line;
      lastOriginalColumn = original.column;
      lastOriginalName = original.name;
      sourceMappingActive = true;
    } else if (sourceMappingActive) {
      map.addMapping({
        generated: {
          line: generated.line,
          column: generated.column
        }
      });
      lastOriginalSource = null;
      sourceMappingActive = false;
    }

    for (var idx = 0, length = chunk.length; idx < length; idx++) {
      if (chunk.charCodeAt(idx) === NEWLINE_CODE) {
        generated.line++;
        generated.column = 0; // Mappings end at eol

        if (idx + 1 === length) {
          lastOriginalSource = null;
          sourceMappingActive = false;
        } else if (sourceMappingActive) {
          map.addMapping({
            source: original.source,
            original: {
              line: original.line,
              column: original.column
            },
            generated: {
              line: generated.line,
              column: generated.column
            },
            name: original.name
          });
        }
      } else {
        generated.column++;
      }
    }
  });
  this.walkSourceContents(function (sourceFile, sourceContent) {
    map.setSourceContent(sourceFile, sourceContent);
  });
  return {
    code: generated.code,
    map: map
  };
};

exports.SourceNode = SourceNode;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/


var Source = __webpack_require__(1);

var SourceNode = __webpack_require__(0).SourceNode;

var SourceListMap = __webpack_require__(2).SourceListMap;

var RawSource =
/*#__PURE__*/
function (_Source) {
  babelHelpers.inherits(RawSource, _Source);

  function RawSource(value) {
    var _this;

    babelHelpers.classCallCheck(this, RawSource);
    _this = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(RawSource).call(this));
    _this._value = value;
    return _this;
  }

  babelHelpers.createClass(RawSource, [{
    key: "source",
    value: function source() {
      return this._value;
    }
  }, {
    key: "map",
    value: function map(options) {
      return null;
    }
  }, {
    key: "node",
    value: function node(options) {
      return new SourceNode(null, null, null, this._value);
    }
  }, {
    key: "listMap",
    value: function listMap(options) {
      return new SourceListMap(this._value);
    }
  }, {
    key: "updateHash",
    value: function updateHash(hash) {
      hash.update(this._value);
    }
  }]);
  return RawSource;
}(Source);

module.exports = RawSource;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/


var base64VLQ = __webpack_require__(9);

var SourceNode = __webpack_require__(7);

var CodeNode = __webpack_require__(8);

var SourceListMap = __webpack_require__(17);

module.exports = function fromStringWithSourceMap(code, map) {
  var sources = map.sources;
  var sourcesContent = map.sourcesContent;
  var mappings = map.mappings.split(";");
  var lines = code.split("\n");
  var nodes = [];
  var currentNode = null;
  var currentLine = 1;
  var currentSourceIdx = 0;
  var currentSourceNodeLine;

  function addCode(generatedCode) {
    if (currentNode && currentNode instanceof CodeNode) {
      currentNode.addGeneratedCode(generatedCode);
    } else if (currentNode && currentNode instanceof SourceNode && !generatedCode.trim()) {
      currentNode.addGeneratedCode(generatedCode);
      currentSourceNodeLine++;
    } else {
      currentNode = new CodeNode(generatedCode);
      nodes.push(currentNode);
    }
  }

  function addSource(generatedCode, source, originalSource, linePosition) {
    if (currentNode && currentNode instanceof SourceNode && currentNode.source === source && currentSourceNodeLine === linePosition) {
      currentNode.addGeneratedCode(generatedCode);
      currentSourceNodeLine++;
    } else {
      currentNode = new SourceNode(generatedCode, source, originalSource, linePosition);
      currentSourceNodeLine = linePosition + 1;
      nodes.push(currentNode);
    }
  }

  mappings.forEach(function (mapping, idx) {
    var line = lines[idx];
    if (typeof line === 'undefined') return;
    if (idx !== lines.length - 1) line += "\n";
    if (!mapping) return addCode(line);
    mapping = {
      value: 0,
      rest: mapping
    };
    var lineAdded = false;

    while (mapping.rest) {
      lineAdded = processMapping(mapping, line, lineAdded) || lineAdded;
    }

    if (!lineAdded) addCode(line);
  });

  if (mappings.length < lines.length) {
    var idx = mappings.length;

    while (!lines[idx].trim() && idx < lines.length - 1) {
      addCode(lines[idx] + "\n");
      idx++;
    }

    addCode(lines.slice(idx).join("\n"));
  }

  return new SourceListMap(nodes);

  function processMapping(mapping, line, ignore) {
    if (mapping.rest && mapping.rest[0] !== ",") {
      base64VLQ.decode(mapping.rest, mapping);
    }

    if (!mapping.rest) return false;

    if (mapping.rest[0] === ",") {
      mapping.rest = mapping.rest.substr(1);
      return false;
    }

    base64VLQ.decode(mapping.rest, mapping);
    var sourceIdx = mapping.value + currentSourceIdx;
    currentSourceIdx = sourceIdx;
    var linePosition;

    if (mapping.rest && mapping.rest[0] !== ",") {
      base64VLQ.decode(mapping.rest, mapping);
      linePosition = mapping.value + currentLine;
      currentLine = linePosition;
    } else {
      linePosition = currentLine;
    }

    if (mapping.rest) {
      var next = mapping.rest.indexOf(",");
      mapping.rest = next === -1 ? "" : mapping.rest.substr(next);
    }

    if (!ignore) {
      addSource(line, sources ? sources[sourceIdx] : null, sourcesContent ? sourcesContent[sourceIdx] : null, linePosition);
      return true;
    }
  }
};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/


var SourceNode = __webpack_require__(0).SourceNode;

var SourceMapConsumer = __webpack_require__(0).SourceMapConsumer;

var SourceListMap = __webpack_require__(2).SourceListMap;

var Source = __webpack_require__(1);

var SPLIT_REGEX = /(?!$)[^\n\r;{}]*[\n\r;{}]*/g;

function _splitCode(code) {
  return code.match(SPLIT_REGEX) || [];
}

var OriginalSource =
/*#__PURE__*/
function (_Source) {
  babelHelpers.inherits(OriginalSource, _Source);

  function OriginalSource(value, name) {
    var _this;

    babelHelpers.classCallCheck(this, OriginalSource);
    _this = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(OriginalSource).call(this));
    _this._value = value;
    _this._name = name;
    return _this;
  }

  babelHelpers.createClass(OriginalSource, [{
    key: "source",
    value: function source() {
      return this._value;
    }
  }, {
    key: "node",
    value: function node(options) {
      options = options || {};
      var sourceMap = this._sourceMap;
      var value = this._value;
      var name = this._name;
      var lines = value.split("\n");
      var node = new SourceNode(null, null, null, lines.map(function (line, idx) {
        var pos = 0;

        if (options.columns === false) {
          var content = line + (idx != lines.length - 1 ? "\n" : "");
          return new SourceNode(idx + 1, 0, name, content);
        }

        return new SourceNode(null, null, null, _splitCode(line + (idx != lines.length - 1 ? "\n" : "")).map(function (item) {
          if (/^\s*$/.test(item)) {
            pos += item.length;
            return item;
          }

          var res = new SourceNode(idx + 1, pos, name, item);
          pos += item.length;
          return res;
        }));
      }));
      node.setSourceContent(name, value);
      return node;
    }
  }, {
    key: "listMap",
    value: function listMap(options) {
      return new SourceListMap(this._value, this._name, this._value);
    }
  }, {
    key: "updateHash",
    value: function updateHash(hash) {
      hash.update(this._value);
    }
  }]);
  return OriginalSource;
}(Source);

__webpack_require__(4)(OriginalSource.prototype);

module.exports = OriginalSource;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/


var SourceNode = __webpack_require__(0).SourceNode;

var SourceMapConsumer = __webpack_require__(0).SourceMapConsumer;

var SourceMapGenerator = __webpack_require__(0).SourceMapGenerator;

var SourceListMap = __webpack_require__(2).SourceListMap;

var fromStringWithSourceMap = __webpack_require__(2).fromStringWithSourceMap;

var Source = __webpack_require__(1);

var SourceMapSource =
/*#__PURE__*/
function (_Source) {
  babelHelpers.inherits(SourceMapSource, _Source);

  function SourceMapSource(value, name, sourceMap, originalSource, innerSourceMap) {
    var _this;

    babelHelpers.classCallCheck(this, SourceMapSource);
    _this = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(SourceMapSource).call(this));
    _this._value = value;
    _this._name = name;
    _this._sourceMap = sourceMap;
    _this._originalSource = originalSource;
    _this._innerSourceMap = innerSourceMap;
    return _this;
  }

  babelHelpers.createClass(SourceMapSource, [{
    key: "source",
    value: function source() {
      return this._value;
    }
  }, {
    key: "node",
    value: function node(options) {
      var innerSourceMap = this._innerSourceMap;
      var sourceMap = this._sourceMap;

      if (innerSourceMap) {
        sourceMap = SourceMapGenerator.fromSourceMap(new SourceMapConsumer(sourceMap));
        if (this._originalSource) sourceMap.setSourceContent(this._name, this._originalSource);
        innerSourceMap = new SourceMapConsumer(innerSourceMap);
        sourceMap.applySourceMap(innerSourceMap, this._name);
        sourceMap = sourceMap.toJSON();
      }

      return SourceNode.fromStringWithSourceMap(this._value, new SourceMapConsumer(sourceMap));
    }
  }, {
    key: "listMap",
    value: function listMap(options) {
      options = options || {};
      if (options.module === false) return new SourceListMap(this._value, this._name, this._value);
      return fromStringWithSourceMap(this._value, typeof this._sourceMap === "string" ? JSON.parse(this._sourceMap) : this._sourceMap);
    }
  }, {
    key: "updateHash",
    value: function updateHash(hash) {
      hash.update(this._value);
      if (this._originalSource) hash.update(this._originalSource);
    }
  }]);
  return SourceMapSource;
}(Source);

__webpack_require__(4)(SourceMapSource.prototype);

module.exports = SourceMapSource;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/


var SourceNode = __webpack_require__(0).SourceNode;

var SourceMapConsumer = __webpack_require__(0).SourceMapConsumer;

var SourceListMap = __webpack_require__(2).SourceListMap;

var Source = __webpack_require__(1);

var LineToLineMappedSource =
/*#__PURE__*/
function (_Source) {
  babelHelpers.inherits(LineToLineMappedSource, _Source);

  function LineToLineMappedSource(value, name, originalSource) {
    var _this;

    babelHelpers.classCallCheck(this, LineToLineMappedSource);
    _this = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(LineToLineMappedSource).call(this));
    _this._value = value;
    _this._name = name;
    _this._originalSource = originalSource;
    return _this;
  }

  babelHelpers.createClass(LineToLineMappedSource, [{
    key: "source",
    value: function source() {
      return this._value;
    }
  }, {
    key: "node",
    value: function node(options) {
      var value = this._value;
      var name = this._name;
      var lines = value.split("\n");
      var node = new SourceNode(null, null, null, lines.map(function (line, idx) {
        return new SourceNode(idx + 1, 0, name, line + (idx != lines.length - 1 ? "\n" : ""));
      }));
      node.setSourceContent(name, this._originalSource);
      return node;
    }
  }, {
    key: "listMap",
    value: function listMap(options) {
      return new SourceListMap(this._value, this._name, this._originalSource);
    }
  }, {
    key: "updateHash",
    value: function updateHash(hash) {
      hash.update(this._value);
      hash.update(this._originalSource);
    }
  }]);
  return LineToLineMappedSource;
}(Source);

__webpack_require__(4)(LineToLineMappedSource.prototype);

module.exports = LineToLineMappedSource;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/


var Source = __webpack_require__(1);

var CachedSource =
/*#__PURE__*/
function (_Source) {
  babelHelpers.inherits(CachedSource, _Source);

  function CachedSource(source) {
    var _this;

    babelHelpers.classCallCheck(this, CachedSource);
    _this = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(CachedSource).call(this));
    _this._source = source;
    _this._cachedSource = undefined;
    _this._cachedSize = undefined;
    _this._cachedMaps = {};
    if (source.node) _this.node = function (options) {
      return this._source.node(options);
    };
    if (source.listMap) _this.listMap = function (options) {
      return this._source.listMap(options);
    };
    return _this;
  }

  babelHelpers.createClass(CachedSource, [{
    key: "source",
    value: function source() {
      if (typeof this._cachedSource !== "undefined") return this._cachedSource;
      return this._cachedSource = this._source.source();
    }
  }, {
    key: "size",
    value: function size() {
      if (typeof this._cachedSize !== "undefined") return this._cachedSize;
      if (typeof this._cachedSource !== "undefined") return this._cachedSize = this._cachedSource.length;
      return this._cachedSize = this._source.size();
    }
  }, {
    key: "sourceAndMap",
    value: function sourceAndMap(options) {
      var key = JSON.stringify(options);
      if (typeof this._cachedSource !== "undefined" && key in this._cachedMaps) return {
        source: this._cachedSource,
        map: this._cachedMaps[key]
      };else if (typeof this._cachedSource !== "undefined") {
        return {
          source: this._cachedSource,
          map: this._cachedMaps[key] = this._source.map(options)
        };
      } else if (key in this._cachedMaps) {
        return {
          source: this._cachedSource = this._source.source(),
          map: this._cachedMaps[key]
        };
      }

      var result = this._source.sourceAndMap(options);

      this._cachedSource = result.source;
      this._cachedMaps[key] = result.map;
      return {
        source: this._cachedSource,
        map: this._cachedMaps[key]
      };
    }
  }, {
    key: "map",
    value: function map(options) {
      if (!options) options = {};
      var key = JSON.stringify(options);
      if (key in this._cachedMaps) return this._cachedMaps[key];
      return this._cachedMaps[key] = this._source.map();
    }
  }, {
    key: "updateHash",
    value: function updateHash(hash) {
      this._source.updateHash(hash);
    }
  }]);
  return CachedSource;
}(Source);

module.exports = CachedSource;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/


var SourceNode = __webpack_require__(0).SourceNode;

var SourceListMap = __webpack_require__(2).SourceListMap;

var Source = __webpack_require__(1);

var ConcatSource =
/*#__PURE__*/
function (_Source) {
  babelHelpers.inherits(ConcatSource, _Source);

  function ConcatSource() {
    var _this;

    babelHelpers.classCallCheck(this, ConcatSource);
    _this = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(ConcatSource).call(this));
    _this.children = [];

    for (var i = 0; i < arguments.length; i++) {
      var item = arguments[i];

      if (item instanceof ConcatSource) {
        var children = item.children;

        for (var j = 0; j < children.length; j++) {
          _this.children.push(children[j]);
        }
      } else {
        _this.children.push(item);
      }
    }

    return _this;
  }

  babelHelpers.createClass(ConcatSource, [{
    key: "add",
    value: function add(item) {
      if (item instanceof ConcatSource) {
        var children = item.children;

        for (var j = 0; j < children.length; j++) {
          this.children.push(children[j]);
        }
      } else {
        this.children.push(item);
      }
    }
  }, {
    key: "source",
    value: function source() {
      var source = "";
      var children = this.children;

      for (var i = 0; i < children.length; i++) {
        var child = children[i];
        source += typeof child === "string" ? child : child.source();
      }

      return source;
    }
  }, {
    key: "size",
    value: function size() {
      var size = 0;
      var children = this.children;

      for (var i = 0; i < children.length; i++) {
        var child = children[i];
        size += typeof child === "string" ? child.length : child.size();
      }

      return size;
    }
  }, {
    key: "node",
    value: function node(options) {
      var node = new SourceNode(null, null, null, this.children.map(function (item) {
        return typeof item === "string" ? item : item.node(options);
      }));
      return node;
    }
  }, {
    key: "listMap",
    value: function listMap(options) {
      var map = new SourceListMap();
      var children = this.children;

      for (var i = 0; i < children.length; i++) {
        var item = children[i];
        if (typeof item === "string") map.add(item);else map.add(item.listMap(options));
      }

      return map;
    }
  }, {
    key: "updateHash",
    value: function updateHash(hash) {
      var children = this.children;

      for (var i = 0; i < children.length; i++) {
        var item = children[i];
        if (typeof item === "string") hash.update(item);else item.updateHash(hash);
      }
    }
  }]);
  return ConcatSource;
}(Source);

__webpack_require__(4)(ConcatSource.prototype);

module.exports = ConcatSource;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/


var Source = __webpack_require__(1);

var SourceNode = __webpack_require__(0).SourceNode;

var SourceListMap = __webpack_require__(2).SourceListMap;

var fromStringWithSourceMap = __webpack_require__(2).fromStringWithSourceMap;

var SourceMapConsumer = __webpack_require__(0).SourceMapConsumer;

var Replacement = function Replacement(start, end, content, insertIndex, name) {
  babelHelpers.classCallCheck(this, Replacement);
  this.start = start;
  this.end = end;
  this.content = content;
  this.insertIndex = insertIndex;
  this.name = name;
};

var ReplaceSource =
/*#__PURE__*/
function (_Source) {
  babelHelpers.inherits(ReplaceSource, _Source);

  function ReplaceSource(source, name) {
    var _this;

    babelHelpers.classCallCheck(this, ReplaceSource);
    _this = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(ReplaceSource).call(this));
    _this._source = source;
    _this._name = name;
    /** @type {Replacement[]} */

    _this.replacements = [];
    return _this;
  }

  babelHelpers.createClass(ReplaceSource, [{
    key: "replace",
    value: function replace(start, end, newValue, name) {
      if (typeof newValue !== "string") throw new Error("insertion must be a string, but is a " + babelHelpers.typeof(newValue));
      this.replacements.push(new Replacement(start, end, newValue, this.replacements.length, name));
    }
  }, {
    key: "insert",
    value: function insert(pos, newValue, name) {
      if (typeof newValue !== "string") throw new Error("insertion must be a string, but is a " + babelHelpers.typeof(newValue) + ": " + newValue);
      this.replacements.push(new Replacement(pos, pos - 1, newValue, this.replacements.length, name));
    }
  }, {
    key: "source",
    value: function source(options) {
      return this._replaceString(this._source.source());
    }
  }, {
    key: "original",
    value: function original() {
      return this._source;
    }
  }, {
    key: "_sortReplacements",
    value: function _sortReplacements() {
      this.replacements.sort(function (a, b) {
        var diff = b.end - a.end;
        if (diff !== 0) return diff;
        diff = b.start - a.start;
        if (diff !== 0) return diff;
        return b.insertIndex - a.insertIndex;
      });
    }
  }, {
    key: "_replaceString",
    value: function _replaceString(str) {
      if (typeof str !== "string") throw new Error("str must be a string, but is a " + babelHelpers.typeof(str) + ": " + str);

      this._sortReplacements();

      var result = [str];
      this.replacements.forEach(function (repl) {
        var remSource = result.pop();

        var splitted1 = this._splitString(remSource, Math.floor(repl.end + 1));

        var splitted2 = this._splitString(splitted1[0], Math.floor(repl.start));

        result.push(splitted1[1], repl.content, splitted2[0]);
      }, this); // write out result array in reverse order

      var resultStr = "";

      for (var i = result.length - 1; i >= 0; --i) {
        resultStr += result[i];
      }

      return resultStr;
    }
  }, {
    key: "node",
    value: function node(options) {
      var node = this._source.node(options);

      if (this.replacements.length === 0) {
        return node;
      }

      this._sortReplacements();

      var replace = new ReplacementEnumerator(this.replacements);
      var output = [];
      var position = 0;
      var sources = Object.create(null);
      var sourcesInLines = Object.create(null); // We build a new list of SourceNodes in "output"
      // from the original mapping data

      var result = new SourceNode(); // We need to add source contents manually
      // because "walk" will not handle it

      node.walkSourceContents(function (sourceFile, sourceContent) {
        result.setSourceContent(sourceFile, sourceContent);
        sources["$" + sourceFile] = sourceContent;
      });

      var replaceInStringNode = this._replaceInStringNode.bind(this, output, replace, function getOriginalSource(mapping) {
        var key = "$" + mapping.source;
        var lines = sourcesInLines[key];

        if (!lines) {
          var source = sources[key];
          if (!source) return null;
          lines = source.split("\n").map(function (line) {
            return line + "\n";
          });
          sourcesInLines[key] = lines;
        } // line is 1-based


        if (mapping.line > lines.length) return null;
        var line = lines[mapping.line - 1];
        return line.substr(mapping.column);
      });

      node.walk(function (chunk, mapping) {
        position = replaceInStringNode(chunk, position, mapping);
      }); // If any replacements occur after the end of the original file, then we append them
      // directly to the end of the output

      var remaining = replace.footer();

      if (remaining) {
        output.push(remaining);
      }

      result.add(output);
      return result;
    }
  }, {
    key: "listMap",
    value: function listMap(options) {
      this._sortReplacements();

      var map = this._source.listMap(options);

      var currentIndex = 0;
      var replacements = this.replacements;
      var idxReplacement = replacements.length - 1;
      var removeChars = 0;
      map = map.mapGeneratedCode(function (str) {
        var newCurrentIndex = currentIndex + str.length;

        if (removeChars > str.length) {
          removeChars -= str.length;
          str = "";
        } else {
          if (removeChars > 0) {
            str = str.substr(removeChars);
            currentIndex += removeChars;
            removeChars = 0;
          }

          var finalStr = "";

          while (idxReplacement >= 0 && replacements[idxReplacement].start < newCurrentIndex) {
            var repl = replacements[idxReplacement];
            var start = Math.floor(repl.start);
            var end = Math.floor(repl.end + 1);
            var before = str.substr(0, Math.max(0, start - currentIndex));

            if (end <= newCurrentIndex) {
              var after = str.substr(Math.max(0, end - currentIndex));
              finalStr += before + repl.content;
              str = after;
              currentIndex = Math.max(currentIndex, end);
            } else {
              finalStr += before + repl.content;
              str = "";
              removeChars = end - newCurrentIndex;
            }

            idxReplacement--;
          }

          str = finalStr + str;
        }

        currentIndex = newCurrentIndex;
        return str;
      });
      var extraCode = "";

      while (idxReplacement >= 0) {
        extraCode += replacements[idxReplacement].content;
        idxReplacement--;
      }

      if (extraCode) {
        map.add(extraCode);
      }

      return map;
    }
  }, {
    key: "_splitString",
    value: function _splitString(str, position) {
      return position <= 0 ? ["", str] : [str.substr(0, position), str.substr(position)];
    }
  }, {
    key: "_replaceInStringNode",
    value: function _replaceInStringNode(output, replace, getOriginalSource, node, position, mapping) {
      var original = undefined;

      do {
        var splitPosition = replace.position - position; // If multiple replaces occur in the same location then the splitPosition may be
        // before the current position for the subsequent splits. Ensure it is >= 0

        if (splitPosition < 0) {
          splitPosition = 0;
        }

        if (splitPosition >= node.length || replace.done) {
          if (replace.emit) {
            var nodeEnd = new SourceNode(mapping.line, mapping.column, mapping.source, node, mapping.name);
            output.push(nodeEnd);
          }

          return position + node.length;
        }

        var originalColumn = mapping.column; // Try to figure out if generated code matches original code of this segement
        // If this is the case we assume that it's allowed to move mapping.column
        // Because getOriginalSource can be expensive we only do it when neccessary

        var nodePart;

        if (splitPosition > 0) {
          nodePart = node.slice(0, splitPosition);

          if (original === undefined) {
            original = getOriginalSource(mapping);
          }

          if (original && original.length >= splitPosition && original.startsWith(nodePart)) {
            mapping.column += splitPosition;
            original = original.substr(splitPosition);
          }
        }

        var emit = replace.next();

        if (!emit) {
          // Stop emitting when we have found the beginning of the string to replace.
          // Emit the part of the string before splitPosition
          if (splitPosition > 0) {
            var nodeStart = new SourceNode(mapping.line, originalColumn, mapping.source, nodePart, mapping.name);
            output.push(nodeStart);
          } // Emit the replacement value


          if (replace.value) {
            output.push(new SourceNode(mapping.line, mapping.column, mapping.source, replace.value, mapping.name || replace.name));
          }
        } // Recurse with remainder of the string as there may be multiple replaces within a single node


        node = node.substr(splitPosition);
        position += splitPosition;
      } while (true);
    }
  }]);
  return ReplaceSource;
}(Source);

var ReplacementEnumerator =
/*#__PURE__*/
function () {
  /**
   * @param {Replacement[]} replacements list of replacements
   */
  function ReplacementEnumerator(replacements) {
    babelHelpers.classCallCheck(this, ReplacementEnumerator);
    this.replacements = replacements || [];
    this.index = this.replacements.length;
    this.done = false;
    this.emit = false; // Set initial start position

    this.next();
  }

  babelHelpers.createClass(ReplacementEnumerator, [{
    key: "next",
    value: function next() {
      if (this.done) return true;

      if (this.emit) {
        // Start point found. stop emitting. set position to find end
        var repl = this.replacements[this.index];
        var end = Math.floor(repl.end + 1);
        this.position = end;
        this.value = repl.content;
        this.name = repl.name;
      } else {
        // End point found. start emitting. set position to find next start
        this.index--;

        if (this.index < 0) {
          this.done = true;
        } else {
          var nextRepl = this.replacements[this.index];
          var start = Math.floor(nextRepl.start);
          this.position = start;
        }
      }

      if (this.position < 0) this.position = 0;
      this.emit = !this.emit;
      return this.emit;
    }
  }, {
    key: "footer",
    value: function footer() {
      if (!this.done && !this.emit) this.next(); // If we finished _replaceInNode mid emit we advance to next entry

      if (this.done) {
        return [];
      } else {
        var resultStr = "";

        for (var i = this.index; i >= 0; i--) {
          var repl = this.replacements[i]; // this doesn't need to handle repl.name, because in SourceMaps generated code
          // without pointer to original source can't have a name

          resultStr += repl.content;
        }

        return resultStr;
      }
    }
  }]);
  return ReplacementEnumerator;
}();

__webpack_require__(4)(ReplaceSource.prototype);

module.exports = ReplaceSource;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/


var Source = __webpack_require__(1);

var SourceNode = __webpack_require__(0).SourceNode;

var REPLACE_REGEX = /\n(?=.|\s)/g;

function cloneAndPrefix(node, prefix, append) {
  if (typeof node === "string") {
    var result = node.replace(REPLACE_REGEX, "\n" + prefix);
    if (append.length > 0) result = append.pop() + result;
    if (/\n$/.test(node)) append.push(prefix);
    return result;
  } else {
    var newNode = new SourceNode(node.line, node.column, node.source, node.children.map(function (node) {
      return cloneAndPrefix(node, prefix, append);
    }), node.name);
    newNode.sourceContents = node.sourceContents;
    return newNode;
  }
}

;

var PrefixSource =
/*#__PURE__*/
function (_Source) {
  babelHelpers.inherits(PrefixSource, _Source);

  function PrefixSource(prefix, source) {
    var _this;

    babelHelpers.classCallCheck(this, PrefixSource);
    _this = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(PrefixSource).call(this));
    _this._source = source;
    _this._prefix = prefix;
    return _this;
  }

  babelHelpers.createClass(PrefixSource, [{
    key: "source",
    value: function source() {
      var node = typeof this._source === "string" ? this._source : this._source.source();
      var prefix = this._prefix;
      return prefix + node.replace(REPLACE_REGEX, "\n" + prefix);
    }
  }, {
    key: "node",
    value: function node(options) {
      var node = this._source.node(options);

      var append = [this._prefix];
      return new SourceNode(null, null, null, [cloneAndPrefix(node, this._prefix, append)]);
    }
  }, {
    key: "listMap",
    value: function listMap(options) {
      var prefix = this._prefix;

      var map = this._source.listMap(options);

      return map.mapGeneratedCode(function (code) {
        return prefix + code.replace(REPLACE_REGEX, "\n" + prefix);
      });
    }
  }, {
    key: "updateHash",
    value: function updateHash(hash) {
      if (typeof this._source === "string") hash.update(this._source);else this._source.updateHash(hash);
      if (typeof this._prefix === "string") hash.update(this._prefix);else this._prefix.updateHash(hash);
    }
  }]);
  return PrefixSource;
}(Source);

__webpack_require__(4)(PrefixSource.prototype);

module.exports = PrefixSource;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* eslint-disable
  strict
*/


var validateOptions = __webpack_require__(47);

module.exports = validateOptions;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* eslint-disable
  strict,
  no-param-reassign
*/


var fs = __webpack_require__(48);

var path = __webpack_require__(49);

var Ajv = __webpack_require__(51);

var errors = __webpack_require__(84);

var keywords = __webpack_require__(86);

var ValidationError = __webpack_require__(113);

var ajv = new Ajv({
  allErrors: true,
  jsonPointers: true
});
errors(ajv);
keywords(ajv, ['instanceof', 'typeof']);

var validateOptions = function validateOptions(schema, options, name) {
  if (typeof schema === 'string') {
    schema = fs.readFileSync(path.resolve(schema), 'utf8');
    schema = JSON.parse(schema);
  }

  if (!ajv.validate(schema, options)) {
    throw new ValidationError(ajv.errors, name);
  }

  return true;
};

module.exports = validateOptions;

/***/ }),
/* 48 */
/***/ (function(module, exports) {



/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;

  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];

    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  } // if the path is allowed to go above the root, restore leading ..s


  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
} // Split a filename into [root, dir, basename, ext], unix version
// 'root' is just a slash, or nothing.


var splitPathRe = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;

var splitPath = function splitPath(filename) {
  return splitPathRe.exec(filename).slice(1);
}; // path.resolve([from ...], to)
// posix version


exports.resolve = function () {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = i >= 0 ? arguments[i] : process.cwd(); // Skip empty and invalid entries

    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  } // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)
  // Normalize the path


  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function (p) {
    return !!p;
  }), !resolvedAbsolute).join('/');
  return (resolvedAbsolute ? '/' : '') + resolvedPath || '.';
}; // path.normalize(path)
// posix version


exports.normalize = function (path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/'; // Normalize the path

  path = normalizeArray(filter(path.split('/'), function (p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }

  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
}; // posix version


exports.isAbsolute = function (path) {
  return path.charAt(0) === '/';
}; // posix version


exports.join = function () {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function (p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }

    return p;
  }).join('/'));
}; // path.relative(from, to)
// posix version


exports.relative = function (from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;

    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;

    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));
  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;

  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];

  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));
  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function (path) {
  var result = splitPath(path),
      root = result[0],
      dir = result[1];

  if (!root && !dir) {
    // No dirname whatsoever
    return '.';
  }

  if (dir) {
    // It has a dirname, strip trailing slash
    dir = dir.substr(0, dir.length - 1);
  }

  return root + dir;
};

exports.basename = function (path, ext) {
  var f = splitPath(path)[2]; // TODO: make this comparison case-insensitive on windows?

  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }

  return f;
};

exports.extname = function (path) {
  return splitPath(path)[3];
};

function filter(xs, f) {
  if (xs.filter) return xs.filter(f);
  var res = [];

  for (var i = 0; i < xs.length; i++) {
    if (f(xs[i], i, xs)) res.push(xs[i]);
  }

  return res;
} // String.prototype.substr - negative index don't work in IE8


var substr = 'ab'.substr(-1) === 'b' ? function (str, start, len) {
  return str.substr(start, len);
} : function (str, start, len) {
  if (start < 0) start = str.length + start;
  return str.substr(start, len);
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(50)))

/***/ }),
/* 50 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}

function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}

(function () {
  try {
    if (typeof setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }

  try {
    if (typeof clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();

function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  } // if setTimeout wasn't available but was latter defined


  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}

function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  } // if clearTimeout wasn't available but was latter defined


  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}

var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }

  draining = false;

  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }

  if (queue.length) {
    drainQueue();
  }
}

function drainQueue() {
  if (draining) {
    return;
  }

  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;

  while (len) {
    currentQueue = queue;
    queue = [];

    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }

    queueIndex = -1;
    len = queue.length;
  }

  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}

process.nextTick = function (fun) {
  var args = new Array(arguments.length - 1);

  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }

  queue.push(new Item(fun, args));

  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
}; // v8 likes predictible objects


function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}

Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues

process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
  return [];
};

process.binding = function (name) {
  throw new Error('process.binding is not supported');
};

process.cwd = function () {
  return '/';
};

process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};

process.umask = function () {
  return 0;
};

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var compileSchema = __webpack_require__(52),
    resolve = __webpack_require__(10),
    Cache = __webpack_require__(56),
    SchemaObject = __webpack_require__(20),
    stableStringify = __webpack_require__(21),
    formats = __webpack_require__(57),
    rules = __webpack_require__(58),
    $dataMetaSchema = __webpack_require__(79),
    util = __webpack_require__(5);

module.exports = Ajv;
Ajv.prototype.validate = validate;
Ajv.prototype.compile = compile;
Ajv.prototype.addSchema = addSchema;
Ajv.prototype.addMetaSchema = addMetaSchema;
Ajv.prototype.validateSchema = validateSchema;
Ajv.prototype.getSchema = getSchema;
Ajv.prototype.removeSchema = removeSchema;
Ajv.prototype.addFormat = addFormat;
Ajv.prototype.errorsText = errorsText;
Ajv.prototype._addSchema = _addSchema;
Ajv.prototype._compile = _compile;
Ajv.prototype.compileAsync = __webpack_require__(80);

var customKeyword = __webpack_require__(81);

Ajv.prototype.addKeyword = customKeyword.add;
Ajv.prototype.getKeyword = customKeyword.get;
Ajv.prototype.removeKeyword = customKeyword.remove;

var errorClasses = __webpack_require__(12);

Ajv.ValidationError = errorClasses.Validation;
Ajv.MissingRefError = errorClasses.MissingRef;
Ajv.$dataMetaSchema = $dataMetaSchema;
var META_SCHEMA_ID = 'http://json-schema.org/draft-07/schema';
var META_IGNORE_OPTIONS = ['removeAdditional', 'useDefaults', 'coerceTypes'];
var META_SUPPORT_DATA = ['/properties'];
/**
 * Creates validator instance.
 * Usage: `Ajv(opts)`
 * @param {Object} opts optional options
 * @return {Object} ajv instance
 */

function Ajv(opts) {
  if (!(this instanceof Ajv)) return new Ajv(opts);
  opts = this._opts = util.copy(opts) || {};
  setLogger(this);
  this._schemas = {};
  this._refs = {};
  this._fragments = {};
  this._formats = formats(opts.format);
  this._cache = opts.cache || new Cache();
  this._loadingSchemas = {};
  this._compilations = [];
  this.RULES = rules();
  this._getId = chooseGetId(opts);
  opts.loopRequired = opts.loopRequired || Infinity;
  if (opts.errorDataPath == 'property') opts._errorDataPathProperty = true;
  if (opts.serialize === undefined) opts.serialize = stableStringify;
  this._metaOpts = getMetaSchemaOptions(this);
  if (opts.formats) addInitialFormats(this);
  addDefaultMetaSchema(this);
  if (babelHelpers.typeof(opts.meta) == 'object') this.addMetaSchema(opts.meta);
  if (opts.nullable) this.addKeyword('nullable', {
    metaSchema: {
      type: 'boolean'
    }
  });
  addInitialSchemas(this);
}
/**
 * Validate data using schema
 * Schema will be compiled and cached (using serialized JSON as key. [fast-json-stable-stringify](https://github.com/epoberezkin/fast-json-stable-stringify) is used to serialize.
 * @this   Ajv
 * @param  {String|Object} schemaKeyRef key, ref or schema object
 * @param  {Any} data to be validated
 * @return {Boolean} validation result. Errors from the last validation will be available in `ajv.errors` (and also in compiled schema: `schema.errors`).
 */


function validate(schemaKeyRef, data) {
  var v;

  if (typeof schemaKeyRef == 'string') {
    v = this.getSchema(schemaKeyRef);
    if (!v) throw new Error('no schema with key or ref "' + schemaKeyRef + '"');
  } else {
    var schemaObj = this._addSchema(schemaKeyRef);

    v = schemaObj.validate || this._compile(schemaObj);
  }

  var valid = v(data);
  if (v.$async !== true) this.errors = v.errors;
  return valid;
}
/**
 * Create validating function for passed schema.
 * @this   Ajv
 * @param  {Object} schema schema object
 * @param  {Boolean} _meta true if schema is a meta-schema. Used internally to compile meta schemas of custom keywords.
 * @return {Function} validating function
 */


function compile(schema, _meta) {
  var schemaObj = this._addSchema(schema, undefined, _meta);

  return schemaObj.validate || this._compile(schemaObj);
}
/**
 * Adds schema to the instance.
 * @this   Ajv
 * @param {Object|Array} schema schema or array of schemas. If array is passed, `key` and other parameters will be ignored.
 * @param {String} key Optional schema key. Can be passed to `validate` method instead of schema object or id/ref. One schema per instance can have empty `id` and `key`.
 * @param {Boolean} _skipValidation true to skip schema validation. Used internally, option validateSchema should be used instead.
 * @param {Boolean} _meta true if schema is a meta-schema. Used internally, addMetaSchema should be used instead.
 * @return {Ajv} this for method chaining
 */


function addSchema(schema, key, _skipValidation, _meta) {
  if (Array.isArray(schema)) {
    for (var i = 0; i < schema.length; i++) {
      this.addSchema(schema[i], undefined, _skipValidation, _meta);
    }

    return this;
  }

  var id = this._getId(schema);

  if (id !== undefined && typeof id != 'string') throw new Error('schema id must be string');
  key = resolve.normalizeId(key || id);
  checkUnique(this, key);
  this._schemas[key] = this._addSchema(schema, _skipValidation, _meta, true);
  return this;
}
/**
 * Add schema that will be used to validate other schemas
 * options in META_IGNORE_OPTIONS are alway set to false
 * @this   Ajv
 * @param {Object} schema schema object
 * @param {String} key optional schema key
 * @param {Boolean} skipValidation true to skip schema validation, can be used to override validateSchema option for meta-schema
 * @return {Ajv} this for method chaining
 */


function addMetaSchema(schema, key, skipValidation) {
  this.addSchema(schema, key, skipValidation, true);
  return this;
}
/**
 * Validate schema
 * @this   Ajv
 * @param {Object} schema schema to validate
 * @param {Boolean} throwOrLogError pass true to throw (or log) an error if invalid
 * @return {Boolean} true if schema is valid
 */


function validateSchema(schema, throwOrLogError) {
  var $schema = schema.$schema;
  if ($schema !== undefined && typeof $schema != 'string') throw new Error('$schema must be a string');
  $schema = $schema || this._opts.defaultMeta || defaultMeta(this);

  if (!$schema) {
    this.logger.warn('meta-schema not available');
    this.errors = null;
    return true;
  }

  var valid = this.validate($schema, schema);

  if (!valid && throwOrLogError) {
    var message = 'schema is invalid: ' + this.errorsText();
    if (this._opts.validateSchema == 'log') this.logger.error(message);else throw new Error(message);
  }

  return valid;
}

function defaultMeta(self) {
  var meta = self._opts.meta;
  self._opts.defaultMeta = babelHelpers.typeof(meta) == 'object' ? self._getId(meta) || meta : self.getSchema(META_SCHEMA_ID) ? META_SCHEMA_ID : undefined;
  return self._opts.defaultMeta;
}
/**
 * Get compiled schema from the instance by `key` or `ref`.
 * @this   Ajv
 * @param  {String} keyRef `key` that was passed to `addSchema` or full schema reference (`schema.id` or resolved id).
 * @return {Function} schema validating function (with property `schema`).
 */


function getSchema(keyRef) {
  var schemaObj = _getSchemaObj(this, keyRef);

  switch (babelHelpers.typeof(schemaObj)) {
    case 'object':
      return schemaObj.validate || this._compile(schemaObj);

    case 'string':
      return this.getSchema(schemaObj);

    case 'undefined':
      return _getSchemaFragment(this, keyRef);
  }
}

function _getSchemaFragment(self, ref) {
  var res = resolve.schema.call(self, {
    schema: {}
  }, ref);

  if (res) {
    var schema = res.schema,
        root = res.root,
        baseId = res.baseId;
    var v = compileSchema.call(self, schema, root, undefined, baseId);
    self._fragments[ref] = new SchemaObject({
      ref: ref,
      fragment: true,
      schema: schema,
      root: root,
      baseId: baseId,
      validate: v
    });
    return v;
  }
}

function _getSchemaObj(self, keyRef) {
  keyRef = resolve.normalizeId(keyRef);
  return self._schemas[keyRef] || self._refs[keyRef] || self._fragments[keyRef];
}
/**
 * Remove cached schema(s).
 * If no parameter is passed all schemas but meta-schemas are removed.
 * If RegExp is passed all schemas with key/id matching pattern but meta-schemas are removed.
 * Even if schema is referenced by other schemas it still can be removed as other schemas have local references.
 * @this   Ajv
 * @param  {String|Object|RegExp} schemaKeyRef key, ref, pattern to match key/ref or schema object
 * @return {Ajv} this for method chaining
 */


function removeSchema(schemaKeyRef) {
  if (schemaKeyRef instanceof RegExp) {
    _removeAllSchemas(this, this._schemas, schemaKeyRef);

    _removeAllSchemas(this, this._refs, schemaKeyRef);

    return this;
  }

  switch (babelHelpers.typeof(schemaKeyRef)) {
    case 'undefined':
      _removeAllSchemas(this, this._schemas);

      _removeAllSchemas(this, this._refs);

      this._cache.clear();

      return this;

    case 'string':
      var schemaObj = _getSchemaObj(this, schemaKeyRef);

      if (schemaObj) this._cache.del(schemaObj.cacheKey);
      delete this._schemas[schemaKeyRef];
      delete this._refs[schemaKeyRef];
      return this;

    case 'object':
      var serialize = this._opts.serialize;
      var cacheKey = serialize ? serialize(schemaKeyRef) : schemaKeyRef;

      this._cache.del(cacheKey);

      var id = this._getId(schemaKeyRef);

      if (id) {
        id = resolve.normalizeId(id);
        delete this._schemas[id];
        delete this._refs[id];
      }

  }

  return this;
}

function _removeAllSchemas(self, schemas, regex) {
  for (var keyRef in schemas) {
    var schemaObj = schemas[keyRef];

    if (!schemaObj.meta && (!regex || regex.test(keyRef))) {
      self._cache.del(schemaObj.cacheKey);

      delete schemas[keyRef];
    }
  }
}
/* @this   Ajv */


function _addSchema(schema, skipValidation, meta, shouldAddSchema) {
  if (babelHelpers.typeof(schema) != 'object' && typeof schema != 'boolean') throw new Error('schema should be object or boolean');
  var serialize = this._opts.serialize;
  var cacheKey = serialize ? serialize(schema) : schema;

  var cached = this._cache.get(cacheKey);

  if (cached) return cached;
  shouldAddSchema = shouldAddSchema || this._opts.addUsedSchema !== false;
  var id = resolve.normalizeId(this._getId(schema));
  if (id && shouldAddSchema) checkUnique(this, id);
  var willValidate = this._opts.validateSchema !== false && !skipValidation;
  var recursiveMeta;
  if (willValidate && !(recursiveMeta = id && id == resolve.normalizeId(schema.$schema))) this.validateSchema(schema, true);
  var localRefs = resolve.ids.call(this, schema);
  var schemaObj = new SchemaObject({
    id: id,
    schema: schema,
    localRefs: localRefs,
    cacheKey: cacheKey,
    meta: meta
  });
  if (id[0] != '#' && shouldAddSchema) this._refs[id] = schemaObj;

  this._cache.put(cacheKey, schemaObj);

  if (willValidate && recursiveMeta) this.validateSchema(schema, true);
  return schemaObj;
}
/* @this   Ajv */


function _compile(schemaObj, root) {
  if (schemaObj.compiling) {
    schemaObj.validate = callValidate;
    callValidate.schema = schemaObj.schema;
    callValidate.errors = null;
    callValidate.root = root ? root : callValidate;
    if (schemaObj.schema.$async === true) callValidate.$async = true;
    return callValidate;
  }

  schemaObj.compiling = true;
  var currentOpts;

  if (schemaObj.meta) {
    currentOpts = this._opts;
    this._opts = this._metaOpts;
  }

  var v;

  try {
    v = compileSchema.call(this, schemaObj.schema, root, schemaObj.localRefs);
  } catch (e) {
    delete schemaObj.validate;
    throw e;
  } finally {
    schemaObj.compiling = false;
    if (schemaObj.meta) this._opts = currentOpts;
  }

  schemaObj.validate = v;
  schemaObj.refs = v.refs;
  schemaObj.refVal = v.refVal;
  schemaObj.root = v.root;
  return v;
  /* @this   {*} - custom context, see passContext option */

  function callValidate() {
    /* jshint validthis: true */
    var _validate = schemaObj.validate;

    var result = _validate.apply(this, arguments);

    callValidate.errors = _validate.errors;
    return result;
  }
}

function chooseGetId(opts) {
  switch (opts.schemaId) {
    case 'auto':
      return _get$IdOrId;

    case 'id':
      return _getId;

    default:
      return _get$Id;
  }
}
/* @this   Ajv */


function _getId(schema) {
  if (schema.$id) this.logger.warn('schema $id ignored', schema.$id);
  return schema.id;
}
/* @this   Ajv */


function _get$Id(schema) {
  if (schema.id) this.logger.warn('schema id ignored', schema.id);
  return schema.$id;
}

function _get$IdOrId(schema) {
  if (schema.$id && schema.id && schema.$id != schema.id) throw new Error('schema $id is different from id');
  return schema.$id || schema.id;
}
/**
 * Convert array of error message objects to string
 * @this   Ajv
 * @param  {Array<Object>} errors optional array of validation errors, if not passed errors from the instance are used.
 * @param  {Object} options optional options with properties `separator` and `dataVar`.
 * @return {String} human readable string with all errors descriptions
 */


function errorsText(errors, options) {
  errors = errors || this.errors;
  if (!errors) return 'No errors';
  options = options || {};
  var separator = options.separator === undefined ? ', ' : options.separator;
  var dataVar = options.dataVar === undefined ? 'data' : options.dataVar;
  var text = '';

  for (var i = 0; i < errors.length; i++) {
    var e = errors[i];
    if (e) text += dataVar + e.dataPath + ' ' + e.message + separator;
  }

  return text.slice(0, -separator.length);
}
/**
 * Add custom format
 * @this   Ajv
 * @param {String} name format name
 * @param {String|RegExp|Function} format string is converted to RegExp; function should return boolean (true when valid)
 * @return {Ajv} this for method chaining
 */


function addFormat(name, format) {
  if (typeof format == 'string') format = new RegExp(format);
  this._formats[name] = format;
  return this;
}

function addDefaultMetaSchema(self) {
  var $dataSchema;

  if (self._opts.$data) {
    $dataSchema = __webpack_require__(83);
    self.addMetaSchema($dataSchema, $dataSchema.$id, true);
  }

  if (self._opts.meta === false) return;

  var metaSchema = __webpack_require__(27);

  if (self._opts.$data) metaSchema = $dataMetaSchema(metaSchema, META_SUPPORT_DATA);
  self.addMetaSchema(metaSchema, META_SCHEMA_ID, true);
  self._refs['http://json-schema.org/schema'] = META_SCHEMA_ID;
}

function addInitialSchemas(self) {
  var optsSchemas = self._opts.schemas;
  if (!optsSchemas) return;
  if (Array.isArray(optsSchemas)) self.addSchema(optsSchemas);else for (var key in optsSchemas) {
    self.addSchema(optsSchemas[key], key);
  }
}

function addInitialFormats(self) {
  for (var name in self._opts.formats) {
    var format = self._opts.formats[name];
    self.addFormat(name, format);
  }
}

function checkUnique(self, id) {
  if (self._schemas[id] || self._refs[id]) throw new Error('schema with key or id "' + id + '" already exists');
}

function getMetaSchemaOptions(self) {
  var metaOpts = util.copy(self._opts);

  for (var i = 0; i < META_IGNORE_OPTIONS.length; i++) {
    delete metaOpts[META_IGNORE_OPTIONS[i]];
  }

  return metaOpts;
}

function setLogger(self) {
  var logger = self._opts.logger;

  if (logger === false) {
    self.logger = {
      log: noop,
      warn: noop,
      error: noop
    };
  } else {
    if (logger === undefined) logger = console;
    if (!(babelHelpers.typeof(logger) == 'object' && logger.log && logger.warn && logger.error)) throw new Error('logger must implement log, warn and error methods');
    self.logger = logger;
  }
}

function noop() {}

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var resolve = __webpack_require__(10),
    util = __webpack_require__(5),
    errorClasses = __webpack_require__(12),
    stableStringify = __webpack_require__(21);

var validateGenerator = __webpack_require__(22);
/**
 * Functions below are used inside compiled validations function
 */


var ucs2length = util.ucs2length;

var equal = __webpack_require__(11); // this error is thrown by async schemas to return validation errors via exception


var ValidationError = errorClasses.Validation;
module.exports = compile;
/**
 * Compiles schema to validation function
 * @this   Ajv
 * @param  {Object} schema schema object
 * @param  {Object} root object with information about the root schema for this schema
 * @param  {Object} localRefs the hash of local references inside the schema (created by resolve.id), used for inline resolution
 * @param  {String} baseId base ID for IDs in the schema
 * @return {Function} validation function
 */

function compile(schema, root, localRefs, baseId) {
  /* jshint validthis: true, evil: true */

  /* eslint no-shadow: 0 */
  var self = this,
      opts = this._opts,
      refVal = [undefined],
      refs = {},
      patterns = [],
      patternsHash = {},
      defaults = [],
      defaultsHash = {},
      customRules = [];
  root = root || {
    schema: schema,
    refVal: refVal,
    refs: refs
  };
  var c = checkCompiling.call(this, schema, root, baseId);
  var compilation = this._compilations[c.index];
  if (c.compiling) return compilation.callValidate = callValidate;
  var formats = this._formats;
  var RULES = this.RULES;

  try {
    var v = localCompile(schema, root, localRefs, baseId);
    compilation.validate = v;
    var cv = compilation.callValidate;

    if (cv) {
      cv.schema = v.schema;
      cv.errors = null;
      cv.refs = v.refs;
      cv.refVal = v.refVal;
      cv.root = v.root;
      cv.$async = v.$async;
      if (opts.sourceCode) cv.source = v.source;
    }

    return v;
  } finally {
    endCompiling.call(this, schema, root, baseId);
  }
  /* @this   {*} - custom context, see passContext option */


  function callValidate() {
    /* jshint validthis: true */
    var validate = compilation.validate;
    var result = validate.apply(this, arguments);
    callValidate.errors = validate.errors;
    return result;
  }

  function localCompile(_schema, _root, localRefs, baseId) {
    var isRoot = !_root || _root && _root.schema == _schema;
    if (_root.schema != root.schema) return compile.call(self, _schema, _root, localRefs, baseId);
    var $async = _schema.$async === true;
    var sourceCode = validateGenerator({
      isTop: true,
      schema: _schema,
      isRoot: isRoot,
      baseId: baseId,
      root: _root,
      schemaPath: '',
      errSchemaPath: '#',
      errorPath: '""',
      MissingRefError: errorClasses.MissingRef,
      RULES: RULES,
      validate: validateGenerator,
      util: util,
      resolve: resolve,
      resolveRef: resolveRef,
      usePattern: usePattern,
      useDefault: useDefault,
      useCustomRule: useCustomRule,
      opts: opts,
      formats: formats,
      logger: self.logger,
      self: self
    });
    sourceCode = vars(refVal, refValCode) + vars(patterns, patternCode) + vars(defaults, defaultCode) + vars(customRules, customRuleCode) + sourceCode;
    if (opts.processCode) sourceCode = opts.processCode(sourceCode); // console.log('\n\n\n *** \n', JSON.stringify(sourceCode));

    var validate;

    try {
      var makeValidate = new Function('self', 'RULES', 'formats', 'root', 'refVal', 'defaults', 'customRules', 'equal', 'ucs2length', 'ValidationError', sourceCode);
      validate = makeValidate(self, RULES, formats, root, refVal, defaults, customRules, equal, ucs2length, ValidationError);
      refVal[0] = validate;
    } catch (e) {
      self.logger.error('Error compiling schema, function code:', sourceCode);
      throw e;
    }

    validate.schema = _schema;
    validate.errors = null;
    validate.refs = refs;
    validate.refVal = refVal;
    validate.root = isRoot ? validate : _root;
    if ($async) validate.$async = true;

    if (opts.sourceCode === true) {
      validate.source = {
        code: sourceCode,
        patterns: patterns,
        defaults: defaults
      };
    }

    return validate;
  }

  function resolveRef(baseId, ref, isRoot) {
    ref = resolve.url(baseId, ref);
    var refIndex = refs[ref];

    var _refVal, refCode;

    if (refIndex !== undefined) {
      _refVal = refVal[refIndex];
      refCode = 'refVal[' + refIndex + ']';
      return resolvedRef(_refVal, refCode);
    }

    if (!isRoot && root.refs) {
      var rootRefId = root.refs[ref];

      if (rootRefId !== undefined) {
        _refVal = root.refVal[rootRefId];
        refCode = addLocalRef(ref, _refVal);
        return resolvedRef(_refVal, refCode);
      }
    }

    refCode = addLocalRef(ref);
    var v = resolve.call(self, localCompile, root, ref);

    if (v === undefined) {
      var localSchema = localRefs && localRefs[ref];

      if (localSchema) {
        v = resolve.inlineRef(localSchema, opts.inlineRefs) ? localSchema : compile.call(self, localSchema, root, localRefs, baseId);
      }
    }

    if (v === undefined) {
      removeLocalRef(ref);
    } else {
      replaceLocalRef(ref, v);
      return resolvedRef(v, refCode);
    }
  }

  function addLocalRef(ref, v) {
    var refId = refVal.length;
    refVal[refId] = v;
    refs[ref] = refId;
    return 'refVal' + refId;
  }

  function removeLocalRef(ref) {
    delete refs[ref];
  }

  function replaceLocalRef(ref, v) {
    var refId = refs[ref];
    refVal[refId] = v;
  }

  function resolvedRef(refVal, code) {
    return babelHelpers.typeof(refVal) == 'object' || typeof refVal == 'boolean' ? {
      code: code,
      schema: refVal,
      inline: true
    } : {
      code: code,
      $async: refVal && !!refVal.$async
    };
  }

  function usePattern(regexStr) {
    var index = patternsHash[regexStr];

    if (index === undefined) {
      index = patternsHash[regexStr] = patterns.length;
      patterns[index] = regexStr;
    }

    return 'pattern' + index;
  }

  function useDefault(value) {
    switch (babelHelpers.typeof(value)) {
      case 'boolean':
      case 'number':
        return '' + value;

      case 'string':
        return util.toQuotedString(value);

      case 'object':
        if (value === null) return 'null';
        var valueStr = stableStringify(value);
        var index = defaultsHash[valueStr];

        if (index === undefined) {
          index = defaultsHash[valueStr] = defaults.length;
          defaults[index] = value;
        }

        return 'default' + index;
    }
  }

  function useCustomRule(rule, schema, parentSchema, it) {
    if (self._opts.validateSchema !== false) {
      var deps = rule.definition.dependencies;
      if (deps && !deps.every(function (keyword) {
        return Object.prototype.hasOwnProperty.call(parentSchema, keyword);
      })) throw new Error('parent schema must have all required keywords: ' + deps.join(','));
      var validateSchema = rule.definition.validateSchema;

      if (validateSchema) {
        var valid = validateSchema(schema);

        if (!valid) {
          var message = 'keyword schema is invalid: ' + self.errorsText(validateSchema.errors);
          if (self._opts.validateSchema == 'log') self.logger.error(message);else throw new Error(message);
        }
      }
    }

    var compile = rule.definition.compile,
        inline = rule.definition.inline,
        macro = rule.definition.macro;
    var validate;

    if (compile) {
      validate = compile.call(self, schema, parentSchema, it);
    } else if (macro) {
      validate = macro.call(self, schema, parentSchema, it);
      if (opts.validateSchema !== false) self.validateSchema(validate, true);
    } else if (inline) {
      validate = inline.call(self, it, rule.keyword, schema, parentSchema);
    } else {
      validate = rule.definition.validate;
      if (!validate) return;
    }

    if (validate === undefined) throw new Error('custom keyword "' + rule.keyword + '"failed to compile');
    var index = customRules.length;
    customRules[index] = validate;
    return {
      code: 'customRule' + index,
      validate: validate
    };
  }
}
/**
 * Checks if the schema is currently compiled
 * @this   Ajv
 * @param  {Object} schema schema to compile
 * @param  {Object} root root object
 * @param  {String} baseId base schema ID
 * @return {Object} object with properties "index" (compilation index) and "compiling" (boolean)
 */


function checkCompiling(schema, root, baseId) {
  /* jshint validthis: true */
  var index = compIndex.call(this, schema, root, baseId);
  if (index >= 0) return {
    index: index,
    compiling: true
  };
  index = this._compilations.length;
  this._compilations[index] = {
    schema: schema,
    root: root,
    baseId: baseId
  };
  return {
    index: index,
    compiling: false
  };
}
/**
 * Removes the schema from the currently compiled list
 * @this   Ajv
 * @param  {Object} schema schema to compile
 * @param  {Object} root root object
 * @param  {String} baseId base schema ID
 */


function endCompiling(schema, root, baseId) {
  /* jshint validthis: true */
  var i = compIndex.call(this, schema, root, baseId);
  if (i >= 0) this._compilations.splice(i, 1);
}
/**
 * Index of schema compilation in the currently compiled list
 * @this   Ajv
 * @param  {Object} schema schema to compile
 * @param  {Object} root root object
 * @param  {String} baseId base schema ID
 * @return {Integer} compilation index
 */


function compIndex(schema, root, baseId) {
  /* jshint validthis: true */
  for (var i = 0; i < this._compilations.length; i++) {
    var c = this._compilations[i];
    if (c.schema == schema && c.root == root && c.baseId == baseId) return i;
  }

  return -1;
}

function patternCode(i, patterns) {
  return 'var pattern' + i + ' = new RegExp(' + util.toQuotedString(patterns[i]) + ');';
}

function defaultCode(i) {
  return 'var default' + i + ' = defaults[' + i + '];';
}

function refValCode(i, refVal) {
  return refVal[i] === undefined ? '' : 'var refVal' + i + ' = refVal[' + i + '];';
}

function customRuleCode(i) {
  return 'var customRule' + i + ' = customRules[' + i + '];';
}

function vars(arr, statement) {
  if (!arr.length) return '';
  var code = '';

  for (var i = 0; i < arr.length; i++) {
    code += statement(i, arr);
  }

  return code;
}

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/** @license URI.js v4.2.1 (c) 2011 Gary Court. License: http://github.com/garycourt/uri-js */
(function (global, factory) {
  ( false ? undefined : babelHelpers.typeof(exports)) === 'object' && typeof module !== 'undefined' ? factory(exports) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (exports) {
  'use strict';

  function merge() {
    for (var _len = arguments.length, sets = Array(_len), _key = 0; _key < _len; _key++) {
      sets[_key] = arguments[_key];
    }

    if (sets.length > 1) {
      sets[0] = sets[0].slice(0, -1);
      var xl = sets.length - 1;

      for (var x = 1; x < xl; ++x) {
        sets[x] = sets[x].slice(1, -1);
      }

      sets[xl] = sets[xl].slice(1);
      return sets.join('');
    } else {
      return sets[0];
    }
  }

  function subexp(str) {
    return "(?:" + str + ")";
  }

  function typeOf(o) {
    return o === undefined ? "undefined" : o === null ? "null" : Object.prototype.toString.call(o).split(" ").pop().split("]").shift().toLowerCase();
  }

  function toUpperCase(str) {
    return str.toUpperCase();
  }

  function toArray(obj) {
    return obj !== undefined && obj !== null ? obj instanceof Array ? obj : typeof obj.length !== "number" || obj.split || obj.setInterval || obj.call ? [obj] : Array.prototype.slice.call(obj) : [];
  }

  function assign(target, source) {
    var obj = target;

    if (source) {
      for (var key in source) {
        obj[key] = source[key];
      }
    }

    return obj;
  }

  function buildExps(isIRI) {
    var ALPHA$$ = "[A-Za-z]",
        CR$ = "[\\x0D]",
        DIGIT$$ = "[0-9]",
        DQUOTE$$ = "[\\x22]",
        HEXDIG$$ = merge(DIGIT$$, "[A-Fa-f]"),
        //case-insensitive
    LF$$ = "[\\x0A]",
        SP$$ = "[\\x20]",
        PCT_ENCODED$ = subexp(subexp("%[EFef]" + HEXDIG$$ + "%" + HEXDIG$$ + HEXDIG$$ + "%" + HEXDIG$$ + HEXDIG$$) + "|" + subexp("%[89A-Fa-f]" + HEXDIG$$ + "%" + HEXDIG$$ + HEXDIG$$) + "|" + subexp("%" + HEXDIG$$ + HEXDIG$$)),
        //expanded
    GEN_DELIMS$$ = "[\\:\\/\\?\\#\\[\\]\\@]",
        SUB_DELIMS$$ = "[\\!\\$\\&\\'\\(\\)\\*\\+\\,\\;\\=]",
        RESERVED$$ = merge(GEN_DELIMS$$, SUB_DELIMS$$),
        UCSCHAR$$ = isIRI ? "[\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]" : "[]",
        //subset, excludes bidi control characters
    IPRIVATE$$ = isIRI ? "[\\uE000-\\uF8FF]" : "[]",
        //subset
    UNRESERVED$$ = merge(ALPHA$$, DIGIT$$, "[\\-\\.\\_\\~]", UCSCHAR$$),
        SCHEME$ = subexp(ALPHA$$ + merge(ALPHA$$, DIGIT$$, "[\\+\\-\\.]") + "*"),
        USERINFO$ = subexp(subexp(PCT_ENCODED$ + "|" + merge(UNRESERVED$$, SUB_DELIMS$$, "[\\:]")) + "*"),
        DEC_OCTET$ = subexp(subexp("25[0-5]") + "|" + subexp("2[0-4]" + DIGIT$$) + "|" + subexp("1" + DIGIT$$ + DIGIT$$) + "|" + subexp("[1-9]" + DIGIT$$) + "|" + DIGIT$$),
        DEC_OCTET_RELAXED$ = subexp(subexp("25[0-5]") + "|" + subexp("2[0-4]" + DIGIT$$) + "|" + subexp("1" + DIGIT$$ + DIGIT$$) + "|" + subexp("0?[1-9]" + DIGIT$$) + "|0?0?" + DIGIT$$),
        //relaxed parsing rules
    IPV4ADDRESS$ = subexp(DEC_OCTET_RELAXED$ + "\\." + DEC_OCTET_RELAXED$ + "\\." + DEC_OCTET_RELAXED$ + "\\." + DEC_OCTET_RELAXED$),
        H16$ = subexp(HEXDIG$$ + "{1,4}"),
        LS32$ = subexp(subexp(H16$ + "\\:" + H16$) + "|" + IPV4ADDRESS$),
        IPV6ADDRESS1$ = subexp(subexp(H16$ + "\\:") + "{6}" + LS32$),
        //                           6( h16 ":" ) ls32
    IPV6ADDRESS2$ = subexp("\\:\\:" + subexp(H16$ + "\\:") + "{5}" + LS32$),
        //                      "::" 5( h16 ":" ) ls32
    IPV6ADDRESS3$ = subexp(subexp(H16$) + "?\\:\\:" + subexp(H16$ + "\\:") + "{4}" + LS32$),
        //[               h16 ] "::" 4( h16 ":" ) ls32
    IPV6ADDRESS4$ = subexp(subexp(subexp(H16$ + "\\:") + "{0,1}" + H16$) + "?\\:\\:" + subexp(H16$ + "\\:") + "{3}" + LS32$),
        //[ *1( h16 ":" ) h16 ] "::" 3( h16 ":" ) ls32
    IPV6ADDRESS5$ = subexp(subexp(subexp(H16$ + "\\:") + "{0,2}" + H16$) + "?\\:\\:" + subexp(H16$ + "\\:") + "{2}" + LS32$),
        //[ *2( h16 ":" ) h16 ] "::" 2( h16 ":" ) ls32
    IPV6ADDRESS6$ = subexp(subexp(subexp(H16$ + "\\:") + "{0,3}" + H16$) + "?\\:\\:" + H16$ + "\\:" + LS32$),
        //[ *3( h16 ":" ) h16 ] "::"    h16 ":"   ls32
    IPV6ADDRESS7$ = subexp(subexp(subexp(H16$ + "\\:") + "{0,4}" + H16$) + "?\\:\\:" + LS32$),
        //[ *4( h16 ":" ) h16 ] "::"              ls32
    IPV6ADDRESS8$ = subexp(subexp(subexp(H16$ + "\\:") + "{0,5}" + H16$) + "?\\:\\:" + H16$),
        //[ *5( h16 ":" ) h16 ] "::"              h16
    IPV6ADDRESS9$ = subexp(subexp(subexp(H16$ + "\\:") + "{0,6}" + H16$) + "?\\:\\:"),
        //[ *6( h16 ":" ) h16 ] "::"
    IPV6ADDRESS$ = subexp([IPV6ADDRESS1$, IPV6ADDRESS2$, IPV6ADDRESS3$, IPV6ADDRESS4$, IPV6ADDRESS5$, IPV6ADDRESS6$, IPV6ADDRESS7$, IPV6ADDRESS8$, IPV6ADDRESS9$].join("|")),
        ZONEID$ = subexp(subexp(UNRESERVED$$ + "|" + PCT_ENCODED$) + "+"),
        //RFC 6874
    IPV6ADDRZ$ = subexp(IPV6ADDRESS$ + "\\%25" + ZONEID$),
        //RFC 6874
    IPV6ADDRZ_RELAXED$ = subexp(IPV6ADDRESS$ + subexp("\\%25|\\%(?!" + HEXDIG$$ + "{2})") + ZONEID$),
        //RFC 6874, with relaxed parsing rules
    IPVFUTURE$ = subexp("[vV]" + HEXDIG$$ + "+\\." + merge(UNRESERVED$$, SUB_DELIMS$$, "[\\:]") + "+"),
        IP_LITERAL$ = subexp("\\[" + subexp(IPV6ADDRZ_RELAXED$ + "|" + IPV6ADDRESS$ + "|" + IPVFUTURE$) + "\\]"),
        //RFC 6874
    REG_NAME$ = subexp(subexp(PCT_ENCODED$ + "|" + merge(UNRESERVED$$, SUB_DELIMS$$)) + "*"),
        HOST$ = subexp(IP_LITERAL$ + "|" + IPV4ADDRESS$ + "(?!" + REG_NAME$ + ")" + "|" + REG_NAME$),
        PORT$ = subexp(DIGIT$$ + "*"),
        AUTHORITY$ = subexp(subexp(USERINFO$ + "@") + "?" + HOST$ + subexp("\\:" + PORT$) + "?"),
        PCHAR$ = subexp(PCT_ENCODED$ + "|" + merge(UNRESERVED$$, SUB_DELIMS$$, "[\\:\\@]")),
        SEGMENT$ = subexp(PCHAR$ + "*"),
        SEGMENT_NZ$ = subexp(PCHAR$ + "+"),
        SEGMENT_NZ_NC$ = subexp(subexp(PCT_ENCODED$ + "|" + merge(UNRESERVED$$, SUB_DELIMS$$, "[\\@]")) + "+"),
        PATH_ABEMPTY$ = subexp(subexp("\\/" + SEGMENT$) + "*"),
        PATH_ABSOLUTE$ = subexp("\\/" + subexp(SEGMENT_NZ$ + PATH_ABEMPTY$) + "?"),
        //simplified
    PATH_NOSCHEME$ = subexp(SEGMENT_NZ_NC$ + PATH_ABEMPTY$),
        //simplified
    PATH_ROOTLESS$ = subexp(SEGMENT_NZ$ + PATH_ABEMPTY$),
        //simplified
    PATH_EMPTY$ = "(?!" + PCHAR$ + ")",
        PATH$ = subexp(PATH_ABEMPTY$ + "|" + PATH_ABSOLUTE$ + "|" + PATH_NOSCHEME$ + "|" + PATH_ROOTLESS$ + "|" + PATH_EMPTY$),
        QUERY$ = subexp(subexp(PCHAR$ + "|" + merge("[\\/\\?]", IPRIVATE$$)) + "*"),
        FRAGMENT$ = subexp(subexp(PCHAR$ + "|[\\/\\?]") + "*"),
        HIER_PART$ = subexp(subexp("\\/\\/" + AUTHORITY$ + PATH_ABEMPTY$) + "|" + PATH_ABSOLUTE$ + "|" + PATH_ROOTLESS$ + "|" + PATH_EMPTY$),
        URI$ = subexp(SCHEME$ + "\\:" + HIER_PART$ + subexp("\\?" + QUERY$) + "?" + subexp("\\#" + FRAGMENT$) + "?"),
        RELATIVE_PART$ = subexp(subexp("\\/\\/" + AUTHORITY$ + PATH_ABEMPTY$) + "|" + PATH_ABSOLUTE$ + "|" + PATH_NOSCHEME$ + "|" + PATH_EMPTY$),
        RELATIVE$ = subexp(RELATIVE_PART$ + subexp("\\?" + QUERY$) + "?" + subexp("\\#" + FRAGMENT$) + "?"),
        URI_REFERENCE$ = subexp(URI$ + "|" + RELATIVE$),
        ABSOLUTE_URI$ = subexp(SCHEME$ + "\\:" + HIER_PART$ + subexp("\\?" + QUERY$) + "?"),
        GENERIC_REF$ = "^(" + SCHEME$ + ")\\:" + subexp(subexp("\\/\\/(" + subexp("(" + USERINFO$ + ")@") + "?(" + HOST$ + ")" + subexp("\\:(" + PORT$ + ")") + "?)") + "?(" + PATH_ABEMPTY$ + "|" + PATH_ABSOLUTE$ + "|" + PATH_ROOTLESS$ + "|" + PATH_EMPTY$ + ")") + subexp("\\?(" + QUERY$ + ")") + "?" + subexp("\\#(" + FRAGMENT$ + ")") + "?$",
        RELATIVE_REF$ = "^(){0}" + subexp(subexp("\\/\\/(" + subexp("(" + USERINFO$ + ")@") + "?(" + HOST$ + ")" + subexp("\\:(" + PORT$ + ")") + "?)") + "?(" + PATH_ABEMPTY$ + "|" + PATH_ABSOLUTE$ + "|" + PATH_NOSCHEME$ + "|" + PATH_EMPTY$ + ")") + subexp("\\?(" + QUERY$ + ")") + "?" + subexp("\\#(" + FRAGMENT$ + ")") + "?$",
        ABSOLUTE_REF$ = "^(" + SCHEME$ + ")\\:" + subexp(subexp("\\/\\/(" + subexp("(" + USERINFO$ + ")@") + "?(" + HOST$ + ")" + subexp("\\:(" + PORT$ + ")") + "?)") + "?(" + PATH_ABEMPTY$ + "|" + PATH_ABSOLUTE$ + "|" + PATH_ROOTLESS$ + "|" + PATH_EMPTY$ + ")") + subexp("\\?(" + QUERY$ + ")") + "?$",
        SAMEDOC_REF$ = "^" + subexp("\\#(" + FRAGMENT$ + ")") + "?$",
        AUTHORITY_REF$ = "^" + subexp("(" + USERINFO$ + ")@") + "?(" + HOST$ + ")" + subexp("\\:(" + PORT$ + ")") + "?$";
    return {
      NOT_SCHEME: new RegExp(merge("[^]", ALPHA$$, DIGIT$$, "[\\+\\-\\.]"), "g"),
      NOT_USERINFO: new RegExp(merge("[^\\%\\:]", UNRESERVED$$, SUB_DELIMS$$), "g"),
      NOT_HOST: new RegExp(merge("[^\\%\\[\\]\\:]", UNRESERVED$$, SUB_DELIMS$$), "g"),
      NOT_PATH: new RegExp(merge("[^\\%\\/\\:\\@]", UNRESERVED$$, SUB_DELIMS$$), "g"),
      NOT_PATH_NOSCHEME: new RegExp(merge("[^\\%\\/\\@]", UNRESERVED$$, SUB_DELIMS$$), "g"),
      NOT_QUERY: new RegExp(merge("[^\\%]", UNRESERVED$$, SUB_DELIMS$$, "[\\:\\@\\/\\?]", IPRIVATE$$), "g"),
      NOT_FRAGMENT: new RegExp(merge("[^\\%]", UNRESERVED$$, SUB_DELIMS$$, "[\\:\\@\\/\\?]"), "g"),
      ESCAPE: new RegExp(merge("[^]", UNRESERVED$$, SUB_DELIMS$$), "g"),
      UNRESERVED: new RegExp(UNRESERVED$$, "g"),
      OTHER_CHARS: new RegExp(merge("[^\\%]", UNRESERVED$$, RESERVED$$), "g"),
      PCT_ENCODED: new RegExp(PCT_ENCODED$, "g"),
      IPV4ADDRESS: new RegExp("^(" + IPV4ADDRESS$ + ")$"),
      IPV6ADDRESS: new RegExp("^\\[?(" + IPV6ADDRESS$ + ")" + subexp(subexp("\\%25|\\%(?!" + HEXDIG$$ + "{2})") + "(" + ZONEID$ + ")") + "?\\]?$") //RFC 6874, with relaxed parsing rules

    };
  }

  var URI_PROTOCOL = buildExps(false);
  var IRI_PROTOCOL = buildExps(true);

  var slicedToArray = function () {
    function sliceIterator(arr, i) {
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = undefined;

      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);

          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"]) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }

      return _arr;
    }

    return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }
    };
  }();

  var toConsumableArray = function toConsumableArray(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
        arr2[i] = arr[i];
      }

      return arr2;
    } else {
      return Array.from(arr);
    }
  };
  /** Highest positive signed 32-bit float value */


  var maxInt = 2147483647; // aka. 0x7FFFFFFF or 2^31-1

  /** Bootstring parameters */

  var base = 36;
  var tMin = 1;
  var tMax = 26;
  var skew = 38;
  var damp = 700;
  var initialBias = 72;
  var initialN = 128; // 0x80

  var delimiter = '-'; // '\x2D'

  /** Regular expressions */

  var regexPunycode = /^xn--/;
  var regexNonASCII = /[^\0-\x7E]/; // non-ASCII chars

  var regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g; // RFC 3490 separators

  /** Error messages */

  var errors = {
    'overflow': 'Overflow: input needs wider integers to process',
    'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
    'invalid-input': 'Invalid input'
  };
  /** Convenience shortcuts */

  var baseMinusTMin = base - tMin;
  var floor = Math.floor;
  var stringFromCharCode = String.fromCharCode;
  /*--------------------------------------------------------------------------*/

  /**
   * A generic error utility function.
   * @private
   * @param {String} type The error type.
   * @returns {Error} Throws a `RangeError` with the applicable error message.
   */

  function error$1(type) {
    throw new RangeError(errors[type]);
  }
  /**
   * A generic `Array#map` utility function.
   * @private
   * @param {Array} array The array to iterate over.
   * @param {Function} callback The function that gets called for every array
   * item.
   * @returns {Array} A new array of values returned by the callback function.
   */


  function map(array, fn) {
    var result = [];
    var length = array.length;

    while (length--) {
      result[length] = fn(array[length]);
    }

    return result;
  }
  /**
   * A simple `Array#map`-like wrapper to work with domain name strings or email
   * addresses.
   * @private
   * @param {String} domain The domain name or email address.
   * @param {Function} callback The function that gets called for every
   * character.
   * @returns {Array} A new string of characters returned by the callback
   * function.
   */


  function mapDomain(string, fn) {
    var parts = string.split('@');
    var result = '';

    if (parts.length > 1) {
      // In email addresses, only the domain name should be punycoded. Leave
      // the local part (i.e. everything up to `@`) intact.
      result = parts[0] + '@';
      string = parts[1];
    } // Avoid `split(regex)` for IE8 compatibility. See #17.


    string = string.replace(regexSeparators, '\x2E');
    var labels = string.split('.');
    var encoded = map(labels, fn).join('.');
    return result + encoded;
  }
  /**
   * Creates an array containing the numeric code points of each Unicode
   * character in the string. While JavaScript uses UCS-2 internally,
   * this function will convert a pair of surrogate halves (each of which
   * UCS-2 exposes as separate characters) into a single code point,
   * matching UTF-16.
   * @see `punycode.ucs2.encode`
   * @see <https://mathiasbynens.be/notes/javascript-encoding>
   * @memberOf punycode.ucs2
   * @name decode
   * @param {String} string The Unicode input string (UCS-2).
   * @returns {Array} The new array of code points.
   */


  function ucs2decode(string) {
    var output = [];
    var counter = 0;
    var length = string.length;

    while (counter < length) {
      var value = string.charCodeAt(counter++);

      if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
        // It's a high surrogate, and there is a next character.
        var extra = string.charCodeAt(counter++);

        if ((extra & 0xFC00) == 0xDC00) {
          // Low surrogate.
          output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
        } else {
          // It's an unmatched surrogate; only append this code unit, in case the
          // next code unit is the high surrogate of a surrogate pair.
          output.push(value);
          counter--;
        }
      } else {
        output.push(value);
      }
    }

    return output;
  }
  /**
   * Creates a string based on an array of numeric code points.
   * @see `punycode.ucs2.decode`
   * @memberOf punycode.ucs2
   * @name encode
   * @param {Array} codePoints The array of numeric code points.
   * @returns {String} The new Unicode string (UCS-2).
   */


  var ucs2encode = function ucs2encode(array) {
    return String.fromCodePoint.apply(String, toConsumableArray(array));
  };
  /**
   * Converts a basic code point into a digit/integer.
   * @see `digitToBasic()`
   * @private
   * @param {Number} codePoint The basic numeric code point value.
   * @returns {Number} The numeric value of a basic code point (for use in
   * representing integers) in the range `0` to `base - 1`, or `base` if
   * the code point does not represent a value.
   */


  var basicToDigit = function basicToDigit(codePoint) {
    if (codePoint - 0x30 < 0x0A) {
      return codePoint - 0x16;
    }

    if (codePoint - 0x41 < 0x1A) {
      return codePoint - 0x41;
    }

    if (codePoint - 0x61 < 0x1A) {
      return codePoint - 0x61;
    }

    return base;
  };
  /**
   * Converts a digit/integer into a basic code point.
   * @see `basicToDigit()`
   * @private
   * @param {Number} digit The numeric value of a basic code point.
   * @returns {Number} The basic code point whose value (when used for
   * representing integers) is `digit`, which needs to be in the range
   * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
   * used; else, the lowercase form is used. The behavior is undefined
   * if `flag` is non-zero and `digit` has no uppercase form.
   */


  var digitToBasic = function digitToBasic(digit, flag) {
    //  0..25 map to ASCII a..z or A..Z
    // 26..35 map to ASCII 0..9
    return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
  };
  /**
   * Bias adaptation function as per section 3.4 of RFC 3492.
   * https://tools.ietf.org/html/rfc3492#section-3.4
   * @private
   */


  var adapt = function adapt(delta, numPoints, firstTime) {
    var k = 0;
    delta = firstTime ? floor(delta / damp) : delta >> 1;
    delta += floor(delta / numPoints);

    for (;
    /* no initialization */
    delta > baseMinusTMin * tMax >> 1; k += base) {
      delta = floor(delta / baseMinusTMin);
    }

    return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
  };
  /**
   * Converts a Punycode string of ASCII-only symbols to a string of Unicode
   * symbols.
   * @memberOf punycode
   * @param {String} input The Punycode string of ASCII-only symbols.
   * @returns {String} The resulting string of Unicode symbols.
   */


  var decode = function decode(input) {
    // Don't use UCS-2.
    var output = [];
    var inputLength = input.length;
    var i = 0;
    var n = initialN;
    var bias = initialBias; // Handle the basic code points: let `basic` be the number of input code
    // points before the last delimiter, or `0` if there is none, then copy
    // the first basic code points to the output.

    var basic = input.lastIndexOf(delimiter);

    if (basic < 0) {
      basic = 0;
    }

    for (var j = 0; j < basic; ++j) {
      // if it's not a basic code point
      if (input.charCodeAt(j) >= 0x80) {
        error$1('not-basic');
      }

      output.push(input.charCodeAt(j));
    } // Main decoding loop: start just after the last delimiter if any basic code
    // points were copied; start at the beginning otherwise.


    for (var index = basic > 0 ? basic + 1 : 0; index < inputLength;)
    /* no final expression */
    {
      // `index` is the index of the next character to be consumed.
      // Decode a generalized variable-length integer into `delta`,
      // which gets added to `i`. The overflow checking is easier
      // if we increase `i` as we go, then subtract off its starting
      // value at the end to obtain `delta`.
      var oldi = i;

      for (var w = 1, k = base;;
      /* no condition */
      k += base) {
        if (index >= inputLength) {
          error$1('invalid-input');
        }

        var digit = basicToDigit(input.charCodeAt(index++));

        if (digit >= base || digit > floor((maxInt - i) / w)) {
          error$1('overflow');
        }

        i += digit * w;
        var t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;

        if (digit < t) {
          break;
        }

        var baseMinusT = base - t;

        if (w > floor(maxInt / baseMinusT)) {
          error$1('overflow');
        }

        w *= baseMinusT;
      }

      var out = output.length + 1;
      bias = adapt(i - oldi, out, oldi == 0); // `i` was supposed to wrap around from `out` to `0`,
      // incrementing `n` each time, so we'll fix that now:

      if (floor(i / out) > maxInt - n) {
        error$1('overflow');
      }

      n += floor(i / out);
      i %= out; // Insert `n` at position `i` of the output.

      output.splice(i++, 0, n);
    }

    return String.fromCodePoint.apply(String, output);
  };
  /**
   * Converts a string of Unicode symbols (e.g. a domain name label) to a
   * Punycode string of ASCII-only symbols.
   * @memberOf punycode
   * @param {String} input The string of Unicode symbols.
   * @returns {String} The resulting Punycode string of ASCII-only symbols.
   */


  var encode = function encode(input) {
    var output = []; // Convert the input in UCS-2 to an array of Unicode code points.

    input = ucs2decode(input); // Cache the length.

    var inputLength = input.length; // Initialize the state.

    var n = initialN;
    var delta = 0;
    var bias = initialBias; // Handle the basic code points.

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = input[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var _currentValue2 = _step.value;

        if (_currentValue2 < 0x80) {
          output.push(stringFromCharCode(_currentValue2));
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    var basicLength = output.length;
    var handledCPCount = basicLength; // `handledCPCount` is the number of code points that have been handled;
    // `basicLength` is the number of basic code points.
    // Finish the basic string with a delimiter unless it's empty.

    if (basicLength) {
      output.push(delimiter);
    } // Main encoding loop:


    while (handledCPCount < inputLength) {
      // All non-basic code points < n have been handled already. Find the next
      // larger one:
      var m = maxInt;
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = input[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var currentValue = _step2.value;

          if (currentValue >= n && currentValue < m) {
            m = currentValue;
          }
        } // Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
        // but guard against overflow.

      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      var handledCPCountPlusOne = handledCPCount + 1;

      if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
        error$1('overflow');
      }

      delta += (m - n) * handledCPCountPlusOne;
      n = m;
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = input[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var _currentValue = _step3.value;

          if (_currentValue < n && ++delta > maxInt) {
            error$1('overflow');
          }

          if (_currentValue == n) {
            // Represent delta as a generalized variable-length integer.
            var q = delta;

            for (var k = base;;
            /* no condition */
            k += base) {
              var t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;

              if (q < t) {
                break;
              }

              var qMinusT = q - t;
              var baseMinusT = base - t;
              output.push(stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0)));
              q = floor(qMinusT / baseMinusT);
            }

            output.push(stringFromCharCode(digitToBasic(q, 0)));
            bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
            delta = 0;
            ++handledCPCount;
          }
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }

      ++delta;
      ++n;
    }

    return output.join('');
  };
  /**
   * Converts a Punycode string representing a domain name or an email address
   * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
   * it doesn't matter if you call it on a string that has already been
   * converted to Unicode.
   * @memberOf punycode
   * @param {String} input The Punycoded domain name or email address to
   * convert to Unicode.
   * @returns {String} The Unicode representation of the given Punycode
   * string.
   */


  var toUnicode = function toUnicode(input) {
    return mapDomain(input, function (string) {
      return regexPunycode.test(string) ? decode(string.slice(4).toLowerCase()) : string;
    });
  };
  /**
   * Converts a Unicode string representing a domain name or an email address to
   * Punycode. Only the non-ASCII parts of the domain name will be converted,
   * i.e. it doesn't matter if you call it with a domain that's already in
   * ASCII.
   * @memberOf punycode
   * @param {String} input The domain name or email address to convert, as a
   * Unicode string.
   * @returns {String} The Punycode representation of the given domain name or
   * email address.
   */


  var toASCII = function toASCII(input) {
    return mapDomain(input, function (string) {
      return regexNonASCII.test(string) ? 'xn--' + encode(string) : string;
    });
  };
  /*--------------------------------------------------------------------------*/

  /** Define the public API */


  var punycode = {
    /**
     * A string representing the current Punycode.js version number.
     * @memberOf punycode
     * @type String
     */
    'version': '2.1.0',

    /**
     * An object of methods to convert from JavaScript's internal character
     * representation (UCS-2) to Unicode code points, and back.
     * @see <https://mathiasbynens.be/notes/javascript-encoding>
     * @memberOf punycode
     * @type Object
     */
    'ucs2': {
      'decode': ucs2decode,
      'encode': ucs2encode
    },
    'decode': decode,
    'encode': encode,
    'toASCII': toASCII,
    'toUnicode': toUnicode
  };
  /**
   * URI.js
   *
   * @fileoverview An RFC 3986 compliant, scheme extendable URI parsing/validating/resolving library for JavaScript.
   * @author <a href="mailto:gary.court@gmail.com">Gary Court</a>
   * @see http://github.com/garycourt/uri-js
   */

  /**
   * Copyright 2011 Gary Court. All rights reserved.
   *
   * Redistribution and use in source and binary forms, with or without modification, are
   * permitted provided that the following conditions are met:
   *
   *    1. Redistributions of source code must retain the above copyright notice, this list of
   *       conditions and the following disclaimer.
   *
   *    2. Redistributions in binary form must reproduce the above copyright notice, this list
   *       of conditions and the following disclaimer in the documentation and/or other materials
   *       provided with the distribution.
   *
   * THIS SOFTWARE IS PROVIDED BY GARY COURT ``AS IS'' AND ANY EXPRESS OR IMPLIED
   * WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
   * FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL GARY COURT OR
   * CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
   * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
   * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
   * ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
   * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF
   * ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
   *
   * The views and conclusions contained in the software and documentation are those of the
   * authors and should not be interpreted as representing official policies, either expressed
   * or implied, of Gary Court.
   */

  var SCHEMES = {};

  function pctEncChar(chr) {
    var c = chr.charCodeAt(0);
    var e = void 0;
    if (c < 16) e = "%0" + c.toString(16).toUpperCase();else if (c < 128) e = "%" + c.toString(16).toUpperCase();else if (c < 2048) e = "%" + (c >> 6 | 192).toString(16).toUpperCase() + "%" + (c & 63 | 128).toString(16).toUpperCase();else e = "%" + (c >> 12 | 224).toString(16).toUpperCase() + "%" + (c >> 6 & 63 | 128).toString(16).toUpperCase() + "%" + (c & 63 | 128).toString(16).toUpperCase();
    return e;
  }

  function pctDecChars(str) {
    var newStr = "";
    var i = 0;
    var il = str.length;

    while (i < il) {
      var c = parseInt(str.substr(i + 1, 2), 16);

      if (c < 128) {
        newStr += String.fromCharCode(c);
        i += 3;
      } else if (c >= 194 && c < 224) {
        if (il - i >= 6) {
          var c2 = parseInt(str.substr(i + 4, 2), 16);
          newStr += String.fromCharCode((c & 31) << 6 | c2 & 63);
        } else {
          newStr += str.substr(i, 6);
        }

        i += 6;
      } else if (c >= 224) {
        if (il - i >= 9) {
          var _c = parseInt(str.substr(i + 4, 2), 16);

          var c3 = parseInt(str.substr(i + 7, 2), 16);
          newStr += String.fromCharCode((c & 15) << 12 | (_c & 63) << 6 | c3 & 63);
        } else {
          newStr += str.substr(i, 9);
        }

        i += 9;
      } else {
        newStr += str.substr(i, 3);
        i += 3;
      }
    }

    return newStr;
  }

  function _normalizeComponentEncoding(components, protocol) {
    function decodeUnreserved(str) {
      var decStr = pctDecChars(str);
      return !decStr.match(protocol.UNRESERVED) ? str : decStr;
    }

    if (components.scheme) components.scheme = String(components.scheme).replace(protocol.PCT_ENCODED, decodeUnreserved).toLowerCase().replace(protocol.NOT_SCHEME, "");
    if (components.userinfo !== undefined) components.userinfo = String(components.userinfo).replace(protocol.PCT_ENCODED, decodeUnreserved).replace(protocol.NOT_USERINFO, pctEncChar).replace(protocol.PCT_ENCODED, toUpperCase);
    if (components.host !== undefined) components.host = String(components.host).replace(protocol.PCT_ENCODED, decodeUnreserved).toLowerCase().replace(protocol.NOT_HOST, pctEncChar).replace(protocol.PCT_ENCODED, toUpperCase);
    if (components.path !== undefined) components.path = String(components.path).replace(protocol.PCT_ENCODED, decodeUnreserved).replace(components.scheme ? protocol.NOT_PATH : protocol.NOT_PATH_NOSCHEME, pctEncChar).replace(protocol.PCT_ENCODED, toUpperCase);
    if (components.query !== undefined) components.query = String(components.query).replace(protocol.PCT_ENCODED, decodeUnreserved).replace(protocol.NOT_QUERY, pctEncChar).replace(protocol.PCT_ENCODED, toUpperCase);
    if (components.fragment !== undefined) components.fragment = String(components.fragment).replace(protocol.PCT_ENCODED, decodeUnreserved).replace(protocol.NOT_FRAGMENT, pctEncChar).replace(protocol.PCT_ENCODED, toUpperCase);
    return components;
  }

  function _stripLeadingZeros(str) {
    return str.replace(/^0*(.*)/, "$1") || "0";
  }

  function _normalizeIPv4(host, protocol) {
    var matches = host.match(protocol.IPV4ADDRESS) || [];

    var _matches = slicedToArray(matches, 2),
        address = _matches[1];

    if (address) {
      return address.split(".").map(_stripLeadingZeros).join(".");
    } else {
      return host;
    }
  }

  function _normalizeIPv6(host, protocol) {
    var matches = host.match(protocol.IPV6ADDRESS) || [];

    var _matches2 = slicedToArray(matches, 3),
        address = _matches2[1],
        zone = _matches2[2];

    if (address) {
      var _address$toLowerCase$ = address.toLowerCase().split('::').reverse(),
          _address$toLowerCase$2 = slicedToArray(_address$toLowerCase$, 2),
          last = _address$toLowerCase$2[0],
          first = _address$toLowerCase$2[1];

      var firstFields = first ? first.split(":").map(_stripLeadingZeros) : [];
      var lastFields = last.split(":").map(_stripLeadingZeros);
      var isLastFieldIPv4Address = protocol.IPV4ADDRESS.test(lastFields[lastFields.length - 1]);
      var fieldCount = isLastFieldIPv4Address ? 7 : 8;
      var lastFieldsStart = lastFields.length - fieldCount;
      var fields = Array(fieldCount);

      for (var x = 0; x < fieldCount; ++x) {
        fields[x] = firstFields[x] || lastFields[lastFieldsStart + x] || '';
      }

      if (isLastFieldIPv4Address) {
        fields[fieldCount - 1] = _normalizeIPv4(fields[fieldCount - 1], protocol);
      }

      var allZeroFields = fields.reduce(function (acc, field, index) {
        if (!field || field === "0") {
          var lastLongest = acc[acc.length - 1];

          if (lastLongest && lastLongest.index + lastLongest.length === index) {
            lastLongest.length++;
          } else {
            acc.push({
              index: index,
              length: 1
            });
          }
        }

        return acc;
      }, []);
      var longestZeroFields = allZeroFields.sort(function (a, b) {
        return b.length - a.length;
      })[0];
      var newHost = void 0;

      if (longestZeroFields && longestZeroFields.length > 1) {
        var newFirst = fields.slice(0, longestZeroFields.index);
        var newLast = fields.slice(longestZeroFields.index + longestZeroFields.length);
        newHost = newFirst.join(":") + "::" + newLast.join(":");
      } else {
        newHost = fields.join(":");
      }

      if (zone) {
        newHost += "%" + zone;
      }

      return newHost;
    } else {
      return host;
    }
  }

  var URI_PARSE = /^(?:([^:\/?#]+):)?(?:\/\/((?:([^\/?#@]*)@)?(\[[^\/?#\]]+\]|[^\/?#:]*)(?:\:(\d*))?))?([^?#]*)(?:\?([^#]*))?(?:#((?:.|\n|\r)*))?/i;
  var NO_MATCH_IS_UNDEFINED = "".match(/(){0}/)[1] === undefined;

  function parse(uriString) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var components = {};
    var protocol = options.iri !== false ? IRI_PROTOCOL : URI_PROTOCOL;
    if (options.reference === "suffix") uriString = (options.scheme ? options.scheme + ":" : "") + "//" + uriString;
    var matches = uriString.match(URI_PARSE);

    if (matches) {
      if (NO_MATCH_IS_UNDEFINED) {
        //store each component
        components.scheme = matches[1];
        components.userinfo = matches[3];
        components.host = matches[4];
        components.port = parseInt(matches[5], 10);
        components.path = matches[6] || "";
        components.query = matches[7];
        components.fragment = matches[8]; //fix port number

        if (isNaN(components.port)) {
          components.port = matches[5];
        }
      } else {
        //IE FIX for improper RegExp matching
        //store each component
        components.scheme = matches[1] || undefined;
        components.userinfo = uriString.indexOf("@") !== -1 ? matches[3] : undefined;
        components.host = uriString.indexOf("//") !== -1 ? matches[4] : undefined;
        components.port = parseInt(matches[5], 10);
        components.path = matches[6] || "";
        components.query = uriString.indexOf("?") !== -1 ? matches[7] : undefined;
        components.fragment = uriString.indexOf("#") !== -1 ? matches[8] : undefined; //fix port number

        if (isNaN(components.port)) {
          components.port = uriString.match(/\/\/(?:.|\n)*\:(?:\/|\?|\#|$)/) ? matches[4] : undefined;
        }
      }

      if (components.host) {
        //normalize IP hosts
        components.host = _normalizeIPv6(_normalizeIPv4(components.host, protocol), protocol);
      } //determine reference type


      if (components.scheme === undefined && components.userinfo === undefined && components.host === undefined && components.port === undefined && !components.path && components.query === undefined) {
        components.reference = "same-document";
      } else if (components.scheme === undefined) {
        components.reference = "relative";
      } else if (components.fragment === undefined) {
        components.reference = "absolute";
      } else {
        components.reference = "uri";
      } //check for reference errors


      if (options.reference && options.reference !== "suffix" && options.reference !== components.reference) {
        components.error = components.error || "URI is not a " + options.reference + " reference.";
      } //find scheme handler


      var schemeHandler = SCHEMES[(options.scheme || components.scheme || "").toLowerCase()]; //check if scheme can't handle IRIs

      if (!options.unicodeSupport && (!schemeHandler || !schemeHandler.unicodeSupport)) {
        //if host component is a domain name
        if (components.host && (options.domainHost || schemeHandler && schemeHandler.domainHost)) {
          //convert Unicode IDN -> ASCII IDN
          try {
            components.host = punycode.toASCII(components.host.replace(protocol.PCT_ENCODED, pctDecChars).toLowerCase());
          } catch (e) {
            components.error = components.error || "Host's domain name can not be converted to ASCII via punycode: " + e;
          }
        } //convert IRI -> URI


        _normalizeComponentEncoding(components, URI_PROTOCOL);
      } else {
        //normalize encodings
        _normalizeComponentEncoding(components, protocol);
      } //perform scheme specific parsing


      if (schemeHandler && schemeHandler.parse) {
        schemeHandler.parse(components, options);
      }
    } else {
      components.error = components.error || "URI can not be parsed.";
    }

    return components;
  }

  function _recomposeAuthority(components, options) {
    var protocol = options.iri !== false ? IRI_PROTOCOL : URI_PROTOCOL;
    var uriTokens = [];

    if (components.userinfo !== undefined) {
      uriTokens.push(components.userinfo);
      uriTokens.push("@");
    }

    if (components.host !== undefined) {
      //normalize IP hosts, add brackets and escape zone separator for IPv6
      uriTokens.push(_normalizeIPv6(_normalizeIPv4(String(components.host), protocol), protocol).replace(protocol.IPV6ADDRESS, function (_, $1, $2) {
        return "[" + $1 + ($2 ? "%25" + $2 : "") + "]";
      }));
    }

    if (typeof components.port === "number") {
      uriTokens.push(":");
      uriTokens.push(components.port.toString(10));
    }

    return uriTokens.length ? uriTokens.join("") : undefined;
  }

  var RDS1 = /^\.\.?\//;
  var RDS2 = /^\/\.(\/|$)/;
  var RDS3 = /^\/\.\.(\/|$)/;
  var RDS5 = /^\/?(?:.|\n)*?(?=\/|$)/;

  function removeDotSegments(input) {
    var output = [];

    while (input.length) {
      if (input.match(RDS1)) {
        input = input.replace(RDS1, "");
      } else if (input.match(RDS2)) {
        input = input.replace(RDS2, "/");
      } else if (input.match(RDS3)) {
        input = input.replace(RDS3, "/");
        output.pop();
      } else if (input === "." || input === "..") {
        input = "";
      } else {
        var im = input.match(RDS5);

        if (im) {
          var s = im[0];
          input = input.slice(s.length);
          output.push(s);
        } else {
          throw new Error("Unexpected dot segment condition");
        }
      }
    }

    return output.join("");
  }

  function serialize(components) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var protocol = options.iri ? IRI_PROTOCOL : URI_PROTOCOL;
    var uriTokens = []; //find scheme handler

    var schemeHandler = SCHEMES[(options.scheme || components.scheme || "").toLowerCase()]; //perform scheme specific serialization

    if (schemeHandler && schemeHandler.serialize) schemeHandler.serialize(components, options);

    if (components.host) {
      //if host component is an IPv6 address
      if (protocol.IPV6ADDRESS.test(components.host)) {} //TODO: normalize IPv6 address as per RFC 5952
      //if host component is a domain name
      else if (options.domainHost || schemeHandler && schemeHandler.domainHost) {
          //convert IDN via punycode
          try {
            components.host = !options.iri ? punycode.toASCII(components.host.replace(protocol.PCT_ENCODED, pctDecChars).toLowerCase()) : punycode.toUnicode(components.host);
          } catch (e) {
            components.error = components.error || "Host's domain name can not be converted to " + (!options.iri ? "ASCII" : "Unicode") + " via punycode: " + e;
          }
        }
    } //normalize encoding


    _normalizeComponentEncoding(components, protocol);

    if (options.reference !== "suffix" && components.scheme) {
      uriTokens.push(components.scheme);
      uriTokens.push(":");
    }

    var authority = _recomposeAuthority(components, options);

    if (authority !== undefined) {
      if (options.reference !== "suffix") {
        uriTokens.push("//");
      }

      uriTokens.push(authority);

      if (components.path && components.path.charAt(0) !== "/") {
        uriTokens.push("/");
      }
    }

    if (components.path !== undefined) {
      var s = components.path;

      if (!options.absolutePath && (!schemeHandler || !schemeHandler.absolutePath)) {
        s = removeDotSegments(s);
      }

      if (authority === undefined) {
        s = s.replace(/^\/\//, "/%2F"); //don't allow the path to start with "//"
      }

      uriTokens.push(s);
    }

    if (components.query !== undefined) {
      uriTokens.push("?");
      uriTokens.push(components.query);
    }

    if (components.fragment !== undefined) {
      uriTokens.push("#");
      uriTokens.push(components.fragment);
    }

    return uriTokens.join(""); //merge tokens into a string
  }

  function resolveComponents(base, relative) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var skipNormalization = arguments[3];
    var target = {};

    if (!skipNormalization) {
      base = parse(serialize(base, options), options); //normalize base components

      relative = parse(serialize(relative, options), options); //normalize relative components
    }

    options = options || {};

    if (!options.tolerant && relative.scheme) {
      target.scheme = relative.scheme; //target.authority = relative.authority;

      target.userinfo = relative.userinfo;
      target.host = relative.host;
      target.port = relative.port;
      target.path = removeDotSegments(relative.path || "");
      target.query = relative.query;
    } else {
      if (relative.userinfo !== undefined || relative.host !== undefined || relative.port !== undefined) {
        //target.authority = relative.authority;
        target.userinfo = relative.userinfo;
        target.host = relative.host;
        target.port = relative.port;
        target.path = removeDotSegments(relative.path || "");
        target.query = relative.query;
      } else {
        if (!relative.path) {
          target.path = base.path;

          if (relative.query !== undefined) {
            target.query = relative.query;
          } else {
            target.query = base.query;
          }
        } else {
          if (relative.path.charAt(0) === "/") {
            target.path = removeDotSegments(relative.path);
          } else {
            if ((base.userinfo !== undefined || base.host !== undefined || base.port !== undefined) && !base.path) {
              target.path = "/" + relative.path;
            } else if (!base.path) {
              target.path = relative.path;
            } else {
              target.path = base.path.slice(0, base.path.lastIndexOf("/") + 1) + relative.path;
            }

            target.path = removeDotSegments(target.path);
          }

          target.query = relative.query;
        } //target.authority = base.authority;


        target.userinfo = base.userinfo;
        target.host = base.host;
        target.port = base.port;
      }

      target.scheme = base.scheme;
    }

    target.fragment = relative.fragment;
    return target;
  }

  function resolve(baseURI, relativeURI, options) {
    var schemelessOptions = assign({
      scheme: 'null'
    }, options);
    return serialize(resolveComponents(parse(baseURI, schemelessOptions), parse(relativeURI, schemelessOptions), schemelessOptions, true), schemelessOptions);
  }

  function normalize(uri, options) {
    if (typeof uri === "string") {
      uri = serialize(parse(uri, options), options);
    } else if (typeOf(uri) === "object") {
      uri = parse(serialize(uri, options), options);
    }

    return uri;
  }

  function equal(uriA, uriB, options) {
    if (typeof uriA === "string") {
      uriA = serialize(parse(uriA, options), options);
    } else if (typeOf(uriA) === "object") {
      uriA = serialize(uriA, options);
    }

    if (typeof uriB === "string") {
      uriB = serialize(parse(uriB, options), options);
    } else if (typeOf(uriB) === "object") {
      uriB = serialize(uriB, options);
    }

    return uriA === uriB;
  }

  function escapeComponent(str, options) {
    return str && str.toString().replace(!options || !options.iri ? URI_PROTOCOL.ESCAPE : IRI_PROTOCOL.ESCAPE, pctEncChar);
  }

  function unescapeComponent(str, options) {
    return str && str.toString().replace(!options || !options.iri ? URI_PROTOCOL.PCT_ENCODED : IRI_PROTOCOL.PCT_ENCODED, pctDecChars);
  }

  var handler = {
    scheme: "http",
    domainHost: true,
    parse: function parse(components, options) {
      //report missing host
      if (!components.host) {
        components.error = components.error || "HTTP URIs must have a host.";
      }

      return components;
    },
    serialize: function serialize(components, options) {
      //normalize the default port
      if (components.port === (String(components.scheme).toLowerCase() !== "https" ? 80 : 443) || components.port === "") {
        components.port = undefined;
      } //normalize the empty path


      if (!components.path) {
        components.path = "/";
      } //NOTE: We do not parse query strings for HTTP URIs
      //as WWW Form Url Encoded query strings are part of the HTML4+ spec,
      //and not the HTTP spec.


      return components;
    }
  };
  var handler$1 = {
    scheme: "https",
    domainHost: handler.domainHost,
    parse: handler.parse,
    serialize: handler.serialize
  };
  var O = {};
  var isIRI = true; //RFC 3986

  var UNRESERVED$$ = "[A-Za-z0-9\\-\\.\\_\\~" + (isIRI ? "\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF" : "") + "]";
  var HEXDIG$$ = "[0-9A-Fa-f]"; //case-insensitive

  var PCT_ENCODED$ = subexp(subexp("%[EFef]" + HEXDIG$$ + "%" + HEXDIG$$ + HEXDIG$$ + "%" + HEXDIG$$ + HEXDIG$$) + "|" + subexp("%[89A-Fa-f]" + HEXDIG$$ + "%" + HEXDIG$$ + HEXDIG$$) + "|" + subexp("%" + HEXDIG$$ + HEXDIG$$)); //expanded
  //RFC 5322, except these symbols as per RFC 6068: @ : / ? # [ ] & ; =
  //const ATEXT$$ = "[A-Za-z0-9\\!\\#\\$\\%\\&\\'\\*\\+\\-\\/\\=\\?\\^\\_\\`\\{\\|\\}\\~]";
  //const WSP$$ = "[\\x20\\x09]";
  //const OBS_QTEXT$$ = "[\\x01-\\x08\\x0B\\x0C\\x0E-\\x1F\\x7F]";  //(%d1-8 / %d11-12 / %d14-31 / %d127)
  //const QTEXT$$ = merge("[\\x21\\x23-\\x5B\\x5D-\\x7E]", OBS_QTEXT$$);  //%d33 / %d35-91 / %d93-126 / obs-qtext
  //const VCHAR$$ = "[\\x21-\\x7E]";
  //const WSP$$ = "[\\x20\\x09]";
  //const OBS_QP$ = subexp("\\\\" + merge("[\\x00\\x0D\\x0A]", OBS_QTEXT$$));  //%d0 / CR / LF / obs-qtext
  //const FWS$ = subexp(subexp(WSP$$ + "*" + "\\x0D\\x0A") + "?" + WSP$$ + "+");
  //const QUOTED_PAIR$ = subexp(subexp("\\\\" + subexp(VCHAR$$ + "|" + WSP$$)) + "|" + OBS_QP$);
  //const QUOTED_STRING$ = subexp('\\"' + subexp(FWS$ + "?" + QCONTENT$) + "*" + FWS$ + "?" + '\\"');

  var ATEXT$$ = "[A-Za-z0-9\\!\\$\\%\\'\\*\\+\\-\\^\\_\\`\\{\\|\\}\\~]";
  var QTEXT$$ = "[\\!\\$\\%\\'\\(\\)\\*\\+\\,\\-\\.0-9\\<\\>A-Z\\x5E-\\x7E]";
  var VCHAR$$ = merge(QTEXT$$, "[\\\"\\\\]");
  var SOME_DELIMS$$ = "[\\!\\$\\'\\(\\)\\*\\+\\,\\;\\:\\@]";
  var UNRESERVED = new RegExp(UNRESERVED$$, "g");
  var PCT_ENCODED = new RegExp(PCT_ENCODED$, "g");
  var NOT_LOCAL_PART = new RegExp(merge("[^]", ATEXT$$, "[\\.]", '[\\"]', VCHAR$$), "g");
  var NOT_HFNAME = new RegExp(merge("[^]", UNRESERVED$$, SOME_DELIMS$$), "g");
  var NOT_HFVALUE = NOT_HFNAME;

  function decodeUnreserved(str) {
    var decStr = pctDecChars(str);
    return !decStr.match(UNRESERVED) ? str : decStr;
  }

  var handler$2 = {
    scheme: "mailto",
    parse: function parse$$1(components, options) {
      var mailtoComponents = components;
      var to = mailtoComponents.to = mailtoComponents.path ? mailtoComponents.path.split(",") : [];
      mailtoComponents.path = undefined;

      if (mailtoComponents.query) {
        var unknownHeaders = false;
        var headers = {};
        var hfields = mailtoComponents.query.split("&");

        for (var x = 0, xl = hfields.length; x < xl; ++x) {
          var hfield = hfields[x].split("=");

          switch (hfield[0]) {
            case "to":
              var toAddrs = hfield[1].split(",");

              for (var _x = 0, _xl = toAddrs.length; _x < _xl; ++_x) {
                to.push(toAddrs[_x]);
              }

              break;

            case "subject":
              mailtoComponents.subject = unescapeComponent(hfield[1], options);
              break;

            case "body":
              mailtoComponents.body = unescapeComponent(hfield[1], options);
              break;

            default:
              unknownHeaders = true;
              headers[unescapeComponent(hfield[0], options)] = unescapeComponent(hfield[1], options);
              break;
          }
        }

        if (unknownHeaders) mailtoComponents.headers = headers;
      }

      mailtoComponents.query = undefined;

      for (var _x2 = 0, _xl2 = to.length; _x2 < _xl2; ++_x2) {
        var addr = to[_x2].split("@");

        addr[0] = unescapeComponent(addr[0]);

        if (!options.unicodeSupport) {
          //convert Unicode IDN -> ASCII IDN
          try {
            addr[1] = punycode.toASCII(unescapeComponent(addr[1], options).toLowerCase());
          } catch (e) {
            mailtoComponents.error = mailtoComponents.error || "Email address's domain name can not be converted to ASCII via punycode: " + e;
          }
        } else {
          addr[1] = unescapeComponent(addr[1], options).toLowerCase();
        }

        to[_x2] = addr.join("@");
      }

      return mailtoComponents;
    },
    serialize: function serialize$$1(mailtoComponents, options) {
      var components = mailtoComponents;
      var to = toArray(mailtoComponents.to);

      if (to) {
        for (var x = 0, xl = to.length; x < xl; ++x) {
          var toAddr = String(to[x]);
          var atIdx = toAddr.lastIndexOf("@");
          var localPart = toAddr.slice(0, atIdx).replace(PCT_ENCODED, decodeUnreserved).replace(PCT_ENCODED, toUpperCase).replace(NOT_LOCAL_PART, pctEncChar);
          var domain = toAddr.slice(atIdx + 1); //convert IDN via punycode

          try {
            domain = !options.iri ? punycode.toASCII(unescapeComponent(domain, options).toLowerCase()) : punycode.toUnicode(domain);
          } catch (e) {
            components.error = components.error || "Email address's domain name can not be converted to " + (!options.iri ? "ASCII" : "Unicode") + " via punycode: " + e;
          }

          to[x] = localPart + "@" + domain;
        }

        components.path = to.join(",");
      }

      var headers = mailtoComponents.headers = mailtoComponents.headers || {};
      if (mailtoComponents.subject) headers["subject"] = mailtoComponents.subject;
      if (mailtoComponents.body) headers["body"] = mailtoComponents.body;
      var fields = [];

      for (var name in headers) {
        if (headers[name] !== O[name]) {
          fields.push(name.replace(PCT_ENCODED, decodeUnreserved).replace(PCT_ENCODED, toUpperCase).replace(NOT_HFNAME, pctEncChar) + "=" + headers[name].replace(PCT_ENCODED, decodeUnreserved).replace(PCT_ENCODED, toUpperCase).replace(NOT_HFVALUE, pctEncChar));
        }
      }

      if (fields.length) {
        components.query = fields.join("&");
      }

      return components;
    }
  };
  var URN_PARSE = /^([^\:]+)\:(.*)/; //RFC 2141

  var handler$3 = {
    scheme: "urn",
    parse: function parse$$1(components, options) {
      var matches = components.path && components.path.match(URN_PARSE);
      var urnComponents = components;

      if (matches) {
        var scheme = options.scheme || urnComponents.scheme || "urn";
        var nid = matches[1].toLowerCase();
        var nss = matches[2];
        var urnScheme = scheme + ":" + (options.nid || nid);
        var schemeHandler = SCHEMES[urnScheme];
        urnComponents.nid = nid;
        urnComponents.nss = nss;
        urnComponents.path = undefined;

        if (schemeHandler) {
          urnComponents = schemeHandler.parse(urnComponents, options);
        }
      } else {
        urnComponents.error = urnComponents.error || "URN can not be parsed.";
      }

      return urnComponents;
    },
    serialize: function serialize$$1(urnComponents, options) {
      var scheme = options.scheme || urnComponents.scheme || "urn";
      var nid = urnComponents.nid;
      var urnScheme = scheme + ":" + (options.nid || nid);
      var schemeHandler = SCHEMES[urnScheme];

      if (schemeHandler) {
        urnComponents = schemeHandler.serialize(urnComponents, options);
      }

      var uriComponents = urnComponents;
      var nss = urnComponents.nss;
      uriComponents.path = (nid || options.nid) + ":" + nss;
      return uriComponents;
    }
  };
  var UUID = /^[0-9A-Fa-f]{8}(?:\-[0-9A-Fa-f]{4}){3}\-[0-9A-Fa-f]{12}$/; //RFC 4122

  var handler$4 = {
    scheme: "urn:uuid",
    parse: function parse(urnComponents, options) {
      var uuidComponents = urnComponents;
      uuidComponents.uuid = uuidComponents.nss;
      uuidComponents.nss = undefined;

      if (!options.tolerant && (!uuidComponents.uuid || !uuidComponents.uuid.match(UUID))) {
        uuidComponents.error = uuidComponents.error || "UUID is not valid.";
      }

      return uuidComponents;
    },
    serialize: function serialize(uuidComponents, options) {
      var urnComponents = uuidComponents; //normalize UUID

      urnComponents.nss = (uuidComponents.uuid || "").toLowerCase();
      return urnComponents;
    }
  };
  SCHEMES[handler.scheme] = handler;
  SCHEMES[handler$1.scheme] = handler$1;
  SCHEMES[handler$2.scheme] = handler$2;
  SCHEMES[handler$3.scheme] = handler$3;
  SCHEMES[handler$4.scheme] = handler$4;
  exports.SCHEMES = SCHEMES;
  exports.pctEncChar = pctEncChar;
  exports.pctDecChars = pctDecChars;
  exports.parse = parse;
  exports.removeDotSegments = removeDotSegments;
  exports.serialize = serialize;
  exports.resolveComponents = resolveComponents;
  exports.resolve = resolve;
  exports.normalize = normalize;
  exports.equal = equal;
  exports.escapeComponent = escapeComponent;
  exports.unescapeComponent = unescapeComponent;
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
});

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // https://mathiasbynens.be/notes/javascript-encoding
// https://github.com/bestiejs/punycode.js - punycode.ucs2.decode

module.exports = function ucs2length(str) {
  var length = 0,
      len = str.length,
      pos = 0,
      value;

  while (pos < len) {
    length++;
    value = str.charCodeAt(pos++);

    if (value >= 0xD800 && value <= 0xDBFF && pos < len) {
      // high surrogate, and there is a next character
      value = str.charCodeAt(pos);
      if ((value & 0xFC00) == 0xDC00) pos++; // low surrogate
    }
  }

  return length;
};

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var traverse = module.exports = function (schema, opts, cb) {
  // Legacy support for v0.3.1 and earlier.
  if (typeof opts == 'function') {
    cb = opts;
    opts = {};
  }

  cb = opts.cb || cb;
  var pre = typeof cb == 'function' ? cb : cb.pre || function () {};

  var post = cb.post || function () {};

  _traverse(opts, pre, post, schema, '', schema);
};

traverse.keywords = {
  additionalItems: true,
  items: true,
  contains: true,
  additionalProperties: true,
  propertyNames: true,
  not: true
};
traverse.arrayKeywords = {
  items: true,
  allOf: true,
  anyOf: true,
  oneOf: true
};
traverse.propsKeywords = {
  definitions: true,
  properties: true,
  patternProperties: true,
  dependencies: true
};
traverse.skipKeywords = {
  default: true,
  enum: true,
  const: true,
  required: true,
  maximum: true,
  minimum: true,
  exclusiveMaximum: true,
  exclusiveMinimum: true,
  multipleOf: true,
  maxLength: true,
  minLength: true,
  pattern: true,
  format: true,
  maxItems: true,
  minItems: true,
  uniqueItems: true,
  maxProperties: true,
  minProperties: true
};

function _traverse(opts, pre, post, schema, jsonPtr, rootSchema, parentJsonPtr, parentKeyword, parentSchema, keyIndex) {
  if (schema && babelHelpers.typeof(schema) == 'object' && !Array.isArray(schema)) {
    pre(schema, jsonPtr, rootSchema, parentJsonPtr, parentKeyword, parentSchema, keyIndex);

    for (var key in schema) {
      var sch = schema[key];

      if (Array.isArray(sch)) {
        if (key in traverse.arrayKeywords) {
          for (var i = 0; i < sch.length; i++) {
            _traverse(opts, pre, post, sch[i], jsonPtr + '/' + key + '/' + i, rootSchema, jsonPtr, key, schema, i);
          }
        }
      } else if (key in traverse.propsKeywords) {
        if (sch && babelHelpers.typeof(sch) == 'object') {
          for (var prop in sch) {
            _traverse(opts, pre, post, sch[prop], jsonPtr + '/' + key + '/' + escapeJsonPtr(prop), rootSchema, jsonPtr, key, schema, prop);
          }
        }
      } else if (key in traverse.keywords || opts.allKeys && !(key in traverse.skipKeywords)) {
        _traverse(opts, pre, post, sch, jsonPtr + '/' + key, rootSchema, jsonPtr, key, schema);
      }
    }

    post(schema, jsonPtr, rootSchema, parentJsonPtr, parentKeyword, parentSchema, keyIndex);
  }
}

function escapeJsonPtr(str) {
  return str.replace(/~/g, '~0').replace(/\//g, '~1');
}

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cache = module.exports = function Cache() {
  this._cache = {};
};

Cache.prototype.put = function Cache_put(key, value) {
  this._cache[key] = value;
};

Cache.prototype.get = function Cache_get(key) {
  return this._cache[key];
};

Cache.prototype.del = function Cache_del(key) {
  delete this._cache[key];
};

Cache.prototype.clear = function Cache_clear() {
  this._cache = {};
};

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var util = __webpack_require__(5);

var DATE = /^(\d\d\d\d)-(\d\d)-(\d\d)$/;
var DAYS = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var TIME = /^(\d\d):(\d\d):(\d\d)(\.\d+)?(z|[+-]\d\d:\d\d)?$/i;
var HOSTNAME = /^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*$/i;
var URI = /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i;
var URIREF = /^(?:[a-z][a-z0-9+\-.]*:)?(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'"()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?(?:\?(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i; // uri-template: https://tools.ietf.org/html/rfc6570

var URITEMPLATE = /^(?:(?:[^\x00-\x20"'<>%\\^`{|}]|%[0-9a-f]{2})|\{[+#./;?&=,!@|]?(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?(?:,(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?)*\})*$/i; // For the source: https://gist.github.com/dperini/729294
// For test cases: https://mathiasbynens.be/demo/url-regex
// @todo Delete current URL in favour of the commented out URL rule when this issue is fixed https://github.com/eslint/eslint/issues/7983.
// var URL = /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!10(?:\.\d{1,3}){3})(?!127(?:\.\d{1,3}){3})(?!169\.254(?:\.\d{1,3}){2})(?!192\.168(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u{00a1}-\u{ffff}0-9]+-?)*[a-z\u{00a1}-\u{ffff}0-9]+)(?:\.(?:[a-z\u{00a1}-\u{ffff}0-9]+-?)*[a-z\u{00a1}-\u{ffff}0-9]+)*(?:\.(?:[a-z\u{00a1}-\u{ffff}]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/iu;

var URL = /^(?:(?:http[s\u017F]?|ftp):\/\/)(?:(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+(?::(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)?@)?(?:(?!10(?:\.[0-9]{1,3}){3})(?!127(?:\.[0-9]{1,3}){3})(?!169\.254(?:\.[0-9]{1,3}){2})(?!192\.168(?:\.[0-9]{1,3}){2})(?!172\.(?:1[6-9]|2[0-9]|3[01])(?:\.[0-9]{1,3}){2})(?:[1-9][0-9]?|1[0-9][0-9]|2[01][0-9]|22[0-3])(?:\.(?:1?[0-9]{1,2}|2[0-4][0-9]|25[0-5])){2}(?:\.(?:[1-9][0-9]?|1[0-9][0-9]|2[0-4][0-9]|25[0-4]))|(?:(?:(?:[0-9KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+-?)*(?:[0-9KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)(?:\.(?:(?:[0-9KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+-?)*(?:[0-9KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)*(?:\.(?:(?:[KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]){2,})))(?::[0-9]{2,5})?(?:\/(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)?$/i;
var UUID = /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i;
var JSON_POINTER = /^(?:\/(?:[^~/]|~0|~1)*)*$/;
var JSON_POINTER_URI_FRAGMENT = /^#(?:\/(?:[a-z0-9_\-.!$&'()*+,;:=@]|%[0-9a-f]{2}|~0|~1)*)*$/i;
var RELATIVE_JSON_POINTER = /^(?:0|[1-9][0-9]*)(?:#|(?:\/(?:[^~/]|~0|~1)*)*)$/;
module.exports = formats;

function formats(mode) {
  mode = mode == 'full' ? 'full' : 'fast';
  return util.copy(formats[mode]);
}

formats.fast = {
  // date: http://tools.ietf.org/html/rfc3339#section-5.6
  date: /^\d\d\d\d-[0-1]\d-[0-3]\d$/,
  // date-time: http://tools.ietf.org/html/rfc3339#section-5.6
  time: /^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d:\d\d)?$/i,
  'date-time': /^\d\d\d\d-[0-1]\d-[0-3]\d[t\s](?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d:\d\d)$/i,
  // uri: https://github.com/mafintosh/is-my-json-valid/blob/master/formats.js
  uri: /^(?:[a-z][a-z0-9+-.]*:)(?:\/?\/)?[^\s]*$/i,
  'uri-reference': /^(?:(?:[a-z][a-z0-9+-.]*:)?\/?\/)?(?:[^\\\s#][^\s#]*)?(?:#[^\\\s]*)?$/i,
  'uri-template': URITEMPLATE,
  url: URL,
  // email (sources from jsen validator):
  // http://stackoverflow.com/questions/201323/using-a-regular-expression-to-validate-an-email-address#answer-8829363
  // http://www.w3.org/TR/html5/forms.html#valid-e-mail-address (search for 'willful violation')
  email: /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$/i,
  hostname: HOSTNAME,
  // optimized https://www.safaribooksonline.com/library/view/regular-expressions-cookbook/9780596802837/ch07s16.html
  ipv4: /^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/,
  // optimized http://stackoverflow.com/questions/53497/regular-expression-that-matches-valid-ipv6-addresses
  ipv6: /^\s*(?:(?:(?:[0-9a-f]{1,4}:){7}(?:[0-9a-f]{1,4}|:))|(?:(?:[0-9a-f]{1,4}:){6}(?::[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){5}(?:(?:(?::[0-9a-f]{1,4}){1,2})|:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){4}(?:(?:(?::[0-9a-f]{1,4}){1,3})|(?:(?::[0-9a-f]{1,4})?:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){3}(?:(?:(?::[0-9a-f]{1,4}){1,4})|(?:(?::[0-9a-f]{1,4}){0,2}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){2}(?:(?:(?::[0-9a-f]{1,4}){1,5})|(?:(?::[0-9a-f]{1,4}){0,3}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){1}(?:(?:(?::[0-9a-f]{1,4}){1,6})|(?:(?::[0-9a-f]{1,4}){0,4}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?::(?:(?:(?::[0-9a-f]{1,4}){1,7})|(?:(?::[0-9a-f]{1,4}){0,5}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(?:%.+)?\s*$/i,
  regex: regex,
  // uuid: http://tools.ietf.org/html/rfc4122
  uuid: UUID,
  // JSON-pointer: https://tools.ietf.org/html/rfc6901
  // uri fragment: https://tools.ietf.org/html/rfc3986#appendix-A
  'json-pointer': JSON_POINTER,
  'json-pointer-uri-fragment': JSON_POINTER_URI_FRAGMENT,
  // relative JSON-pointer: http://tools.ietf.org/html/draft-luff-relative-json-pointer-00
  'relative-json-pointer': RELATIVE_JSON_POINTER
};
formats.full = {
  date: date,
  time: time,
  'date-time': date_time,
  uri: uri,
  'uri-reference': URIREF,
  'uri-template': URITEMPLATE,
  url: URL,
  email: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i,
  hostname: hostname,
  ipv4: /^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/,
  ipv6: /^\s*(?:(?:(?:[0-9a-f]{1,4}:){7}(?:[0-9a-f]{1,4}|:))|(?:(?:[0-9a-f]{1,4}:){6}(?::[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){5}(?:(?:(?::[0-9a-f]{1,4}){1,2})|:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){4}(?:(?:(?::[0-9a-f]{1,4}){1,3})|(?:(?::[0-9a-f]{1,4})?:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){3}(?:(?:(?::[0-9a-f]{1,4}){1,4})|(?:(?::[0-9a-f]{1,4}){0,2}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){2}(?:(?:(?::[0-9a-f]{1,4}){1,5})|(?:(?::[0-9a-f]{1,4}){0,3}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){1}(?:(?:(?::[0-9a-f]{1,4}){1,6})|(?:(?::[0-9a-f]{1,4}){0,4}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?::(?:(?:(?::[0-9a-f]{1,4}){1,7})|(?:(?::[0-9a-f]{1,4}){0,5}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(?:%.+)?\s*$/i,
  regex: regex,
  uuid: UUID,
  'json-pointer': JSON_POINTER,
  'json-pointer-uri-fragment': JSON_POINTER_URI_FRAGMENT,
  'relative-json-pointer': RELATIVE_JSON_POINTER
};

function isLeapYear(year) {
  // https://tools.ietf.org/html/rfc3339#appendix-C
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}

function date(str) {
  // full-date from http://tools.ietf.org/html/rfc3339#section-5.6
  var matches = str.match(DATE);
  if (!matches) return false;
  var year = +matches[1];
  var month = +matches[2];
  var day = +matches[3];
  return month >= 1 && month <= 12 && day >= 1 && day <= (month == 2 && isLeapYear(year) ? 29 : DAYS[month]);
}

function time(str, full) {
  var matches = str.match(TIME);
  if (!matches) return false;
  var hour = matches[1];
  var minute = matches[2];
  var second = matches[3];
  var timeZone = matches[5];
  return (hour <= 23 && minute <= 59 && second <= 59 || hour == 23 && minute == 59 && second == 60) && (!full || timeZone);
}

var DATE_TIME_SEPARATOR = /t|\s/i;

function date_time(str) {
  // http://tools.ietf.org/html/rfc3339#section-5.6
  var dateTime = str.split(DATE_TIME_SEPARATOR);
  return dateTime.length == 2 && date(dateTime[0]) && time(dateTime[1], true);
}

function hostname(str) {
  // https://tools.ietf.org/html/rfc1034#section-3.5
  // https://tools.ietf.org/html/rfc1123#section-2
  return str.length <= 255 && HOSTNAME.test(str);
}

var NOT_URI_FRAGMENT = /\/|:/;

function uri(str) {
  // http://jmrware.com/articles/2009/uri_regexp/URI_regex.html + optional protocol + required "."
  return NOT_URI_FRAGMENT.test(str) && URI.test(str);
}

var Z_ANCHOR = /[^\\]\\Z/;

function regex(str) {
  if (Z_ANCHOR.test(str)) return false;

  try {
    new RegExp(str);
    return true;
  } catch (e) {
    return false;
  }
}

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ruleModules = __webpack_require__(59),
    toHash = __webpack_require__(5).toHash;

module.exports = function rules() {
  var RULES = [{
    type: 'number',
    rules: [{
      'maximum': ['exclusiveMaximum']
    }, {
      'minimum': ['exclusiveMinimum']
    }, 'multipleOf', 'format']
  }, {
    type: 'string',
    rules: ['maxLength', 'minLength', 'pattern', 'format']
  }, {
    type: 'array',
    rules: ['maxItems', 'minItems', 'items', 'contains', 'uniqueItems']
  }, {
    type: 'object',
    rules: ['maxProperties', 'minProperties', 'required', 'dependencies', 'propertyNames', {
      'properties': ['additionalProperties', 'patternProperties']
    }]
  }, {
    rules: ['$ref', 'const', 'enum', 'not', 'anyOf', 'oneOf', 'allOf', 'if']
  }];
  var ALL = ['type', '$comment'];
  var KEYWORDS = ['$schema', '$id', 'id', '$data', 'title', 'description', 'default', 'definitions', 'examples', 'readOnly', 'writeOnly', 'contentMediaType', 'contentEncoding', 'additionalItems', 'then', 'else'];
  var TYPES = ['number', 'integer', 'string', 'array', 'object', 'boolean', 'null'];
  RULES.all = toHash(ALL);
  RULES.types = toHash(TYPES);
  RULES.forEach(function (group) {
    group.rules = group.rules.map(function (keyword) {
      var implKeywords;

      if (babelHelpers.typeof(keyword) == 'object') {
        var key = Object.keys(keyword)[0];
        implKeywords = keyword[key];
        keyword = key;
        implKeywords.forEach(function (k) {
          ALL.push(k);
          RULES.all[k] = true;
        });
      }

      ALL.push(keyword);
      var rule = RULES.all[keyword] = {
        keyword: keyword,
        code: ruleModules[keyword],
        implements: implKeywords
      };
      return rule;
    });
    RULES.all.$comment = {
      keyword: '$comment',
      code: ruleModules.$comment
    };
    if (group.type) RULES.types[group.type] = group;
  });
  RULES.keywords = toHash(ALL.concat(KEYWORDS));
  RULES.custom = {};
  return RULES;
};

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //all requires must be explicit because browserify won't work with dynamic requires

module.exports = {
  '$ref': __webpack_require__(60),
  allOf: __webpack_require__(61),
  anyOf: __webpack_require__(62),
  '$comment': __webpack_require__(63),
  const: __webpack_require__(64),
  contains: __webpack_require__(65),
  dependencies: __webpack_require__(66),
  'enum': __webpack_require__(67),
  format: __webpack_require__(68),
  'if': __webpack_require__(69),
  items: __webpack_require__(70),
  maximum: __webpack_require__(23),
  minimum: __webpack_require__(23),
  maxItems: __webpack_require__(24),
  minItems: __webpack_require__(24),
  maxLength: __webpack_require__(25),
  minLength: __webpack_require__(25),
  maxProperties: __webpack_require__(26),
  minProperties: __webpack_require__(26),
  multipleOf: __webpack_require__(71),
  not: __webpack_require__(72),
  oneOf: __webpack_require__(73),
  pattern: __webpack_require__(74),
  properties: __webpack_require__(75),
  propertyNames: __webpack_require__(76),
  required: __webpack_require__(77),
  uniqueItems: __webpack_require__(78),
  validate: __webpack_require__(22)
};

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function generate_ref(it, $keyword, $ruleType) {
  var out = ' ';
  var $lvl = it.level;
  var $dataLvl = it.dataLevel;
  var $schema = it.schema[$keyword];
  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
  var $breakOnError = !it.opts.allErrors;
  var $data = 'data' + ($dataLvl || '');
  var $valid = 'valid' + $lvl;
  var $async, $refCode;

  if ($schema == '#' || $schema == '#/') {
    if (it.isRoot) {
      $async = it.async;
      $refCode = 'validate';
    } else {
      $async = it.root.schema.$async === true;
      $refCode = 'root.refVal[0]';
    }
  } else {
    var $refVal = it.resolveRef(it.baseId, $schema, it.isRoot);

    if ($refVal === undefined) {
      var $message = it.MissingRefError.message(it.baseId, $schema);

      if (it.opts.missingRefs == 'fail') {
        it.logger.error($message);
        var $$outStack = $$outStack || [];
        $$outStack.push(out);
        out = '';
        /* istanbul ignore else */

        if (it.createErrors !== false) {
          out += ' { keyword: \'' + '$ref' + '\' , dataPath: (dataPath || \'\') + ' + it.errorPath + ' , schemaPath: ' + it.util.toQuotedString($errSchemaPath) + ' , params: { ref: \'' + it.util.escapeQuotes($schema) + '\' } ';

          if (it.opts.messages !== false) {
            out += ' , message: \'can\\\'t resolve reference ' + it.util.escapeQuotes($schema) + '\' ';
          }

          if (it.opts.verbose) {
            out += ' , schema: ' + it.util.toQuotedString($schema) + ' , parentSchema: validate.schema' + it.schemaPath + ' , data: ' + $data + ' ';
          }

          out += ' } ';
        } else {
          out += ' {} ';
        }

        var __err = out;
        out = $$outStack.pop();

        if (!it.compositeRule && $breakOnError) {
          /* istanbul ignore if */
          if (it.async) {
            out += ' throw new ValidationError([' + __err + ']); ';
          } else {
            out += ' validate.errors = [' + __err + ']; return false; ';
          }
        } else {
          out += ' var err = ' + __err + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
        }

        if ($breakOnError) {
          out += ' if (false) { ';
        }
      } else if (it.opts.missingRefs == 'ignore') {
        it.logger.warn($message);

        if ($breakOnError) {
          out += ' if (true) { ';
        }
      } else {
        throw new it.MissingRefError(it.baseId, $schema, $message);
      }
    } else if ($refVal.inline) {
      var $it = it.util.copy(it);
      $it.level++;
      var $nextValid = 'valid' + $it.level;
      $it.schema = $refVal.schema;
      $it.schemaPath = '';
      $it.errSchemaPath = $schema;
      var $code = it.validate($it).replace(/validate\.schema/g, $refVal.code);
      out += ' ' + $code + ' ';

      if ($breakOnError) {
        out += ' if (' + $nextValid + ') { ';
      }
    } else {
      $async = $refVal.$async === true || it.async && $refVal.$async !== false;
      $refCode = $refVal.code;
    }
  }

  if ($refCode) {
    var $$outStack = $$outStack || [];
    $$outStack.push(out);
    out = '';

    if (it.opts.passContext) {
      out += ' ' + $refCode + '.call(this, ';
    } else {
      out += ' ' + $refCode + '( ';
    }

    out += ' ' + $data + ', (dataPath || \'\')';

    if (it.errorPath != '""') {
      out += ' + ' + it.errorPath;
    }

    var $parentData = $dataLvl ? 'data' + ($dataLvl - 1 || '') : 'parentData',
        $parentDataProperty = $dataLvl ? it.dataPathArr[$dataLvl] : 'parentDataProperty';
    out += ' , ' + $parentData + ' , ' + $parentDataProperty + ', rootData)  ';
    var __callValidate = out;
    out = $$outStack.pop();

    if ($async) {
      if (!it.async) throw new Error('async schema referenced by sync schema');

      if ($breakOnError) {
        out += ' var ' + $valid + '; ';
      }

      out += ' try { await ' + __callValidate + '; ';

      if ($breakOnError) {
        out += ' ' + $valid + ' = true; ';
      }

      out += ' } catch (e) { if (!(e instanceof ValidationError)) throw e; if (vErrors === null) vErrors = e.errors; else vErrors = vErrors.concat(e.errors); errors = vErrors.length; ';

      if ($breakOnError) {
        out += ' ' + $valid + ' = false; ';
      }

      out += ' } ';

      if ($breakOnError) {
        out += ' if (' + $valid + ') { ';
      }
    } else {
      out += ' if (!' + __callValidate + ') { if (vErrors === null) vErrors = ' + $refCode + '.errors; else vErrors = vErrors.concat(' + $refCode + '.errors); errors = vErrors.length; } ';

      if ($breakOnError) {
        out += ' else { ';
      }
    }
  }

  return out;
};

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function generate_allOf(it, $keyword, $ruleType) {
  var out = ' ';
  var $schema = it.schema[$keyword];
  var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
  var $breakOnError = !it.opts.allErrors;
  var $it = it.util.copy(it);
  var $closingBraces = '';
  $it.level++;
  var $nextValid = 'valid' + $it.level;
  var $currentBaseId = $it.baseId,
      $allSchemasEmpty = true;
  var arr1 = $schema;

  if (arr1) {
    var $sch,
        $i = -1,
        l1 = arr1.length - 1;

    while ($i < l1) {
      $sch = arr1[$i += 1];

      if (it.util.schemaHasRules($sch, it.RULES.all)) {
        $allSchemasEmpty = false;
        $it.schema = $sch;
        $it.schemaPath = $schemaPath + '[' + $i + ']';
        $it.errSchemaPath = $errSchemaPath + '/' + $i;
        out += '  ' + it.validate($it) + ' ';
        $it.baseId = $currentBaseId;

        if ($breakOnError) {
          out += ' if (' + $nextValid + ') { ';
          $closingBraces += '}';
        }
      }
    }
  }

  if ($breakOnError) {
    if ($allSchemasEmpty) {
      out += ' if (true) { ';
    } else {
      out += ' ' + $closingBraces.slice(0, -1) + ' ';
    }
  }

  out = it.util.cleanUpCode(out);
  return out;
};

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function generate_anyOf(it, $keyword, $ruleType) {
  var out = ' ';
  var $lvl = it.level;
  var $dataLvl = it.dataLevel;
  var $schema = it.schema[$keyword];
  var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
  var $breakOnError = !it.opts.allErrors;
  var $data = 'data' + ($dataLvl || '');
  var $valid = 'valid' + $lvl;
  var $errs = 'errs__' + $lvl;
  var $it = it.util.copy(it);
  var $closingBraces = '';
  $it.level++;
  var $nextValid = 'valid' + $it.level;
  var $noEmptySchema = $schema.every(function ($sch) {
    return it.util.schemaHasRules($sch, it.RULES.all);
  });

  if ($noEmptySchema) {
    var $currentBaseId = $it.baseId;
    out += ' var ' + $errs + ' = errors; var ' + $valid + ' = false;  ';
    var $wasComposite = it.compositeRule;
    it.compositeRule = $it.compositeRule = true;
    var arr1 = $schema;

    if (arr1) {
      var $sch,
          $i = -1,
          l1 = arr1.length - 1;

      while ($i < l1) {
        $sch = arr1[$i += 1];
        $it.schema = $sch;
        $it.schemaPath = $schemaPath + '[' + $i + ']';
        $it.errSchemaPath = $errSchemaPath + '/' + $i;
        out += '  ' + it.validate($it) + ' ';
        $it.baseId = $currentBaseId;
        out += ' ' + $valid + ' = ' + $valid + ' || ' + $nextValid + '; if (!' + $valid + ') { ';
        $closingBraces += '}';
      }
    }

    it.compositeRule = $it.compositeRule = $wasComposite;
    out += ' ' + $closingBraces + ' if (!' + $valid + ') {   var err =   ';
    /* istanbul ignore else */

    if (it.createErrors !== false) {
      out += ' { keyword: \'' + 'anyOf' + '\' , dataPath: (dataPath || \'\') + ' + it.errorPath + ' , schemaPath: ' + it.util.toQuotedString($errSchemaPath) + ' , params: {} ';

      if (it.opts.messages !== false) {
        out += ' , message: \'should match some schema in anyOf\' ';
      }

      if (it.opts.verbose) {
        out += ' , schema: validate.schema' + $schemaPath + ' , parentSchema: validate.schema' + it.schemaPath + ' , data: ' + $data + ' ';
      }

      out += ' } ';
    } else {
      out += ' {} ';
    }

    out += ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';

    if (!it.compositeRule && $breakOnError) {
      /* istanbul ignore if */
      if (it.async) {
        out += ' throw new ValidationError(vErrors); ';
      } else {
        out += ' validate.errors = vErrors; return false; ';
      }
    }

    out += ' } else {  errors = ' + $errs + '; if (vErrors !== null) { if (' + $errs + ') vErrors.length = ' + $errs + '; else vErrors = null; } ';

    if (it.opts.allErrors) {
      out += ' } ';
    }

    out = it.util.cleanUpCode(out);
  } else {
    if ($breakOnError) {
      out += ' if (true) { ';
    }
  }

  return out;
};

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function generate_comment(it, $keyword, $ruleType) {
  var out = ' ';
  var $schema = it.schema[$keyword];
  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
  var $breakOnError = !it.opts.allErrors;
  var $comment = it.util.toQuotedString($schema);

  if (it.opts.$comment === true) {
    out += ' console.log(' + $comment + ');';
  } else if (typeof it.opts.$comment == 'function') {
    out += ' self._opts.$comment(' + $comment + ', ' + it.util.toQuotedString($errSchemaPath) + ', validate.root.schema);';
  }

  return out;
};

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function generate_const(it, $keyword, $ruleType) {
  var out = ' ';
  var $lvl = it.level;
  var $dataLvl = it.dataLevel;
  var $schema = it.schema[$keyword];
  var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
  var $breakOnError = !it.opts.allErrors;
  var $data = 'data' + ($dataLvl || '');
  var $valid = 'valid' + $lvl;
  var $isData = it.opts.$data && $schema && $schema.$data,
      $schemaValue;

  if ($isData) {
    out += ' var schema' + $lvl + ' = ' + it.util.getData($schema.$data, $dataLvl, it.dataPathArr) + '; ';
    $schemaValue = 'schema' + $lvl;
  } else {
    $schemaValue = $schema;
  }

  if (!$isData) {
    out += ' var schema' + $lvl + ' = validate.schema' + $schemaPath + ';';
  }

  out += 'var ' + $valid + ' = equal(' + $data + ', schema' + $lvl + '); if (!' + $valid + ') {   ';
  var $$outStack = $$outStack || [];
  $$outStack.push(out);
  out = '';
  /* istanbul ignore else */

  if (it.createErrors !== false) {
    out += ' { keyword: \'' + 'const' + '\' , dataPath: (dataPath || \'\') + ' + it.errorPath + ' , schemaPath: ' + it.util.toQuotedString($errSchemaPath) + ' , params: { allowedValue: schema' + $lvl + ' } ';

    if (it.opts.messages !== false) {
      out += ' , message: \'should be equal to constant\' ';
    }

    if (it.opts.verbose) {
      out += ' , schema: validate.schema' + $schemaPath + ' , parentSchema: validate.schema' + it.schemaPath + ' , data: ' + $data + ' ';
    }

    out += ' } ';
  } else {
    out += ' {} ';
  }

  var __err = out;
  out = $$outStack.pop();

  if (!it.compositeRule && $breakOnError) {
    /* istanbul ignore if */
    if (it.async) {
      out += ' throw new ValidationError([' + __err + ']); ';
    } else {
      out += ' validate.errors = [' + __err + ']; return false; ';
    }
  } else {
    out += ' var err = ' + __err + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
  }

  out += ' }';

  if ($breakOnError) {
    out += ' else { ';
  }

  return out;
};

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function generate_contains(it, $keyword, $ruleType) {
  var out = ' ';
  var $lvl = it.level;
  var $dataLvl = it.dataLevel;
  var $schema = it.schema[$keyword];
  var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
  var $breakOnError = !it.opts.allErrors;
  var $data = 'data' + ($dataLvl || '');
  var $valid = 'valid' + $lvl;
  var $errs = 'errs__' + $lvl;
  var $it = it.util.copy(it);
  var $closingBraces = '';
  $it.level++;
  var $nextValid = 'valid' + $it.level;
  var $idx = 'i' + $lvl,
      $dataNxt = $it.dataLevel = it.dataLevel + 1,
      $nextData = 'data' + $dataNxt,
      $currentBaseId = it.baseId,
      $nonEmptySchema = it.util.schemaHasRules($schema, it.RULES.all);
  out += 'var ' + $errs + ' = errors;var ' + $valid + ';';

  if ($nonEmptySchema) {
    var $wasComposite = it.compositeRule;
    it.compositeRule = $it.compositeRule = true;
    $it.schema = $schema;
    $it.schemaPath = $schemaPath;
    $it.errSchemaPath = $errSchemaPath;
    out += ' var ' + $nextValid + ' = false; for (var ' + $idx + ' = 0; ' + $idx + ' < ' + $data + '.length; ' + $idx + '++) { ';
    $it.errorPath = it.util.getPathExpr(it.errorPath, $idx, it.opts.jsonPointers, true);
    var $passData = $data + '[' + $idx + ']';
    $it.dataPathArr[$dataNxt] = $idx;
    var $code = it.validate($it);
    $it.baseId = $currentBaseId;

    if (it.util.varOccurences($code, $nextData) < 2) {
      out += ' ' + it.util.varReplace($code, $nextData, $passData) + ' ';
    } else {
      out += ' var ' + $nextData + ' = ' + $passData + '; ' + $code + ' ';
    }

    out += ' if (' + $nextValid + ') break; }  ';
    it.compositeRule = $it.compositeRule = $wasComposite;
    out += ' ' + $closingBraces + ' if (!' + $nextValid + ') {';
  } else {
    out += ' if (' + $data + '.length == 0) {';
  }

  var $$outStack = $$outStack || [];
  $$outStack.push(out);
  out = '';
  /* istanbul ignore else */

  if (it.createErrors !== false) {
    out += ' { keyword: \'' + 'contains' + '\' , dataPath: (dataPath || \'\') + ' + it.errorPath + ' , schemaPath: ' + it.util.toQuotedString($errSchemaPath) + ' , params: {} ';

    if (it.opts.messages !== false) {
      out += ' , message: \'should contain a valid item\' ';
    }

    if (it.opts.verbose) {
      out += ' , schema: validate.schema' + $schemaPath + ' , parentSchema: validate.schema' + it.schemaPath + ' , data: ' + $data + ' ';
    }

    out += ' } ';
  } else {
    out += ' {} ';
  }

  var __err = out;
  out = $$outStack.pop();

  if (!it.compositeRule && $breakOnError) {
    /* istanbul ignore if */
    if (it.async) {
      out += ' throw new ValidationError([' + __err + ']); ';
    } else {
      out += ' validate.errors = [' + __err + ']; return false; ';
    }
  } else {
    out += ' var err = ' + __err + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
  }

  out += ' } else { ';

  if ($nonEmptySchema) {
    out += '  errors = ' + $errs + '; if (vErrors !== null) { if (' + $errs + ') vErrors.length = ' + $errs + '; else vErrors = null; } ';
  }

  if (it.opts.allErrors) {
    out += ' } ';
  }

  out = it.util.cleanUpCode(out);
  return out;
};

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function generate_dependencies(it, $keyword, $ruleType) {
  var out = ' ';
  var $lvl = it.level;
  var $dataLvl = it.dataLevel;
  var $schema = it.schema[$keyword];
  var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
  var $breakOnError = !it.opts.allErrors;
  var $data = 'data' + ($dataLvl || '');
  var $errs = 'errs__' + $lvl;
  var $it = it.util.copy(it);
  var $closingBraces = '';
  $it.level++;
  var $nextValid = 'valid' + $it.level;
  var $schemaDeps = {},
      $propertyDeps = {},
      $ownProperties = it.opts.ownProperties;

  for ($property in $schema) {
    var $sch = $schema[$property];
    var $deps = Array.isArray($sch) ? $propertyDeps : $schemaDeps;
    $deps[$property] = $sch;
  }

  out += 'var ' + $errs + ' = errors;';
  var $currentErrorPath = it.errorPath;
  out += 'var missing' + $lvl + ';';

  for (var $property in $propertyDeps) {
    $deps = $propertyDeps[$property];

    if ($deps.length) {
      out += ' if ( ' + $data + it.util.getProperty($property) + ' !== undefined ';

      if ($ownProperties) {
        out += ' && Object.prototype.hasOwnProperty.call(' + $data + ', \'' + it.util.escapeQuotes($property) + '\') ';
      }

      if ($breakOnError) {
        out += ' && ( ';
        var arr1 = $deps;

        if (arr1) {
          var $propertyKey,
              $i = -1,
              l1 = arr1.length - 1;

          while ($i < l1) {
            $propertyKey = arr1[$i += 1];

            if ($i) {
              out += ' || ';
            }

            var $prop = it.util.getProperty($propertyKey),
                $useData = $data + $prop;
            out += ' ( ( ' + $useData + ' === undefined ';

            if ($ownProperties) {
              out += ' || ! Object.prototype.hasOwnProperty.call(' + $data + ', \'' + it.util.escapeQuotes($propertyKey) + '\') ';
            }

            out += ') && (missing' + $lvl + ' = ' + it.util.toQuotedString(it.opts.jsonPointers ? $propertyKey : $prop) + ') ) ';
          }
        }

        out += ')) {  ';
        var $propertyPath = 'missing' + $lvl,
            $missingProperty = '\' + ' + $propertyPath + ' + \'';

        if (it.opts._errorDataPathProperty) {
          it.errorPath = it.opts.jsonPointers ? it.util.getPathExpr($currentErrorPath, $propertyPath, true) : $currentErrorPath + ' + ' + $propertyPath;
        }

        var $$outStack = $$outStack || [];
        $$outStack.push(out);
        out = '';
        /* istanbul ignore else */

        if (it.createErrors !== false) {
          out += ' { keyword: \'' + 'dependencies' + '\' , dataPath: (dataPath || \'\') + ' + it.errorPath + ' , schemaPath: ' + it.util.toQuotedString($errSchemaPath) + ' , params: { property: \'' + it.util.escapeQuotes($property) + '\', missingProperty: \'' + $missingProperty + '\', depsCount: ' + $deps.length + ', deps: \'' + it.util.escapeQuotes($deps.length == 1 ? $deps[0] : $deps.join(", ")) + '\' } ';

          if (it.opts.messages !== false) {
            out += ' , message: \'should have ';

            if ($deps.length == 1) {
              out += 'property ' + it.util.escapeQuotes($deps[0]);
            } else {
              out += 'properties ' + it.util.escapeQuotes($deps.join(", "));
            }

            out += ' when property ' + it.util.escapeQuotes($property) + ' is present\' ';
          }

          if (it.opts.verbose) {
            out += ' , schema: validate.schema' + $schemaPath + ' , parentSchema: validate.schema' + it.schemaPath + ' , data: ' + $data + ' ';
          }

          out += ' } ';
        } else {
          out += ' {} ';
        }

        var __err = out;
        out = $$outStack.pop();

        if (!it.compositeRule && $breakOnError) {
          /* istanbul ignore if */
          if (it.async) {
            out += ' throw new ValidationError([' + __err + ']); ';
          } else {
            out += ' validate.errors = [' + __err + ']; return false; ';
          }
        } else {
          out += ' var err = ' + __err + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
        }
      } else {
        out += ' ) { ';
        var arr2 = $deps;

        if (arr2) {
          var $propertyKey,
              i2 = -1,
              l2 = arr2.length - 1;

          while (i2 < l2) {
            $propertyKey = arr2[i2 += 1];
            var $prop = it.util.getProperty($propertyKey),
                $missingProperty = it.util.escapeQuotes($propertyKey),
                $useData = $data + $prop;

            if (it.opts._errorDataPathProperty) {
              it.errorPath = it.util.getPath($currentErrorPath, $propertyKey, it.opts.jsonPointers);
            }

            out += ' if ( ' + $useData + ' === undefined ';

            if ($ownProperties) {
              out += ' || ! Object.prototype.hasOwnProperty.call(' + $data + ', \'' + it.util.escapeQuotes($propertyKey) + '\') ';
            }

            out += ') {  var err =   ';
            /* istanbul ignore else */

            if (it.createErrors !== false) {
              out += ' { keyword: \'' + 'dependencies' + '\' , dataPath: (dataPath || \'\') + ' + it.errorPath + ' , schemaPath: ' + it.util.toQuotedString($errSchemaPath) + ' , params: { property: \'' + it.util.escapeQuotes($property) + '\', missingProperty: \'' + $missingProperty + '\', depsCount: ' + $deps.length + ', deps: \'' + it.util.escapeQuotes($deps.length == 1 ? $deps[0] : $deps.join(", ")) + '\' } ';

              if (it.opts.messages !== false) {
                out += ' , message: \'should have ';

                if ($deps.length == 1) {
                  out += 'property ' + it.util.escapeQuotes($deps[0]);
                } else {
                  out += 'properties ' + it.util.escapeQuotes($deps.join(", "));
                }

                out += ' when property ' + it.util.escapeQuotes($property) + ' is present\' ';
              }

              if (it.opts.verbose) {
                out += ' , schema: validate.schema' + $schemaPath + ' , parentSchema: validate.schema' + it.schemaPath + ' , data: ' + $data + ' ';
              }

              out += ' } ';
            } else {
              out += ' {} ';
            }

            out += ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } ';
          }
        }
      }

      out += ' }   ';

      if ($breakOnError) {
        $closingBraces += '}';
        out += ' else { ';
      }
    }
  }

  it.errorPath = $currentErrorPath;
  var $currentBaseId = $it.baseId;

  for (var $property in $schemaDeps) {
    var $sch = $schemaDeps[$property];

    if (it.util.schemaHasRules($sch, it.RULES.all)) {
      out += ' ' + $nextValid + ' = true; if ( ' + $data + it.util.getProperty($property) + ' !== undefined ';

      if ($ownProperties) {
        out += ' && Object.prototype.hasOwnProperty.call(' + $data + ', \'' + it.util.escapeQuotes($property) + '\') ';
      }

      out += ') { ';
      $it.schema = $sch;
      $it.schemaPath = $schemaPath + it.util.getProperty($property);
      $it.errSchemaPath = $errSchemaPath + '/' + it.util.escapeFragment($property);
      out += '  ' + it.validate($it) + ' ';
      $it.baseId = $currentBaseId;
      out += ' }  ';

      if ($breakOnError) {
        out += ' if (' + $nextValid + ') { ';
        $closingBraces += '}';
      }
    }
  }

  if ($breakOnError) {
    out += '   ' + $closingBraces + ' if (' + $errs + ' == errors) {';
  }

  out = it.util.cleanUpCode(out);
  return out;
};

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function generate_enum(it, $keyword, $ruleType) {
  var out = ' ';
  var $lvl = it.level;
  var $dataLvl = it.dataLevel;
  var $schema = it.schema[$keyword];
  var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
  var $breakOnError = !it.opts.allErrors;
  var $data = 'data' + ($dataLvl || '');
  var $valid = 'valid' + $lvl;
  var $isData = it.opts.$data && $schema && $schema.$data,
      $schemaValue;

  if ($isData) {
    out += ' var schema' + $lvl + ' = ' + it.util.getData($schema.$data, $dataLvl, it.dataPathArr) + '; ';
    $schemaValue = 'schema' + $lvl;
  } else {
    $schemaValue = $schema;
  }

  var $i = 'i' + $lvl,
      $vSchema = 'schema' + $lvl;

  if (!$isData) {
    out += ' var ' + $vSchema + ' = validate.schema' + $schemaPath + ';';
  }

  out += 'var ' + $valid + ';';

  if ($isData) {
    out += ' if (schema' + $lvl + ' === undefined) ' + $valid + ' = true; else if (!Array.isArray(schema' + $lvl + ')) ' + $valid + ' = false; else {';
  }

  out += '' + $valid + ' = false;for (var ' + $i + '=0; ' + $i + '<' + $vSchema + '.length; ' + $i + '++) if (equal(' + $data + ', ' + $vSchema + '[' + $i + '])) { ' + $valid + ' = true; break; }';

  if ($isData) {
    out += '  }  ';
  }

  out += ' if (!' + $valid + ') {   ';
  var $$outStack = $$outStack || [];
  $$outStack.push(out);
  out = '';
  /* istanbul ignore else */

  if (it.createErrors !== false) {
    out += ' { keyword: \'' + 'enum' + '\' , dataPath: (dataPath || \'\') + ' + it.errorPath + ' , schemaPath: ' + it.util.toQuotedString($errSchemaPath) + ' , params: { allowedValues: schema' + $lvl + ' } ';

    if (it.opts.messages !== false) {
      out += ' , message: \'should be equal to one of the allowed values\' ';
    }

    if (it.opts.verbose) {
      out += ' , schema: validate.schema' + $schemaPath + ' , parentSchema: validate.schema' + it.schemaPath + ' , data: ' + $data + ' ';
    }

    out += ' } ';
  } else {
    out += ' {} ';
  }

  var __err = out;
  out = $$outStack.pop();

  if (!it.compositeRule && $breakOnError) {
    /* istanbul ignore if */
    if (it.async) {
      out += ' throw new ValidationError([' + __err + ']); ';
    } else {
      out += ' validate.errors = [' + __err + ']; return false; ';
    }
  } else {
    out += ' var err = ' + __err + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
  }

  out += ' }';

  if ($breakOnError) {
    out += ' else { ';
  }

  return out;
};

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function generate_format(it, $keyword, $ruleType) {
  var out = ' ';
  var $lvl = it.level;
  var $dataLvl = it.dataLevel;
  var $schema = it.schema[$keyword];
  var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
  var $breakOnError = !it.opts.allErrors;
  var $data = 'data' + ($dataLvl || '');

  if (it.opts.format === false) {
    if ($breakOnError) {
      out += ' if (true) { ';
    }

    return out;
  }

  var $isData = it.opts.$data && $schema && $schema.$data,
      $schemaValue;

  if ($isData) {
    out += ' var schema' + $lvl + ' = ' + it.util.getData($schema.$data, $dataLvl, it.dataPathArr) + '; ';
    $schemaValue = 'schema' + $lvl;
  } else {
    $schemaValue = $schema;
  }

  var $unknownFormats = it.opts.unknownFormats,
      $allowUnknown = Array.isArray($unknownFormats);

  if ($isData) {
    var $format = 'format' + $lvl,
        $isObject = 'isObject' + $lvl,
        $formatType = 'formatType' + $lvl;
    out += ' var ' + $format + ' = formats[' + $schemaValue + ']; var ' + $isObject + ' = typeof ' + $format + ' == \'object\' && !(' + $format + ' instanceof RegExp) && ' + $format + '.validate; var ' + $formatType + ' = ' + $isObject + ' && ' + $format + '.type || \'string\'; if (' + $isObject + ') { ';

    if (it.async) {
      out += ' var async' + $lvl + ' = ' + $format + '.async; ';
    }

    out += ' ' + $format + ' = ' + $format + '.validate; } if (  ';

    if ($isData) {
      out += ' (' + $schemaValue + ' !== undefined && typeof ' + $schemaValue + ' != \'string\') || ';
    }

    out += ' (';

    if ($unknownFormats != 'ignore') {
      out += ' (' + $schemaValue + ' && !' + $format + ' ';

      if ($allowUnknown) {
        out += ' && self._opts.unknownFormats.indexOf(' + $schemaValue + ') == -1 ';
      }

      out += ') || ';
    }

    out += ' (' + $format + ' && ' + $formatType + ' == \'' + $ruleType + '\' && !(typeof ' + $format + ' == \'function\' ? ';

    if (it.async) {
      out += ' (async' + $lvl + ' ? await ' + $format + '(' + $data + ') : ' + $format + '(' + $data + ')) ';
    } else {
      out += ' ' + $format + '(' + $data + ') ';
    }

    out += ' : ' + $format + '.test(' + $data + '))))) {';
  } else {
    var $format = it.formats[$schema];

    if (!$format) {
      if ($unknownFormats == 'ignore') {
        it.logger.warn('unknown format "' + $schema + '" ignored in schema at path "' + it.errSchemaPath + '"');

        if ($breakOnError) {
          out += ' if (true) { ';
        }

        return out;
      } else if ($allowUnknown && $unknownFormats.indexOf($schema) >= 0) {
        if ($breakOnError) {
          out += ' if (true) { ';
        }

        return out;
      } else {
        throw new Error('unknown format "' + $schema + '" is used in schema at path "' + it.errSchemaPath + '"');
      }
    }

    var $isObject = babelHelpers.typeof($format) == 'object' && !($format instanceof RegExp) && $format.validate;
    var $formatType = $isObject && $format.type || 'string';

    if ($isObject) {
      var $async = $format.async === true;
      $format = $format.validate;
    }

    if ($formatType != $ruleType) {
      if ($breakOnError) {
        out += ' if (true) { ';
      }

      return out;
    }

    if ($async) {
      if (!it.async) throw new Error('async format in sync schema');
      var $formatRef = 'formats' + it.util.getProperty($schema) + '.validate';
      out += ' if (!(await ' + $formatRef + '(' + $data + '))) { ';
    } else {
      out += ' if (! ';
      var $formatRef = 'formats' + it.util.getProperty($schema);
      if ($isObject) $formatRef += '.validate';

      if (typeof $format == 'function') {
        out += ' ' + $formatRef + '(' + $data + ') ';
      } else {
        out += ' ' + $formatRef + '.test(' + $data + ') ';
      }

      out += ') { ';
    }
  }

  var $$outStack = $$outStack || [];
  $$outStack.push(out);
  out = '';
  /* istanbul ignore else */

  if (it.createErrors !== false) {
    out += ' { keyword: \'' + 'format' + '\' , dataPath: (dataPath || \'\') + ' + it.errorPath + ' , schemaPath: ' + it.util.toQuotedString($errSchemaPath) + ' , params: { format:  ';

    if ($isData) {
      out += '' + $schemaValue;
    } else {
      out += '' + it.util.toQuotedString($schema);
    }

    out += '  } ';

    if (it.opts.messages !== false) {
      out += ' , message: \'should match format "';

      if ($isData) {
        out += '\' + ' + $schemaValue + ' + \'';
      } else {
        out += '' + it.util.escapeQuotes($schema);
      }

      out += '"\' ';
    }

    if (it.opts.verbose) {
      out += ' , schema:  ';

      if ($isData) {
        out += 'validate.schema' + $schemaPath;
      } else {
        out += '' + it.util.toQuotedString($schema);
      }

      out += '         , parentSchema: validate.schema' + it.schemaPath + ' , data: ' + $data + ' ';
    }

    out += ' } ';
  } else {
    out += ' {} ';
  }

  var __err = out;
  out = $$outStack.pop();

  if (!it.compositeRule && $breakOnError) {
    /* istanbul ignore if */
    if (it.async) {
      out += ' throw new ValidationError([' + __err + ']); ';
    } else {
      out += ' validate.errors = [' + __err + ']; return false; ';
    }
  } else {
    out += ' var err = ' + __err + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
  }

  out += ' } ';

  if ($breakOnError) {
    out += ' else { ';
  }

  return out;
};

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function generate_if(it, $keyword, $ruleType) {
  var out = ' ';
  var $lvl = it.level;
  var $dataLvl = it.dataLevel;
  var $schema = it.schema[$keyword];
  var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
  var $breakOnError = !it.opts.allErrors;
  var $data = 'data' + ($dataLvl || '');
  var $valid = 'valid' + $lvl;
  var $errs = 'errs__' + $lvl;
  var $it = it.util.copy(it);
  $it.level++;
  var $nextValid = 'valid' + $it.level;
  var $thenSch = it.schema['then'],
      $elseSch = it.schema['else'],
      $thenPresent = $thenSch !== undefined && it.util.schemaHasRules($thenSch, it.RULES.all),
      $elsePresent = $elseSch !== undefined && it.util.schemaHasRules($elseSch, it.RULES.all),
      $currentBaseId = $it.baseId;

  if ($thenPresent || $elsePresent) {
    var $ifClause;
    $it.createErrors = false;
    $it.schema = $schema;
    $it.schemaPath = $schemaPath;
    $it.errSchemaPath = $errSchemaPath;
    out += ' var ' + $errs + ' = errors; var ' + $valid + ' = true;  ';
    var $wasComposite = it.compositeRule;
    it.compositeRule = $it.compositeRule = true;
    out += '  ' + it.validate($it) + ' ';
    $it.baseId = $currentBaseId;
    $it.createErrors = true;
    out += '  errors = ' + $errs + '; if (vErrors !== null) { if (' + $errs + ') vErrors.length = ' + $errs + '; else vErrors = null; }  ';
    it.compositeRule = $it.compositeRule = $wasComposite;

    if ($thenPresent) {
      out += ' if (' + $nextValid + ') {  ';
      $it.schema = it.schema['then'];
      $it.schemaPath = it.schemaPath + '.then';
      $it.errSchemaPath = it.errSchemaPath + '/then';
      out += '  ' + it.validate($it) + ' ';
      $it.baseId = $currentBaseId;
      out += ' ' + $valid + ' = ' + $nextValid + '; ';

      if ($thenPresent && $elsePresent) {
        $ifClause = 'ifClause' + $lvl;
        out += ' var ' + $ifClause + ' = \'then\'; ';
      } else {
        $ifClause = '\'then\'';
      }

      out += ' } ';

      if ($elsePresent) {
        out += ' else { ';
      }
    } else {
      out += ' if (!' + $nextValid + ') { ';
    }

    if ($elsePresent) {
      $it.schema = it.schema['else'];
      $it.schemaPath = it.schemaPath + '.else';
      $it.errSchemaPath = it.errSchemaPath + '/else';
      out += '  ' + it.validate($it) + ' ';
      $it.baseId = $currentBaseId;
      out += ' ' + $valid + ' = ' + $nextValid + '; ';

      if ($thenPresent && $elsePresent) {
        $ifClause = 'ifClause' + $lvl;
        out += ' var ' + $ifClause + ' = \'else\'; ';
      } else {
        $ifClause = '\'else\'';
      }

      out += ' } ';
    }

    out += ' if (!' + $valid + ') {   var err =   ';
    /* istanbul ignore else */

    if (it.createErrors !== false) {
      out += ' { keyword: \'' + 'if' + '\' , dataPath: (dataPath || \'\') + ' + it.errorPath + ' , schemaPath: ' + it.util.toQuotedString($errSchemaPath) + ' , params: { failingKeyword: ' + $ifClause + ' } ';

      if (it.opts.messages !== false) {
        out += ' , message: \'should match "\' + ' + $ifClause + ' + \'" schema\' ';
      }

      if (it.opts.verbose) {
        out += ' , schema: validate.schema' + $schemaPath + ' , parentSchema: validate.schema' + it.schemaPath + ' , data: ' + $data + ' ';
      }

      out += ' } ';
    } else {
      out += ' {} ';
    }

    out += ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';

    if (!it.compositeRule && $breakOnError) {
      /* istanbul ignore if */
      if (it.async) {
        out += ' throw new ValidationError(vErrors); ';
      } else {
        out += ' validate.errors = vErrors; return false; ';
      }
    }

    out += ' }   ';

    if ($breakOnError) {
      out += ' else { ';
    }

    out = it.util.cleanUpCode(out);
  } else {
    if ($breakOnError) {
      out += ' if (true) { ';
    }
  }

  return out;
};

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function generate_items(it, $keyword, $ruleType) {
  var out = ' ';
  var $lvl = it.level;
  var $dataLvl = it.dataLevel;
  var $schema = it.schema[$keyword];
  var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
  var $breakOnError = !it.opts.allErrors;
  var $data = 'data' + ($dataLvl || '');
  var $valid = 'valid' + $lvl;
  var $errs = 'errs__' + $lvl;
  var $it = it.util.copy(it);
  var $closingBraces = '';
  $it.level++;
  var $nextValid = 'valid' + $it.level;
  var $idx = 'i' + $lvl,
      $dataNxt = $it.dataLevel = it.dataLevel + 1,
      $nextData = 'data' + $dataNxt,
      $currentBaseId = it.baseId;
  out += 'var ' + $errs + ' = errors;var ' + $valid + ';';

  if (Array.isArray($schema)) {
    var $additionalItems = it.schema.additionalItems;

    if ($additionalItems === false) {
      out += ' ' + $valid + ' = ' + $data + '.length <= ' + $schema.length + '; ';
      var $currErrSchemaPath = $errSchemaPath;
      $errSchemaPath = it.errSchemaPath + '/additionalItems';
      out += '  if (!' + $valid + ') {   ';
      var $$outStack = $$outStack || [];
      $$outStack.push(out);
      out = '';
      /* istanbul ignore else */

      if (it.createErrors !== false) {
        out += ' { keyword: \'' + 'additionalItems' + '\' , dataPath: (dataPath || \'\') + ' + it.errorPath + ' , schemaPath: ' + it.util.toQuotedString($errSchemaPath) + ' , params: { limit: ' + $schema.length + ' } ';

        if (it.opts.messages !== false) {
          out += ' , message: \'should NOT have more than ' + $schema.length + ' items\' ';
        }

        if (it.opts.verbose) {
          out += ' , schema: false , parentSchema: validate.schema' + it.schemaPath + ' , data: ' + $data + ' ';
        }

        out += ' } ';
      } else {
        out += ' {} ';
      }

      var __err = out;
      out = $$outStack.pop();

      if (!it.compositeRule && $breakOnError) {
        /* istanbul ignore if */
        if (it.async) {
          out += ' throw new ValidationError([' + __err + ']); ';
        } else {
          out += ' validate.errors = [' + __err + ']; return false; ';
        }
      } else {
        out += ' var err = ' + __err + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
      }

      out += ' } ';
      $errSchemaPath = $currErrSchemaPath;

      if ($breakOnError) {
        $closingBraces += '}';
        out += ' else { ';
      }
    }

    var arr1 = $schema;

    if (arr1) {
      var $sch,
          $i = -1,
          l1 = arr1.length - 1;

      while ($i < l1) {
        $sch = arr1[$i += 1];

        if (it.util.schemaHasRules($sch, it.RULES.all)) {
          out += ' ' + $nextValid + ' = true; if (' + $data + '.length > ' + $i + ') { ';
          var $passData = $data + '[' + $i + ']';
          $it.schema = $sch;
          $it.schemaPath = $schemaPath + '[' + $i + ']';
          $it.errSchemaPath = $errSchemaPath + '/' + $i;
          $it.errorPath = it.util.getPathExpr(it.errorPath, $i, it.opts.jsonPointers, true);
          $it.dataPathArr[$dataNxt] = $i;
          var $code = it.validate($it);
          $it.baseId = $currentBaseId;

          if (it.util.varOccurences($code, $nextData) < 2) {
            out += ' ' + it.util.varReplace($code, $nextData, $passData) + ' ';
          } else {
            out += ' var ' + $nextData + ' = ' + $passData + '; ' + $code + ' ';
          }

          out += ' }  ';

          if ($breakOnError) {
            out += ' if (' + $nextValid + ') { ';
            $closingBraces += '}';
          }
        }
      }
    }

    if (babelHelpers.typeof($additionalItems) == 'object' && it.util.schemaHasRules($additionalItems, it.RULES.all)) {
      $it.schema = $additionalItems;
      $it.schemaPath = it.schemaPath + '.additionalItems';
      $it.errSchemaPath = it.errSchemaPath + '/additionalItems';
      out += ' ' + $nextValid + ' = true; if (' + $data + '.length > ' + $schema.length + ') {  for (var ' + $idx + ' = ' + $schema.length + '; ' + $idx + ' < ' + $data + '.length; ' + $idx + '++) { ';
      $it.errorPath = it.util.getPathExpr(it.errorPath, $idx, it.opts.jsonPointers, true);
      var $passData = $data + '[' + $idx + ']';
      $it.dataPathArr[$dataNxt] = $idx;
      var $code = it.validate($it);
      $it.baseId = $currentBaseId;

      if (it.util.varOccurences($code, $nextData) < 2) {
        out += ' ' + it.util.varReplace($code, $nextData, $passData) + ' ';
      } else {
        out += ' var ' + $nextData + ' = ' + $passData + '; ' + $code + ' ';
      }

      if ($breakOnError) {
        out += ' if (!' + $nextValid + ') break; ';
      }

      out += ' } }  ';

      if ($breakOnError) {
        out += ' if (' + $nextValid + ') { ';
        $closingBraces += '}';
      }
    }
  } else if (it.util.schemaHasRules($schema, it.RULES.all)) {
    $it.schema = $schema;
    $it.schemaPath = $schemaPath;
    $it.errSchemaPath = $errSchemaPath;
    out += '  for (var ' + $idx + ' = ' + 0 + '; ' + $idx + ' < ' + $data + '.length; ' + $idx + '++) { ';
    $it.errorPath = it.util.getPathExpr(it.errorPath, $idx, it.opts.jsonPointers, true);
    var $passData = $data + '[' + $idx + ']';
    $it.dataPathArr[$dataNxt] = $idx;
    var $code = it.validate($it);
    $it.baseId = $currentBaseId;

    if (it.util.varOccurences($code, $nextData) < 2) {
      out += ' ' + it.util.varReplace($code, $nextData, $passData) + ' ';
    } else {
      out += ' var ' + $nextData + ' = ' + $passData + '; ' + $code + ' ';
    }

    if ($breakOnError) {
      out += ' if (!' + $nextValid + ') break; ';
    }

    out += ' }';
  }

  if ($breakOnError) {
    out += ' ' + $closingBraces + ' if (' + $errs + ' == errors) {';
  }

  out = it.util.cleanUpCode(out);
  return out;
};

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function generate_multipleOf(it, $keyword, $ruleType) {
  var out = ' ';
  var $lvl = it.level;
  var $dataLvl = it.dataLevel;
  var $schema = it.schema[$keyword];
  var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
  var $breakOnError = !it.opts.allErrors;
  var $data = 'data' + ($dataLvl || '');
  var $isData = it.opts.$data && $schema && $schema.$data,
      $schemaValue;

  if ($isData) {
    out += ' var schema' + $lvl + ' = ' + it.util.getData($schema.$data, $dataLvl, it.dataPathArr) + '; ';
    $schemaValue = 'schema' + $lvl;
  } else {
    $schemaValue = $schema;
  }

  out += 'var division' + $lvl + ';if (';

  if ($isData) {
    out += ' ' + $schemaValue + ' !== undefined && ( typeof ' + $schemaValue + ' != \'number\' || ';
  }

  out += ' (division' + $lvl + ' = ' + $data + ' / ' + $schemaValue + ', ';

  if (it.opts.multipleOfPrecision) {
    out += ' Math.abs(Math.round(division' + $lvl + ') - division' + $lvl + ') > 1e-' + it.opts.multipleOfPrecision + ' ';
  } else {
    out += ' division' + $lvl + ' !== parseInt(division' + $lvl + ') ';
  }

  out += ' ) ';

  if ($isData) {
    out += '  )  ';
  }

  out += ' ) {   ';
  var $$outStack = $$outStack || [];
  $$outStack.push(out);
  out = '';
  /* istanbul ignore else */

  if (it.createErrors !== false) {
    out += ' { keyword: \'' + 'multipleOf' + '\' , dataPath: (dataPath || \'\') + ' + it.errorPath + ' , schemaPath: ' + it.util.toQuotedString($errSchemaPath) + ' , params: { multipleOf: ' + $schemaValue + ' } ';

    if (it.opts.messages !== false) {
      out += ' , message: \'should be multiple of ';

      if ($isData) {
        out += '\' + ' + $schemaValue;
      } else {
        out += '' + $schemaValue + '\'';
      }
    }

    if (it.opts.verbose) {
      out += ' , schema:  ';

      if ($isData) {
        out += 'validate.schema' + $schemaPath;
      } else {
        out += '' + $schema;
      }

      out += '         , parentSchema: validate.schema' + it.schemaPath + ' , data: ' + $data + ' ';
    }

    out += ' } ';
  } else {
    out += ' {} ';
  }

  var __err = out;
  out = $$outStack.pop();

  if (!it.compositeRule && $breakOnError) {
    /* istanbul ignore if */
    if (it.async) {
      out += ' throw new ValidationError([' + __err + ']); ';
    } else {
      out += ' validate.errors = [' + __err + ']; return false; ';
    }
  } else {
    out += ' var err = ' + __err + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
  }

  out += '} ';

  if ($breakOnError) {
    out += ' else { ';
  }

  return out;
};

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function generate_not(it, $keyword, $ruleType) {
  var out = ' ';
  var $lvl = it.level;
  var $dataLvl = it.dataLevel;
  var $schema = it.schema[$keyword];
  var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
  var $breakOnError = !it.opts.allErrors;
  var $data = 'data' + ($dataLvl || '');
  var $errs = 'errs__' + $lvl;
  var $it = it.util.copy(it);
  $it.level++;
  var $nextValid = 'valid' + $it.level;

  if (it.util.schemaHasRules($schema, it.RULES.all)) {
    $it.schema = $schema;
    $it.schemaPath = $schemaPath;
    $it.errSchemaPath = $errSchemaPath;
    out += ' var ' + $errs + ' = errors;  ';
    var $wasComposite = it.compositeRule;
    it.compositeRule = $it.compositeRule = true;
    $it.createErrors = false;
    var $allErrorsOption;

    if ($it.opts.allErrors) {
      $allErrorsOption = $it.opts.allErrors;
      $it.opts.allErrors = false;
    }

    out += ' ' + it.validate($it) + ' ';
    $it.createErrors = true;
    if ($allErrorsOption) $it.opts.allErrors = $allErrorsOption;
    it.compositeRule = $it.compositeRule = $wasComposite;
    out += ' if (' + $nextValid + ') {   ';
    var $$outStack = $$outStack || [];
    $$outStack.push(out);
    out = '';
    /* istanbul ignore else */

    if (it.createErrors !== false) {
      out += ' { keyword: \'' + 'not' + '\' , dataPath: (dataPath || \'\') + ' + it.errorPath + ' , schemaPath: ' + it.util.toQuotedString($errSchemaPath) + ' , params: {} ';

      if (it.opts.messages !== false) {
        out += ' , message: \'should NOT be valid\' ';
      }

      if (it.opts.verbose) {
        out += ' , schema: validate.schema' + $schemaPath + ' , parentSchema: validate.schema' + it.schemaPath + ' , data: ' + $data + ' ';
      }

      out += ' } ';
    } else {
      out += ' {} ';
    }

    var __err = out;
    out = $$outStack.pop();

    if (!it.compositeRule && $breakOnError) {
      /* istanbul ignore if */
      if (it.async) {
        out += ' throw new ValidationError([' + __err + ']); ';
      } else {
        out += ' validate.errors = [' + __err + ']; return false; ';
      }
    } else {
      out += ' var err = ' + __err + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
    }

    out += ' } else {  errors = ' + $errs + '; if (vErrors !== null) { if (' + $errs + ') vErrors.length = ' + $errs + '; else vErrors = null; } ';

    if (it.opts.allErrors) {
      out += ' } ';
    }
  } else {
    out += '  var err =   ';
    /* istanbul ignore else */

    if (it.createErrors !== false) {
      out += ' { keyword: \'' + 'not' + '\' , dataPath: (dataPath || \'\') + ' + it.errorPath + ' , schemaPath: ' + it.util.toQuotedString($errSchemaPath) + ' , params: {} ';

      if (it.opts.messages !== false) {
        out += ' , message: \'should NOT be valid\' ';
      }

      if (it.opts.verbose) {
        out += ' , schema: validate.schema' + $schemaPath + ' , parentSchema: validate.schema' + it.schemaPath + ' , data: ' + $data + ' ';
      }

      out += ' } ';
    } else {
      out += ' {} ';
    }

    out += ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';

    if ($breakOnError) {
      out += ' if (false) { ';
    }
  }

  return out;
};

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function generate_oneOf(it, $keyword, $ruleType) {
  var out = ' ';
  var $lvl = it.level;
  var $dataLvl = it.dataLevel;
  var $schema = it.schema[$keyword];
  var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
  var $breakOnError = !it.opts.allErrors;
  var $data = 'data' + ($dataLvl || '');
  var $valid = 'valid' + $lvl;
  var $errs = 'errs__' + $lvl;
  var $it = it.util.copy(it);
  var $closingBraces = '';
  $it.level++;
  var $nextValid = 'valid' + $it.level;
  var $currentBaseId = $it.baseId,
      $prevValid = 'prevValid' + $lvl,
      $passingSchemas = 'passingSchemas' + $lvl;
  out += 'var ' + $errs + ' = errors , ' + $prevValid + ' = false , ' + $valid + ' = false , ' + $passingSchemas + ' = null; ';
  var $wasComposite = it.compositeRule;
  it.compositeRule = $it.compositeRule = true;
  var arr1 = $schema;

  if (arr1) {
    var $sch,
        $i = -1,
        l1 = arr1.length - 1;

    while ($i < l1) {
      $sch = arr1[$i += 1];

      if (it.util.schemaHasRules($sch, it.RULES.all)) {
        $it.schema = $sch;
        $it.schemaPath = $schemaPath + '[' + $i + ']';
        $it.errSchemaPath = $errSchemaPath + '/' + $i;
        out += '  ' + it.validate($it) + ' ';
        $it.baseId = $currentBaseId;
      } else {
        out += ' var ' + $nextValid + ' = true; ';
      }

      if ($i) {
        out += ' if (' + $nextValid + ' && ' + $prevValid + ') { ' + $valid + ' = false; ' + $passingSchemas + ' = [' + $passingSchemas + ', ' + $i + ']; } else { ';
        $closingBraces += '}';
      }

      out += ' if (' + $nextValid + ') { ' + $valid + ' = ' + $prevValid + ' = true; ' + $passingSchemas + ' = ' + $i + '; }';
    }
  }

  it.compositeRule = $it.compositeRule = $wasComposite;
  out += '' + $closingBraces + 'if (!' + $valid + ') {   var err =   ';
  /* istanbul ignore else */

  if (it.createErrors !== false) {
    out += ' { keyword: \'' + 'oneOf' + '\' , dataPath: (dataPath || \'\') + ' + it.errorPath + ' , schemaPath: ' + it.util.toQuotedString($errSchemaPath) + ' , params: { passingSchemas: ' + $passingSchemas + ' } ';

    if (it.opts.messages !== false) {
      out += ' , message: \'should match exactly one schema in oneOf\' ';
    }

    if (it.opts.verbose) {
      out += ' , schema: validate.schema' + $schemaPath + ' , parentSchema: validate.schema' + it.schemaPath + ' , data: ' + $data + ' ';
    }

    out += ' } ';
  } else {
    out += ' {} ';
  }

  out += ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';

  if (!it.compositeRule && $breakOnError) {
    /* istanbul ignore if */
    if (it.async) {
      out += ' throw new ValidationError(vErrors); ';
    } else {
      out += ' validate.errors = vErrors; return false; ';
    }
  }

  out += '} else {  errors = ' + $errs + '; if (vErrors !== null) { if (' + $errs + ') vErrors.length = ' + $errs + '; else vErrors = null; }';

  if (it.opts.allErrors) {
    out += ' } ';
  }

  return out;
};

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function generate_pattern(it, $keyword, $ruleType) {
  var out = ' ';
  var $lvl = it.level;
  var $dataLvl = it.dataLevel;
  var $schema = it.schema[$keyword];
  var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
  var $breakOnError = !it.opts.allErrors;
  var $data = 'data' + ($dataLvl || '');
  var $isData = it.opts.$data && $schema && $schema.$data,
      $schemaValue;

  if ($isData) {
    out += ' var schema' + $lvl + ' = ' + it.util.getData($schema.$data, $dataLvl, it.dataPathArr) + '; ';
    $schemaValue = 'schema' + $lvl;
  } else {
    $schemaValue = $schema;
  }

  var $regexp = $isData ? '(new RegExp(' + $schemaValue + '))' : it.usePattern($schema);
  out += 'if ( ';

  if ($isData) {
    out += ' (' + $schemaValue + ' !== undefined && typeof ' + $schemaValue + ' != \'string\') || ';
  }

  out += ' !' + $regexp + '.test(' + $data + ') ) {   ';
  var $$outStack = $$outStack || [];
  $$outStack.push(out);
  out = '';
  /* istanbul ignore else */

  if (it.createErrors !== false) {
    out += ' { keyword: \'' + 'pattern' + '\' , dataPath: (dataPath || \'\') + ' + it.errorPath + ' , schemaPath: ' + it.util.toQuotedString($errSchemaPath) + ' , params: { pattern:  ';

    if ($isData) {
      out += '' + $schemaValue;
    } else {
      out += '' + it.util.toQuotedString($schema);
    }

    out += '  } ';

    if (it.opts.messages !== false) {
      out += ' , message: \'should match pattern "';

      if ($isData) {
        out += '\' + ' + $schemaValue + ' + \'';
      } else {
        out += '' + it.util.escapeQuotes($schema);
      }

      out += '"\' ';
    }

    if (it.opts.verbose) {
      out += ' , schema:  ';

      if ($isData) {
        out += 'validate.schema' + $schemaPath;
      } else {
        out += '' + it.util.toQuotedString($schema);
      }

      out += '         , parentSchema: validate.schema' + it.schemaPath + ' , data: ' + $data + ' ';
    }

    out += ' } ';
  } else {
    out += ' {} ';
  }

  var __err = out;
  out = $$outStack.pop();

  if (!it.compositeRule && $breakOnError) {
    /* istanbul ignore if */
    if (it.async) {
      out += ' throw new ValidationError([' + __err + ']); ';
    } else {
      out += ' validate.errors = [' + __err + ']; return false; ';
    }
  } else {
    out += ' var err = ' + __err + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
  }

  out += '} ';

  if ($breakOnError) {
    out += ' else { ';
  }

  return out;
};

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function generate_properties(it, $keyword, $ruleType) {
  var out = ' ';
  var $lvl = it.level;
  var $dataLvl = it.dataLevel;
  var $schema = it.schema[$keyword];
  var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
  var $breakOnError = !it.opts.allErrors;
  var $data = 'data' + ($dataLvl || '');
  var $errs = 'errs__' + $lvl;
  var $it = it.util.copy(it);
  var $closingBraces = '';
  $it.level++;
  var $nextValid = 'valid' + $it.level;
  var $key = 'key' + $lvl,
      $idx = 'idx' + $lvl,
      $dataNxt = $it.dataLevel = it.dataLevel + 1,
      $nextData = 'data' + $dataNxt,
      $dataProperties = 'dataProperties' + $lvl;
  var $schemaKeys = Object.keys($schema || {}),
      $pProperties = it.schema.patternProperties || {},
      $pPropertyKeys = Object.keys($pProperties),
      $aProperties = it.schema.additionalProperties,
      $someProperties = $schemaKeys.length || $pPropertyKeys.length,
      $noAdditional = $aProperties === false,
      $additionalIsSchema = babelHelpers.typeof($aProperties) == 'object' && Object.keys($aProperties).length,
      $removeAdditional = it.opts.removeAdditional,
      $checkAdditional = $noAdditional || $additionalIsSchema || $removeAdditional,
      $ownProperties = it.opts.ownProperties,
      $currentBaseId = it.baseId;
  var $required = it.schema.required;
  if ($required && !(it.opts.$data && $required.$data) && $required.length < it.opts.loopRequired) var $requiredHash = it.util.toHash($required);
  out += 'var ' + $errs + ' = errors;var ' + $nextValid + ' = true;';

  if ($ownProperties) {
    out += ' var ' + $dataProperties + ' = undefined;';
  }

  if ($checkAdditional) {
    if ($ownProperties) {
      out += ' ' + $dataProperties + ' = ' + $dataProperties + ' || Object.keys(' + $data + '); for (var ' + $idx + '=0; ' + $idx + '<' + $dataProperties + '.length; ' + $idx + '++) { var ' + $key + ' = ' + $dataProperties + '[' + $idx + ']; ';
    } else {
      out += ' for (var ' + $key + ' in ' + $data + ') { ';
    }

    if ($someProperties) {
      out += ' var isAdditional' + $lvl + ' = !(false ';

      if ($schemaKeys.length) {
        if ($schemaKeys.length > 8) {
          out += ' || validate.schema' + $schemaPath + '.hasOwnProperty(' + $key + ') ';
        } else {
          var arr1 = $schemaKeys;

          if (arr1) {
            var $propertyKey,
                i1 = -1,
                l1 = arr1.length - 1;

            while (i1 < l1) {
              $propertyKey = arr1[i1 += 1];
              out += ' || ' + $key + ' == ' + it.util.toQuotedString($propertyKey) + ' ';
            }
          }
        }
      }

      if ($pPropertyKeys.length) {
        var arr2 = $pPropertyKeys;

        if (arr2) {
          var $pProperty,
              $i = -1,
              l2 = arr2.length - 1;

          while ($i < l2) {
            $pProperty = arr2[$i += 1];
            out += ' || ' + it.usePattern($pProperty) + '.test(' + $key + ') ';
          }
        }
      }

      out += ' ); if (isAdditional' + $lvl + ') { ';
    }

    if ($removeAdditional == 'all') {
      out += ' delete ' + $data + '[' + $key + ']; ';
    } else {
      var $currentErrorPath = it.errorPath;
      var $additionalProperty = '\' + ' + $key + ' + \'';

      if (it.opts._errorDataPathProperty) {
        it.errorPath = it.util.getPathExpr(it.errorPath, $key, it.opts.jsonPointers);
      }

      if ($noAdditional) {
        if ($removeAdditional) {
          out += ' delete ' + $data + '[' + $key + ']; ';
        } else {
          out += ' ' + $nextValid + ' = false; ';
          var $currErrSchemaPath = $errSchemaPath;
          $errSchemaPath = it.errSchemaPath + '/additionalProperties';
          var $$outStack = $$outStack || [];
          $$outStack.push(out);
          out = '';
          /* istanbul ignore else */

          if (it.createErrors !== false) {
            out += ' { keyword: \'' + 'additionalProperties' + '\' , dataPath: (dataPath || \'\') + ' + it.errorPath + ' , schemaPath: ' + it.util.toQuotedString($errSchemaPath) + ' , params: { additionalProperty: \'' + $additionalProperty + '\' } ';

            if (it.opts.messages !== false) {
              out += ' , message: \'';

              if (it.opts._errorDataPathProperty) {
                out += 'is an invalid additional property';
              } else {
                out += 'should NOT have additional properties';
              }

              out += '\' ';
            }

            if (it.opts.verbose) {
              out += ' , schema: false , parentSchema: validate.schema' + it.schemaPath + ' , data: ' + $data + ' ';
            }

            out += ' } ';
          } else {
            out += ' {} ';
          }

          var __err = out;
          out = $$outStack.pop();

          if (!it.compositeRule && $breakOnError) {
            /* istanbul ignore if */
            if (it.async) {
              out += ' throw new ValidationError([' + __err + ']); ';
            } else {
              out += ' validate.errors = [' + __err + ']; return false; ';
            }
          } else {
            out += ' var err = ' + __err + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
          }

          $errSchemaPath = $currErrSchemaPath;

          if ($breakOnError) {
            out += ' break; ';
          }
        }
      } else if ($additionalIsSchema) {
        if ($removeAdditional == 'failing') {
          out += ' var ' + $errs + ' = errors;  ';
          var $wasComposite = it.compositeRule;
          it.compositeRule = $it.compositeRule = true;
          $it.schema = $aProperties;
          $it.schemaPath = it.schemaPath + '.additionalProperties';
          $it.errSchemaPath = it.errSchemaPath + '/additionalProperties';
          $it.errorPath = it.opts._errorDataPathProperty ? it.errorPath : it.util.getPathExpr(it.errorPath, $key, it.opts.jsonPointers);
          var $passData = $data + '[' + $key + ']';
          $it.dataPathArr[$dataNxt] = $key;
          var $code = it.validate($it);
          $it.baseId = $currentBaseId;

          if (it.util.varOccurences($code, $nextData) < 2) {
            out += ' ' + it.util.varReplace($code, $nextData, $passData) + ' ';
          } else {
            out += ' var ' + $nextData + ' = ' + $passData + '; ' + $code + ' ';
          }

          out += ' if (!' + $nextValid + ') { errors = ' + $errs + '; if (validate.errors !== null) { if (errors) validate.errors.length = errors; else validate.errors = null; } delete ' + $data + '[' + $key + ']; }  ';
          it.compositeRule = $it.compositeRule = $wasComposite;
        } else {
          $it.schema = $aProperties;
          $it.schemaPath = it.schemaPath + '.additionalProperties';
          $it.errSchemaPath = it.errSchemaPath + '/additionalProperties';
          $it.errorPath = it.opts._errorDataPathProperty ? it.errorPath : it.util.getPathExpr(it.errorPath, $key, it.opts.jsonPointers);
          var $passData = $data + '[' + $key + ']';
          $it.dataPathArr[$dataNxt] = $key;
          var $code = it.validate($it);
          $it.baseId = $currentBaseId;

          if (it.util.varOccurences($code, $nextData) < 2) {
            out += ' ' + it.util.varReplace($code, $nextData, $passData) + ' ';
          } else {
            out += ' var ' + $nextData + ' = ' + $passData + '; ' + $code + ' ';
          }

          if ($breakOnError) {
            out += ' if (!' + $nextValid + ') break; ';
          }
        }
      }

      it.errorPath = $currentErrorPath;
    }

    if ($someProperties) {
      out += ' } ';
    }

    out += ' }  ';

    if ($breakOnError) {
      out += ' if (' + $nextValid + ') { ';
      $closingBraces += '}';
    }
  }

  var $useDefaults = it.opts.useDefaults && !it.compositeRule;

  if ($schemaKeys.length) {
    var arr3 = $schemaKeys;

    if (arr3) {
      var $propertyKey,
          i3 = -1,
          l3 = arr3.length - 1;

      while (i3 < l3) {
        $propertyKey = arr3[i3 += 1];
        var $sch = $schema[$propertyKey];

        if (it.util.schemaHasRules($sch, it.RULES.all)) {
          var $prop = it.util.getProperty($propertyKey),
              $passData = $data + $prop,
              $hasDefault = $useDefaults && $sch.default !== undefined;
          $it.schema = $sch;
          $it.schemaPath = $schemaPath + $prop;
          $it.errSchemaPath = $errSchemaPath + '/' + it.util.escapeFragment($propertyKey);
          $it.errorPath = it.util.getPath(it.errorPath, $propertyKey, it.opts.jsonPointers);
          $it.dataPathArr[$dataNxt] = it.util.toQuotedString($propertyKey);
          var $code = it.validate($it);
          $it.baseId = $currentBaseId;

          if (it.util.varOccurences($code, $nextData) < 2) {
            $code = it.util.varReplace($code, $nextData, $passData);
            var $useData = $passData;
          } else {
            var $useData = $nextData;
            out += ' var ' + $nextData + ' = ' + $passData + '; ';
          }

          if ($hasDefault) {
            out += ' ' + $code + ' ';
          } else {
            if ($requiredHash && $requiredHash[$propertyKey]) {
              out += ' if ( ' + $useData + ' === undefined ';

              if ($ownProperties) {
                out += ' || ! Object.prototype.hasOwnProperty.call(' + $data + ', \'' + it.util.escapeQuotes($propertyKey) + '\') ';
              }

              out += ') { ' + $nextValid + ' = false; ';
              var $currentErrorPath = it.errorPath,
                  $currErrSchemaPath = $errSchemaPath,
                  $missingProperty = it.util.escapeQuotes($propertyKey);

              if (it.opts._errorDataPathProperty) {
                it.errorPath = it.util.getPath($currentErrorPath, $propertyKey, it.opts.jsonPointers);
              }

              $errSchemaPath = it.errSchemaPath + '/required';
              var $$outStack = $$outStack || [];
              $$outStack.push(out);
              out = '';
              /* istanbul ignore else */

              if (it.createErrors !== false) {
                out += ' { keyword: \'' + 'required' + '\' , dataPath: (dataPath || \'\') + ' + it.errorPath + ' , schemaPath: ' + it.util.toQuotedString($errSchemaPath) + ' , params: { missingProperty: \'' + $missingProperty + '\' } ';

                if (it.opts.messages !== false) {
                  out += ' , message: \'';

                  if (it.opts._errorDataPathProperty) {
                    out += 'is a required property';
                  } else {
                    out += 'should have required property \\\'' + $missingProperty + '\\\'';
                  }

                  out += '\' ';
                }

                if (it.opts.verbose) {
                  out += ' , schema: validate.schema' + $schemaPath + ' , parentSchema: validate.schema' + it.schemaPath + ' , data: ' + $data + ' ';
                }

                out += ' } ';
              } else {
                out += ' {} ';
              }

              var __err = out;
              out = $$outStack.pop();

              if (!it.compositeRule && $breakOnError) {
                /* istanbul ignore if */
                if (it.async) {
                  out += ' throw new ValidationError([' + __err + ']); ';
                } else {
                  out += ' validate.errors = [' + __err + ']; return false; ';
                }
              } else {
                out += ' var err = ' + __err + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
              }

              $errSchemaPath = $currErrSchemaPath;
              it.errorPath = $currentErrorPath;
              out += ' } else { ';
            } else {
              if ($breakOnError) {
                out += ' if ( ' + $useData + ' === undefined ';

                if ($ownProperties) {
                  out += ' || ! Object.prototype.hasOwnProperty.call(' + $data + ', \'' + it.util.escapeQuotes($propertyKey) + '\') ';
                }

                out += ') { ' + $nextValid + ' = true; } else { ';
              } else {
                out += ' if (' + $useData + ' !== undefined ';

                if ($ownProperties) {
                  out += ' &&   Object.prototype.hasOwnProperty.call(' + $data + ', \'' + it.util.escapeQuotes($propertyKey) + '\') ';
                }

                out += ' ) { ';
              }
            }

            out += ' ' + $code + ' } ';
          }
        }

        if ($breakOnError) {
          out += ' if (' + $nextValid + ') { ';
          $closingBraces += '}';
        }
      }
    }
  }

  if ($pPropertyKeys.length) {
    var arr4 = $pPropertyKeys;

    if (arr4) {
      var $pProperty,
          i4 = -1,
          l4 = arr4.length - 1;

      while (i4 < l4) {
        $pProperty = arr4[i4 += 1];
        var $sch = $pProperties[$pProperty];

        if (it.util.schemaHasRules($sch, it.RULES.all)) {
          $it.schema = $sch;
          $it.schemaPath = it.schemaPath + '.patternProperties' + it.util.getProperty($pProperty);
          $it.errSchemaPath = it.errSchemaPath + '/patternProperties/' + it.util.escapeFragment($pProperty);

          if ($ownProperties) {
            out += ' ' + $dataProperties + ' = ' + $dataProperties + ' || Object.keys(' + $data + '); for (var ' + $idx + '=0; ' + $idx + '<' + $dataProperties + '.length; ' + $idx + '++) { var ' + $key + ' = ' + $dataProperties + '[' + $idx + ']; ';
          } else {
            out += ' for (var ' + $key + ' in ' + $data + ') { ';
          }

          out += ' if (' + it.usePattern($pProperty) + '.test(' + $key + ')) { ';
          $it.errorPath = it.util.getPathExpr(it.errorPath, $key, it.opts.jsonPointers);
          var $passData = $data + '[' + $key + ']';
          $it.dataPathArr[$dataNxt] = $key;
          var $code = it.validate($it);
          $it.baseId = $currentBaseId;

          if (it.util.varOccurences($code, $nextData) < 2) {
            out += ' ' + it.util.varReplace($code, $nextData, $passData) + ' ';
          } else {
            out += ' var ' + $nextData + ' = ' + $passData + '; ' + $code + ' ';
          }

          if ($breakOnError) {
            out += ' if (!' + $nextValid + ') break; ';
          }

          out += ' } ';

          if ($breakOnError) {
            out += ' else ' + $nextValid + ' = true; ';
          }

          out += ' }  ';

          if ($breakOnError) {
            out += ' if (' + $nextValid + ') { ';
            $closingBraces += '}';
          }
        }
      }
    }
  }

  if ($breakOnError) {
    out += ' ' + $closingBraces + ' if (' + $errs + ' == errors) {';
  }

  out = it.util.cleanUpCode(out);
  return out;
};

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function generate_propertyNames(it, $keyword, $ruleType) {
  var out = ' ';
  var $lvl = it.level;
  var $dataLvl = it.dataLevel;
  var $schema = it.schema[$keyword];
  var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
  var $breakOnError = !it.opts.allErrors;
  var $data = 'data' + ($dataLvl || '');
  var $errs = 'errs__' + $lvl;
  var $it = it.util.copy(it);
  var $closingBraces = '';
  $it.level++;
  var $nextValid = 'valid' + $it.level;
  out += 'var ' + $errs + ' = errors;';

  if (it.util.schemaHasRules($schema, it.RULES.all)) {
    $it.schema = $schema;
    $it.schemaPath = $schemaPath;
    $it.errSchemaPath = $errSchemaPath;
    var $key = 'key' + $lvl,
        $idx = 'idx' + $lvl,
        $i = 'i' + $lvl,
        $invalidName = '\' + ' + $key + ' + \'',
        $dataNxt = $it.dataLevel = it.dataLevel + 1,
        $nextData = 'data' + $dataNxt,
        $dataProperties = 'dataProperties' + $lvl,
        $ownProperties = it.opts.ownProperties,
        $currentBaseId = it.baseId;

    if ($ownProperties) {
      out += ' var ' + $dataProperties + ' = undefined; ';
    }

    if ($ownProperties) {
      out += ' ' + $dataProperties + ' = ' + $dataProperties + ' || Object.keys(' + $data + '); for (var ' + $idx + '=0; ' + $idx + '<' + $dataProperties + '.length; ' + $idx + '++) { var ' + $key + ' = ' + $dataProperties + '[' + $idx + ']; ';
    } else {
      out += ' for (var ' + $key + ' in ' + $data + ') { ';
    }

    out += ' var startErrs' + $lvl + ' = errors; ';
    var $passData = $key;
    var $wasComposite = it.compositeRule;
    it.compositeRule = $it.compositeRule = true;
    var $code = it.validate($it);
    $it.baseId = $currentBaseId;

    if (it.util.varOccurences($code, $nextData) < 2) {
      out += ' ' + it.util.varReplace($code, $nextData, $passData) + ' ';
    } else {
      out += ' var ' + $nextData + ' = ' + $passData + '; ' + $code + ' ';
    }

    it.compositeRule = $it.compositeRule = $wasComposite;
    out += ' if (!' + $nextValid + ') { for (var ' + $i + '=startErrs' + $lvl + '; ' + $i + '<errors; ' + $i + '++) { vErrors[' + $i + '].propertyName = ' + $key + '; }   var err =   ';
    /* istanbul ignore else */

    if (it.createErrors !== false) {
      out += ' { keyword: \'' + 'propertyNames' + '\' , dataPath: (dataPath || \'\') + ' + it.errorPath + ' , schemaPath: ' + it.util.toQuotedString($errSchemaPath) + ' , params: { propertyName: \'' + $invalidName + '\' } ';

      if (it.opts.messages !== false) {
        out += ' , message: \'property name \\\'' + $invalidName + '\\\' is invalid\' ';
      }

      if (it.opts.verbose) {
        out += ' , schema: validate.schema' + $schemaPath + ' , parentSchema: validate.schema' + it.schemaPath + ' , data: ' + $data + ' ';
      }

      out += ' } ';
    } else {
      out += ' {} ';
    }

    out += ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';

    if (!it.compositeRule && $breakOnError) {
      /* istanbul ignore if */
      if (it.async) {
        out += ' throw new ValidationError(vErrors); ';
      } else {
        out += ' validate.errors = vErrors; return false; ';
      }
    }

    if ($breakOnError) {
      out += ' break; ';
    }

    out += ' } }';
  }

  if ($breakOnError) {
    out += ' ' + $closingBraces + ' if (' + $errs + ' == errors) {';
  }

  out = it.util.cleanUpCode(out);
  return out;
};

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function generate_required(it, $keyword, $ruleType) {
  var out = ' ';
  var $lvl = it.level;
  var $dataLvl = it.dataLevel;
  var $schema = it.schema[$keyword];
  var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
  var $breakOnError = !it.opts.allErrors;
  var $data = 'data' + ($dataLvl || '');
  var $valid = 'valid' + $lvl;
  var $isData = it.opts.$data && $schema && $schema.$data,
      $schemaValue;

  if ($isData) {
    out += ' var schema' + $lvl + ' = ' + it.util.getData($schema.$data, $dataLvl, it.dataPathArr) + '; ';
    $schemaValue = 'schema' + $lvl;
  } else {
    $schemaValue = $schema;
  }

  var $vSchema = 'schema' + $lvl;

  if (!$isData) {
    if ($schema.length < it.opts.loopRequired && it.schema.properties && Object.keys(it.schema.properties).length) {
      var $required = [];
      var arr1 = $schema;

      if (arr1) {
        var $property,
            i1 = -1,
            l1 = arr1.length - 1;

        while (i1 < l1) {
          $property = arr1[i1 += 1];
          var $propertySch = it.schema.properties[$property];

          if (!($propertySch && it.util.schemaHasRules($propertySch, it.RULES.all))) {
            $required[$required.length] = $property;
          }
        }
      }
    } else {
      var $required = $schema;
    }
  }

  if ($isData || $required.length) {
    var $currentErrorPath = it.errorPath,
        $loopRequired = $isData || $required.length >= it.opts.loopRequired,
        $ownProperties = it.opts.ownProperties;

    if ($breakOnError) {
      out += ' var missing' + $lvl + '; ';

      if ($loopRequired) {
        if (!$isData) {
          out += ' var ' + $vSchema + ' = validate.schema' + $schemaPath + '; ';
        }

        var $i = 'i' + $lvl,
            $propertyPath = 'schema' + $lvl + '[' + $i + ']',
            $missingProperty = '\' + ' + $propertyPath + ' + \'';

        if (it.opts._errorDataPathProperty) {
          it.errorPath = it.util.getPathExpr($currentErrorPath, $propertyPath, it.opts.jsonPointers);
        }

        out += ' var ' + $valid + ' = true; ';

        if ($isData) {
          out += ' if (schema' + $lvl + ' === undefined) ' + $valid + ' = true; else if (!Array.isArray(schema' + $lvl + ')) ' + $valid + ' = false; else {';
        }

        out += ' for (var ' + $i + ' = 0; ' + $i + ' < ' + $vSchema + '.length; ' + $i + '++) { ' + $valid + ' = ' + $data + '[' + $vSchema + '[' + $i + ']] !== undefined ';

        if ($ownProperties) {
          out += ' &&   Object.prototype.hasOwnProperty.call(' + $data + ', ' + $vSchema + '[' + $i + ']) ';
        }

        out += '; if (!' + $valid + ') break; } ';

        if ($isData) {
          out += '  }  ';
        }

        out += '  if (!' + $valid + ') {   ';
        var $$outStack = $$outStack || [];
        $$outStack.push(out);
        out = '';
        /* istanbul ignore else */

        if (it.createErrors !== false) {
          out += ' { keyword: \'' + 'required' + '\' , dataPath: (dataPath || \'\') + ' + it.errorPath + ' , schemaPath: ' + it.util.toQuotedString($errSchemaPath) + ' , params: { missingProperty: \'' + $missingProperty + '\' } ';

          if (it.opts.messages !== false) {
            out += ' , message: \'';

            if (it.opts._errorDataPathProperty) {
              out += 'is a required property';
            } else {
              out += 'should have required property \\\'' + $missingProperty + '\\\'';
            }

            out += '\' ';
          }

          if (it.opts.verbose) {
            out += ' , schema: validate.schema' + $schemaPath + ' , parentSchema: validate.schema' + it.schemaPath + ' , data: ' + $data + ' ';
          }

          out += ' } ';
        } else {
          out += ' {} ';
        }

        var __err = out;
        out = $$outStack.pop();

        if (!it.compositeRule && $breakOnError) {
          /* istanbul ignore if */
          if (it.async) {
            out += ' throw new ValidationError([' + __err + ']); ';
          } else {
            out += ' validate.errors = [' + __err + ']; return false; ';
          }
        } else {
          out += ' var err = ' + __err + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
        }

        out += ' } else { ';
      } else {
        out += ' if ( ';
        var arr2 = $required;

        if (arr2) {
          var $propertyKey,
              $i = -1,
              l2 = arr2.length - 1;

          while ($i < l2) {
            $propertyKey = arr2[$i += 1];

            if ($i) {
              out += ' || ';
            }

            var $prop = it.util.getProperty($propertyKey),
                $useData = $data + $prop;
            out += ' ( ( ' + $useData + ' === undefined ';

            if ($ownProperties) {
              out += ' || ! Object.prototype.hasOwnProperty.call(' + $data + ', \'' + it.util.escapeQuotes($propertyKey) + '\') ';
            }

            out += ') && (missing' + $lvl + ' = ' + it.util.toQuotedString(it.opts.jsonPointers ? $propertyKey : $prop) + ') ) ';
          }
        }

        out += ') {  ';
        var $propertyPath = 'missing' + $lvl,
            $missingProperty = '\' + ' + $propertyPath + ' + \'';

        if (it.opts._errorDataPathProperty) {
          it.errorPath = it.opts.jsonPointers ? it.util.getPathExpr($currentErrorPath, $propertyPath, true) : $currentErrorPath + ' + ' + $propertyPath;
        }

        var $$outStack = $$outStack || [];
        $$outStack.push(out);
        out = '';
        /* istanbul ignore else */

        if (it.createErrors !== false) {
          out += ' { keyword: \'' + 'required' + '\' , dataPath: (dataPath || \'\') + ' + it.errorPath + ' , schemaPath: ' + it.util.toQuotedString($errSchemaPath) + ' , params: { missingProperty: \'' + $missingProperty + '\' } ';

          if (it.opts.messages !== false) {
            out += ' , message: \'';

            if (it.opts._errorDataPathProperty) {
              out += 'is a required property';
            } else {
              out += 'should have required property \\\'' + $missingProperty + '\\\'';
            }

            out += '\' ';
          }

          if (it.opts.verbose) {
            out += ' , schema: validate.schema' + $schemaPath + ' , parentSchema: validate.schema' + it.schemaPath + ' , data: ' + $data + ' ';
          }

          out += ' } ';
        } else {
          out += ' {} ';
        }

        var __err = out;
        out = $$outStack.pop();

        if (!it.compositeRule && $breakOnError) {
          /* istanbul ignore if */
          if (it.async) {
            out += ' throw new ValidationError([' + __err + ']); ';
          } else {
            out += ' validate.errors = [' + __err + ']; return false; ';
          }
        } else {
          out += ' var err = ' + __err + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
        }

        out += ' } else { ';
      }
    } else {
      if ($loopRequired) {
        if (!$isData) {
          out += ' var ' + $vSchema + ' = validate.schema' + $schemaPath + '; ';
        }

        var $i = 'i' + $lvl,
            $propertyPath = 'schema' + $lvl + '[' + $i + ']',
            $missingProperty = '\' + ' + $propertyPath + ' + \'';

        if (it.opts._errorDataPathProperty) {
          it.errorPath = it.util.getPathExpr($currentErrorPath, $propertyPath, it.opts.jsonPointers);
        }

        if ($isData) {
          out += ' if (' + $vSchema + ' && !Array.isArray(' + $vSchema + ')) {  var err =   ';
          /* istanbul ignore else */

          if (it.createErrors !== false) {
            out += ' { keyword: \'' + 'required' + '\' , dataPath: (dataPath || \'\') + ' + it.errorPath + ' , schemaPath: ' + it.util.toQuotedString($errSchemaPath) + ' , params: { missingProperty: \'' + $missingProperty + '\' } ';

            if (it.opts.messages !== false) {
              out += ' , message: \'';

              if (it.opts._errorDataPathProperty) {
                out += 'is a required property';
              } else {
                out += 'should have required property \\\'' + $missingProperty + '\\\'';
              }

              out += '\' ';
            }

            if (it.opts.verbose) {
              out += ' , schema: validate.schema' + $schemaPath + ' , parentSchema: validate.schema' + it.schemaPath + ' , data: ' + $data + ' ';
            }

            out += ' } ';
          } else {
            out += ' {} ';
          }

          out += ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } else if (' + $vSchema + ' !== undefined) { ';
        }

        out += ' for (var ' + $i + ' = 0; ' + $i + ' < ' + $vSchema + '.length; ' + $i + '++) { if (' + $data + '[' + $vSchema + '[' + $i + ']] === undefined ';

        if ($ownProperties) {
          out += ' || ! Object.prototype.hasOwnProperty.call(' + $data + ', ' + $vSchema + '[' + $i + ']) ';
        }

        out += ') {  var err =   ';
        /* istanbul ignore else */

        if (it.createErrors !== false) {
          out += ' { keyword: \'' + 'required' + '\' , dataPath: (dataPath || \'\') + ' + it.errorPath + ' , schemaPath: ' + it.util.toQuotedString($errSchemaPath) + ' , params: { missingProperty: \'' + $missingProperty + '\' } ';

          if (it.opts.messages !== false) {
            out += ' , message: \'';

            if (it.opts._errorDataPathProperty) {
              out += 'is a required property';
            } else {
              out += 'should have required property \\\'' + $missingProperty + '\\\'';
            }

            out += '\' ';
          }

          if (it.opts.verbose) {
            out += ' , schema: validate.schema' + $schemaPath + ' , parentSchema: validate.schema' + it.schemaPath + ' , data: ' + $data + ' ';
          }

          out += ' } ';
        } else {
          out += ' {} ';
        }

        out += ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } } ';

        if ($isData) {
          out += '  }  ';
        }
      } else {
        var arr3 = $required;

        if (arr3) {
          var $propertyKey,
              i3 = -1,
              l3 = arr3.length - 1;

          while (i3 < l3) {
            $propertyKey = arr3[i3 += 1];
            var $prop = it.util.getProperty($propertyKey),
                $missingProperty = it.util.escapeQuotes($propertyKey),
                $useData = $data + $prop;

            if (it.opts._errorDataPathProperty) {
              it.errorPath = it.util.getPath($currentErrorPath, $propertyKey, it.opts.jsonPointers);
            }

            out += ' if ( ' + $useData + ' === undefined ';

            if ($ownProperties) {
              out += ' || ! Object.prototype.hasOwnProperty.call(' + $data + ', \'' + it.util.escapeQuotes($propertyKey) + '\') ';
            }

            out += ') {  var err =   ';
            /* istanbul ignore else */

            if (it.createErrors !== false) {
              out += ' { keyword: \'' + 'required' + '\' , dataPath: (dataPath || \'\') + ' + it.errorPath + ' , schemaPath: ' + it.util.toQuotedString($errSchemaPath) + ' , params: { missingProperty: \'' + $missingProperty + '\' } ';

              if (it.opts.messages !== false) {
                out += ' , message: \'';

                if (it.opts._errorDataPathProperty) {
                  out += 'is a required property';
                } else {
                  out += 'should have required property \\\'' + $missingProperty + '\\\'';
                }

                out += '\' ';
              }

              if (it.opts.verbose) {
                out += ' , schema: validate.schema' + $schemaPath + ' , parentSchema: validate.schema' + it.schemaPath + ' , data: ' + $data + ' ';
              }

              out += ' } ';
            } else {
              out += ' {} ';
            }

            out += ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } ';
          }
        }
      }
    }

    it.errorPath = $currentErrorPath;
  } else if ($breakOnError) {
    out += ' if (true) {';
  }

  return out;
};

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function generate_uniqueItems(it, $keyword, $ruleType) {
  var out = ' ';
  var $lvl = it.level;
  var $dataLvl = it.dataLevel;
  var $schema = it.schema[$keyword];
  var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
  var $breakOnError = !it.opts.allErrors;
  var $data = 'data' + ($dataLvl || '');
  var $valid = 'valid' + $lvl;
  var $isData = it.opts.$data && $schema && $schema.$data,
      $schemaValue;

  if ($isData) {
    out += ' var schema' + $lvl + ' = ' + it.util.getData($schema.$data, $dataLvl, it.dataPathArr) + '; ';
    $schemaValue = 'schema' + $lvl;
  } else {
    $schemaValue = $schema;
  }

  if (($schema || $isData) && it.opts.uniqueItems !== false) {
    if ($isData) {
      out += ' var ' + $valid + '; if (' + $schemaValue + ' === false || ' + $schemaValue + ' === undefined) ' + $valid + ' = true; else if (typeof ' + $schemaValue + ' != \'boolean\') ' + $valid + ' = false; else { ';
    }

    out += ' var i = ' + $data + '.length , ' + $valid + ' = true , j; if (i > 1) { ';
    var $itemType = it.schema.items && it.schema.items.type,
        $typeIsArray = Array.isArray($itemType);

    if (!$itemType || $itemType == 'object' || $itemType == 'array' || $typeIsArray && ($itemType.indexOf('object') >= 0 || $itemType.indexOf('array') >= 0)) {
      out += ' outer: for (;i--;) { for (j = i; j--;) { if (equal(' + $data + '[i], ' + $data + '[j])) { ' + $valid + ' = false; break outer; } } } ';
    } else {
      out += ' var itemIndices = {}, item; for (;i--;) { var item = ' + $data + '[i]; ';
      var $method = 'checkDataType' + ($typeIsArray ? 's' : '');
      out += ' if (' + it.util[$method]($itemType, 'item', true) + ') continue; ';

      if ($typeIsArray) {
        out += ' if (typeof item == \'string\') item = \'"\' + item; ';
      }

      out += ' if (typeof itemIndices[item] == \'number\') { ' + $valid + ' = false; j = itemIndices[item]; break; } itemIndices[item] = i; } ';
    }

    out += ' } ';

    if ($isData) {
      out += '  }  ';
    }

    out += ' if (!' + $valid + ') {   ';
    var $$outStack = $$outStack || [];
    $$outStack.push(out);
    out = '';
    /* istanbul ignore else */

    if (it.createErrors !== false) {
      out += ' { keyword: \'' + 'uniqueItems' + '\' , dataPath: (dataPath || \'\') + ' + it.errorPath + ' , schemaPath: ' + it.util.toQuotedString($errSchemaPath) + ' , params: { i: i, j: j } ';

      if (it.opts.messages !== false) {
        out += ' , message: \'should NOT have duplicate items (items ## \' + j + \' and \' + i + \' are identical)\' ';
      }

      if (it.opts.verbose) {
        out += ' , schema:  ';

        if ($isData) {
          out += 'validate.schema' + $schemaPath;
        } else {
          out += '' + $schema;
        }

        out += '         , parentSchema: validate.schema' + it.schemaPath + ' , data: ' + $data + ' ';
      }

      out += ' } ';
    } else {
      out += ' {} ';
    }

    var __err = out;
    out = $$outStack.pop();

    if (!it.compositeRule && $breakOnError) {
      /* istanbul ignore if */
      if (it.async) {
        out += ' throw new ValidationError([' + __err + ']); ';
      } else {
        out += ' validate.errors = [' + __err + ']; return false; ';
      }
    } else {
      out += ' var err = ' + __err + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
    }

    out += ' } ';

    if ($breakOnError) {
      out += ' else { ';
    }
  } else {
    if ($breakOnError) {
      out += ' if (true) { ';
    }
  }

  return out;
};

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var KEYWORDS = ['multipleOf', 'maximum', 'exclusiveMaximum', 'minimum', 'exclusiveMinimum', 'maxLength', 'minLength', 'pattern', 'additionalItems', 'maxItems', 'minItems', 'uniqueItems', 'maxProperties', 'minProperties', 'required', 'additionalProperties', 'enum', 'format', 'const'];

module.exports = function (metaSchema, keywordsJsonPointers) {
  for (var i = 0; i < keywordsJsonPointers.length; i++) {
    metaSchema = JSON.parse(JSON.stringify(metaSchema));
    var segments = keywordsJsonPointers[i].split('/');
    var keywords = metaSchema;
    var j;

    for (j = 1; j < segments.length; j++) {
      keywords = keywords[segments[j]];
    }

    for (j = 0; j < KEYWORDS.length; j++) {
      var key = KEYWORDS[j];
      var schema = keywords[key];

      if (schema) {
        keywords[key] = {
          anyOf: [schema, {
            $ref: 'https://raw.githubusercontent.com/epoberezkin/ajv/master/lib/refs/data.json#'
          }]
        };
      }
    }
  }

  return metaSchema;
};

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var MissingRefError = __webpack_require__(12).MissingRef;

module.exports = compileAsync;
/**
 * Creates validating function for passed schema with asynchronous loading of missing schemas.
 * `loadSchema` option should be a function that accepts schema uri and returns promise that resolves with the schema.
 * @this  Ajv
 * @param {Object}   schema schema object
 * @param {Boolean}  meta optional true to compile meta-schema; this parameter can be skipped
 * @param {Function} callback an optional node-style callback, it is called with 2 parameters: error (or null) and validating function.
 * @return {Promise} promise that resolves with a validating function.
 */

function compileAsync(schema, meta, callback) {
  /* eslint no-shadow: 0 */

  /* global Promise */

  /* jshint validthis: true */
  var self = this;
  if (typeof this._opts.loadSchema != 'function') throw new Error('options.loadSchema should be a function');

  if (typeof meta == 'function') {
    callback = meta;
    meta = undefined;
  }

  var p = loadMetaSchemaOf(schema).then(function () {
    var schemaObj = self._addSchema(schema, undefined, meta);

    return schemaObj.validate || _compileAsync(schemaObj);
  });

  if (callback) {
    p.then(function (v) {
      callback(null, v);
    }, callback);
  }

  return p;

  function loadMetaSchemaOf(sch) {
    var $schema = sch.$schema;
    return $schema && !self.getSchema($schema) ? compileAsync.call(self, {
      $ref: $schema
    }, true) : Promise.resolve();
  }

  function _compileAsync(schemaObj) {
    try {
      return self._compile(schemaObj);
    } catch (e) {
      if (e instanceof MissingRefError) return loadMissingSchema(e);
      throw e;
    }

    function loadMissingSchema(e) {
      var ref = e.missingSchema;
      if (added(ref)) throw new Error('Schema ' + ref + ' is loaded but ' + e.missingRef + ' cannot be resolved');
      var schemaPromise = self._loadingSchemas[ref];

      if (!schemaPromise) {
        schemaPromise = self._loadingSchemas[ref] = self._opts.loadSchema(ref);
        schemaPromise.then(removePromise, removePromise);
      }

      return schemaPromise.then(function (sch) {
        if (!added(ref)) {
          return loadMetaSchemaOf(sch).then(function () {
            if (!added(ref)) self.addSchema(sch, ref, undefined, meta);
          });
        }
      }).then(function () {
        return _compileAsync(schemaObj);
      });

      function removePromise() {
        delete self._loadingSchemas[ref];
      }

      function added(ref) {
        return self._refs[ref] || self._schemas[ref];
      }
    }
  }
}

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var IDENTIFIER = /^[a-z_$][a-z0-9_$-]*$/i;

var customRuleCode = __webpack_require__(82);

var metaSchema = __webpack_require__(27);

module.exports = {
  add: addKeyword,
  get: getKeyword,
  remove: removeKeyword
};
var definitionSchema = {
  definitions: {
    simpleTypes: metaSchema.definitions.simpleTypes
  },
  type: 'object',
  dependencies: {
    schema: ['validate'],
    $data: ['validate'],
    statements: ['inline'],
    valid: {
      not: {
        required: ['macro']
      }
    }
  },
  properties: {
    type: metaSchema.properties.type,
    schema: {
      type: 'boolean'
    },
    statements: {
      type: 'boolean'
    },
    dependencies: {
      type: 'array',
      items: {
        type: 'string'
      }
    },
    metaSchema: {
      type: 'object'
    },
    modifying: {
      type: 'boolean'
    },
    valid: {
      type: 'boolean'
    },
    $data: {
      type: 'boolean'
    },
    async: {
      type: 'boolean'
    },
    errors: {
      anyOf: [{
        type: 'boolean'
      }, {
        const: 'full'
      }]
    }
  }
};
var validateDefinition;
/**
 * Define custom keyword
 * @this  Ajv
 * @param {String} keyword custom keyword, should be unique (including different from all standard, custom and macro keywords).
 * @param {Object} definition keyword definition object with properties `type` (type(s) which the keyword applies to), `validate` or `compile`.
 * @return {Ajv} this for method chaining
 */

function addKeyword(keyword, definition) {
  /* jshint validthis: true */

  /* eslint no-shadow: 0 */
  var RULES = this.RULES;
  if (RULES.keywords[keyword]) throw new Error('Keyword ' + keyword + ' is already defined');
  if (!IDENTIFIER.test(keyword)) throw new Error('Keyword ' + keyword + ' is not a valid identifier');

  if (definition) {
    validateDefinition = validateDefinition || this.compile(definitionSchema);
    if (!validateDefinition(definition)) throw new Error('custom keyword definition is invalid: ' + this.errorsText(validateDefinition.errors));
    var dataType = definition.type;

    if (Array.isArray(dataType)) {
      for (var i = 0; i < dataType.length; i++) {
        _addRule(keyword, dataType[i], definition);
      }
    } else {
      _addRule(keyword, dataType, definition);
    }

    var metaSchema = definition.metaSchema;

    if (metaSchema) {
      if (definition.$data && this._opts.$data) {
        metaSchema = {
          anyOf: [metaSchema, {
            '$ref': 'https://raw.githubusercontent.com/epoberezkin/ajv/master/lib/refs/data.json#'
          }]
        };
      }

      definition.validateSchema = this.compile(metaSchema, true);
    }
  }

  RULES.keywords[keyword] = RULES.all[keyword] = true;

  function _addRule(keyword, dataType, definition) {
    var ruleGroup;

    for (var i = 0; i < RULES.length; i++) {
      var rg = RULES[i];

      if (rg.type == dataType) {
        ruleGroup = rg;
        break;
      }
    }

    if (!ruleGroup) {
      ruleGroup = {
        type: dataType,
        rules: []
      };
      RULES.push(ruleGroup);
    }

    var rule = {
      keyword: keyword,
      definition: definition,
      custom: true,
      code: customRuleCode,
      implements: definition.implements
    };
    ruleGroup.rules.push(rule);
    RULES.custom[keyword] = rule;
  }

  return this;
}
/**
 * Get keyword
 * @this  Ajv
 * @param {String} keyword pre-defined or custom keyword.
 * @return {Object|Boolean} custom keyword definition, `true` if it is a predefined keyword, `false` otherwise.
 */


function getKeyword(keyword) {
  /* jshint validthis: true */
  var rule = this.RULES.custom[keyword];
  return rule ? rule.definition : this.RULES.keywords[keyword] || false;
}
/**
 * Remove keyword
 * @this  Ajv
 * @param {String} keyword pre-defined or custom keyword.
 * @return {Ajv} this for method chaining
 */


function removeKeyword(keyword) {
  /* jshint validthis: true */
  var RULES = this.RULES;
  delete RULES.keywords[keyword];
  delete RULES.all[keyword];
  delete RULES.custom[keyword];

  for (var i = 0; i < RULES.length; i++) {
    var rules = RULES[i].rules;

    for (var j = 0; j < rules.length; j++) {
      if (rules[j].keyword == keyword) {
        rules.splice(j, 1);
        break;
      }
    }
  }

  return this;
}

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function generate_custom(it, $keyword, $ruleType) {
  var out = ' ';
  var $lvl = it.level;
  var $dataLvl = it.dataLevel;
  var $schema = it.schema[$keyword];
  var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
  var $breakOnError = !it.opts.allErrors;
  var $errorKeyword;
  var $data = 'data' + ($dataLvl || '');
  var $valid = 'valid' + $lvl;
  var $errs = 'errs__' + $lvl;
  var $isData = it.opts.$data && $schema && $schema.$data,
      $schemaValue;

  if ($isData) {
    out += ' var schema' + $lvl + ' = ' + it.util.getData($schema.$data, $dataLvl, it.dataPathArr) + '; ';
    $schemaValue = 'schema' + $lvl;
  } else {
    $schemaValue = $schema;
  }

  var $rule = this,
      $definition = 'definition' + $lvl,
      $rDef = $rule.definition,
      $closingBraces = '';
  var $compile, $inline, $macro, $ruleValidate, $validateCode;

  if ($isData && $rDef.$data) {
    $validateCode = 'keywordValidate' + $lvl;
    var $validateSchema = $rDef.validateSchema;
    out += ' var ' + $definition + ' = RULES.custom[\'' + $keyword + '\'].definition; var ' + $validateCode + ' = ' + $definition + '.validate;';
  } else {
    $ruleValidate = it.useCustomRule($rule, $schema, it.schema, it);
    if (!$ruleValidate) return;
    $schemaValue = 'validate.schema' + $schemaPath;
    $validateCode = $ruleValidate.code;
    $compile = $rDef.compile;
    $inline = $rDef.inline;
    $macro = $rDef.macro;
  }

  var $ruleErrs = $validateCode + '.errors',
      $i = 'i' + $lvl,
      $ruleErr = 'ruleErr' + $lvl,
      $asyncKeyword = $rDef.async;
  if ($asyncKeyword && !it.async) throw new Error('async keyword in sync schema');

  if (!($inline || $macro)) {
    out += '' + $ruleErrs + ' = null;';
  }

  out += 'var ' + $errs + ' = errors;var ' + $valid + ';';

  if ($isData && $rDef.$data) {
    $closingBraces += '}';
    out += ' if (' + $schemaValue + ' === undefined) { ' + $valid + ' = true; } else { ';

    if ($validateSchema) {
      $closingBraces += '}';
      out += ' ' + $valid + ' = ' + $definition + '.validateSchema(' + $schemaValue + '); if (' + $valid + ') { ';
    }
  }

  if ($inline) {
    if ($rDef.statements) {
      out += ' ' + $ruleValidate.validate + ' ';
    } else {
      out += ' ' + $valid + ' = ' + $ruleValidate.validate + '; ';
    }
  } else if ($macro) {
    var $it = it.util.copy(it);
    var $closingBraces = '';
    $it.level++;
    var $nextValid = 'valid' + $it.level;
    $it.schema = $ruleValidate.validate;
    $it.schemaPath = '';
    var $wasComposite = it.compositeRule;
    it.compositeRule = $it.compositeRule = true;
    var $code = it.validate($it).replace(/validate\.schema/g, $validateCode);
    it.compositeRule = $it.compositeRule = $wasComposite;
    out += ' ' + $code;
  } else {
    var $$outStack = $$outStack || [];
    $$outStack.push(out);
    out = '';
    out += '  ' + $validateCode + '.call( ';

    if (it.opts.passContext) {
      out += 'this';
    } else {
      out += 'self';
    }

    if ($compile || $rDef.schema === false) {
      out += ' , ' + $data + ' ';
    } else {
      out += ' , ' + $schemaValue + ' , ' + $data + ' , validate.schema' + it.schemaPath + ' ';
    }

    out += ' , (dataPath || \'\')';

    if (it.errorPath != '""') {
      out += ' + ' + it.errorPath;
    }

    var $parentData = $dataLvl ? 'data' + ($dataLvl - 1 || '') : 'parentData',
        $parentDataProperty = $dataLvl ? it.dataPathArr[$dataLvl] : 'parentDataProperty';
    out += ' , ' + $parentData + ' , ' + $parentDataProperty + ' , rootData )  ';
    var def_callRuleValidate = out;
    out = $$outStack.pop();

    if ($rDef.errors === false) {
      out += ' ' + $valid + ' = ';

      if ($asyncKeyword) {
        out += 'await ';
      }

      out += '' + def_callRuleValidate + '; ';
    } else {
      if ($asyncKeyword) {
        $ruleErrs = 'customErrors' + $lvl;
        out += ' var ' + $ruleErrs + ' = null; try { ' + $valid + ' = await ' + def_callRuleValidate + '; } catch (e) { ' + $valid + ' = false; if (e instanceof ValidationError) ' + $ruleErrs + ' = e.errors; else throw e; } ';
      } else {
        out += ' ' + $ruleErrs + ' = null; ' + $valid + ' = ' + def_callRuleValidate + '; ';
      }
    }
  }

  if ($rDef.modifying) {
    out += ' if (' + $parentData + ') ' + $data + ' = ' + $parentData + '[' + $parentDataProperty + '];';
  }

  out += '' + $closingBraces;

  if ($rDef.valid) {
    if ($breakOnError) {
      out += ' if (true) { ';
    }
  } else {
    out += ' if ( ';

    if ($rDef.valid === undefined) {
      out += ' !';

      if ($macro) {
        out += '' + $nextValid;
      } else {
        out += '' + $valid;
      }
    } else {
      out += ' ' + !$rDef.valid + ' ';
    }

    out += ') { ';
    $errorKeyword = $rule.keyword;
    var $$outStack = $$outStack || [];
    $$outStack.push(out);
    out = '';
    var $$outStack = $$outStack || [];
    $$outStack.push(out);
    out = '';
    /* istanbul ignore else */

    if (it.createErrors !== false) {
      out += ' { keyword: \'' + ($errorKeyword || 'custom') + '\' , dataPath: (dataPath || \'\') + ' + it.errorPath + ' , schemaPath: ' + it.util.toQuotedString($errSchemaPath) + ' , params: { keyword: \'' + $rule.keyword + '\' } ';

      if (it.opts.messages !== false) {
        out += ' , message: \'should pass "' + $rule.keyword + '" keyword validation\' ';
      }

      if (it.opts.verbose) {
        out += ' , schema: validate.schema' + $schemaPath + ' , parentSchema: validate.schema' + it.schemaPath + ' , data: ' + $data + ' ';
      }

      out += ' } ';
    } else {
      out += ' {} ';
    }

    var __err = out;
    out = $$outStack.pop();

    if (!it.compositeRule && $breakOnError) {
      /* istanbul ignore if */
      if (it.async) {
        out += ' throw new ValidationError([' + __err + ']); ';
      } else {
        out += ' validate.errors = [' + __err + ']; return false; ';
      }
    } else {
      out += ' var err = ' + __err + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
    }

    var def_customError = out;
    out = $$outStack.pop();

    if ($inline) {
      if ($rDef.errors) {
        if ($rDef.errors != 'full') {
          out += '  for (var ' + $i + '=' + $errs + '; ' + $i + '<errors; ' + $i + '++) { var ' + $ruleErr + ' = vErrors[' + $i + ']; if (' + $ruleErr + '.dataPath === undefined) ' + $ruleErr + '.dataPath = (dataPath || \'\') + ' + it.errorPath + '; if (' + $ruleErr + '.schemaPath === undefined) { ' + $ruleErr + '.schemaPath = "' + $errSchemaPath + '"; } ';

          if (it.opts.verbose) {
            out += ' ' + $ruleErr + '.schema = ' + $schemaValue + '; ' + $ruleErr + '.data = ' + $data + '; ';
          }

          out += ' } ';
        }
      } else {
        if ($rDef.errors === false) {
          out += ' ' + def_customError + ' ';
        } else {
          out += ' if (' + $errs + ' == errors) { ' + def_customError + ' } else {  for (var ' + $i + '=' + $errs + '; ' + $i + '<errors; ' + $i + '++) { var ' + $ruleErr + ' = vErrors[' + $i + ']; if (' + $ruleErr + '.dataPath === undefined) ' + $ruleErr + '.dataPath = (dataPath || \'\') + ' + it.errorPath + '; if (' + $ruleErr + '.schemaPath === undefined) { ' + $ruleErr + '.schemaPath = "' + $errSchemaPath + '"; } ';

          if (it.opts.verbose) {
            out += ' ' + $ruleErr + '.schema = ' + $schemaValue + '; ' + $ruleErr + '.data = ' + $data + '; ';
          }

          out += ' } } ';
        }
      }
    } else if ($macro) {
      out += '   var err =   ';
      /* istanbul ignore else */

      if (it.createErrors !== false) {
        out += ' { keyword: \'' + ($errorKeyword || 'custom') + '\' , dataPath: (dataPath || \'\') + ' + it.errorPath + ' , schemaPath: ' + it.util.toQuotedString($errSchemaPath) + ' , params: { keyword: \'' + $rule.keyword + '\' } ';

        if (it.opts.messages !== false) {
          out += ' , message: \'should pass "' + $rule.keyword + '" keyword validation\' ';
        }

        if (it.opts.verbose) {
          out += ' , schema: validate.schema' + $schemaPath + ' , parentSchema: validate.schema' + it.schemaPath + ' , data: ' + $data + ' ';
        }

        out += ' } ';
      } else {
        out += ' {} ';
      }

      out += ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';

      if (!it.compositeRule && $breakOnError) {
        /* istanbul ignore if */
        if (it.async) {
          out += ' throw new ValidationError(vErrors); ';
        } else {
          out += ' validate.errors = vErrors; return false; ';
        }
      }
    } else {
      if ($rDef.errors === false) {
        out += ' ' + def_customError + ' ';
      } else {
        out += ' if (Array.isArray(' + $ruleErrs + ')) { if (vErrors === null) vErrors = ' + $ruleErrs + '; else vErrors = vErrors.concat(' + $ruleErrs + '); errors = vErrors.length;  for (var ' + $i + '=' + $errs + '; ' + $i + '<errors; ' + $i + '++) { var ' + $ruleErr + ' = vErrors[' + $i + ']; if (' + $ruleErr + '.dataPath === undefined) ' + $ruleErr + '.dataPath = (dataPath || \'\') + ' + it.errorPath + ';  ' + $ruleErr + '.schemaPath = "' + $errSchemaPath + '";  ';

        if (it.opts.verbose) {
          out += ' ' + $ruleErr + '.schema = ' + $schemaValue + '; ' + $ruleErr + '.data = ' + $data + '; ';
        }

        out += ' } } else { ' + def_customError + ' } ';
      }
    }

    out += ' } ';

    if ($breakOnError) {
      out += ' else { ';
    }
  }

  return out;
};

/***/ }),
/* 83 */
/***/ (function(module) {

module.exports = {"$schema":"http://json-schema.org/draft-07/schema#","$id":"https://raw.githubusercontent.com/epoberezkin/ajv/master/lib/refs/data.json#","description":"Meta-schema for $data reference (JSON Schema extension proposal)","type":"object","required":["$data"],"properties":{"$data":{"type":"string","anyOf":[{"format":"relative-json-pointer"},{"format":"json-pointer"}]}},"additionalProperties":false};

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (ajv, options) {
  if (!ajv._opts.allErrors) throw new Error('ajv-errors: Ajv option allErrors must be true');

  if (!ajv._opts.jsonPointers) {
    console.warn('ajv-errors: Ajv option jsonPointers changed to true');
    ajv._opts.jsonPointers = true;
  }

  ajv.addKeyword('errorMessage', {
    inline: __webpack_require__(85),
    statements: true,
    valid: true,
    errors: 'full',
    config: {
      KEYWORD_PROPERTY_PARAMS: {
        required: 'missingProperty',
        dependencies: 'property'
      },
      options: options || {}
    },
    metaSchema: {
      'type': ['string', 'object'],
      properties: {
        properties: {
          $ref: '#/definitions/stringMap'
        },
        items: {
          $ref: '#/definitions/stringList'
        },
        required: {
          $ref: '#/definitions/stringOrMap'
        },
        dependencies: {
          $ref: '#/definitions/stringOrMap'
        }
      },
      additionalProperties: {
        'type': 'string'
      },
      definitions: {
        stringMap: {
          'type': ['object'],
          additionalProperties: {
            'type': 'string'
          }
        },
        stringOrMap: {
          'type': ['string', 'object'],
          additionalProperties: {
            'type': 'string'
          }
        },
        stringList: {
          'type': ['array'],
          items: {
            'type': 'string'
          }
        }
      }
    }
  });
  return ajv;
};

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function generate_errorMessage(it, $keyword, $ruleType) {
  var out = ' ';
  var $lvl = it.level;
  var $dataLvl = it.dataLevel;
  var $schema = it.schema[$keyword];
  var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
  var $breakOnError = !it.opts.allErrors;
  var $data = 'data' + ($dataLvl || '');

  if (it.createErrors !== false) {
    var INTERPOLATION = /\$\{[^\}]+\}/;
    var INTERPOLATION_REPLACE = /\$\{([^\}]+)\}/g;
    var EMPTY_STR = /^\'\'\s*\+\s*|\s*\+\s*\'\'$/g;
    var $config = it.self.getKeyword($keyword).config,
        $dataPath = '_em_dataPath' + $lvl,
        $i = '_em_i' + $lvl,
        $key = '_em_key' + $lvl,
        $keyProp = '_em_keyProp' + $lvl,
        $err = '_em_err' + $lvl,
        $child = '_em_child' + $lvl,
        $childKeyword = '_em_childKeyword' + $lvl,
        $matches = '_em_matches' + $lvl,
        $isArray = '_em_isArray' + $lvl,
        $errors = '_em_errors' + $lvl,
        $message = '_em_message' + $lvl,
        $paramsErrors = '_em_paramsErrors' + $lvl,
        $propParam = '_em_propParam' + $lvl,
        $keywordPropParams = '_em_keywordPropParams' + $lvl,
        $templates = '_em_templates' + $lvl,
        $errSchemaPathString = it.util.toQuotedString(it.errSchemaPath);
    out += ' if (errors > 0) { var ' + $dataPath + ' = (dataPath || \'\') + ' + it.errorPath + '; var ' + $i + ', ' + $err + ', ' + $errors + '; ';

    if (babelHelpers.typeof($schema) == 'object') {
      var $keywordErrors = {},
          $keywordPropErrors = {},
          $childErrors = {
        properties: {},
        items: {}
      },
          $hasKeywordProps = false,
          $hasProperties = false,
          $hasItems = false;

      for (var $k in $schema) {
        switch ($k) {
          case 'properties':
            for (var $prop in $schema.properties) {
              $hasProperties = true;
              $childErrors.properties[$prop] = [];
            }

            break;

          case 'items':
            for (var $item = 0; $item < $schema.items.length; $item++) {
              $hasItems = true;
              $childErrors.items[$item] = [];
            }

            break;

          default:
            if (babelHelpers.typeof($schema[$k]) == 'object') {
              $hasKeywordProps = true;
              $keywordPropErrors[$k] = {};

              for (var $prop in $schema[$k]) {
                $keywordPropErrors[$k][$prop] = [];
              }
            } else {
              $keywordErrors[$k] = [];
            }

        }
      }

      var $keywordErrorsArr = Object.keys($keywordErrors);

      if ($keywordErrorsArr.length) {
        out += ' ' + $i + ' = 0; ' + $errors + ' = ' + JSON.stringify($keywordErrors) + ';  var ' + $templates + ' = { ';
        var $comma = false;
        var arr1 = $keywordErrorsArr;

        if (arr1) {
          var $k,
              i1 = -1,
              l1 = arr1.length - 1;

          while (i1 < l1) {
            $k = arr1[i1 += 1];

            if (INTERPOLATION.test($schema[$k])) {
              if ($comma) {
                out += ',';
              }

              out += '' + it.util.toQuotedString($k) + ': ' + templateFunc($schema[$k]) + ' ';
              $comma = true;
            }
          }
        }

        out += ' }; while (' + $i + ' < errors) { ' + $err + ' = vErrors[' + $i + ']; if (  ' + $err + '.keyword != \'' + $keyword + '\' ';

        if ($config.options.keepErrors) {
          out += ' && !' + $err + '.emUsed ';
        }

        out += ' && ' + $err + '.keyword in ' + $errors + ' && ' + $err + '.dataPath == ' + $dataPath + ' && ' + $err + '.schemaPath.indexOf(' + $errSchemaPathString + ') == 0 && /^\\/[^\\/]*$/.test(' + $err + '.schemaPath.slice(' + it.errSchemaPath.length + '))) { ' + $errors + '[' + $err + '.keyword].push(' + $err + ');  ';

        if ($config.options.keepErrors) {
          out += ' ' + $err + '.emUsed = true; ';
        } else {
          out += ' vErrors.splice(' + $i + ', 1); errors--; ';
        }

        out += ' } else { ' + $i + '++; } } ';

        if ($config.options.singleError) {
          out += ' var ' + $message + ' = \'\'; var ' + $paramsErrors + ' = []; ';
        }

        out += ' for (var ' + $key + ' in ' + $errors + ') { if (' + $errors + '[' + $key + '].length) { ';

        if ($config.options.singleError) {
          out += ' if (' + $message + ') { ' + $message + ' += ';

          if (typeof $config.options.singleError == 'string') {
            out += ' ' + it.util.toQuotedString($config.options.singleError) + ' ';
          } else {
            out += ' \'; \' ';
          }

          out += '; } ' + $message + ' +=   ' + $key + ' in ' + $templates + ' ? ' + $templates + '[' + $key + '] () : validate.schema' + $schemaPath + '[' + $key + ']; ' + $paramsErrors + ' = ' + $paramsErrors + '.concat(' + $errors + '[' + $key + ']); } } ';
        } else {
          out += ' var ' + $message + ' =   ' + $key + ' in ' + $templates + ' ? ' + $templates + '[' + $key + '] () : validate.schema' + $schemaPath + '[' + $key + ']; var ' + $paramsErrors + ' = ' + $errors + '[' + $key + ']; ';
        }

        out += '  var err = { keyword: \'' + $keyword + '\' , dataPath: ' + $dataPath + ' , schemaPath: ' + $errSchemaPathString + ' + \'/' + $keyword + '\' , params: { errors: ' + $paramsErrors + ' } , message: ' + $message + ' ';

        if (it.opts.verbose) {
          out += ' , schema: validate.schema' + $schemaPath + ' , parentSchema: validate.schema' + it.schemaPath + ' , data: ' + $data + ' ';
        }

        out += ' };  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';

        if (!$config.options.singleError) {
          out += ' } } ';
        }
      }

      if ($hasKeywordProps) {
        out += ' ' + $i + ' = 0; ' + $errors + ' = ' + JSON.stringify($keywordPropErrors) + '; var ' + $paramsErrors + ', ' + $propParam + '; var ' + $keywordPropParams + ' = ' + JSON.stringify($config.KEYWORD_PROPERTY_PARAMS) + ';  var ' + $templates + ' = { ';
        var $comma = false;
        var arr2 = Object.keys($keywordPropErrors);

        if (arr2) {
          var $k,
              i2 = -1,
              l2 = arr2.length - 1;

          while (i2 < l2) {
            $k = arr2[i2 += 1];
            var $keywordMsgs = $schema[$k];

            if ($comma) {
              out += ',';
            }

            out += '' + it.util.toQuotedString($k) + ': { ';
            $comma = true;
            var $innerComma = false;
            var arr3 = Object.keys($keywordMsgs);

            if (arr3) {
              var $prop,
                  i3 = -1,
                  l3 = arr3.length - 1;

              while (i3 < l3) {
                $prop = arr3[i3 += 1];

                if (INTERPOLATION.test($keywordMsgs[$prop])) {
                  if ($innerComma) {
                    out += ',';
                  }

                  out += '' + it.util.toQuotedString($prop) + ': ' + templateFunc($keywordMsgs[$prop]) + ' ';
                  $innerComma = true;
                }
              }
            }

            out += ' } ';
          }
        }

        out += ' }; while (' + $i + ' < errors) { ' + $err + ' = vErrors[' + $i + ']; if (  ' + $err + '.keyword != \'' + $keyword + '\' ';

        if ($config.options.keepErrors) {
          out += ' && !' + $err + '.emUsed ';
        }

        out += ' && ' + $err + '.keyword in ' + $errors + ' && ' + $err + '.dataPath == ' + $dataPath + ' && ' + $err + '.schemaPath.indexOf(' + $errSchemaPathString + ') == 0 && /^\\/[^\\/]*$/.test(' + $err + '.schemaPath.slice(' + it.errSchemaPath.length + '))) { ' + $propParam + ' = ' + $keywordPropParams + '[' + $err + '.keyword]; ' + $paramsErrors + ' = ' + $errors + '[' + $err + '.keyword][' + $err + '.params[' + $propParam + ']]; if (' + $paramsErrors + ') { ' + $paramsErrors + '.push(' + $err + ');  ';

        if ($config.options.keepErrors) {
          out += ' ' + $err + '.emUsed = true; ';
        } else {
          out += ' vErrors.splice(' + $i + ', 1); errors--; ';
        }

        out += ' } else { ' + $i + '++; } } else { ' + $i + '++; } } for (var ' + $key + ' in ' + $errors + ') { for (var ' + $keyProp + ' in ' + $errors + '[' + $key + ']) { ' + $paramsErrors + ' = ' + $errors + '[' + $key + '][' + $keyProp + ']; if (' + $paramsErrors + '.length) { var ' + $message + ' =   ' + $key + ' in ' + $templates + ' && ' + $keyProp + ' in ' + $templates + '[' + $key + '] ? ' + $templates + '[' + $key + '][' + $keyProp + '] () : validate.schema' + $schemaPath + '[' + $key + '][' + $keyProp + '];  var err = { keyword: \'' + $keyword + '\' , dataPath: ' + $dataPath + ' , schemaPath: ' + $errSchemaPathString + ' + \'/' + $keyword + '\' , params: { errors: ' + $paramsErrors + ' } , message: ' + $message + ' ';

        if (it.opts.verbose) {
          out += ' , schema: validate.schema' + $schemaPath + ' , parentSchema: validate.schema' + it.schemaPath + ' , data: ' + $data + ' ';
        }

        out += ' };  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } } } ';
      }

      if ($hasProperties || $hasItems) {
        out += ' var ' + $isArray + ' = Array.isArray(' + $data + '); if ';

        if ($hasProperties && $hasItems) {
          out += ' (typeof ' + $data + ' == \'object\') { ';
          var $childProp = '[' + $childKeyword + ']';
          out += ' ' + $i + ' = 0; if (' + $isArray + ') { var ' + $childKeyword + ' = \'items\'; ' + $errors + ' = ' + JSON.stringify($childErrors.items) + ';    ';

          var _keysArray = Object.keys($childErrors.items);

          out += ' var ' + $templates + ' = { ';
          var $comma = false;
          var arr4 = _keysArray;

          if (arr4) {
            var $k,
                i4 = -1,
                l4 = arr4.length - 1;

            while (i4 < l4) {
              $k = arr4[i4 += 1];

              if (INTERPOLATION.test($schema.items[$k])) {
                if ($comma) {
                  out += ',';
                }

                out += '' + it.util.toQuotedString($k) + ': ' + templateFunc($schema.items[$k]) + ' ';
                $comma = true;
              }
            }
          }

          out += ' }; } else { var ' + $childKeyword + ' = \'properties\'; ' + $errors + ' =  ' + JSON.stringify($childErrors.properties) + ';    ';

          var _keysArray = Object.keys($childErrors.properties);

          out += ' var ' + $templates + ' = { ';
          var $comma = false;
          var arr5 = _keysArray;

          if (arr5) {
            var $k,
                i5 = -1,
                l5 = arr5.length - 1;

            while (i5 < l5) {
              $k = arr5[i5 += 1];

              if (INTERPOLATION.test($schema.properties[$k])) {
                if ($comma) {
                  out += ',';
                }

                out += '' + it.util.toQuotedString($k) + ': ' + templateFunc($schema.properties[$k]) + ' ';
                $comma = true;
              }
            }
          }

          out += ' }; } ';
        } else if ($hasProperties) {
          out += ' (typeof ' + $data + ' == \'object\' && !' + $isArray + ') { ';
          var $childProp = '.properties';
          out += ' ' + $i + ' = 0; ' + $errors + ' = ' + JSON.stringify($childErrors.properties) + ';  ';

          var _keysArray = Object.keys($childErrors.properties);

          out += ' var ' + $templates + ' = { ';
          var $comma = false;
          var arr6 = _keysArray;

          if (arr6) {
            var $k,
                i6 = -1,
                l6 = arr6.length - 1;

            while (i6 < l6) {
              $k = arr6[i6 += 1];

              if (INTERPOLATION.test($schema.properties[$k])) {
                if ($comma) {
                  out += ',';
                }

                out += '' + it.util.toQuotedString($k) + ': ' + templateFunc($schema.properties[$k]) + ' ';
                $comma = true;
              }
            }
          }

          out += ' }; ';
        } else {
          out += ' (' + $isArray + ') { ';
          var $childProp = '.items';
          out += ' ' + $i + ' = 0; ' + $errors + ' = ' + JSON.stringify($childErrors.items) + ';  ';

          var _keysArray = Object.keys($childErrors.items);

          out += ' var ' + $templates + ' = { ';
          var $comma = false;
          var arr7 = _keysArray;

          if (arr7) {
            var $k,
                i7 = -1,
                l7 = arr7.length - 1;

            while (i7 < l7) {
              $k = arr7[i7 += 1];

              if (INTERPOLATION.test($schema.items[$k])) {
                if ($comma) {
                  out += ',';
                }

                out += '' + it.util.toQuotedString($k) + ': ' + templateFunc($schema.items[$k]) + ' ';
                $comma = true;
              }
            }
          }

          out += ' }; ';
        }

        out += ' var ' + $child + ', ' + $matches + '; while (' + $i + ' < errors) { ' + $err + ' = vErrors[' + $i + ']; if (  ' + $err + '.keyword != \'' + $keyword + '\' ';

        if ($config.options.keepErrors) {
          out += ' && !' + $err + '.emUsed ';
        }

        out += ' && ' + $err + '.dataPath.indexOf(' + $dataPath + ') == 0 && (' + $matches + ' = ' + $err + '.dataPath.slice(' + $dataPath + '.length).match(/^\\/([^\\/]*)(?:\\/|$)/), ' + $child + ' = ' + $matches + ' && ' + $matches + '[1].replace(/~1/g, \'/\').replace(/~0/g, \'~\') ) !== undefined && ' + $child + ' in ' + $errors + ') { ' + $errors + '[' + $child + '].push(' + $err + ');  ';

        if ($config.options.keepErrors) {
          out += ' ' + $err + '.emUsed = true; ';
        } else {
          out += ' vErrors.splice(' + $i + ', 1); errors--; ';
        }

        out += ' } else { ' + $i + '++; } } for (var ' + $key + ' in ' + $errors + ') { if (' + $errors + '[' + $key + '].length) { var err = { keyword: \'' + $keyword + '\' , dataPath: ' + $dataPath + ' + \'/\' + ' + $key + '.replace(/~/g, \'~0\').replace(/\\//g, \'~1\') , schemaPath: ' + $errSchemaPathString + ' + \'/' + $keyword + '\' , params: { errors: ' + $errors + '[' + $key + '] } , message: ' + $key + ' in ' + $templates + ' ? ' + $templates + '[' + $key + '] () : validate.schema' + $schemaPath + $childProp + '[' + $key + '] ';

        if (it.opts.verbose) {
          out += ' , schema: validate.schema' + $schemaPath + ' , parentSchema: validate.schema' + it.schemaPath + ' , data: ' + $data + ' ';
        }

        out += ' };  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } }  }  ';
      }
    }

    var $schemaMessage = typeof $schema == 'string' ? $schema : $schema._;

    if ($schemaMessage) {
      out += ' ' + $i + ' = 0; ' + $errors + ' = []; while (' + $i + ' < errors) { ' + $err + ' = vErrors[' + $i + ']; if (  ' + $err + '.keyword != \'' + $keyword + '\' ';

      if ($config.options.keepErrors) {
        out += ' && !' + $err + '.emUsed ';
      }

      out += ' && (' + $err + '.dataPath == ' + $dataPath + ' || (' + $err + '.dataPath.indexOf(' + $dataPath + ') == 0 && ' + $err + '.dataPath[' + $dataPath + '.length] == \'/\')) && ' + $err + '.schemaPath.indexOf(' + $errSchemaPathString + ') == 0 && ' + $err + '.schemaPath[' + it.errSchemaPath.length + '] == \'/\') { ' + $errors + '.push(' + $err + ');  ';

      if ($config.options.keepErrors) {
        out += ' ' + $err + '.emUsed = true; ';
      } else {
        out += ' vErrors.splice(' + $i + ', 1); errors--; ';
      }

      out += ' } else { ' + $i + '++; } } if (' + $errors + '.length) { var err = { keyword: \'' + $keyword + '\' , dataPath: ' + $dataPath + ' , schemaPath: ' + $errSchemaPathString + ' + \'/' + $keyword + '\' , params: { errors: ' + $errors + ' } , message: ' + templateExpr($schemaMessage) + ' ';

      if (it.opts.verbose) {
        out += ' , schema: ' + it.util.toQuotedString($schemaMessage) + ' , parentSchema: validate.schema' + it.schemaPath + ' , data: ' + $data + ' ';
      }

      out += ' };  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } ';
    }

    out += ' }';
  }

  function templateExpr(str) {
    str = it.util.escapeQuotes(str);
    if (!INTERPOLATION.test(str)) return "'" + str + "'";
    var expr = "'" + str.replace(INTERPOLATION_REPLACE, function ($0, $1) {
      return "' + JSON.stringify(" + it.util.getData($1, $dataLvl, it.dataPathArr) + ") + '";
    }) + "'";
    return expr.replace(EMPTY_STR, '');
  }

  function templateFunc(str) {
    return 'function() { return ' + templateExpr(str) + '; }';
  }

  return out;
};

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var KEYWORDS = __webpack_require__(87);

module.exports = defineKeywords;
/**
 * Defines one or several keywords in ajv instance
 * @param  {Ajv} ajv validator instance
 * @param  {String|Array<String>|undefined} keyword keyword(s) to define
 * @return {Ajv} ajv instance (for chaining)
 */

function defineKeywords(ajv, keyword) {
  if (Array.isArray(keyword)) {
    for (var i = 0; i < keyword.length; i++) {
      get(keyword[i])(ajv);
    }

    return ajv;
  }

  if (keyword) {
    get(keyword)(ajv);
    return ajv;
  }

  for (keyword in KEYWORDS) {
    get(keyword)(ajv);
  }

  return ajv;
}

defineKeywords.get = get;

function get(keyword) {
  var defFunc = KEYWORDS[keyword];
  if (!defFunc) throw new Error('Unknown keyword ' + keyword);
  return defFunc;
}

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  'instanceof': __webpack_require__(88),
  range: __webpack_require__(94),
  regexp: __webpack_require__(95),
  'typeof': __webpack_require__(96),
  dynamicDefaults: __webpack_require__(97),
  allRequired: __webpack_require__(98),
  anyRequired: __webpack_require__(99),
  prohibited: __webpack_require__(100),
  uniqueItemProperties: __webpack_require__(101),
  deepProperties: __webpack_require__(102),
  deepRequired: __webpack_require__(103),
  formatMinimum: __webpack_require__(104),
  formatMaximum: __webpack_require__(106),
  patternRequired: __webpack_require__(107),
  'switch': __webpack_require__(109),
  select: __webpack_require__(111),
  transform: __webpack_require__(112)
};

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {

var CONSTRUCTORS = {
  Object: Object,
  Array: Array,
  Function: Function,
  Number: Number,
  String: String,
  Date: Date,
  RegExp: RegExp
};

module.exports = function defFunc(ajv) {
  /* istanbul ignore else */
  if (typeof Buffer != 'undefined') CONSTRUCTORS.Buffer = Buffer;
  /* istanbul ignore else */

  if (typeof Promise != 'undefined') CONSTRUCTORS.Promise = Promise;
  defFunc.definition = {
    compile: function compile(schema) {
      if (typeof schema == 'string') {
        var Constructor = getConstructor(schema);
        return function (data) {
          return data instanceof Constructor;
        };
      }

      var constructors = schema.map(getConstructor);
      return function (data) {
        for (var i = 0; i < constructors.length; i++) {
          if (data instanceof constructors[i]) return true;
        }

        return false;
      };
    },
    CONSTRUCTORS: CONSTRUCTORS,
    metaSchema: {
      anyOf: [{
        type: 'string'
      }, {
        type: 'array',
        items: {
          type: 'string'
        }
      }]
    }
  };
  ajv.addKeyword('instanceof', defFunc.definition);
  return ajv;

  function getConstructor(c) {
    var Constructor = CONSTRUCTORS[c];
    if (Constructor) return Constructor;
    throw new Error('invalid "instanceof" keyword value ' + c);
  }
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(89).Buffer))

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */

/* eslint-disable no-proto */


var base64 = __webpack_require__(91);

var ieee754 = __webpack_require__(92);

var isArray = __webpack_require__(93);

exports.Buffer = Buffer;
exports.SlowBuffer = SlowBuffer;
exports.INSPECT_MAX_BYTES = 50;
/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */

Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined ? global.TYPED_ARRAY_SUPPORT : typedArraySupport();
/*
 * Export kMaxLength after typed array support is determined.
 */

exports.kMaxLength = kMaxLength();

function typedArraySupport() {
  try {
    var arr = new Uint8Array(1);
    arr.__proto__ = {
      __proto__: Uint8Array.prototype,
      foo: function foo() {
        return 42;
      }
    };
    return arr.foo() === 42 && // typed array instances can be augmented
    typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
    arr.subarray(1, 1).byteLength === 0; // ie10 has broken `subarray`
  } catch (e) {
    return false;
  }
}

function kMaxLength() {
  return Buffer.TYPED_ARRAY_SUPPORT ? 0x7fffffff : 0x3fffffff;
}

function createBuffer(that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length');
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length);
    that.__proto__ = Buffer.prototype;
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length);
    }

    that.length = length;
  }

  return that;
}
/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */


function Buffer(arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length);
  } // Common case.


  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error('If encoding is specified then the first argument must be a string');
    }

    return allocUnsafe(this, arg);
  }

  return from(this, arg, encodingOrOffset, length);
}

Buffer.poolSize = 8192; // not used by this implementation
// TODO: Legacy, not needed anymore. Remove in next major version.

Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype;
  return arr;
};

function from(that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number');
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length);
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset);
  }

  return fromObject(that, value);
}
/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/


Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length);
};

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype;
  Buffer.__proto__ = Uint8Array;

  if (typeof Symbol !== 'undefined' && Symbol.species && Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    });
  }
}

function assertSize(size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number');
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative');
  }
}

function alloc(that, size, fill, encoding) {
  assertSize(size);

  if (size <= 0) {
    return createBuffer(that, size);
  }

  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string' ? createBuffer(that, size).fill(fill, encoding) : createBuffer(that, size).fill(fill);
  }

  return createBuffer(that, size);
}
/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/


Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding);
};

function allocUnsafe(that, size) {
  assertSize(size);
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0);

  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0;
    }
  }

  return that;
}
/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */


Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size);
};
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */


Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size);
};

function fromString(that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8';
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding');
  }

  var length = byteLength(string, encoding) | 0;
  that = createBuffer(that, length);
  var actual = that.write(string, encoding);

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual);
  }

  return that;
}

function fromArrayLike(that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0;
  that = createBuffer(that, length);

  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255;
  }

  return that;
}

function fromArrayBuffer(that, array, byteOffset, length) {
  array.byteLength; // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds');
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds');
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array);
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset);
  } else {
    array = new Uint8Array(array, byteOffset, length);
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array;
    that.__proto__ = Buffer.prototype;
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array);
  }

  return that;
}

function fromObject(that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0;
    that = createBuffer(that, len);

    if (that.length === 0) {
      return that;
    }

    obj.copy(that, 0, 0, len);
    return that;
  }

  if (obj) {
    if (typeof ArrayBuffer !== 'undefined' && obj.buffer instanceof ArrayBuffer || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0);
      }

      return fromArrayLike(that, obj);
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data);
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.');
}

function checked(length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' + 'size: 0x' + kMaxLength().toString(16) + ' bytes');
  }

  return length | 0;
}

function SlowBuffer(length) {
  if (+length != length) {
    // eslint-disable-line eqeqeq
    length = 0;
  }

  return Buffer.alloc(+length);
}

Buffer.isBuffer = function isBuffer(b) {
  return !!(b != null && b._isBuffer);
};

Buffer.compare = function compare(a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers');
  }

  if (a === b) return 0;
  var x = a.length;
  var y = b.length;

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i];
      y = b[i];
      break;
    }
  }

  if (x < y) return -1;
  if (y < x) return 1;
  return 0;
};

Buffer.isEncoding = function isEncoding(encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true;

    default:
      return false;
  }
};

Buffer.concat = function concat(list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers');
  }

  if (list.length === 0) {
    return Buffer.alloc(0);
  }

  var i;

  if (length === undefined) {
    length = 0;

    for (i = 0; i < list.length; ++i) {
      length += list[i].length;
    }
  }

  var buffer = Buffer.allocUnsafe(length);
  var pos = 0;

  for (i = 0; i < list.length; ++i) {
    var buf = list[i];

    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers');
    }

    buf.copy(buffer, pos);
    pos += buf.length;
  }

  return buffer;
};

function byteLength(string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length;
  }

  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' && (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength;
  }

  if (typeof string !== 'string') {
    string = '' + string;
  }

  var len = string.length;
  if (len === 0) return 0; // Use a for loop to avoid recursion

  var loweredCase = false;

  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len;

      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length;

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2;

      case 'hex':
        return len >>> 1;

      case 'base64':
        return base64ToBytes(string).length;

      default:
        if (loweredCase) return utf8ToBytes(string).length; // assume utf8

        encoding = ('' + encoding).toLowerCase();
        loweredCase = true;
    }
  }
}

Buffer.byteLength = byteLength;

function slowToString(encoding, start, end) {
  var loweredCase = false; // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.
  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.

  if (start === undefined || start < 0) {
    start = 0;
  } // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.


  if (start > this.length) {
    return '';
  }

  if (end === undefined || end > this.length) {
    end = this.length;
  }

  if (end <= 0) {
    return '';
  } // Force coersion to uint32. This will also coerce falsey/NaN values to 0.


  end >>>= 0;
  start >>>= 0;

  if (end <= start) {
    return '';
  }

  if (!encoding) encoding = 'utf8';

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end);

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end);

      case 'ascii':
        return asciiSlice(this, start, end);

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end);

      case 'base64':
        return base64Slice(this, start, end);

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end);

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
        encoding = (encoding + '').toLowerCase();
        loweredCase = true;
    }
  }
} // The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.


Buffer.prototype._isBuffer = true;

function swap(b, n, m) {
  var i = b[n];
  b[n] = b[m];
  b[m] = i;
}

Buffer.prototype.swap16 = function swap16() {
  var len = this.length;

  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits');
  }

  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1);
  }

  return this;
};

Buffer.prototype.swap32 = function swap32() {
  var len = this.length;

  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits');
  }

  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3);
    swap(this, i + 1, i + 2);
  }

  return this;
};

Buffer.prototype.swap64 = function swap64() {
  var len = this.length;

  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits');
  }

  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7);
    swap(this, i + 1, i + 6);
    swap(this, i + 2, i + 5);
    swap(this, i + 3, i + 4);
  }

  return this;
};

Buffer.prototype.toString = function toString() {
  var length = this.length | 0;
  if (length === 0) return '';
  if (arguments.length === 0) return utf8Slice(this, 0, length);
  return slowToString.apply(this, arguments);
};

Buffer.prototype.equals = function equals(b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer');
  if (this === b) return true;
  return Buffer.compare(this, b) === 0;
};

Buffer.prototype.inspect = function inspect() {
  var str = '';
  var max = exports.INSPECT_MAX_BYTES;

  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ');
    if (this.length > max) str += ' ... ';
  }

  return '<Buffer ' + str + '>';
};

Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer');
  }

  if (start === undefined) {
    start = 0;
  }

  if (end === undefined) {
    end = target ? target.length : 0;
  }

  if (thisStart === undefined) {
    thisStart = 0;
  }

  if (thisEnd === undefined) {
    thisEnd = this.length;
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index');
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0;
  }

  if (thisStart >= thisEnd) {
    return -1;
  }

  if (start >= end) {
    return 1;
  }

  start >>>= 0;
  end >>>= 0;
  thisStart >>>= 0;
  thisEnd >>>= 0;
  if (this === target) return 0;
  var x = thisEnd - thisStart;
  var y = end - start;
  var len = Math.min(x, y);
  var thisCopy = this.slice(thisStart, thisEnd);
  var targetCopy = target.slice(start, end);

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i];
      y = targetCopy[i];
      break;
    }
  }

  if (x < y) return -1;
  if (y < x) return 1;
  return 0;
}; // Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf


function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1; // Normalize byteOffset

  if (typeof byteOffset === 'string') {
    encoding = byteOffset;
    byteOffset = 0;
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff;
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000;
  }

  byteOffset = +byteOffset; // Coerce to Number.

  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : buffer.length - 1;
  } // Normalize byteOffset: negative offsets start from the end of the buffer


  if (byteOffset < 0) byteOffset = buffer.length + byteOffset;

  if (byteOffset >= buffer.length) {
    if (dir) return -1;else byteOffset = buffer.length - 1;
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0;else return -1;
  } // Normalize val


  if (typeof val === 'string') {
    val = Buffer.from(val, encoding);
  } // Finally, search either indexOf (if dir is true) or lastIndexOf


  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1;
    }

    return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
  } else if (typeof val === 'number') {
    val = val & 0xFF; // Search for a byte value [0-255]

    if (Buffer.TYPED_ARRAY_SUPPORT && typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
      }
    }

    return arrayIndexOf(buffer, [val], byteOffset, encoding, dir);
  }

  throw new TypeError('val must be string, number or Buffer');
}

function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
  var indexSize = 1;
  var arrLength = arr.length;
  var valLength = val.length;

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase();

    if (encoding === 'ucs2' || encoding === 'ucs-2' || encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1;
      }

      indexSize = 2;
      arrLength /= 2;
      valLength /= 2;
      byteOffset /= 2;
    }
  }

  function read(buf, i) {
    if (indexSize === 1) {
      return buf[i];
    } else {
      return buf.readUInt16BE(i * indexSize);
    }
  }

  var i;

  if (dir) {
    var foundIndex = -1;

    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i;
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize;
      } else {
        if (foundIndex !== -1) i -= i - foundIndex;
        foundIndex = -1;
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;

    for (i = byteOffset; i >= 0; i--) {
      var found = true;

      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false;
          break;
        }
      }

      if (found) return i;
    }
  }

  return -1;
}

Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1;
};

Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
};

Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
};

function hexWrite(buf, string, offset, length) {
  offset = Number(offset) || 0;
  var remaining = buf.length - offset;

  if (!length) {
    length = remaining;
  } else {
    length = Number(length);

    if (length > remaining) {
      length = remaining;
    }
  } // must be an even number of digits


  var strLen = string.length;
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string');

  if (length > strLen / 2) {
    length = strLen / 2;
  }

  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16);
    if (isNaN(parsed)) return i;
    buf[offset + i] = parsed;
  }

  return i;
}

function utf8Write(buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
}

function asciiWrite(buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length);
}

function latin1Write(buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length);
}

function base64Write(buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length);
}

function ucs2Write(buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
}

Buffer.prototype.write = function write(string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8';
    length = this.length;
    offset = 0; // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset;
    length = this.length;
    offset = 0; // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0;

    if (isFinite(length)) {
      length = length | 0;
      if (encoding === undefined) encoding = 'utf8';
    } else {
      encoding = length;
      length = undefined;
    } // legacy write(string, encoding, offset, length) - remove in v0.13

  } else {
    throw new Error('Buffer.write(string, encoding, offset[, length]) is no longer supported');
  }

  var remaining = this.length - offset;
  if (length === undefined || length > remaining) length = remaining;

  if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds');
  }

  if (!encoding) encoding = 'utf8';
  var loweredCase = false;

  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length);

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length);

      case 'ascii':
        return asciiWrite(this, string, offset, length);

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length);

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length);

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length);

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
        encoding = ('' + encoding).toLowerCase();
        loweredCase = true;
    }
  }
};

Buffer.prototype.toJSON = function toJSON() {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  };
};

function base64Slice(buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf);
  } else {
    return base64.fromByteArray(buf.slice(start, end));
  }
}

function utf8Slice(buf, start, end) {
  end = Math.min(buf.length, end);
  var res = [];
  var i = start;

  while (i < end) {
    var firstByte = buf[i];
    var codePoint = null;
    var bytesPerSequence = firstByte > 0xEF ? 4 : firstByte > 0xDF ? 3 : firstByte > 0xBF ? 2 : 1;

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint;

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte;
          }

          break;

        case 2:
          secondByte = buf[i + 1];

          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | secondByte & 0x3F;

            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint;
            }
          }

          break;

        case 3:
          secondByte = buf[i + 1];
          thirdByte = buf[i + 2];

          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | thirdByte & 0x3F;

            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint;
            }
          }

          break;

        case 4:
          secondByte = buf[i + 1];
          thirdByte = buf[i + 2];
          fourthByte = buf[i + 3];

          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | fourthByte & 0x3F;

            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint;
            }
          }

      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD;
      bytesPerSequence = 1;
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000;
      res.push(codePoint >>> 10 & 0x3FF | 0xD800);
      codePoint = 0xDC00 | codePoint & 0x3FF;
    }

    res.push(codePoint);
    i += bytesPerSequence;
  }

  return decodeCodePointsArray(res);
} // Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety


var MAX_ARGUMENTS_LENGTH = 0x1000;

function decodeCodePointsArray(codePoints) {
  var len = codePoints.length;

  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints); // avoid extra slice()
  } // Decode in chunks to avoid "call stack size exceeded".


  var res = '';
  var i = 0;

  while (i < len) {
    res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
  }

  return res;
}

function asciiSlice(buf, start, end) {
  var ret = '';
  end = Math.min(buf.length, end);

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F);
  }

  return ret;
}

function latin1Slice(buf, start, end) {
  var ret = '';
  end = Math.min(buf.length, end);

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i]);
  }

  return ret;
}

function hexSlice(buf, start, end) {
  var len = buf.length;
  if (!start || start < 0) start = 0;
  if (!end || end < 0 || end > len) end = len;
  var out = '';

  for (var i = start; i < end; ++i) {
    out += toHex(buf[i]);
  }

  return out;
}

function utf16leSlice(buf, start, end) {
  var bytes = buf.slice(start, end);
  var res = '';

  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
  }

  return res;
}

Buffer.prototype.slice = function slice(start, end) {
  var len = this.length;
  start = ~~start;
  end = end === undefined ? len : ~~end;

  if (start < 0) {
    start += len;
    if (start < 0) start = 0;
  } else if (start > len) {
    start = len;
  }

  if (end < 0) {
    end += len;
    if (end < 0) end = 0;
  } else if (end > len) {
    end = len;
  }

  if (end < start) end = start;
  var newBuf;

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end);
    newBuf.__proto__ = Buffer.prototype;
  } else {
    var sliceLen = end - start;
    newBuf = new Buffer(sliceLen, undefined);

    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start];
    }
  }

  return newBuf;
};
/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */


function checkOffset(offset, ext, length) {
  if (offset % 1 !== 0 || offset < 0) throw new RangeError('offset is not uint');
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length');
}

Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);
  var val = this[offset];
  var mul = 1;
  var i = 0;

  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul;
  }

  return val;
};

Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;

  if (!noAssert) {
    checkOffset(offset, byteLength, this.length);
  }

  var val = this[offset + --byteLength];
  var mul = 1;

  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul;
  }

  return val;
};

Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length);
  return this[offset];
};

Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  return this[offset] | this[offset + 1] << 8;
};

Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  return this[offset] << 8 | this[offset + 1];
};

Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 0x1000000;
};

Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return this[offset] * 0x1000000 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
};

Buffer.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);
  var val = this[offset];
  var mul = 1;
  var i = 0;

  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul;
  }

  mul *= 0x80;
  if (val >= mul) val -= Math.pow(2, 8 * byteLength);
  return val;
};

Buffer.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);
  var i = byteLength;
  var mul = 1;
  var val = this[offset + --i];

  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul;
  }

  mul *= 0x80;
  if (val >= mul) val -= Math.pow(2, 8 * byteLength);
  return val;
};

Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length);
  if (!(this[offset] & 0x80)) return this[offset];
  return (0xff - this[offset] + 1) * -1;
};

Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  var val = this[offset] | this[offset + 1] << 8;
  return val & 0x8000 ? val | 0xFFFF0000 : val;
};

Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  var val = this[offset + 1] | this[offset] << 8;
  return val & 0x8000 ? val | 0xFFFF0000 : val;
};

Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
};

Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
};

Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return ieee754.read(this, offset, true, 23, 4);
};

Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return ieee754.read(this, offset, false, 23, 4);
};

Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length);
  return ieee754.read(this, offset, true, 52, 8);
};

Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length);
  return ieee754.read(this, offset, false, 52, 8);
};

function checkInt(buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
  if (offset + ext > buf.length) throw new RangeError('Index out of range');
}

Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;
  byteLength = byteLength | 0;

  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1;
    checkInt(this, value, offset, byteLength, maxBytes, 0);
  }

  var mul = 1;
  var i = 0;
  this[offset] = value & 0xFF;

  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = value / mul & 0xFF;
  }

  return offset + byteLength;
};

Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;
  byteLength = byteLength | 0;

  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1;
    checkInt(this, value, offset, byteLength, maxBytes, 0);
  }

  var i = byteLength - 1;
  var mul = 1;
  this[offset + i] = value & 0xFF;

  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = value / mul & 0xFF;
  }

  return offset + byteLength;
};

Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
  this[offset] = value & 0xff;
  return offset + 1;
};

function objectWriteUInt16(buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1;

  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & 0xff << 8 * (littleEndian ? i : 1 - i)) >>> (littleEndian ? i : 1 - i) * 8;
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
  } else {
    objectWriteUInt16(this, value, offset, true);
  }

  return offset + 2;
};

Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
  } else {
    objectWriteUInt16(this, value, offset, false);
  }

  return offset + 2;
};

function objectWriteUInt32(buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1;

  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = value >>> (littleEndian ? i : 3 - i) * 8 & 0xff;
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = value >>> 24;
    this[offset + 2] = value >>> 16;
    this[offset + 1] = value >>> 8;
    this[offset] = value & 0xff;
  } else {
    objectWriteUInt32(this, value, offset, true);
  }

  return offset + 4;
};

Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
  } else {
    objectWriteUInt32(this, value, offset, false);
  }

  return offset + 4;
};

Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;

  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1);
    checkInt(this, value, offset, byteLength, limit - 1, -limit);
  }

  var i = 0;
  var mul = 1;
  var sub = 0;
  this[offset] = value & 0xFF;

  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1;
    }

    this[offset + i] = (value / mul >> 0) - sub & 0xFF;
  }

  return offset + byteLength;
};

Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;

  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1);
    checkInt(this, value, offset, byteLength, limit - 1, -limit);
  }

  var i = byteLength - 1;
  var mul = 1;
  var sub = 0;
  this[offset + i] = value & 0xFF;

  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1;
    }

    this[offset + i] = (value / mul >> 0) - sub & 0xFF;
  }

  return offset + byteLength;
};

Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80);
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
  if (value < 0) value = 0xff + value + 1;
  this[offset] = value & 0xff;
  return offset + 1;
};

Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
  } else {
    objectWriteUInt16(this, value, offset, true);
  }

  return offset + 2;
};

Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
  } else {
    objectWriteUInt16(this, value, offset, false);
  }

  return offset + 2;
};

Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    this[offset + 2] = value >>> 16;
    this[offset + 3] = value >>> 24;
  } else {
    objectWriteUInt32(this, value, offset, true);
  }

  return offset + 4;
};

Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
  if (value < 0) value = 0xffffffff + value + 1;

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
  } else {
    objectWriteUInt32(this, value, offset, false);
  }

  return offset + 4;
};

function checkIEEE754(buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range');
  if (offset < 0) throw new RangeError('Index out of range');
}

function writeFloat(buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38);
  }

  ieee754.write(buf, value, offset, littleEndian, 23, 4);
  return offset + 4;
}

Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert);
};

Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert);
};

function writeDouble(buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308);
  }

  ieee754.write(buf, value, offset, littleEndian, 52, 8);
  return offset + 8;
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert);
};

Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert);
}; // copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)


Buffer.prototype.copy = function copy(target, targetStart, start, end) {
  if (!start) start = 0;
  if (!end && end !== 0) end = this.length;
  if (targetStart >= target.length) targetStart = target.length;
  if (!targetStart) targetStart = 0;
  if (end > 0 && end < start) end = start; // Copy 0 bytes; we're done

  if (end === start) return 0;
  if (target.length === 0 || this.length === 0) return 0; // Fatal error conditions

  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds');
  }

  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds');
  if (end < 0) throw new RangeError('sourceEnd out of bounds'); // Are we oob?

  if (end > this.length) end = this.length;

  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start;
  }

  var len = end - start;
  var i;

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start];
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start];
    }
  } else {
    Uint8Array.prototype.set.call(target, this.subarray(start, start + len), targetStart);
  }

  return len;
}; // Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])


Buffer.prototype.fill = function fill(val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start;
      start = 0;
      end = this.length;
    } else if (typeof end === 'string') {
      encoding = end;
      end = this.length;
    }

    if (val.length === 1) {
      var code = val.charCodeAt(0);

      if (code < 256) {
        val = code;
      }
    }

    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string');
    }

    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding);
    }
  } else if (typeof val === 'number') {
    val = val & 255;
  } // Invalid ranges are not set to a default, so can range check early.


  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index');
  }

  if (end <= start) {
    return this;
  }

  start = start >>> 0;
  end = end === undefined ? this.length : end >>> 0;
  if (!val) val = 0;
  var i;

  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val;
    }
  } else {
    var bytes = Buffer.isBuffer(val) ? val : utf8ToBytes(new Buffer(val, encoding).toString());
    var len = bytes.length;

    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len];
    }
  }

  return this;
}; // HELPER FUNCTIONS
// ================


var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g;

function base64clean(str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, ''); // Node converts strings with length < 2 to ''

  if (str.length < 2) return ''; // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not

  while (str.length % 4 !== 0) {
    str = str + '=';
  }

  return str;
}

function stringtrim(str) {
  if (str.trim) return str.trim();
  return str.replace(/^\s+|\s+$/g, '');
}

function toHex(n) {
  if (n < 16) return '0' + n.toString(16);
  return n.toString(16);
}

function utf8ToBytes(string, units) {
  units = units || Infinity;
  var codePoint;
  var length = string.length;
  var leadSurrogate = null;
  var bytes = [];

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i); // is surrogate component

    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
          continue;
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
          continue;
        } // valid lead


        leadSurrogate = codePoint;
        continue;
      } // 2 leads in a row


      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
        leadSurrogate = codePoint;
        continue;
      } // valid surrogate pair


      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
    }

    leadSurrogate = null; // encode utf8

    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break;
      bytes.push(codePoint);
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break;
      bytes.push(codePoint >> 0x6 | 0xC0, codePoint & 0x3F | 0x80);
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break;
      bytes.push(codePoint >> 0xC | 0xE0, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break;
      bytes.push(codePoint >> 0x12 | 0xF0, codePoint >> 0xC & 0x3F | 0x80, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
    } else {
      throw new Error('Invalid code point');
    }
  }

  return bytes;
}

function asciiToBytes(str) {
  var byteArray = [];

  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF);
  }

  return byteArray;
}

function utf16leToBytes(str, units) {
  var c, hi, lo;
  var byteArray = [];

  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break;
    c = str.charCodeAt(i);
    hi = c >> 8;
    lo = c % 256;
    byteArray.push(lo);
    byteArray.push(hi);
  }

  return byteArray;
}

function base64ToBytes(str) {
  return base64.toByteArray(base64clean(str));
}

function blitBuffer(src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if (i + offset >= dst.length || i >= src.length) break;
    dst[i + offset] = src[i];
  }

  return i;
}

function isnan(val) {
  return val !== val; // eslint-disable-line no-self-compare
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(90)))

/***/ }),
/* 90 */
/***/ (function(module, exports) {

var g; // This works in non-strict mode

g = function () {
  return this;
}();

try {
  // This works if eval is allowed (see CSP)
  g = g || new Function("return this")();
} catch (e) {
  // This works if the window reference is available
  if ((typeof window === "undefined" ? "undefined" : babelHelpers.typeof(window)) === "object") g = window;
} // g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}


module.exports = g;

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength;
exports.toByteArray = toByteArray;
exports.fromByteArray = fromByteArray;
var lookup = [];
var revLookup = [];
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;
var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i];
  revLookup[code.charCodeAt(i)] = i;
} // Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications


revLookup['-'.charCodeAt(0)] = 62;
revLookup['_'.charCodeAt(0)] = 63;

function getLens(b64) {
  var len = b64.length;

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4');
  } // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42


  var validLen = b64.indexOf('=');
  if (validLen === -1) validLen = len;
  var placeHoldersLen = validLen === len ? 0 : 4 - validLen % 4;
  return [validLen, placeHoldersLen];
} // base64 is 4/3 + up to two characters of the original data


function byteLength(b64) {
  var lens = getLens(b64);
  var validLen = lens[0];
  var placeHoldersLen = lens[1];
  return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}

function _byteLength(b64, validLen, placeHoldersLen) {
  return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}

function toByteArray(b64) {
  var tmp;
  var lens = getLens(b64);
  var validLen = lens[0];
  var placeHoldersLen = lens[1];
  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
  var curByte = 0; // if there are placeholders, only get up to the last complete 4 chars

  var len = placeHoldersLen > 0 ? validLen - 4 : validLen;

  for (var i = 0; i < len; i += 4) {
    tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)];
    arr[curByte++] = tmp >> 16 & 0xFF;
    arr[curByte++] = tmp >> 8 & 0xFF;
    arr[curByte++] = tmp & 0xFF;
  }

  if (placeHoldersLen === 2) {
    tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4;
    arr[curByte++] = tmp & 0xFF;
  }

  if (placeHoldersLen === 1) {
    tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2;
    arr[curByte++] = tmp >> 8 & 0xFF;
    arr[curByte++] = tmp & 0xFF;
  }

  return arr;
}

function tripletToBase64(num) {
  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F];
}

function encodeChunk(uint8, start, end) {
  var tmp;
  var output = [];

  for (var i = start; i < end; i += 3) {
    tmp = (uint8[i] << 16 & 0xFF0000) + (uint8[i + 1] << 8 & 0xFF00) + (uint8[i + 2] & 0xFF);
    output.push(tripletToBase64(tmp));
  }

  return output.join('');
}

function fromByteArray(uint8) {
  var tmp;
  var len = uint8.length;
  var extraBytes = len % 3; // if we have 1 byte left, pad 2 bytes

  var parts = [];
  var maxChunkLength = 16383; // must be multiple of 3
  // go through the array every three bytes, we'll deal with trailing stuff later

  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
  } // pad the end with zeros, but make sure to not forget the extra bytes


  if (extraBytes === 1) {
    tmp = uint8[len - 1];
    parts.push(lookup[tmp >> 2] + lookup[tmp << 4 & 0x3F] + '==');
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1];
    parts.push(lookup[tmp >> 10] + lookup[tmp >> 4 & 0x3F] + lookup[tmp << 2 & 0x3F] + '=');
  }

  return parts.join('');
}

/***/ }),
/* 92 */
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m;
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var nBits = -7;
  var i = isLE ? nBytes - 1 : 0;
  var d = isLE ? -1 : 1;
  var s = buffer[offset + i];
  i += d;
  e = s & (1 << -nBits) - 1;
  s >>= -nBits;
  nBits += eLen;

  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & (1 << -nBits) - 1;
  e >>= -nBits;
  nBits += mLen;

  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m ? NaN : (s ? -1 : 1) * Infinity;
  } else {
    m = m + Math.pow(2, mLen);
    e = e - eBias;
  }

  return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
};

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c;
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
  var i = isLE ? 0 : nBytes - 1;
  var d = isLE ? 1 : -1;
  var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
  value = Math.abs(value);

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0;
    e = eMax;
  } else {
    e = Math.floor(Math.log(value) / Math.LN2);

    if (value * (c = Math.pow(2, -e)) < 1) {
      e--;
      c *= 2;
    }

    if (e + eBias >= 1) {
      value += rt / c;
    } else {
      value += rt * Math.pow(2, 1 - eBias);
    }

    if (value * c >= 2) {
      e++;
      c /= 2;
    }

    if (e + eBias >= eMax) {
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
      e = 0;
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = e << mLen | m;
  eLen += mLen;

  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128;
};

/***/ }),
/* 93 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function defFunc(ajv) {
  defFunc.definition = {
    type: 'number',
    macro: function macro(schema, parentSchema) {
      var min = schema[0],
          max = schema[1],
          exclusive = parentSchema.exclusiveRange;
      validateRangeSchema(min, max, exclusive);
      return exclusive === true ? {
        exclusiveMinimum: min,
        exclusiveMaximum: max
      } : {
        minimum: min,
        maximum: max
      };
    },
    metaSchema: {
      type: 'array',
      minItems: 2,
      maxItems: 2,
      items: {
        type: 'number'
      }
    }
  };
  ajv.addKeyword('range', defFunc.definition);
  ajv.addKeyword('exclusiveRange');
  return ajv;

  function validateRangeSchema(min, max, exclusive) {
    if (exclusive !== undefined && typeof exclusive != 'boolean') throw new Error('Invalid schema for exclusiveRange keyword, should be boolean');
    if (min > max || exclusive && min == max) throw new Error('There are no numbers in range');
  }
};

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function defFunc(ajv) {
  defFunc.definition = {
    type: 'string',
    inline: function inline(it, keyword, schema) {
      return getRegExp() + '.test(data' + (it.dataLevel || '') + ')';

      function getRegExp() {
        try {
          if (babelHelpers.typeof(schema) == 'object') return new RegExp(schema.pattern, schema.flags);
          var rx = schema.match(/^\/(.*)\/([gimuy]*)$/);
          if (rx) return new RegExp(rx[1], rx[2]);
          throw new Error('cannot parse string into RegExp');
        } catch (e) {
          console.error('regular expression', schema, 'is invalid');
          throw e;
        }
      }
    },
    metaSchema: {
      type: ['string', 'object'],
      properties: {
        pattern: {
          type: 'string'
        },
        flags: {
          type: 'string'
        }
      },
      required: ['pattern'],
      additionalProperties: false
    }
  };
  ajv.addKeyword('regexp', defFunc.definition);
  return ajv;
};

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var KNOWN_TYPES = ['undefined', 'string', 'number', 'object', 'function', 'boolean', 'symbol'];

module.exports = function defFunc(ajv) {
  defFunc.definition = {
    inline: function inline(it, keyword, schema) {
      var data = 'data' + (it.dataLevel || '');
      if (typeof schema == 'string') return 'typeof ' + data + ' == "' + schema + '"';
      schema = 'validate.schema' + it.schemaPath + '.' + keyword;
      return schema + '.indexOf(typeof ' + data + ') >= 0';
    },
    metaSchema: {
      anyOf: [{
        type: 'string',
        enum: KNOWN_TYPES
      }, {
        type: 'array',
        items: {
          type: 'string',
          enum: KNOWN_TYPES
        }
      }]
    }
  };
  ajv.addKeyword('typeof', defFunc.definition);
  return ajv;
};

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var sequences = {};
var DEFAULTS = {
  timestamp: function timestamp() {
    return Date.now();
  },
  datetime: function datetime() {
    return new Date().toISOString();
  },
  date: function date() {
    return new Date().toISOString().slice(0, 10);
  },
  time: function time() {
    return new Date().toISOString().slice(11);
  },
  random: function random() {
    return Math.random();
  },
  randomint: function randomint(args) {
    var limit = args && args.max || 2;
    return function () {
      return Math.floor(Math.random() * limit);
    };
  },
  seq: function seq(args) {
    var name = args && args.name || '';
    sequences[name] = sequences[name] || 0;
    return function () {
      return sequences[name]++;
    };
  }
};

module.exports = function defFunc(ajv) {
  defFunc.definition = {
    compile: function compile(schema, parentSchema, it) {
      var funcs = {};

      for (var key in schema) {
        var d = schema[key];
        var func = getDefault(typeof d == 'string' ? d : d.func);
        funcs[key] = func.length ? func(d.args) : func;
      }

      return it.opts.useDefaults && !it.compositeRule ? assignDefaults : noop;

      function assignDefaults(data) {
        for (var prop in schema) {
          if (data[prop] === undefined || it.opts.useDefaults == 'empty' && (data[prop] === null || data[prop] === '')) data[prop] = funcs[prop]();
        }

        return true;
      }

      function noop() {
        return true;
      }
    },
    DEFAULTS: DEFAULTS,
    metaSchema: {
      type: 'object',
      additionalProperties: {
        type: ['string', 'object'],
        additionalProperties: false,
        required: ['func', 'args'],
        properties: {
          func: {
            type: 'string'
          },
          args: {
            type: 'object'
          }
        }
      }
    }
  };
  ajv.addKeyword('dynamicDefaults', defFunc.definition);
  return ajv;

  function getDefault(d) {
    var def = DEFAULTS[d];
    if (def) return def;
    throw new Error('invalid "dynamicDefaults" keyword property value: ' + d);
  }
};

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function defFunc(ajv) {
  defFunc.definition = {
    type: 'object',
    macro: function macro(schema, parentSchema) {
      if (!schema) return true;
      var properties = Object.keys(parentSchema.properties);
      if (properties.length == 0) return true;
      return {
        required: properties
      };
    },
    metaSchema: {
      type: 'boolean'
    },
    dependencies: ['properties']
  };
  ajv.addKeyword('allRequired', defFunc.definition);
  return ajv;
};

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function defFunc(ajv) {
  defFunc.definition = {
    type: 'object',
    macro: function macro(schema) {
      if (schema.length == 0) return true;
      if (schema.length == 1) return {
        required: schema
      };
      var schemas = schema.map(function (prop) {
        return {
          required: [prop]
        };
      });
      return {
        anyOf: schemas
      };
    },
    metaSchema: {
      type: 'array',
      items: {
        type: 'string'
      }
    }
  };
  ajv.addKeyword('anyRequired', defFunc.definition);
  return ajv;
};

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function defFunc(ajv) {
  defFunc.definition = {
    type: 'object',
    macro: function macro(schema) {
      if (schema.length == 0) return true;
      if (schema.length == 1) return {
        not: {
          required: schema
        }
      };
      var schemas = schema.map(function (prop) {
        return {
          required: [prop]
        };
      });
      return {
        not: {
          anyOf: schemas
        }
      };
    },
    metaSchema: {
      type: 'array',
      items: {
        type: 'string'
      }
    }
  };
  ajv.addKeyword('prohibited', defFunc.definition);
  return ajv;
};

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function defFunc(ajv) {
  defFunc.definition = {
    type: 'array',
    compile: function compile(keys, parentSchema, it) {
      var equal = it.util.equal;
      return function (data) {
        if (data.length > 1) {
          for (var k = 0; k < keys.length; k++) {
            var key = keys[k];

            for (var i = data.length; i--;) {
              if (babelHelpers.typeof(data[i]) != 'object') continue;

              for (var j = i; j--;) {
                if (babelHelpers.typeof(data[j]) == 'object' && equal(data[i][key], data[j][key])) return false;
              }
            }
          }
        }

        return true;
      };
    },
    metaSchema: {
      type: 'array',
      items: {
        type: 'string'
      }
    }
  };
  ajv.addKeyword('uniqueItemProperties', defFunc.definition);
  return ajv;
};

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var util = __webpack_require__(13);

module.exports = function defFunc(ajv) {
  defFunc.definition = {
    type: 'object',
    macro: function macro(schema) {
      var schemas = [];

      for (var pointer in schema) {
        schemas.push(getSchema(pointer, schema[pointer]));
      }

      return {
        'allOf': schemas
      };
    },
    metaSchema: {
      type: 'object',
      propertyNames: {
        type: 'string',
        format: 'json-pointer'
      },
      additionalProperties: util.metaSchemaRef(ajv)
    }
  };
  ajv.addKeyword('deepProperties', defFunc.definition);
  return ajv;
};

function getSchema(jsonPointer, schema) {
  var segments = jsonPointer.split('/');
  var rootSchema = {};
  var pointerSchema = rootSchema;

  for (var i = 1; i < segments.length; i++) {
    var segment = segments[i];
    var isLast = i == segments.length - 1;
    segment = unescapeJsonPointer(segment);
    var properties = pointerSchema.properties = {};
    var items = undefined;

    if (/[0-9]+/.test(segment)) {
      var count = +segment;
      items = pointerSchema.items = [];

      while (count--) {
        items.push({});
      }
    }

    pointerSchema = isLast ? schema : {};
    properties[segment] = pointerSchema;
    if (items) items.push(pointerSchema);
  }

  return rootSchema;
}

function unescapeJsonPointer(str) {
  return str.replace(/~1/g, '/').replace(/~0/g, '~');
}

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function defFunc(ajv) {
  defFunc.definition = {
    type: 'object',
    inline: function inline(it, keyword, schema) {
      var expr = '';

      for (var i = 0; i < schema.length; i++) {
        if (i) expr += ' && ';
        expr += '(' + getData(schema[i], it.dataLevel) + ' !== undefined)';
      }

      return expr;
    },
    metaSchema: {
      type: 'array',
      items: {
        type: 'string',
        format: 'json-pointer'
      }
    }
  };
  ajv.addKeyword('deepRequired', defFunc.definition);
  return ajv;
};

function getData(jsonPointer, lvl) {
  var data = 'data' + (lvl || '');
  if (!jsonPointer) return data;
  var expr = data;
  var segments = jsonPointer.split('/');

  for (var i = 1; i < segments.length; i++) {
    var segment = segments[i];
    data += getProperty(unescapeJsonPointer(segment));
    expr += ' && ' + data;
  }

  return expr;
}

var IDENTIFIER = /^[a-z$_][a-z$_0-9]*$/i;
var INTEGER = /^[0-9]+$/;
var SINGLE_QUOTE = /'|\\/g;

function getProperty(key) {
  return INTEGER.test(key) ? '[' + key + ']' : IDENTIFIER.test(key) ? '.' + key : "['" + key.replace(SINGLE_QUOTE, '\\$&') + "']";
}

function unescapeJsonPointer(str) {
  return str.replace(/~1/g, '/').replace(/~0/g, '~');
}

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(28)('Minimum');

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function generate__formatLimit(it, $keyword, $ruleType) {
  var out = ' ';
  var $lvl = it.level;
  var $dataLvl = it.dataLevel;
  var $schema = it.schema[$keyword];
  var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
  var $breakOnError = !it.opts.allErrors;
  var $errorKeyword;
  var $data = 'data' + ($dataLvl || '');
  var $valid = 'valid' + $lvl;
  out += 'var ' + $valid + ' = undefined;';

  if (it.opts.format === false) {
    out += ' ' + $valid + ' = true; ';
    return out;
  }

  var $schemaFormat = it.schema.format,
      $isDataFormat = it.opts.$data && $schemaFormat.$data,
      $closingBraces = '';

  if ($isDataFormat) {
    var $schemaValueFormat = it.util.getData($schemaFormat.$data, $dataLvl, it.dataPathArr),
        $format = 'format' + $lvl,
        $compare = 'compare' + $lvl;
    out += ' var ' + $format + ' = formats[' + $schemaValueFormat + '] , ' + $compare + ' = ' + $format + ' && ' + $format + '.compare;';
  } else {
    var $format = it.formats[$schemaFormat];

    if (!($format && $format.compare)) {
      out += '  ' + $valid + ' = true; ';
      return out;
    }

    var $compare = 'formats' + it.util.getProperty($schemaFormat) + '.compare';
  }

  var $isMax = $keyword == 'formatMaximum',
      $exclusiveKeyword = 'formatExclusive' + ($isMax ? 'Maximum' : 'Minimum'),
      $schemaExcl = it.schema[$exclusiveKeyword],
      $isDataExcl = it.opts.$data && $schemaExcl && $schemaExcl.$data,
      $op = $isMax ? '<' : '>',
      $result = 'result' + $lvl;
  var $isData = it.opts.$data && $schema && $schema.$data,
      $schemaValue;

  if ($isData) {
    out += ' var schema' + $lvl + ' = ' + it.util.getData($schema.$data, $dataLvl, it.dataPathArr) + '; ';
    $schemaValue = 'schema' + $lvl;
  } else {
    $schemaValue = $schema;
  }

  if ($isDataExcl) {
    var $schemaValueExcl = it.util.getData($schemaExcl.$data, $dataLvl, it.dataPathArr),
        $exclusive = 'exclusive' + $lvl,
        $opExpr = 'op' + $lvl,
        $opStr = '\' + ' + $opExpr + ' + \'';
    out += ' var schemaExcl' + $lvl + ' = ' + $schemaValueExcl + '; ';
    $schemaValueExcl = 'schemaExcl' + $lvl;
    out += ' if (typeof ' + $schemaValueExcl + ' != \'boolean\' && ' + $schemaValueExcl + ' !== undefined) { ' + $valid + ' = false; ';
    var $errorKeyword = $exclusiveKeyword;
    var $$outStack = $$outStack || [];
    $$outStack.push(out);
    out = '';
    /* istanbul ignore else */

    if (it.createErrors !== false) {
      out += ' { keyword: \'' + ($errorKeyword || '_formatExclusiveLimit') + '\' , dataPath: (dataPath || \'\') + ' + it.errorPath + ' , schemaPath: ' + it.util.toQuotedString($errSchemaPath) + ' , params: {} ';

      if (it.opts.messages !== false) {
        out += ' , message: \'' + $exclusiveKeyword + ' should be boolean\' ';
      }

      if (it.opts.verbose) {
        out += ' , schema: validate.schema' + $schemaPath + ' , parentSchema: validate.schema' + it.schemaPath + ' , data: ' + $data + ' ';
      }

      out += ' } ';
    } else {
      out += ' {} ';
    }

    var __err = out;
    out = $$outStack.pop();

    if (!it.compositeRule && $breakOnError) {
      /* istanbul ignore if */
      if (it.async) {
        out += ' throw new ValidationError([' + __err + ']); ';
      } else {
        out += ' validate.errors = [' + __err + ']; return false; ';
      }
    } else {
      out += ' var err = ' + __err + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
    }

    out += ' }  ';

    if ($breakOnError) {
      $closingBraces += '}';
      out += ' else { ';
    }

    if ($isData) {
      out += ' if (' + $schemaValue + ' === undefined) ' + $valid + ' = true; else if (typeof ' + $schemaValue + ' != \'string\') ' + $valid + ' = false; else { ';
      $closingBraces += '}';
    }

    if ($isDataFormat) {
      out += ' if (!' + $compare + ') ' + $valid + ' = true; else { ';
      $closingBraces += '}';
    }

    out += ' var ' + $result + ' = ' + $compare + '(' + $data + ',  ';

    if ($isData) {
      out += '' + $schemaValue;
    } else {
      out += '' + it.util.toQuotedString($schema);
    }

    out += ' ); if (' + $result + ' === undefined) ' + $valid + ' = false; var ' + $exclusive + ' = ' + $schemaValueExcl + ' === true; if (' + $valid + ' === undefined) { ' + $valid + ' = ' + $exclusive + ' ? ' + $result + ' ' + $op + ' 0 : ' + $result + ' ' + $op + '= 0; } if (!' + $valid + ') var op' + $lvl + ' = ' + $exclusive + ' ? \'' + $op + '\' : \'' + $op + '=\';';
  } else {
    var $exclusive = $schemaExcl === true,
        $opStr = $op;
    if (!$exclusive) $opStr += '=';
    var $opExpr = '\'' + $opStr + '\'';

    if ($isData) {
      out += ' if (' + $schemaValue + ' === undefined) ' + $valid + ' = true; else if (typeof ' + $schemaValue + ' != \'string\') ' + $valid + ' = false; else { ';
      $closingBraces += '}';
    }

    if ($isDataFormat) {
      out += ' if (!' + $compare + ') ' + $valid + ' = true; else { ';
      $closingBraces += '}';
    }

    out += ' var ' + $result + ' = ' + $compare + '(' + $data + ',  ';

    if ($isData) {
      out += '' + $schemaValue;
    } else {
      out += '' + it.util.toQuotedString($schema);
    }

    out += ' ); if (' + $result + ' === undefined) ' + $valid + ' = false; if (' + $valid + ' === undefined) ' + $valid + ' = ' + $result + ' ' + $op;

    if (!$exclusive) {
      out += '=';
    }

    out += ' 0;';
  }

  out += '' + $closingBraces + 'if (!' + $valid + ') { ';
  var $errorKeyword = $keyword;
  var $$outStack = $$outStack || [];
  $$outStack.push(out);
  out = '';
  /* istanbul ignore else */

  if (it.createErrors !== false) {
    out += ' { keyword: \'' + ($errorKeyword || '_formatLimit') + '\' , dataPath: (dataPath || \'\') + ' + it.errorPath + ' , schemaPath: ' + it.util.toQuotedString($errSchemaPath) + ' , params: { comparison: ' + $opExpr + ', limit:  ';

    if ($isData) {
      out += '' + $schemaValue;
    } else {
      out += '' + it.util.toQuotedString($schema);
    }

    out += ' , exclusive: ' + $exclusive + ' } ';

    if (it.opts.messages !== false) {
      out += ' , message: \'should be ' + $opStr + ' "';

      if ($isData) {
        out += '\' + ' + $schemaValue + ' + \'';
      } else {
        out += '' + it.util.escapeQuotes($schema);
      }

      out += '"\' ';
    }

    if (it.opts.verbose) {
      out += ' , schema:  ';

      if ($isData) {
        out += 'validate.schema' + $schemaPath;
      } else {
        out += '' + it.util.toQuotedString($schema);
      }

      out += '         , parentSchema: validate.schema' + it.schemaPath + ' , data: ' + $data + ' ';
    }

    out += ' } ';
  } else {
    out += ' {} ';
  }

  var __err = out;
  out = $$outStack.pop();

  if (!it.compositeRule && $breakOnError) {
    /* istanbul ignore if */
    if (it.async) {
      out += ' throw new ValidationError([' + __err + ']); ';
    } else {
      out += ' validate.errors = [' + __err + ']; return false; ';
    }
  } else {
    out += ' var err = ' + __err + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
  }

  out += '}';
  return out;
};

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(28)('Maximum');

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function defFunc(ajv) {
  defFunc.definition = {
    type: 'object',
    inline: __webpack_require__(108),
    statements: true,
    errors: 'full',
    metaSchema: {
      type: 'array',
      items: {
        type: 'string',
        format: 'regex'
      },
      uniqueItems: true
    }
  };
  ajv.addKeyword('patternRequired', defFunc.definition);
  return ajv;
};

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function generate_patternRequired(it, $keyword, $ruleType) {
  var out = ' ';
  var $lvl = it.level;
  var $dataLvl = it.dataLevel;
  var $schema = it.schema[$keyword];
  var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
  var $breakOnError = !it.opts.allErrors;
  var $data = 'data' + ($dataLvl || '');
  var $valid = 'valid' + $lvl;
  var $key = 'key' + $lvl,
      $idx = 'idx' + $lvl,
      $matched = 'patternMatched' + $lvl,
      $dataProperties = 'dataProperties' + $lvl,
      $closingBraces = '',
      $ownProperties = it.opts.ownProperties;
  out += 'var ' + $valid + ' = true;';

  if ($ownProperties) {
    out += ' var ' + $dataProperties + ' = undefined;';
  }

  var arr1 = $schema;

  if (arr1) {
    var $pProperty,
        i1 = -1,
        l1 = arr1.length - 1;

    while (i1 < l1) {
      $pProperty = arr1[i1 += 1];
      out += ' var ' + $matched + ' = false;  ';

      if ($ownProperties) {
        out += ' ' + $dataProperties + ' = ' + $dataProperties + ' || Object.keys(' + $data + '); for (var ' + $idx + '=0; ' + $idx + '<' + $dataProperties + '.length; ' + $idx + '++) { var ' + $key + ' = ' + $dataProperties + '[' + $idx + ']; ';
      } else {
        out += ' for (var ' + $key + ' in ' + $data + ') { ';
      }

      out += ' ' + $matched + ' = ' + it.usePattern($pProperty) + '.test(' + $key + '); if (' + $matched + ') break; } ';
      var $missingPattern = it.util.escapeQuotes($pProperty);
      out += ' if (!' + $matched + ') { ' + $valid + ' = false;  var err =   ';
      /* istanbul ignore else */

      if (it.createErrors !== false) {
        out += ' { keyword: \'' + 'patternRequired' + '\' , dataPath: (dataPath || \'\') + ' + it.errorPath + ' , schemaPath: ' + it.util.toQuotedString($errSchemaPath) + ' , params: { missingPattern: \'' + $missingPattern + '\' } ';

        if (it.opts.messages !== false) {
          out += ' , message: \'should have property matching pattern \\\'' + $missingPattern + '\\\'\' ';
        }

        if (it.opts.verbose) {
          out += ' , schema: validate.schema' + $schemaPath + ' , parentSchema: validate.schema' + it.schemaPath + ' , data: ' + $data + ' ';
        }

        out += ' } ';
      } else {
        out += ' {} ';
      }

      out += ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; }   ';

      if ($breakOnError) {
        $closingBraces += '}';
        out += ' else { ';
      }
    }
  }

  out += '' + $closingBraces;
  return out;
};

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var util = __webpack_require__(13);

module.exports = function defFunc(ajv) {
  if (ajv.RULES.keywords.switch && ajv.RULES.keywords.if) return;
  var metaSchemaRef = util.metaSchemaRef(ajv);
  defFunc.definition = {
    inline: __webpack_require__(110),
    statements: true,
    errors: 'full',
    metaSchema: {
      type: 'array',
      items: {
        required: ['then'],
        properties: {
          'if': metaSchemaRef,
          'then': {
            anyOf: [{
              type: 'boolean'
            }, metaSchemaRef]
          },
          'continue': {
            type: 'boolean'
          }
        },
        additionalProperties: false,
        dependencies: {
          'continue': ['if']
        }
      }
    }
  };
  ajv.addKeyword('switch', defFunc.definition);
  return ajv;
};

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function generate_switch(it, $keyword, $ruleType) {
  var out = ' ';
  var $lvl = it.level;
  var $dataLvl = it.dataLevel;
  var $schema = it.schema[$keyword];
  var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
  var $breakOnError = !it.opts.allErrors;
  var $data = 'data' + ($dataLvl || '');
  var $valid = 'valid' + $lvl;
  var $errs = 'errs__' + $lvl;
  var $it = it.util.copy(it);
  var $closingBraces = '';
  $it.level++;
  var $nextValid = 'valid' + $it.level;
  var $ifPassed = 'ifPassed' + it.level,
      $currentBaseId = $it.baseId,
      $shouldContinue;
  out += 'var ' + $ifPassed + ';';
  var arr1 = $schema;

  if (arr1) {
    var $sch,
        $caseIndex = -1,
        l1 = arr1.length - 1;

    while ($caseIndex < l1) {
      $sch = arr1[$caseIndex += 1];

      if ($caseIndex && !$shouldContinue) {
        out += ' if (!' + $ifPassed + ') { ';
        $closingBraces += '}';
      }

      if ($sch.if && it.util.schemaHasRules($sch.if, it.RULES.all)) {
        out += ' var ' + $errs + ' = errors;   ';
        var $wasComposite = it.compositeRule;
        it.compositeRule = $it.compositeRule = true;
        $it.createErrors = false;
        $it.schema = $sch.if;
        $it.schemaPath = $schemaPath + '[' + $caseIndex + '].if';
        $it.errSchemaPath = $errSchemaPath + '/' + $caseIndex + '/if';
        out += '  ' + it.validate($it) + ' ';
        $it.baseId = $currentBaseId;
        $it.createErrors = true;
        it.compositeRule = $it.compositeRule = $wasComposite;
        out += ' ' + $ifPassed + ' = ' + $nextValid + '; if (' + $ifPassed + ') {  ';

        if (typeof $sch.then == 'boolean') {
          if ($sch.then === false) {
            var $$outStack = $$outStack || [];
            $$outStack.push(out);
            out = '';
            /* istanbul ignore else */

            if (it.createErrors !== false) {
              out += ' { keyword: \'' + 'switch' + '\' , dataPath: (dataPath || \'\') + ' + it.errorPath + ' , schemaPath: ' + it.util.toQuotedString($errSchemaPath) + ' , params: { caseIndex: ' + $caseIndex + ' } ';

              if (it.opts.messages !== false) {
                out += ' , message: \'should pass "switch" keyword validation\' ';
              }

              if (it.opts.verbose) {
                out += ' , schema: validate.schema' + $schemaPath + ' , parentSchema: validate.schema' + it.schemaPath + ' , data: ' + $data + ' ';
              }

              out += ' } ';
            } else {
              out += ' {} ';
            }

            var __err = out;
            out = $$outStack.pop();

            if (!it.compositeRule && $breakOnError) {
              /* istanbul ignore if */
              if (it.async) {
                out += ' throw new ValidationError([' + __err + ']); ';
              } else {
                out += ' validate.errors = [' + __err + ']; return false; ';
              }
            } else {
              out += ' var err = ' + __err + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
            }
          }

          out += ' var ' + $nextValid + ' = ' + $sch.then + '; ';
        } else {
          $it.schema = $sch.then;
          $it.schemaPath = $schemaPath + '[' + $caseIndex + '].then';
          $it.errSchemaPath = $errSchemaPath + '/' + $caseIndex + '/then';
          out += '  ' + it.validate($it) + ' ';
          $it.baseId = $currentBaseId;
        }

        out += '  } else {  errors = ' + $errs + '; if (vErrors !== null) { if (' + $errs + ') vErrors.length = ' + $errs + '; else vErrors = null; } } ';
      } else {
        out += ' ' + $ifPassed + ' = true;  ';

        if (typeof $sch.then == 'boolean') {
          if ($sch.then === false) {
            var $$outStack = $$outStack || [];
            $$outStack.push(out);
            out = '';
            /* istanbul ignore else */

            if (it.createErrors !== false) {
              out += ' { keyword: \'' + 'switch' + '\' , dataPath: (dataPath || \'\') + ' + it.errorPath + ' , schemaPath: ' + it.util.toQuotedString($errSchemaPath) + ' , params: { caseIndex: ' + $caseIndex + ' } ';

              if (it.opts.messages !== false) {
                out += ' , message: \'should pass "switch" keyword validation\' ';
              }

              if (it.opts.verbose) {
                out += ' , schema: validate.schema' + $schemaPath + ' , parentSchema: validate.schema' + it.schemaPath + ' , data: ' + $data + ' ';
              }

              out += ' } ';
            } else {
              out += ' {} ';
            }

            var __err = out;
            out = $$outStack.pop();

            if (!it.compositeRule && $breakOnError) {
              /* istanbul ignore if */
              if (it.async) {
                out += ' throw new ValidationError([' + __err + ']); ';
              } else {
                out += ' validate.errors = [' + __err + ']; return false; ';
              }
            } else {
              out += ' var err = ' + __err + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
            }
          }

          out += ' var ' + $nextValid + ' = ' + $sch.then + '; ';
        } else {
          $it.schema = $sch.then;
          $it.schemaPath = $schemaPath + '[' + $caseIndex + '].then';
          $it.errSchemaPath = $errSchemaPath + '/' + $caseIndex + '/then';
          out += '  ' + it.validate($it) + ' ';
          $it.baseId = $currentBaseId;
        }
      }

      $shouldContinue = $sch.continue;
    }
  }

  out += '' + $closingBraces + 'var ' + $valid + ' = ' + $nextValid + '; ';
  out = it.util.cleanUpCode(out);
  return out;
};

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var util = __webpack_require__(13);

module.exports = function defFunc(ajv) {
  if (!ajv._opts.$data) {
    console.warn('keyword select requires $data option');
    return ajv;
  }

  var metaSchemaRef = util.metaSchemaRef(ajv);
  var compiledCaseSchemas = [];
  defFunc.definition = {
    validate: function v(schema, data, parentSchema) {
      if (parentSchema.selectCases === undefined) throw new Error('keyword "selectCases" is absent');
      var compiled = getCompiledSchemas(parentSchema, false);
      var validate = compiled.cases[schema];
      if (validate === undefined) validate = compiled.default;
      if (typeof validate == 'boolean') return validate;
      var valid = validate(data);
      if (!valid) v.errors = validate.errors;
      return valid;
    },
    $data: true,
    metaSchema: {
      type: ['string', 'number', 'boolean', 'null']
    }
  };
  ajv.addKeyword('select', defFunc.definition);
  ajv.addKeyword('selectCases', {
    compile: function compile(schemas, parentSchema) {
      var compiled = getCompiledSchemas(parentSchema);

      for (var value in schemas) {
        compiled.cases[value] = compileOrBoolean(schemas[value]);
      }

      return function () {
        return true;
      };
    },
    valid: true,
    metaSchema: {
      type: 'object',
      additionalProperties: metaSchemaRef
    }
  });
  ajv.addKeyword('selectDefault', {
    compile: function compile(schema, parentSchema) {
      var compiled = getCompiledSchemas(parentSchema);
      compiled.default = compileOrBoolean(schema);
      return function () {
        return true;
      };
    },
    valid: true,
    metaSchema: metaSchemaRef
  });
  return ajv;

  function getCompiledSchemas(parentSchema, create) {
    var compiled;
    compiledCaseSchemas.some(function (c) {
      if (c.parentSchema === parentSchema) {
        compiled = c;
        return true;
      }
    });

    if (!compiled && create !== false) {
      compiled = {
        parentSchema: parentSchema,
        cases: {},
        default: true
      };
      compiledCaseSchemas.push(compiled);
    }

    return compiled;
  }

  function compileOrBoolean(schema) {
    return typeof schema == 'boolean' ? schema : ajv.compile(schema);
  }
};

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function defFunc(ajv) {
  var transform = {
    trimLeft: function trimLeft(value) {
      return value.replace(/^[\s]+/, '');
    },
    trimRight: function trimRight(value) {
      return value.replace(/[\s]+$/, '');
    },
    trim: function trim(value) {
      return value.trim();
    },
    toLowerCase: function toLowerCase(value) {
      return value.toLowerCase();
    },
    toUpperCase: function toUpperCase(value) {
      return value.toUpperCase();
    },
    toEnumCase: function toEnumCase(value, cfg) {
      return cfg.hash[makeHashTableKey(value)] || value;
    }
  };
  defFunc.definition = {
    type: 'string',
    errors: false,
    modifying: true,
    valid: true,
    compile: function compile(schema, parentSchema) {
      var cfg;

      if (schema.indexOf('toEnumCase') !== -1) {
        // build hash table to enum values
        cfg = {
          hash: {}
        }; // requires `enum` in schema

        if (!parentSchema.enum) throw new Error('Missing enum. To use `transform:["toEnumCase"]`, `enum:[...]` is required.');

        for (var i = parentSchema.enum.length; i--; i) {
          var v = parentSchema.enum[i];
          if (typeof v !== 'string') continue;
          var k = makeHashTableKey(v); // requires all `enum` values have unique keys

          if (cfg.hash[k]) throw new Error('Invalid enum uniqueness. To use `transform:["toEnumCase"]`, all values must be unique when case insensitive.');
          cfg.hash[k] = v;
        }
      }

      return function (data, dataPath, object, key) {
        // skip if value only
        if (!object) return; // apply transform in order provided

        for (var j = 0, l = schema.length; j < l; j++) {
          data = transform[schema[j]](data, cfg);
        }

        object[key] = data;
      };
    },
    metaSchema: {
      type: 'array',
      items: {
        type: 'string',
        enum: ['trimLeft', 'trimRight', 'trim', 'toLowerCase', 'toUpperCase', 'toEnumCase']
      }
    }
  };
  ajv.addKeyword('transform', defFunc.definition);
  return ajv;

  function makeHashTableKey(value) {
    return value.toLowerCase();
  }
};

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* eslint-disable
  strict,
  no-param-reassign
*/


var ValidationError =
/*#__PURE__*/
function (_Error) {
  babelHelpers.inherits(ValidationError, _Error);

  function ValidationError(errors, name) {
    var _this;

    babelHelpers.classCallCheck(this, ValidationError);
    _this = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(ValidationError).call(this));
    _this.name = 'ValidationError';
    _this.message = "".concat(name || '', " Invalid Options\n\n");
    _this.errors = errors.map(function (err) {
      err.dataPath = err.dataPath.replace(/\//g, '.');
      return err;
    });

    _this.errors.forEach(function (err) {
      _this.message += "options".concat(err.dataPath, " ").concat(err.message, "\n");
    });

    Error.captureStackTrace(babelHelpers.assertThisInitialized(babelHelpers.assertThisInitialized(_this)), _this.constructor);
    return _this;
  }

  return ValidationError;
}(babelHelpers.wrapNativeSuper(Error));

module.exports = ValidationError;

/***/ }),
/* 114 */
/***/ (function(module) {

module.exports = {"title":"BabelExternalHelpersWebpackPluginOptions","type":"object","additionalProperties":false,"properties":{"babel":{"description":"Resolved path or module object of \"@babel/core\" or \"babel-core\"","type":["string","object"]},"whitelist":{"description":"Whitelist of babel helpers","type":["null","string","array"]},"outputType":{"description":"OutputType","enum":["global","umd","var"]}},"required":["babel"]};

/***/ }),
/* 115 */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 115;

/***/ })
/******/ ]);