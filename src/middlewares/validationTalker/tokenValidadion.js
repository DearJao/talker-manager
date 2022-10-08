const tokenValidation = (req, res, next) => {
  if (!req.get('authorization')) {
    return res.status(401).json({ message: 'Token não encontrado' });
  }

  if (req.get('authorization').length !== 16) {
    return res.status(401).json({ message: 'Token inválido' });
  }
  next();
};

module.exports = tokenValidation;