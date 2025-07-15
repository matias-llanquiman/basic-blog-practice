import dotenv from "dotenv";
dotenv.config();

const db_config = {
  host: process.env.PG_HOST,
  user: process.env.PG_USER,
  password: process.env.PG_PASS,
  database: process.env.PG_DB,
  port: process.env.PG_PORT,
};

export default db_config;
