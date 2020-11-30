const Users = (sequelize, DataTypes) => sequelize.define('users', {
  displayName: DataTypes.STRING,
  email: DataTypes.STRING,
  password: DataTypes.STRING,
  image: DataTypes.STRING,
});

module.exports = Users;
