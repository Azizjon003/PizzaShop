const size = (sequelize, DataTypes) => {
  const size = sequelize.define(
    "size",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      size: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          min: 3,
          lowercase: true,
        },
      },
    },
    {
      tableName: "size",
    }
  );
  return size;
};
module.exports = size;
