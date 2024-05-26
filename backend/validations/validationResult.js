const ValidationError = require("./validationError")

class ValidationResult {
    /**
     * 
     * @param {boolean} isValid
     * @param {ValidationError[]} errors
     */
    constructor(isValid, errors = []) {
        this.isValid = isValid
        this.errors = errors
    }
}

module.exports = ValidationResult