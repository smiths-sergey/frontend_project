import PG from "pg";
const Pool = PG.Pool;

export const pool = new Pool({
  user: "admin",
  password: "1234",
  database: "task_manager",
  host: "localhost",
  port: "9000",
});
