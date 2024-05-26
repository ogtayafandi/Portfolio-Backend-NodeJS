const { COMMON_VALIDATION_MESSAGES } = require("../utils/constant")

const BaseValidator = require = ('./baseValidation.js')

class SkillValidator extends BaseValidator {
    constructor(skill) {
        super.addValidation(super.checkNotNull(skill.name, COMMON_VALIDATION_MESSAGES.notNull('Name')))
        super.addValidation(super.checkLength(skill.name, 3, 20, COMMON_VALIDATION_MESSAGES.length('Name', 3, 20)))
    }
}

module.exports = SkillValidator