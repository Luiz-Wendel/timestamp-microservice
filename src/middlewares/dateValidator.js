const errors = require('../schemas/errorsSchema');

module.exports = (request, response, next) => {
  const { date } = request.params;

  const dateObject = new Date(
    Number.isNaN(Date.parse(date))
      ? Number(date)
      : date,
  );

  if (Number.isNaN(dateObject.getTime())) {
    return next(errors.invalidDate);
  }

  request.date = dateObject;

  return next();
};
