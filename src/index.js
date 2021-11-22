const express = require('express');
const logger = require('morgan');
const colors = require('colors');

const rootRouter = require('./routes');

const errorHandler = require('./middlewares/errorHandler');

const app = express();

app.use(express.json());
app.use(logger('dev'));

app.use('/', rootRouter);

app.use(errorHandler);

app.listen(3000, () => console.log(`App running on port: ${colors.cyan('3000')}...`));
