import { Todos } from "../models/todos.js";

export class TodoController {
  static async getAllTodos(req, res) {
    const allTodos = await Todos.getAllTodos();

    res.status(200).send(allTodos);
  }

  static async createTodo(req, res) {
    const { title, description, completed, tag_id } = req.body;

    if (!title || !description || completed === undefined || !tag_id) {
      res.status(400).send({ message: "Не переданы обязательные поля" });
    }

    try {
      const createdTodos = await Todos.createTodo(
        title,
        description,
        completed,
        tag_id
      );

      res.status(200).send(createdTodos);
    } catch (e) {
      res.status(500).send(e.message);
    }
  }

  static async deleteTodoById(req, res) {
    const { todoId } = req.params;

    try {
      await Todos.deleteTodoById(todoId);
      res.status(200).end();
    } catch (e) {
      res.status(500).send(e.message);
    }
  }

  static async patchTodoById(req, res) {
    try {
      const patchedTodos = await Todos.patchTodoById(req.body);

      res.status(200).send(patchedTodos);
    } catch (e) {
      res.status(500).send(e.message);
    }
  }
}
