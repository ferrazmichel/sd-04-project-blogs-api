const { Users } = require('../models');

const getAll = async (req, res) => {
  try {
    const users = await Users.findAll();

    res.status(200).json(users);
  } catch (error) {
    res.status(404).json(error);
  }
};

const showToken = async (req, res) => {
  try {
    const { body, token } = req;
    let STATUS = 200;
    console.log(token)
    if (Object.keys(body).length > 2) {
      await Users.create(body);
      STATUS = 201;
    }

    res.status(STATUS).json({ token });
  } catch (error) {
    res.status(404).json({ message: 'Alguem de errado, não esta certo' });
  }
};

module.exports = {
  getAll,
  showToken,
};
