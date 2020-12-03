const Users = (sequelize, DataTypes) => sequelize
  .define('Users', {
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  }, {
    updatedAt: false,
  });

module.exports = Users;
