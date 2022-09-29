const category = (sequelize, DataTypes) => {
  const category = sequelize.define(
    "category",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allownull: false,
        validate: {
          min: 3,
          max: 20,
        },
      },
      photo: {
        type: DataTypes.TEXT,
        allownull: false,
        validate: {
          notEmpty: true,
          isUrl: true,
        },
      },
    },
    {
      tableName: "category",
    }
  );
  return category;
};

module.exports = category;
