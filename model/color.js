const color = (sequelize, DataTypes) => {
  const color = sequelize.define(
    "color",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
      },
    },
    {
      tablename: "color",
    }
  );
};
