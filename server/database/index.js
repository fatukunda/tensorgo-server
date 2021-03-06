import Sequelize from "sequelize";
require("dotenv").config();

const database = process.env.DB_NAME;
const username = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const host = process.env.HOST;

const sequelize = new Sequelize(database, username, password, {
  host,
  dialect: "mysql",
});
sequelize.sync({ force: false });

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

export default sequelize;
