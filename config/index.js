require("dotenv").config({ path: "./.env" });

module.exports = {
  DB_HOST: process.env.DB_HOST,
  DB_PORT: process.env.DB_PORT,
  DB_USERNAME: process.env.DB_USERNAME,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_DATABASE: process.env.DB_DATABASE,
  JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
  JWT_EXPIRED_SEC: parseInt(process.env.JWT_EXPIRED_SEC),
};
