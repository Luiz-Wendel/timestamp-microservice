const statusCodes = require('./statusCodesSchema');

module.exports = {
  invalidDate: {
    statusCode: statusCodes.badRequest,
    info: {
      code: 'bad_request',
      message: 'Invalid date',
    },
  },
};
