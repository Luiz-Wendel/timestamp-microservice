const express = require('express');

const apiRouter = express.Router();

const apiController = require('../controllers/apiController');

apiRouter.get('/:date?', apiController.timestamp);

module.exports = apiRouter;
