const talkValidation = (req, res, next) => {
  console.log(req.body);
  const { talk } = req.body;
  if (!talk) {
    return res.status(400).json({ message: 'O campo "talk" é obrigatório' });
  }
  next();
};

module.exports = talkValidation;