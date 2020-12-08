const express = require('express');
const { Users } = require('../models');
const JWT = require('../service');
const middlewares = require('../middlewares');

const router = express.Router();

router.post('/', middlewares.validateUsers, async (req, res) => {
  const { displayName, email, password, image } = req.body;

  const userMail = await Users.findAll({ where: { email } });
  if (userMail.length > 0) {
    return res.status(409).json({ message: 'Usuário já existe' });
  }

  await Users.create({ displayName, email, password, image });
  const token = JWT.createJWT({ email, password });
  return res.status(201).json({ token });
});

router.get('/', JWT.validateJWT, async (req, res) => {
  const allUsers = await Users.findAll({ attributes: { exclues: ['password'] } });
  return res.status(200).json(allUsers);
});
