const express = require('express');
const talker = require('./talker.routes');
const login = require('./login.routes');

const routes = express.Router();
routes.use(talker);
routes.use(login);

module.exports = routes;