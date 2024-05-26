class ValidationError {
    /**
     * 
     * @param {string} error 
     * @param {number} code 
     */
    constructor(error = null, code = null) {
        this.error = error
        this.code = code
    }
}

module.exports = ValidationError