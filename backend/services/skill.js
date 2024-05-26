const baseService = require('./baseService')
const {DATABASE_KEYS, OPERATION_MESSAGES} = require('../utils/constant')
const {SuccessResult, ErrorResult} = require("../utils/result");
const Skill = require('../models/skill');

const getSkills = async () => {
    const data = await baseServices.getGenericTableData(DATABASE_KEYS.SKILLS)
    return new SuccessResult(null, data)
}

/**
 * 
 * @param {Skill} skill 
 * @returns 
 */
const addSkill = async (skill) => {
    // const validationResult = validateSkill(skill)
    // if(!validationResult.success) {
    //     return validationResult
    // }

    const addedSkill = await baseServices.addModelToTable(DATABASE_KEYS.SKILLS, skill)
    return new SuccessResult(OPERATION_MESSAGES.ADDED, addedSkill)
}

module.exports = {
    getSkills,
    addSkill
}