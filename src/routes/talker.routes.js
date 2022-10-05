const express = require('express');
const talkerRead = require('../utils/talker.read');

const routes = express.Router();

routes.get('/talker', async (req, res) => {
  const data = await talkerRead();
  console.log(data);
  res.status(200).json(data);
});

routes.get('/talker/:id', async (req, res) => {
  const { id } = req.params;
  const data = await talkerRead();
  const searchId = data.find((d) =>
    d.id === Number(id));

  if (!searchId) {
    return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
  }
    res.status(200).json(searchId);
});

module.exports = routes;