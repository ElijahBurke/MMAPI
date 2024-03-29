/* eslint-disable no-console */
require('dotenv').config();
const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const router = require('./router');
const models = require('./models');
const apolloServer = require('../graphQL');

const app = express();
apolloServer.applyMiddleware({ app });
const port = 3001;

app.use(cors());
app.use(logger(':method :url :status :res[content-length] - :response-time ms'));
app.use(express.json());
app.use(router);

models.sequelize.sync()
  .then(() => {
    app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
  })
  .catch((err) => console.log(err));
