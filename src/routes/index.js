const express = require('express');

const router = express.Router();

router.get('/', (_request, response) => {
  response.status(200).json({ message: 'OK' });
});

const apiRouter = require('./api');

router.use('/api', apiRouter);

module.exports = router;
