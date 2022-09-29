const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const app = require("./middleware/app");

const port = process.env.PORT || 8000;
require("./model");
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
