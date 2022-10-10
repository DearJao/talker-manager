const express = require('express');
const talkerRead = require('../utils/talkerRead');
const talkerWrite = require('../utils/talkerWrite');
const talkerUpdate = require('../utils/talkerUpdate');
const tokenValidation = require('../middlewares/validationTalker/tokenValidadion');
const nameValidation = require('../middlewares/validationTalker/nameValidadion');
const ageValidation = require('../middlewares/validationTalker/ageValidation');
const talkValidation = require('../middlewares/validationTalker/talkValidation');
const watchedAtvalidation = require('../middlewares/validationTalker/watchedAtValidation');
const rateValidation = require('../middlewares/validationTalker/rateValidation');
const talkerDelete = require('../utils/talkerDelete');

const routes = express.Router();

routes.get('/talker', async (req, res) => {
  const data = await talkerRead();
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

routes.post('/talker',
  tokenValidation,
  nameValidation,
  ageValidation,
  talkValidation,
  watchedAtvalidation,
  rateValidation,
  async (req, res) => {
    const body = { ...req.body };
    const newTalker = await talkerWrite(body);

  res.status(201).json(newTalker);
});

routes.put('/talker/:id', 
  tokenValidation,
  nameValidation,
  ageValidation,
  talkValidation,
  watchedAtvalidation,
  rateValidation,
  async (req, res) => {
    const { id } = req.params;
    const updatedTalkerdata = req.body;

  const updatedTalker = await talkerUpdate(Number(id), updatedTalkerdata);

  console.log(updatedTalker);
  res.status(200).json(updatedTalker);
});

routes.delete('/talker/:id', async (req, res) => {
  const { id } = req.params;
  await talkerDelete(Number(id));
  return res.status(401).end();
});

module.exports = routes;