require('dotenv').config();
const JWT = require('jsonwebtoken');

const headers = {
  expiresIn: '30m',
  algorithm: 'HS256',
};

const secret = process.env.TOKEN_SECRET ?? 'pantaLover';

const createToken = (payload) => {
  const token = JWT.sign(payload, secret, headers);

  return token;
};

module.exports = createToken;
