const photo = (sequelize, DataTypes) => {
  const photo = sequelize.define(
    "photo",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      url: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: true,
          isUrl: true,
        },
      },
    },
    {
      tableName: "photo",
    }
  );
  return photo;
};
module.exports = photo;
