module.exports = {
  timestamp: (request, response) => {
    const { date } = request.params;

    if (!date) {
      return response.status(200).json({ date: Date.now() });
    }

    return response.status(200).json({ date });
  },
};
