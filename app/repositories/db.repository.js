import { Pool } from "pg";
import db_config from "../config/db.config.js";

const pool = new Pool({
  host: db_config.host,
  user: db_config.user,
  password: db_config.password,
  database: db_config.database,
  port: db_config.port,
});

export default pool;
