module.exports = {
  timestamp: (request, response) => {
    const { date } = request.params;

    let unix = Date.now();
    let utc = new Date(unix).toUTCString();

    if (!date) {
      return response.status(200).json({ unix, utc });
    }

    const dateObject = new Date(
      Number.isNaN(Date.parse(date))
        ? Number(date)
        : date,
    );

    unix = Date.parse(dateObject);
    utc = dateObject.toUTCString();

    return response.status(200).json({ unix, utc });
  },
};
