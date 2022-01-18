import { Request, Response, NextFunction, ErrorRequestHandler } from "express";
import {} from "sequelize";
import { TodoSchema } from "../models/todoModel";
import * as todoServices from "../services/todoServices";

const getAllTodos = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const allTodos = await todoServices.getAllTodos();
    res.send(allTodos);
  } catch (error) {
    console.log(error);
  }
};

const getSingleTodo = async (req: Request, res: Response, next: NextFunction) => {
  const todoId = +req.params.todoId;
  try {
    const requestedTodo = await todoServices.getSingleTodo(todoId);
    if (!requestedTodo) {
      return res.status(404).json({ success: false, message: "Todo not found" });
    }
    res
      .status(200)
      .json({ success: true, payload: requestedTodo, message: "Todo found" });
  } catch (error) {
    console.log(error);
  }
};

const createTodo = async (req: Request, res: Response, next: NextFunction) => {
  const todoBody: TodoSchema = req.body;
  try {
    const createdTodo = await todoServices.createTodo(todoBody);
  } catch (error) {
    console.log(error);
  }
};

const updateTodo = async (req: Request, res: Response, next: NextFunction) => {
  const todoId: number = +req.params.todoId;
  const todo = req.body.todo;
  try {
    const updatedTodo = await todoServices.updateTodo(todoId, todo);
  } catch (error) {
    console.log(error);
  }
};

const deleteTodo = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // const deletedTodo = await
  } catch (error) {
    console.log(error);
  }
};

export { getAllTodos, getSingleTodo, createTodo, updateTodo, deleteTodo };
