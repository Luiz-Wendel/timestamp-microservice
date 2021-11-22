const express = require('express');

const apiRouter = express.Router();

const apiController = require('../controllers/apiController');

const dateValidator = require('../middlewares/dateValidator');

apiRouter.get('/:date?', dateValidator, apiController.timestamp);

module.exports = apiRouter;
