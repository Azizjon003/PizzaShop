const { Sequelize, DataTypes } = require("sequelize");
const dotenv = require("dotenv");
const cli = require("cli-color");
dotenv.config({ path: "../config.env" });
const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASSWORD,
  {
    host: "localhost",
    dialect: "postgres",
  }
);
sequelize
  .authenticate()
  .then(() => {
    console.log(cli.blue("Database connected..."));
  })
  .catch((err) => {
    console.log(cli.red(err));
  });
const db = {};
db.sequelize = sequelize;
db.user = require("../model/user")(sequelize, DataTypes);
db.address = require("./addres")(sequelize, DataTypes);
db.photo = require("./photos")(sequelize, DataTypes);
db.category = require("./category")(sequelize, DataTypes);
db.size = require("./size")(sequelize, DataTypes);
db.sequelize
  .sync({ alter: true, force: true })
  .then(() => {
    console.log(cli.green("Database synced..."));
  })
  .catch((err) => {
    console.log(cli.red(err.message));
  });

db.sequelize = sequelize;
