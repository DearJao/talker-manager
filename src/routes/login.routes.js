const express = require('express');
const tokenGenerate = require('../utils/tokenCreate');
const validateEmail = require('../middlewares/validationLogin/validateEmail');
const validatePassword = require('../middlewares/validationLogin/validatePassword');

const routes = express.Router();

routes.post('/login', validateEmail, validatePassword, async (req, res) => {
  const token = tokenGenerate();
  res.status(200).json({ token });
});

module.exports = routes;