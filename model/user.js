const user = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "user",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
          min: 5,
          max: 20,
        },
      },
      lastname: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
          min: 5,
          max: 20,
        },
      },

      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
          isEmail: true,
          lowercase: true,
        },
      },
      number: {
        type: DataTypes.BIGINT,
        allowNull: false,
        validate: {
          notEmpty: true,
          isNumber: true,
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
          min: 8,
          max: 20,
        },
      },
      passwordConfirm: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
          min: 8,
          max: 20,
        },
      },
      role: {
        type: DataTypes.ENUM,
        values: ["user", "admin", "kuryer"],
        defaultValue: "user",
      },
      address: {
        type: DataTypes.INTEGER,
        references: {
          model: "address",
          key: "id",
        },
      },
    },
    {
      tableName: "user",
    }
  );
  return User;
};
module.exports = user;
