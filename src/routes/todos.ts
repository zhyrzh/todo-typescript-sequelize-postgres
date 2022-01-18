import { Router } from "express";
import * as TodoControllers from "../controllers/todoController";

const todosRouter = Router();

todosRouter.post("/", TodoControllers.createTodo);
todosRouter.get("/", TodoControllers.getAllTodos);
todosRouter.get("/:todoId", TodoControllers.getSingleTodo);
todosRouter.put("/:todoId", TodoControllers.updateTodo);
todosRouter.delete("/", TodoControllers.deleteTodo);

export default todosRouter;
