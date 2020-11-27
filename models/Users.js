const createUsers = (sequelize, DataTypes) => {
  const Users = sequelize.define(
    'Users',
    {
      id: { type: DataTypes.INTEGER, primaryKey: true },
      displayName: DataTypes.STRING,
      email: DataTypes.STRING,
      age: DataTypes.INTEGER,
      password: DataTypes.INTEGER,
      image: DataTypes.STRING,
    },
    {
      timestamps: false,
    },
  );

  Users.associate = (models) => {
    Users.belongsTo(models.Posts, {
      foreignKey: 'userId',
      as: 'Users',
    });
  };

  return Users;
};

module.exports = createUsers;
