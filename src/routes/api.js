const express = require('express');

const apiRouter = express.Router();

apiRouter.get('/', (_request, response) => {
  response.status(200).json({ message: 'API route' });
});

module.exports = apiRouter;
