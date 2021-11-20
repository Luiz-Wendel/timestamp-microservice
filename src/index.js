const express = require('express');
const logger = require('morgan');
const colors = require('colors');

const app = express();

app.use(express.json());
app.use(logger('dev'));

const rootRouter = require('./routes');

app.use('/', rootRouter);

app.listen(3000, () => console.log(`App running on port: ${colors.cyan('3000')}...`));
