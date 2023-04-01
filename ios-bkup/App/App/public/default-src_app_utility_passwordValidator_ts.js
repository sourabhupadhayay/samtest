(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_utility_passwordValidator_ts"],{

/***/ 39331:
/*!**********************************************!*\
  !*** ./src/app/utility/passwordValidator.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PasswordStrength": () => (/* binding */ PasswordStrength)
/* harmony export */ });
/* harmony import */ var password_validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! password-validator */ 12261);
/* harmony import */ var password_validator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(password_validator__WEBPACK_IMPORTED_MODULE_0__);

class PasswordStrength {
  constructor() {
    this.passwordStrength = new password_validator__WEBPACK_IMPORTED_MODULE_0__();
    this.specialRegex = new RegExp("(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|])");
    this.passwordProperty();
  }
  passwordProperty() {
    this.passwordStrength.is().min(8).has().uppercase().has().lowercase().has().digits(1).has().symbols();
  }
  validatePassword(password) {
    let validation = this.passwordStrength.validate(password, {
      list: true
    });
    let failedValidation = {
      min: false,
      digits: false,
      symbols: false,
      uppercase: false,
      lowercase: false
    };
    for (let index = 0; index < validation.length; index++) {
      failedValidation[validation[index]] = true;
    }
    return failedValidation;
  }
  isPasswordStrong(password) {
    return this.passwordStrength.validate(password);
  }
}

/***/ }),

/***/ 94037:
/*!**********************************************************!*\
  !*** ./node_modules/password-validator/src/constants.js ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = {
  error: {
    length: 'Length should be a valid positive number',
    password: 'Password should be a valid string',
    invalidPlugin: 'Plugin should be a valid function'
  },
  regex: {
    digits: '(\\d.*)',
    letters: '([a-zA-Z].*)',
    symbols: '([`~\\!@#\\$%\\^\\&\\*\\(\\)\\-_\\=\\+\\[\\\{\\}\\]\\\\\|;:\\\'",<.>\\/\\?€£¥₹§±].*)',
    spaces: '([\\s].*)'
  }
};

/***/ }),

/***/ 12261:
/*!******************************************************!*\
  !*** ./node_modules/password-validator/src/index.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* eslint-disable no-unused-vars */
var lib = __webpack_require__(/*! ./lib */ 75935);
var error = (__webpack_require__(/*! ./constants */ 94037).error);
var getValidationMessage = __webpack_require__(/*! ./validationMessages */ 46417);

/**
 * Validates that a number is a valid length (positive number)
 *
 * @private
 * @param {number} num - Number to validate
 */
function _validateLength(num) {
  const len = Number(num);
  if (isNaN(len) || !Number.isInteger(len) || len < 1) {
    throw new Error(error.length);
  }
}

/**
 * Tests a validation and return the result
 *
 * @private
 * @param {string} property - Property to validate
 * @returns {boolean} Boolean value indicting the validity
 *           of the password against the property
 */
function _isPasswordValidFor(property) {
  return lib[property.method].apply(this, property.arguments);
}

/**
 * Registers the properties of a password-validation schema object
 *
 * @private
 * @param {string} method - Property name
 * @param {array} arguments - arguments for the func property
 * @returns {PasswordValidator}
 */
function _register(method, args, description) {
  // Add property to the schema
  this.properties.push({
    method,
    arguments: args,
    description
  });
  return this;
}
class PasswordValidator {
  /**
   * Creates a password-validator schema
   *
   * @constructor
   */
  constructor() {
    this.properties = [];
  }

  /**
   * Method to validate the password against schema
   *
   * @param {string} pwd - password to validate
   * @param {object} [options] - optional options to configure validation
   * @param {boolean} [options.list] - asks for a list of validation
   *           failures instead of just true/false
   * @param {boolean} [options.details] - asks for more details about
   *           failed validations including arguments, and error messages
   * @returns {boolean|array} Boolean value indicting the validity
   *           of the password as per schema, if 'options.list' or
   *           'options.details' is not set. Otherwise, it returns an
   *           array of property names which failed validations
   */
  validate(pwd, options) {
    this.list = Boolean(options && options.list);
    this.details = Boolean(options && options.details);
    this.password = String(pwd);
    this.positive = true;
    if (this.list || this.details) {
      return this.properties.reduce((errorList, property) => {
        // Applies all validations defined in lib one by one
        if (!_isPasswordValidFor.call(this, property)) {
          // If the validation for a property fails,
          // add it to the error list
          var detail = property.method;
          // If the details option was provided,
          // return a rich object including validation message
          if (this.details) {
            detail = {
              validation: property.method
            };
            if (property.arguments && property.arguments[0]) {
              detail.arguments = property.arguments[0];
            }
            if (!this.positive && property.method !== 'not') {
              detail.inverted = true;
            }
            var description = property.arguments && property.arguments[1];
            var validationMessage = description || getValidationMessage(property.method, detail.arguments, detail.inverted);
            detail.message = validationMessage;
          }
          return errorList.concat(detail);
        }
        return errorList;
      }, []);
    }
    return this.properties.every(_isPasswordValidFor.bind(this));
  }

  /**
   * Rule to mandate the presence of letters in the password
   *
   * @param {number} [count] - minimum number of letters required
   * @param {string} [description] - description of the validation
   * @returns {PasswordValidator} instance of PasswordValidator schema
   */
  letters(count, description) {
    count && _validateLength(count);
    return _register.call(this, 'letters', arguments);
  }

  /**
   * Rule to mandate the presence of digits in the password
   *
   * @param {number} [count] - minimum number of digits required
   * @param {string} [description] - description of the validation
   * @returns {PasswordValidator} instance of PasswordValidator schema
   */
  digits(count, description) {
    count && _validateLength(count);
    return _register.call(this, 'digits', arguments);
  }

  /**
   * Rule to mandate the presence of symbols in the password
   *
   * @param {number} [count] - minimum number of symbols required
   * @param {string} [description] - description of the validation
   * @returns {PasswordValidator} instance of PasswordValidator schema
   */
  symbols(count, description) {
    count && _validateLength(count);
    return _register.call(this, 'symbols', arguments);
  }

  /**
   * Rule to specify a minimum length of the password
   *
   * @param {number} num - minimum length
   * @param {string} [description] - description of the validation
   * @returns {PasswordValidator} instance of PasswordValidator schema
   */
  min(num, description) {
    _validateLength(num);
    return _register.call(this, 'min', arguments);
  }

  /**
   * Rule to specify a maximum length of the password
   *
   * @param {number} num - maximum length
   * @param {string} [description] - description of the validation
   * @returns {PasswordValidator} instance of PasswordValidator schema
   */
  max(num, description) {
    _validateLength(num);
    return _register.call(this, 'max', arguments);
  }

  /**
   * Rule to mandate the presence of lowercase letters in the password
   *
   * @param {number} [count] - minimum number of lowercase letters required
   * @param {string} [description] - description of the validation
   * @returns {PasswordValidator} instance of PasswordValidator schema
   */
  lowercase(count, description) {
    count && _validateLength(count);
    return _register.call(this, 'lowercase', arguments);
  }

  /**
   * Rule to mandate the presence of uppercase letters in the password
   *
   * @param {number} [count] - minimum number of uppercase letters required
   * @param {string} [description] - description of the validation
   * @returns {PasswordValidator} instance of PasswordValidator schema
   */
  uppercase(count, description) {
    count && _validateLength(count);
    return _register.call(this, 'uppercase', arguments);
  }

  /**
   * Rule to mandate the presence of space in the password
   * It can be used along with 'not' to not allow spaces
   * in the password
   *
   * @param {number} [count] - minimum number of spaces required
   * @param {string} [description] - description of the validation
   * @returns {PasswordValidator} instance of PasswordValidator schema
   */
  spaces(count, description) {
    count && _validateLength(count);
    return _register.call(this, 'spaces', arguments);
  }

  /**
   * Rule to invert the effects of 'not'
   * Apart from that, 'has' is also used
   * to make the api readable and chainable
   *
   * @param {string|RegExp} [pattern] - pattern to match
   * @param {string} [description] - description of the validation
   * @returns {PasswordValidator} instance of PasswordValidator schema
   */
  has(pattern, description) {
    return _register.call(this, 'has', arguments);
  }

  /**
   * Rule to invert the next applied rules.
   * All the rules applied after 'not' will have opposite effect,
   * until 'has' rule is applied
   *
   * @param {string|RegExp} [pattern] - pattern to not match
   * @param {string} [description] - description of the validation
   * @returns {PasswordValidator} instance of PasswordValidator schema
   */
  not(pattern, description) {
    return _register.call(this, 'not', arguments);
  }

  /**
   * Rule to invert the effects of 'not'
   * Apart from that, 'is' is also used
   * to make the api readable and chainable
   *
   * @returns {PasswordValidator} instance of PasswordValidator schema
   */
  is() {
    return _register.call(this, 'is', arguments);
  }

  /**
   * Rule to whitelist words to be used as password
   *
   * @param {array} list - list of values allowed
   * @param {string} [description] - description of the validation
   * @returns {PasswordValidator} instance of PasswordValidator schema
   */
  oneOf(list, description) {
    return _register.call(this, 'oneOf', arguments);
  }

  /**
   * Insert a plugin function into the validation chain
   *
   * @param {Plugin} fn  - A plugin function
   * @param {string} [description] - description of the validation
   * @returns {PasswordValidator} instance of PasswordValidator schema
   */
  usingPlugin(fn, description) {
    if (typeof fn !== 'function') {
      throw new Error(error.invalidPlugin);
    }
    return _register.call(this, 'usingPlugin', arguments);
  }
}
module.exports = PasswordValidator;

/**
 * @callback Plugin
 * @param password Password injected by the library
 */

/***/ }),

/***/ 75935:
/*!****************************************************!*\
  !*** ./node_modules/password-validator/src/lib.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Generic method to test regex
 *
 * @private
 * @param {string} regex - regex to test
 *                           with password
 */
var regex = (__webpack_require__(/*! ./constants */ 94037).regex);
function _process(regexp, repeat) {
  if (repeat && repeat > 1) {
    const parsedRepeat = parseInt(repeat, 10);
    return new RegExp(regexp + '{' + parsedRepeat + ',}').test(this.password) === this.positive;
  }
  return new RegExp(regexp).test(this.password) === this.positive;
}
module.exports = {
  /**
   * Method to invert the next validations
   *
   * @param {RegExp} [symbol] - custom Regex which should not be present
   */
  not: function not(symbol) {
    this.positive = false;
    if (symbol) {
      return _process.call(this, symbol);
    }
    return true;
  },
  /**
   * Method to invert the effects of not()
   *
   * @param {RegExp} [symbol] - custom Regex which should be present
   */
  has: function has(symbol) {
    this.positive = true;
    if (symbol) {
      return _process.call(this, symbol);
    }
    return true;
  },
  /**
   * Method to invert the effects of not() and
   * to make the api readable and chainable
   *
   */
  is: function is() {
    this.positive = true;
    return true;
  },
  /**
   * Method to specify a minimum length
   *
   * @param {number} num - minimum length
   */
  min: function min(num) {
    return this.password.length >= num;
  },
  /**
   * Method to specify a maximum length
   *
   * @param {number} num - maximum length
   */
  max: function max(num) {
    return this.password.length <= num;
  },
  /**
   * Method to validate the presence of digits
   *
   * @param {number} repeat - count of required digits
   */
  digits: function digits(repeat) {
    return _process.call(this, regex.digits, repeat);
  },
  /**
   * Method to validate the presence of letters
   *
   * @param {number} repeat - count of required letters
   */
  letters: function letters(repeat) {
    return _process.call(this, regex.letters, repeat);
  },
  /**
   * Method to validate the presence of uppercase letters
   *
   * @param {number} repeat - count of required uppercase letters
   */
  uppercase: function uppercase(repeat) {
    if (repeat && repeat > 1) {
      let characterIndex = 0;
      let upperCaseLetters = 0;
      while (upperCaseLetters < repeat && characterIndex < this.password.length) {
        const currentLetter = this.password.charAt(characterIndex);
        if (currentLetter !== currentLetter.toLowerCase()) {
          upperCaseLetters++;
        }
        characterIndex++;
      }
      return upperCaseLetters === repeat === this.positive;
    }
    return this.password !== this.password.toLowerCase() === this.positive;
  },
  /**
   * Method to validate the presence of lowercase letters
   *
   * @param {number} repeat - count of required lowercase letters
   */
  lowercase: function lowercase(repeat) {
    if (repeat && repeat > 1) {
      let characterIndex = 0;
      let lowerCaseLetters = 0;
      while (lowerCaseLetters < repeat && characterIndex < this.password.length) {
        const currentLetter = this.password.charAt(characterIndex);
        if (currentLetter !== currentLetter.toUpperCase()) {
          lowerCaseLetters++;
        }
        characterIndex++;
      }
      return lowerCaseLetters === repeat === this.positive;
    }
    return this.password !== this.password.toUpperCase() === this.positive;
  },
  /**
   * Method to validate the presence of symbols
   *
   * @param {number} repeat - count of required symbols
   */
  symbols: function symbols(repeat) {
    return _process.call(this, regex.symbols, repeat);
  },
  /**
   * Method to validate the presence of space
   *
   * @param {number} repeat - count of required spaces
   */
  spaces: function spaces(repeat) {
    return _process.call(this, regex.spaces, repeat);
  },
  /**
   * Method to provide pre-defined values for password
   *
   * @param {array} list - list of values allowed
   */
  oneOf: function oneOf(list) {
    return list.indexOf(this.password) >= 0 === this.positive;
  },
  /**
   * Method to run a plugin function for password
   *
   * @param {function} plugin - A plugin function
   */
  usingPlugin: function usingPlugin(fn) {
    try {
      const result = fn.call({}, this.password);
      return Boolean(result) === this.positive;
    } catch (err) {
      return false;
    }
  }
};

/***/ }),

/***/ 46417:
/*!*******************************************************************!*\
  !*** ./node_modules/password-validator/src/validationMessages.js ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = function (method, arg, inverted) {
  const msgList = inverted ? negativeMessages : positiveMessages;
  return msgList[method] && msgList[method](arg);
};
const positiveMessages = {
  min: num => `The string should have a minimum length of ${num} character${pluralify(num)}`,
  max: num => `The string should have a maximum length of ${num} character${pluralify(num)}`,
  letters: (num = 1) => `The string should have a minimum of ${num} letter${pluralify(num)}`,
  digits: (num = 1) => `The string should have a minimum of ${num} digit${pluralify(num)}`,
  uppercase: (num = 1) => `The string should have a minimum of ${num} uppercase letter${pluralify(num)}`,
  lowercase: (num = 1) => `The string should have a minimum of ${num} lowercase letter${pluralify(num)}`,
  symbols: (num = 1) => `The string should have a minimum of ${num} symbol${pluralify(num)}`,
  spaces: (num = 1) => `The string should have a minimum of ${num} space${pluralify(num)}`,
  oneOf: list => `The string should be ${list.length > 1 ? `one of ${list.slice(0, -1).join(', ')} and ` : ''}${list[list.length - 1]}`,
  has: pattern => `The string should have pattern '${pattern}'`,
  not: pattern => `The string should not have pattern '${pattern}'`,
  usingPlugin: fn => `The string should not violate ${fn.name || 'plugin'}`
};
const negativeMessages = {
  min: num => `The string should have a maximum length of ${num} character${pluralify(num)}`,
  max: num => `The string should have a minimum length of ${num} character${pluralify(num)}`,
  letters: (num = 0) => `The string should ${num === 0 ? 'not have' : `have a maximum of ${num}`} letter${pluralify(num)}`,
  digits: (num = 0) => `The string should ${num === 0 ? 'not have' : `have a maximum of ${num}`} digit${pluralify(num)}`,
  uppercase: (num = 0) => `The string should ${num === 0 ? 'not have' : `have a maximum of ${num}`} uppercase letter${pluralify(num)}`,
  lowercase: (num = 0) => `The string should ${num === 0 ? 'not have' : `have a maximum of ${num}`} lowercase letter${pluralify(num)}`,
  symbols: (num = 0) => `The string should ${num === 0 ? 'not have' : `have a maximum of ${num}`} symbol${pluralify(num)}`,
  spaces: (num = 0) => `The string should ${num === 0 ? 'not have' : `have a maximum of ${num}`} space${pluralify(num)}`,
  oneOf: list => `The string should not be ${list.length > 1 ? `one of ${list.slice(0, -1).join(', ')} and ` : ''}${list[list.length - 1]}`,
  has: pattern => `The string should not have pattern '${pattern}'`,
  not: pattern => `The string should have pattern '${pattern}'`,
  usingPlugin: fn => `The string should violate ${fn.name || 'plugin'}`
};
function pluralify(num) {
  return num === 1 ? '' : 's';
}

/***/ })

}]);
//# sourceMappingURL=default-src_app_utility_passwordValidator_ts.js.map