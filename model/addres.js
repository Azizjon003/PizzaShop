const address = (sequealize, DataTypes) => {
  const address = sequealize.define(
    "address",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      country: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          min: 3,
          max: 20,
        },
      },
      city: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          min: 3,
          max: 20,
        },
      },
      street: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          min: 3,
          max: 20,
        },
      },
      houseNumber: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          min: 1,
          max: 1000,
        },
      },
    },
    {
      tableName: "address",
    }
  );

  return address;
};
module.exports = address;
