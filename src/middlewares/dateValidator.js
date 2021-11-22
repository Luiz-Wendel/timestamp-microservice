module.exports = (request, response, next) => {
  const { date } = request.params;

  const dateObject = new Date(
    Number.isNaN(Date.parse(date))
      ? Number(date)
      : date,
  );

  if (Number.isNaN(dateObject.getTime())) {
    return next({ error: dateObject });
  }

  request.date = dateObject;

  return next();
};
