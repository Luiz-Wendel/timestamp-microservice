const statusCodes = require('../schemas/statusCodesSchema');

module.exports = (error, _request, response, _next) => {
  if (error.statusCode) {
    return response.status(error.statusCode).json(error.info);
  }

  return response.status(statusCodes.internalServerError).json(error);
};
