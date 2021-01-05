const jwt = require('jsonwebtoken');

// const User = require('../models/Users');

const JWT_SECRET = 'senhasecreta';

const createNewJWT = (payload) => {
  const jwtconfig = {
    expiresIn: '30m',
    algorithm: 'HS256',
  };
  const token = jwt.sign(payload, JWT_SECRET, jwtconfig);

  return token;
};

const validateToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(401).json({ message: 'Token não encontrado' });
    }

    const layout = jwt.verify(token, JWT_SECRET);

    req.token = layout;

    next();
  } catch (err) {
    console.error('Erro do Catch', err);

    return res.status(401).json({ message: 'Token expirado ou inválido' });
  }
};

module.exports = { validateToken, createNewJWT };
