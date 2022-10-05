const express = require('express');
const talkerRead = require('../utils/talker.read');

const routes = express.Router();

routes.get('/talker', async (req, res) => {
  const data = await talkerRead();
  console.log(data);
  res.status(200).json(data);
});

module.exports = routes;