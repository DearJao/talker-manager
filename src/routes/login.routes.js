const express = require('express');
const tokenGenerate = require('../utils/tokenCreate');

const routes = express.Router();

routes.post('/login', async (req, res) => {
  const token = tokenGenerate();
  console.log(token);

  res.status(200).json({ token });
});

module.exports = routes;

// https://trybe.zoom.us/j/91646604726