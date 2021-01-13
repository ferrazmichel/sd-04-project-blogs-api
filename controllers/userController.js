const express = require('express');
const { User } = require('../models');
const createToken = require('../auth/jwtCreate');
const validator = require('../auth/validator');
const validateJWT = require('../auth/validatejwt');

const router = express.Router();

router.get('/', validateJWT, async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
  }
});

router.get('/:id', validateJWT, async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);
    if (!user) return res.status(404).json({ message: 'Usuário não existe' });
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
  }
});

router.post('/', validator, async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;
    const userExists = await User.findOne({
      where: { email: req.body.email },
    });
    if (!userExists) {
      const newUser = await User.create({
        displayName,
        email,
        password,
        image,
      });
      const token = createToken(newUser.dataValues);
      res.status(201).json({ token });
    } else if (userExists) {
      res.status(409).json({ message: 'Usuário já existe' });
    }
  } catch (error) {
    const { message } = error;
    res.status(400).json({ message: message.slice(18) });
  }
});

router.delete('/me', validateJWT, async (req, res) => {
  const { id } = req.user;
  await User.destroy({ where: { id } });
  return res.status(204).json({});
});

module.exports = router;
