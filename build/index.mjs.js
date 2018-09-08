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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.mjs");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          )

        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ("development" !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
       true ? printWarning('Invalid argument supplied to oneOf, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(isValidElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./src/index.mjs":
/*!***********************!*\
  !*** ./src/index.mjs ***!
  \***********************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scrollMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scrollMenu */ "./src/scrollMenu.js");


/* harmony default export */ __webpack_exports__["default"] = (_scrollMenu__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./src/scrollMenu.js":
/*!***************************!*\
  !*** ./src/scrollMenu.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.propTypes = exports.defaultProps = exports.ScrollMenu = exports.InnerWrapper = exports.innerStyle = exports.Arrow = exports.defaultSetting = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var defaultSetting = exports.defaultSetting = {
  alignCenter: true,
  clickWhenDrag: false,
  dragging: true,
  data: [],
  xPoint: 0,
  translate: 0,
  selected: 0,
  menuItems: [],
  menuPos: 0,
  menuWidth: 0,
  firstPageOffset: 0,
  lastPageOffset: 0,
  menuClass: 'horizontal-menu',
  wrapperClass: 'menu-wrapper',
  innerWrapperClass: 'menu-wrapper--inner',
  itemClass: 'menu-item-wrapper',
  itemClassActive: 'active',
  arrowClass: 'scroll-menu-arrow',
  wheel: true,
  transition: 0.4
};

var Arrow = exports.Arrow = function Arrow(_ref) {
  var className = _ref.className,
      onClick = _ref.onClick,
      children = _ref.children;

  return _react2.default.createElement(
    'div',
    {
      className: className,
      onClick: onClick
    },
    children
  );
};
Arrow.propTypes = {
  className: _propTypes2.default.string,
  onClick: _propTypes2.default.func.isRequired,
  children: _propTypes2.default.object.isRequired
};

var defaultMenuStyle = {
  display: 'flex',
  alignItems: 'center',
  userSelect: 'none'
};

var defaultWrapperStyle = {
  overflow: 'hidden',
  userSelect: 'none'
};

var innerStyle = exports.innerStyle = function innerStyle(_ref2) {
  var translate = _ref2.translate,
      dragging = _ref2.dragging,
      mounted = _ref2.mounted,
      transition = _ref2.transition;

  return {
    width: '9900px',
    transform: 'translate3d(' + translate + 'px, 0px, 0px)',
    transition: 'transform ' + (dragging || !mounted ? '0' : transition) + 's',
    whiteSpace: 'nowrap',
    textAlign: 'left',
    userSelect: 'none'
  };
};

var InnerWrapper = exports.InnerWrapper = function (_React$Component) {
  _inherits(InnerWrapper, _React$Component);

  function InnerWrapper(props) {
    _classCallCheck(this, InnerWrapper);

    var _this = _possibleConstructorReturn(this, (InnerWrapper.__proto__ || Object.getPrototypeOf(InnerWrapper)).call(this, props));

    _this.setRef = function (key, value) {
      var setRef = _this.props.setRef;

      _this.ref[key] = value;
      setRef(_this.ref);
    };

    _this.ref = {};
    return _this;
  }

  _createClass(InnerWrapper, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          data = _props.data,
          translate = _props.translate,
          dragging = _props.dragging,
          mounted = _props.mounted,
          transition = _props.transition,
          selected = _props.selected,
          innerWrapperClass = _props.innerWrapperClass,
          itemClass = _props.itemClass,
          _onClick = _props.onClick,
          itemClassActive = _props.itemClassActive;

      var isActive = function isActive(itemId, selected) {
        return String(itemId) === String(selected);
      };
      var items = data.map(function (el) {
        return _react2.default.cloneElement(el, { selected: isActive(el.key, selected) });
      });

      return _react2.default.createElement(
        'div',
        {
          className: innerWrapperClass,
          style: innerStyle({ translate: translate, dragging: dragging, mounted: mounted, transition: transition }),
          ref: function ref(inst) {
            return _this2.setRef('menuInner', inst);
          }
        },
        items.map(function (Item, i) {
          return _react2.default.createElement(
            'div',
            {
              ref: function ref(inst) {
                return _this2.setRef('menuitem-' + i, inst);
              },
              className: itemClass + ' ' + (isActive(Item.key, selected) ? itemClassActive : ''),
              key: 'menuItem-' + Item.key,
              style: {
                display: 'inline-block'
              },
              onClick: function onClick() {
                return _onClick(Item.key);
              }
            },
            Item
          );
        })
      );
    }
  }]);

  return InnerWrapper;
}(_react2.default.Component);

InnerWrapper.propTypes = {
  data: _propTypes2.default.arrayOf(_propTypes2.default.object).isRequired,
  setRef: _propTypes2.default.func.isRequired,
  onClick: _propTypes2.default.func.isRequired,
  translate: _propTypes2.default.number,
  dragging: _propTypes2.default.bool,
  mounted: _propTypes2.default.bool,
  transition: _propTypes2.default.number,
  selected: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  innerWrapperClass: _propTypes2.default.string,
  itemClass: _propTypes2.default.string,
  itemClassActive: _propTypes2.default.string
};
InnerWrapper.defaultProps = {
  data: [],
  translate: defaultSetting.translate,
  dragging: true,
  mounted: false,
  transition: defaultSetting.transition,
  selected: defaultSetting.selected
};

var ScrollMenu = exports.ScrollMenu = function (_React$Component2) {
  _inherits(ScrollMenu, _React$Component2);

  function ScrollMenu(props) {
    _classCallCheck(this, ScrollMenu);

    var _this3 = _possibleConstructorReturn(this, (ScrollMenu.__proto__ || Object.getPrototypeOf(ScrollMenu)).call(this, props));

    _this3.state = {
      initialized: false,
      mounted: false,
      dragging: false,
      xPoint: defaultSetting.xPoint,
      translate: _this3.props.translate,
      selected: _this3.props.selected,
      menuItems: [],
      menuPos: defaultSetting.menuPos,
      menuWidth: defaultSetting.menuWidth,
      firstPageOffset: defaultSetting.firstPageOffset,
      lastPageOffset: defaultSetting.lastPageOffset,
      startDragTranslate: null,
      stopDragTranslate: null
    };

    _this3.setRef = function (ref) {
      _this3.ref = ref;
    };

    _this3.setWrapperRef = function (ref) {
      _this3.ref.menuWrapper = ref;
    };

    _this3.alignItems = function (
    // TODO если aliCenter false не совсем правильно выравнивает
    // И тесты
    _ref3) {
      var alignCenter = _ref3.alignCenter,
          mounted = _ref3.mounted,
          translate = _ref3.translate,
          allItemsWidth = _ref3.allItemsWidth,
          menuWidth = _ref3.menuWidth,
          firstPageOffset = _ref3.firstPageOffset,
          lastPageOffset = _ref3.lastPageOffset;

      if (!mounted) return translate;
      var afterEnd = _this3.itAfterEnd({ translate: translate, menuWidth: menuWidth, allItemsWidth: allItemsWidth, lastPageOffset: lastPageOffset });
      if (!afterEnd) return translate;

      return _this3.getTranslateForArrowHandler({
        alignCenter: alignCenter,
        left: false,
        translate: translate,
        allItemsWidth: allItemsWidth,
        menuWidth: menuWidth,
        firstPageOffset: firstPageOffset,
        lastPageOffset: lastPageOffset
      });
    };

    _this3.setInitial = function () {
      var _this3$props = _this3.props,
          selected = _this3$props.selected,
          data = _this3$props.data,
          alignCenter = _this3$props.alignCenter;

      if (!data || !data.length) return false;

      var menuItems = _this3.getMenuItems();
      var width = _this3.updateWidth({ items: menuItems });
      var selectedItem = data.find(function (el) {
        return el.key === selected;
      });

      // TODO добавить обработку onUpdate
      var newTranslate = _this3.alignItems(_extends({ alignCenter: alignCenter }, _this3.state, width));

      _this3.setState(_extends({
        menuItems: menuItems,
        selected: selectedItem && selectedItem !== -1 ? selectedItem.key : defaultSetting.selected
      }, width, {
        translate: newTranslate
      }));
    };

    _this3.getMenuItems = function () {
      var menuItems = Object.entries(_this3.ref).filter(function (el) {
        return el[1] && el[0].includes('menuitem');
      });
      return menuItems;
    };

    _this3.setMounted = function () {
      var _this3$state = _this3.state,
          initialized = _this3$state.initialized,
          mounted = _this3$state.mounted;

      if (!initialized) {
        _this3.setState({ initialized: true });
      } else if (!mounted) {
        _this3.setState({ mounted: true });
      }
    };

    _this3.getWidth = function (_ref4) {
      var items = _ref4.items;

      var wWidth = window && window.innerWidth;

      var _this3$ref$menuWrappe = _this3.ref.menuWrapper.getBoundingClientRect(),
          menuPos = _this3$ref$menuWrappe.x,
          menuWidth = _this3$ref$menuWrappe.width;

      var allItemsWidth = _this3.getItemsWidth({ items: items });
      return { wWidth: wWidth, menuPos: menuPos, menuWidth: menuWidth, allItemsWidth: allItemsWidth };
    };

    _this3.updateWidth = function (_ref5) {
      var _ref5$items = _ref5.items,
          items = _ref5$items === undefined ? _this3.state.menuItems : _ref5$items;
      var alignCenter = _this3.props.alignCenter;

      var width = _this3.getWidth({ items: items });
      return _extends({}, width, alignCenter ? _this3.getPagesOffsets(_extends({ items: items }, width)) : {});
    };

    _this3.getPagesOffsets = function (_ref6) {
      var _ref6$items = _ref6.items,
          items = _ref6$items === undefined ? _this3.state.menuItems : _ref6$items,
          _ref6$allItemsWidth = _ref6.allItemsWidth,
          allItemsWidth = _ref6$allItemsWidth === undefined ? _this3.state.allItemsWidth : _ref6$allItemsWidth,
          _ref6$wWidth = _ref6.wWidth,
          wWidth = _ref6$wWidth === undefined ? _this3.state.wWidth : _ref6$wWidth,
          _ref6$menuPos = _ref6.menuPos,
          menuPos = _ref6$menuPos === undefined ? _this3.state.menuPos : _ref6$menuPos,
          _ref6$menuWidth = _ref6.menuWidth,
          menuWidth = _ref6$menuWidth === undefined ? _this3.state.menuWidth : _ref6$menuWidth,
          _ref6$translate = _ref6.translate,
          translate = _ref6$translate === undefined ? _this3.state.translate : _ref6$translate;
      var alignCenter = _this3.props.alignCenter;

      var visibleItemsStart = _this3.getVisibleItems({ items: items, wWidth: wWidth, menuPos: menuPos, menuWidth: menuWidth });
      var firstPageOffset = _this3.getCenterOffset({ items: visibleItemsStart, menuWidth: menuWidth });
      var visibleItemsEnd = _this3.getVisibleItems({
        items: items,
        offset: -allItemsWidth + menuWidth,
        wWidth: wWidth,
        menuPos: menuPos,
        menuWidth: menuWidth
      });
      var lastPageOffset = _this3.getCenterOffset({ items: visibleItemsEnd, menuWidth: menuWidth });
      var trans = translate === 0 && alignCenter ? firstPageOffset : translate;
      _this3.setState({ firstPageOffset: firstPageOffset, lastPageOffset: lastPageOffset, translate: trans });
      return { firstPageOffset: firstPageOffset, lastPageOffset: lastPageOffset };
    };

    _this3.getItemsWidth = function (_ref7) {
      var _ref7$items = _ref7.items,
          items = _ref7$items === undefined ? _this3.state.menuItems : _ref7$items;

      var data = items.items || items;
      return data.map(function (el) {
        return el[1];
      }).reduce(function (acc, el) {
        return acc += el.getBoundingClientRect().width;
      }, 0);
    };

    _this3.onItemClick = function (id) {
      var _this3$props2 = _this3.props,
          clickWhenDrag = _this3$props2.clickWhenDrag,
          onSelect = _this3$props2.onSelect;
      var _this3$state2 = _this3.state,
          startDragTranslate = _this3$state2.startDragTranslate,
          stopDragTranslate = _this3$state2.stopDragTranslate,
          xPoint = _this3$state2.xPoint;

      var diff = Math.abs(stopDragTranslate - startDragTranslate);
      var afterScroll = xPoint && diff > 5;

      if (afterScroll && !clickWhenDrag) return false;

      _this3.setState({ selected: id }, function () {
        if (onSelect) onSelect(id);
      });
    };

    _this3.getVisibleItems = function (_ref8) {
      var _ref8$items = _ref8.items,
          items = _ref8$items === undefined ? _this3.state.menuItems : _ref8$items,
          _ref8$wWidth = _ref8.wWidth,
          wWidth = _ref8$wWidth === undefined ? _this3.state.wWidth : _ref8$wWidth,
          _ref8$menuPos = _ref8.menuPos,
          menuPos = _ref8$menuPos === undefined ? _this3.state.menuPos : _ref8$menuPos,
          _ref8$menuWidth = _ref8.menuWidth,
          menuWidth = _ref8$menuWidth === undefined ? _this3.state.menuWidth : _ref8$menuWidth,
          _ref8$offset = _ref8.offset,
          offset = _ref8$offset === undefined ? _this3.state.translate : _ref8$offset,
          _ref8$firstPageOffset = _ref8.firstPageOffset,
          firstPageOffset = _ref8$firstPageOffset === undefined ? _this3.state.firstPageOffset : _ref8$firstPageOffset,
          _ref8$translate = _ref8.translate,
          translate = _ref8$translate === undefined ? _this3.state.translate : _ref8$translate;

      var data = items.items || items;
      return data.filter(function (el) {
        var _el$1$getBoundingClie = el[1].getBoundingClientRect(),
            elWidth = _el$1$getBoundingClie.width;

        var id = _this3.getItemInd(items, el);
        var x = _this3.getOffsetToItem({ itemId: id, menuItems: items, translate: translate, firstPageOffset: firstPageOffset });
        return _this3.elemVisible({ x: x, elWidth: elWidth, wWidth: wWidth, menuPos: menuPos, menuWidth: menuWidth, offset: offset });
      });
    };

    _this3.elemVisible = function (_ref9) {
      var x = _ref9.x,
          _ref9$offset = _ref9.offset,
          offset = _ref9$offset === undefined ? 0 : _ref9$offset,
          elWidth = _ref9.elWidth,
          _ref9$wWidth = _ref9.wWidth,
          wWidth = _ref9$wWidth === undefined ? _this3.state.wWidth : _ref9$wWidth,
          _ref9$menuPos = _ref9.menuPos,
          menuPos = _ref9$menuPos === undefined ? _this3.state.menuPos : _ref9$menuPos,
          _ref9$menuWidth = _ref9.menuWidth,
          menuWidth = _ref9$menuWidth === undefined ? _this3.state.menuWidth : _ref9$menuWidth;

      var leftEdge = menuPos - 1;
      var rightEdge = wWidth - (wWidth - (menuPos + menuWidth)) + 1;
      var pos = x + offset;
      var posWithWidth = pos + elWidth;
      return pos >= leftEdge && posWithWidth <= rightEdge;
    };

    _this3.getItemInd = function (menuItems, item) {
      if (!menuItems || !item) return 0;
      return menuItems.findIndex(function (el) {
        return el[0] === item[0];
      });
    };

    _this3.getNextItemInd = function (left, visibleItems) {
      var menuItems = _this3.state.menuItems;

      if (left) {
        if (!visibleItems.length) return 0;
      } else {
        if (!visibleItems.length) return menuItems.length;
      }
      var ind = left ? _this3.getItemInd(menuItems, visibleItems[0]) - 1 : _this3.getItemInd(menuItems, visibleItems.slice(-1)[0]) + 1;
      return ind < 0 ? 0 : ind;
    };

    _this3.getOffsetToItem = function (_ref10) {
      var itemId = _ref10.itemId,
          _ref10$menuItems = _ref10.menuItems,
          menuItems = _ref10$menuItems === undefined ? _this3.state.menuItems : _ref10$menuItems,
          _ref10$translate = _ref10.translate,
          translate = _ref10$translate === undefined ? _this3.state.translate : _ref10$translate;

      if (!menuItems.length) return 0;
      var id = itemId >= menuItems.length ? menuItems.length - 1 : itemId;

      var _menuItems$id$1$getBo = menuItems[id][1].getBoundingClientRect(),
          x = _menuItems$id$1$getBo.x;

      var position = x - translate;
      return position;
    };

    _this3.getScrollRightOffset = function (visibleItems, items) {
      var alignCenter = _this3.props.alignCenter;
      var _this3$state3 = _this3.state,
          menuPos = _this3$state3.menuPos,
          lastPageOffset = _this3$state3.lastPageOffset;


      var nextItem = _this3.getNextItem(visibleItems && visibleItems.slice(-1)[0] ? visibleItems.slice(-1)[0][0] : items.slice(-1)[0][0]);
      var nextItemIndex = items.findIndex(function (el) {
        return el[0] === nextItem[0];
      });

      var offsetToItem = _this3.getOffsetToItem({ itemId: nextItemIndex, menuItems: items });
      var offsetToItemOnStart = offsetToItem - menuPos;

      var nextVisibleItems = _this3.getVisibleItems({
        items: items,
        offset: -offsetToItemOnStart
      });

      if (nextVisibleItems.includes(items.slice(-1)[0])) {
        return alignCenter ? offsetToItemOnStart + lastPageOffset : offsetToItemOnStart;
      }

      var centerOffset = function centerOffset() {
        return _this3.getCenterOffset({ items: nextVisibleItems });
      };

      var newOffset = alignCenter ? offsetToItemOnStart - centerOffset() : offsetToItemOnStart;
      return newOffset;
    };

    _this3.getScrollLeftOffset = function (visibleItems, items) {
      var alignCenter = _this3.props.alignCenter;
      var _this3$state4 = _this3.state,
          menuPos = _this3$state4.menuPos,
          menuWidth = _this3$state4.menuWidth,
          firstPageOffset = _this3$state4.firstPageOffset;


      var prevItem = visibleItems && visibleItems[0] ? _this3.getPrevItem(visibleItems[0][0]) : items.slice(-1)[0];

      var prevItemIndex = items.findIndex(function (el) {
        return el[0] === prevItem[0];
      });

      var offsetToItem = _this3.getOffsetToItem({ itemId: prevItemIndex, menuItems: items });
      var itemWidth = _this3.getItemsWidth({ items: [prevItem] });
      var offsetToItemOnEnd = offsetToItem - menuPos - (menuWidth - itemWidth);

      var nextVisibleItems = _this3.getVisibleItems({
        items: items,
        offset: -offsetToItemOnEnd
      });

      if (nextVisibleItems.includes(items[0])) {
        return alignCenter ? -firstPageOffset : 0;
      }

      var centerOffset = function centerOffset() {
        return _this3.getCenterOffset({ items: nextVisibleItems });
      };

      var newOffset = alignCenter ? offsetToItemOnEnd + centerOffset() : offsetToItemOnEnd;
      return newOffset;
    };

    _this3.getNextItem = function (key) {
      var menuItems = _this3.state.menuItems;

      var itemIndex = menuItems.findIndex(function (el) {
        return el[0] === key;
      });
      var nextItemIndex = itemIndex + 1;
      var nextItem = menuItems[nextItemIndex] || menuItems.slice(-1)[0];
      return nextItem;
    };

    _this3.getPrevItem = function (key) {
      var menuItems = _this3.state.menuItems;

      var itemIndex = menuItems.findIndex(function (el) {
        return el[0] === key;
      });
      var prevItemIndex = itemIndex - 1;
      var prevItem = menuItems[prevItemIndex] || menuItems[0];
      return prevItem;
    };

    _this3.getOffset = function (left) {
      var items = _this3.state.menuItems;

      var visibleItems = _this3.getVisibleItems({ items: items });
      var newOffset = left ? _this3.getScrollLeftOffset(visibleItems, items) : _this3.getScrollRightOffset(visibleItems, items);

      return newOffset;
    };

    _this3.getCenterOffset = function (_ref11) {
      var _ref11$items = _ref11.items,
          items = _ref11$items === undefined ? _this3.state.menuItems : _ref11$items,
          _ref11$menuWidth = _ref11.menuWidth,
          menuWidth = _ref11$menuWidth === undefined ? _this3.state.menuWidth : _ref11$menuWidth;

      if (!items.length) {
        return 0;
      }
      var itemsWidth = _this3.getItemsWidth({ items: items });
      var offset = (menuWidth - itemsWidth) / 2;
      return offset;
    };

    _this3.handleWheel = function (e) {
      var wheel = _this3.props.wheel;

      if (!wheel) return false;
      e.stopPropagation();
      e.preventDefault();
      if (e.deltaY < 0) {
        _this3.handleArrowClick({ left: true });
      } else {
        _this3.handleArrowClick({ left: false });
      }
    };

    _this3.handleArrowClickRight = function () {
      _this3.handleArrowClick({ left: false });
    };

    _this3.getTranslateForArrowHandler = function (_ref12) {
      var left = _ref12.left,
          alignCenter = _ref12.alignCenter,
          firstPageOffset = _ref12.firstPageOffset,
          allItemsWidth = _ref12.allItemsWidth,
          menuWidth = _ref12.menuWidth,
          lastPageOffset = _ref12.lastPageOffset;

      var offset = _this3.getOffset(left);
      var transl = -offset;

      if (left && _this3.itBeforeStart(transl)) {
        transl = alignCenter ? firstPageOffset : defaultSetting.translate;
      }
      if (!left && _this3.itAfterEnd({ translate: transl })) {
        var _offset = allItemsWidth - menuWidth;
        transl = alignCenter ? -_offset - lastPageOffset : -_offset;
      }
      return transl;
    };

    _this3.handleArrowClick = function () {
      var _ref13 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref13$left = _ref13.left,
          left = _ref13$left === undefined ? true : _ref13$left,
          _ref13$translate = _ref13.translate,
          translate = _ref13$translate === undefined ? _this3.state.translate : _ref13$translate,
          _ref13$allItemsWidth = _ref13.allItemsWidth,
          allItemsWidth = _ref13$allItemsWidth === undefined ? _this3.state.allItemsWidth : _ref13$allItemsWidth,
          _ref13$menuWidth = _ref13.menuWidth,
          menuWidth = _ref13$menuWidth === undefined ? _this3.state.menuWidth : _ref13$menuWidth,
          _ref13$firstPageOffse = _ref13.firstPageOffset,
          firstPageOffset = _ref13$firstPageOffse === undefined ? _this3.state.firstPageOffset : _ref13$firstPageOffse,
          _ref13$lastPageOffset = _ref13.lastPageOffset,
          lastPageOffset = _ref13$lastPageOffset === undefined ? _this3.state.lastPageOffset : _ref13$lastPageOffset;

      var alignCenter = _this3.props.alignCenter;


      if (!alignCenter && !left && menuWidth >= allItemsWidth) {
        return false;
      }

      var transl = _this3.getTranslateForArrowHandler({
        translate: translate,
        left: left,
        alignCenter: alignCenter,
        allItemsWidth: allItemsWidth,
        menuWidth: menuWidth,
        firstPageOffset: firstPageOffset,
        lastPageOffset: lastPageOffset
      });

      var newState = {
        translate: transl,
        xPoint: defaultSetting.xPoint,
        startDragTranslate: null,
        stopDragTranslate: null
      };
      _this3.setState(newState, function () {
        if (translate !== transl) {
          _this3.onUpdate({});
        }
      });
      return newState;
    };

    _this3.itBeforeStart = function (trans) {
      var alignCenter = _this3.props.alignCenter;
      var firstPageOffset = _this3.state.firstPageOffset;

      return alignCenter ? trans > firstPageOffset : trans > defaultSetting.translate;
    };

    _this3.itAfterEnd = function (_ref14) {
      var translate = _ref14.translate,
          _ref14$menuWidth = _ref14.menuWidth,
          menuWidth = _ref14$menuWidth === undefined ? _this3.state.menuWidth : _ref14$menuWidth,
          _ref14$allItemsWidth = _ref14.allItemsWidth,
          allItemsWidth = _ref14$allItemsWidth === undefined ? _this3.state.allItemsWidth : _ref14$allItemsWidth,
          _ref14$lastPageOffset = _ref14.lastPageOffset,
          lastPageOffset = _ref14$lastPageOffset === undefined ? _this3.state.lastPageOffset : _ref14$lastPageOffset;
      var alignCenter = _this3.props.alignCenter;


      var transMinus = translate < defaultSetting.translate;
      return alignCenter ? transMinus && Math.abs(translate) > allItemsWidth - menuWidth + lastPageOffset : transMinus && Math.abs(translate) > allItemsWidth - menuWidth;
    };

    _this3.getPoint = function (e) {
      return e.touches && e.touches.length ? e.touches[0].clientX : e.clientX;
    };

    _this3.handleDragStart = function () {
      var draggingEnable = _this3.props.dragging;

      if (!draggingEnable) return false;
      var startDragTranslate = _this3.state.translate;

      _this3.setState({ dragging: true, xPoint: 0, startDragTranslate: startDragTranslate });
    };

    _this3.handleDrag = function (e) {
      var draggingEnable = _this3.props.dragging;
      var _this3$state5 = _this3.state,
          dragging = _this3$state5.dragging,
          xPoint = _this3$state5.xPoint,
          translate = _this3$state5.translate;

      if (!draggingEnable || !dragging) return false;

      var point = _this3.getPoint(e);
      var diff = xPoint === defaultSetting.xPoint ? defaultSetting.xPoint : xPoint - point;
      var result = translate - diff;

      // don't let scroll over start and end
      if (_this3.itBeforeStart(result)) {
        result = result - Math.abs(diff) / 2;
      }
      if (_this3.itAfterEnd({ translate: result })) {
        result = result + Math.abs(diff) / 2;
      }

      _this3.setState({
        xPoint: point,
        translate: result || defaultSetting.translate,
        stopDragTranslate: result || defaultSetting.translate
      });
    };

    _this3.handleDragStop = function () {
      var _this3$state6 = _this3.state,
          dragging = _this3$state6.dragging,
          allItemsWidth = _this3$state6.allItemsWidth,
          translate = _this3$state6.translate,
          menuWidth = _this3$state6.menuWidth,
          xPoint = _this3$state6.xPoint,
          firstPageOffset = _this3$state6.firstPageOffset,
          lastPageOffset = _this3$state6.lastPageOffset,
          startDragTranslate = _this3$state6.startDragTranslate;
      var _this3$props3 = _this3.props,
          draggingEnable = _this3$props3.dragging,
          alignCenter = _this3$props3.alignCenter;

      if (!draggingEnable || !dragging) return false;

      var newTranslate = translate;

      if (_this3.itBeforeStart(translate)) {
        newTranslate = alignCenter ? firstPageOffset : 0;
        xPoint = defaultSetting.xPoint;
      }
      if (_this3.itAfterEnd({ translate: translate })) {
        var offset = allItemsWidth - menuWidth;
        newTranslate = alignCenter ? -offset - lastPageOffset : -offset;
        xPoint = defaultSetting.xPoint;
      }

      if (!alignCenter && menuWidth >= allItemsWidth) {
        newTranslate = 0;
        xPoint = defaultSetting.xPoint;
      }

      _this3.setState({
        dragging: false,
        xPoint: xPoint,
        translate: newTranslate
      }, function () {
        if (startDragTranslate !== newTranslate) {
          _this3.onUpdate({});
        }
      });
    };

    _this3.onUpdate = function (_ref15) {
      var _ref15$translate = _ref15.translate,
          translate = _ref15$translate === undefined ? _this3.state.translate : _ref15$translate;
      var onUpdate = _this3.props.onUpdate;

      if (onUpdate) {
        onUpdate({ translate: translate });
      }
    };

    _this3.ref = {};
    _this3.dataOld = null;
    _this3.data = null;
    return _this3;
  }

  _createClass(ScrollMenu, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setInitial();

      window.addEventListener('resize', this.setInitial);
      document.addEventListener('mousemove', this.handleDrag);
      document.addEventListener('mouseup', this.handleDragStop);
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      var _state = this.state,
          wWidth = _state.wWidth,
          translate = _state.translate,
          selected = _state.selected,
          mounted = _state.mounted,
          menuWidth = _state.menuWidth,
          dragging = _state.dragging;
      var translateNew = nextState.translate,
          wWidthNew = nextState.wWidth,
          mountedNew = nextState.mounted,
          selectedNew = nextState.selected,
          menuWidthNew = nextState.menuWidth,
          draggingNew = nextState.dragging;

      // TODO move to separate function

      var data = this.props.data;
      var dataNew = nextProps.data;

      var dataChanged = data !== dataNew;
      this.dataOld = data;
      this.data = dataNew;

      return dataChanged || menuWidth !== menuWidthNew || wWidth !== wWidthNew || translate !== translateNew || selected !== selectedNew || mounted !== mountedNew || dragging !== draggingNew;
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.setMounted();
      if (this.dataOld !== this.data) {
        this.setInitial();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.setInitial);
      document.removeEventListener('mousemove', this.handleDrag);
      document.removeEventListener('mouseup', this.handleDragStop);
    }

    // Align if items count changes, return new translate value, or old if no need translate

  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          data = _props2.data,
          arrowLeft = _props2.arrowLeft,
          arrowRight = _props2.arrowRight,
          transition = _props2.transition,
          arrowClass = _props2.arrowClass,
          menuClass = _props2.menuClass,
          wrapperClass = _props2.wrapperClass,
          innerWrapperClass = _props2.innerWrapperClass,
          itemClass = _props2.itemClass,
          itemClassActive = _props2.itemClassActive,
          menuStyle = _props2.menuStyle,
          wrapperStyle = _props2.wrapperStyle;
      var _state2 = this.state,
          translate = _state2.translate,
          selected = _state2.selected,
          dragging = _state2.dragging,
          mounted = _state2.mounted;


      if (!data || !data.length) return null;

      var menuStyles = _extends({}, defaultMenuStyle, menuStyle);
      var wrapperStyles = _extends({}, defaultWrapperStyle, wrapperStyle);

      return _react2.default.createElement(
        'div',
        {
          className: menuClass,
          style: menuStyles,
          onWheel: this.handleWheel
        },
        arrowLeft && _react2.default.createElement(
          Arrow,
          {
            className: arrowClass,
            onClick: this.handleArrowClick
          },
          arrowLeft
        ),
        _react2.default.createElement(
          'div',
          {
            className: wrapperClass,
            style: wrapperStyles,
            ref: this.setWrapperRef,
            onMouseDown: this.handleDragStart,
            onTouchStart: this.handleDragStart,
            onTouchEnd: this.handleDragStop,
            onMouseMove: this.handleDrag,
            onTouchMove: this.handleDrag
          },
          _react2.default.createElement(InnerWrapper, {
            data: data,
            translate: translate,
            dragging: dragging,
            mounted: mounted,
            transition: transition,
            selected: selected,
            setRef: this.setRef,
            onClick: this.onItemClick,
            innerWrapperClass: innerWrapperClass,
            itemClass: itemClass,
            itemClassActive: itemClassActive
          })
        ),
        arrowRight && _react2.default.createElement(
          Arrow,
          {
            className: arrowClass,
            onClick: this.handleArrowClickRight
          },
          arrowRight
        )
      );
    }
  }]);

  return ScrollMenu;
}(_react2.default.Component);

var defaultProps = exports.defaultProps = {
  data: defaultSetting.data,
  translate: defaultSetting.translate,
  selected: defaultSetting.selected,
  transition: defaultSetting.transition,
  dragging: defaultSetting.dragging,
  clickWhenDrag: defaultSetting.clickWhenDrag,
  alignCenter: defaultSetting.alignCenter,
  wrapperClass: defaultSetting.wrapperClass,
  innerWrapperClass: defaultSetting.innerWrapperClass,
  itemClass: defaultSetting.itemClass,
  itemClassActive: defaultSetting.itemClassActive,
  arrowClass: defaultSetting.arrowClass,
  menuClass: defaultSetting.menuClass,
  wheel: defaultSetting.wheel
};

var propTypes = exports.propTypes = {
  data: _propTypes2.default.array.isRequired,
  selected: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
  translate: _propTypes2.default.number,
  transition: _propTypes2.default.number,
  arrowLeft: _propTypes2.default.object,
  arrowRight: _propTypes2.default.object,
  alignCenter: _propTypes2.default.bool,
  onSelect: _propTypes2.default.func,
  onClick: _propTypes2.default.func,
  onUpdate: _propTypes2.default.func,
  dragging: _propTypes2.default.bool,
  clickWhenDrag: _propTypes2.default.bool,
  wheel: _propTypes2.default.bool,
  wrapperClass: _propTypes2.default.string,
  innerWrapperClass: _propTypes2.default.string,
  itemClass: _propTypes2.default.string,
  itemClassActive: _propTypes2.default.string,
  arrowClass: _propTypes2.default.string,
  menuClass: _propTypes2.default.string,
  menuStyle: _propTypes2.default.object,
  wrapperStyle: _propTypes2.default.object
};
ScrollMenu.defaultProps = defaultProps;
ScrollMenu.propTypes = propTypes;

exports.default = ScrollMenu;

/***/ }),

/***/ "react":
/*!*****************************************************!*\
  !*** external {"root":"React","commonjs2":"react"} ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = undefined;

/***/ })

/******/ });
//# sourceMappingURL=index.mjs.js.map