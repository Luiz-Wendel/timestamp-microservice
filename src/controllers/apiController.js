const statusCodes = require('../schemas/statusCodesSchema');

module.exports = {
  timestamp: (request, response) => {
    const { date } = request;

    let unix = Date.now();
    let utc = new Date(unix).toUTCString();

    if (!date) {
      return response.status(statusCodes.ok).json({ unix, utc });
    }

    unix = Date.parse(date);
    utc = date.toUTCString();

    return response.status(statusCodes.ok).json({ unix, utc });
  },
};
