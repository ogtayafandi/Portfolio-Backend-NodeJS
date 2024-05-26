const fs = require('fs')
const util = require('util')
const getRootPath = require('../utils/rootPath')
const {generateUniqueId} = require("../utils/common");

const readFileAsync = util.promisify(fs.readFile)
const writeFileAsync = util.promisify(fs.writeFile)

const DB_PATH = `${getRootPath}database/db.json`

const readAllJsonFromText = async () => {
    const text = await readFileAsync(DB_PATH)
    return JSON.parse(text)
}

const getGenericTableData = async (tableKey) => {
    const data = await readAllJsonFromText();
    return data[tableKey]
}

const addModelToTable = async (tableKey, model) => {
    const data = await readAllJsonFromText();
    const modelAdding = { id:generateUniqueId(data[tableKey]), ...model }
    data[tableKey].push(modelAdding)
    await writeFileAsync(DB_PATH, JSON.stringify(data, null, 2))
    return modelAdding
}

const deleteModelFromTable = async (tableKey, id) => {
    const data = await readAllJsonFromText();
    data[tableKey] = data[tableKey].filter((item) => item.id !== id)
    await writeFileAsync(DB_PATH, data)
}

const updateModel = async (tableKey, model) => {
    const data = await readAllJsonFromText();
    data[tableKey] = data[tableKey].filter((item) => item.id !== id)
    data[tableKey].push(model)
}

module.exports = {
    getGenericTableData,
    addModelToTable,
    deleteModelFromTable,
    updateModel
}