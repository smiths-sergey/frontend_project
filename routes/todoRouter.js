import { Router } from "express";
import { TodoController } from "../controllers/todoController.js";

export const todoRouter = Router();


todoRouter.get("/", TodoController.getAllTodos);
todoRouter.post("/", TodoController.createTodo);
todoRouter.patch("/", TodoController.patchTodoById);
todoRouter.delete("/:todoId", TodoController.deleteTodoById);
