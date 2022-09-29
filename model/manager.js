const { DataTypes } = require("sequelize");

const manager = (sequelize, DataTypes) => {
  const Manager = sequelize.define("manager", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "user",
        key: "id",
      },
    },
  });
  retrun = Manager;
};
module.exports = manager;
