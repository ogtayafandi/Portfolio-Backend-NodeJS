const serviceService = require("../services/services");
const { generateResponse, parseRequestBody } = require("../utils/common");
const { CONTENT_TYPES } = require("../utils/constant");
const ResponseConfig = require("../utils/responseConfig");
const Service = require('../models/service')

const getServices = async (req, res) => {
  const response = await serviceService.getServices();

  generateResponse(
    new ResponseConfig(
      200,
      req,
      res,
      CONTENT_TYPES[".json"],
      JSON.stringify(response)
    )
  );
};

const createService = async (req, res) => {
    const body = await parseRequestBody(req)
    const service = new Service(body)
    const result = await serviceService.addServices(service);

    generateResponse(
        new ResponseConfig(
          201,
          req,
          res,
          CONTENT_TYPES[".json"],
          JSON.stringify(result)
        )
      );
}

module.exports = {
    getServices, 
    createService
}