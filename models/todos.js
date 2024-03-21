import { pool } from "../database/index.js";
import { prepareFieldsToSQLQuery } from "../utils/prepareFieldsToSQLQuery.js";

export class Todos {
  static async getAllTodos() {
    const allTodosDBResponse = await pool.query("select * from todos", []);

    return allTodosDBResponse.rows;
  }

  static async createTodo(title, description, completed, tag_id) {
    try {
      const createTodoDBResponse = await pool.query(
        "insert into todos(title, description, completed, tag_id) values($1, $2, $3, $4) returning id",
        [title, description, completed, tag_id]
      );

      return createTodoDBResponse.rows[0];
    } catch (e) {
      throw new Error(e);
    }
  }

  static async patchTodoById(body) {
    const id = body.id;
    delete body.id;
    const fields = prepareFieldsToSQLQuery(body);

    try {
      const patchTodoDBResponse = await pool.query(
        `update todos set ${fields} where id=$1 returning *`,
        [id]
      );

      return patchTodoDBResponse.rows[0];
    } catch (e) {
      throw new Error(e);
    }

    return "ok";
  }

  static async deleteTodoById(id) {
    try {
      const findedTodosDBResponse = await pool.query(
        "select * from todos where id = $1",
        [id]
      );
      if (findedTodosDBResponse.rowCount === 0) {
        throw new Error();
      }
      await pool.query("delete from todos where id = $1", [id]);
      return;
    } catch (e) {
      throw new Error("Ошибка удаления");
    }
  }
}
