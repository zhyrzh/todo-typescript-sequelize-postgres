import { Request, Response, NextFunction, ErrorRequestHandler } from "express";
import {} from "sequelize";
import { TodoSchema } from "../models/todoModel";
import * as todoServices from "../services/todoServices";

const getAllTodos = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const allTodos = await todoServices.getAllTodos();
    res.send(allTodos);
  } catch (error) {
    console.log(error);
  }
};

const getSingleTodo = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
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

const createTodo = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const todoBody: TodoSchema = req.body;
  try {
    const createdTodo: TodoSchema | undefined = await todoServices.createTodo(todoBody);
    if (!createdTodo) {
      return res.status(400).json({ success: false, message: "create todo failed" });
    }
    res
      .status(201)
      .json({
        success: true,
        message: "todo created successfully",
        payload: createdTodo,
      });
  } catch (error) {
    console.log(error);
  }
};

const updateTodo = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const todoId: number = +req.params.todoId;
  const todo = req.body.todo;
  try {
    const updatedTodo = await todoServices.updateTodo(todoId, todo);
    if (!updatedTodo) {
      return res.status(400).json({ success: false, message: "todo update failed" });
    }
    res.status(200).json({
      success: true,
      payload: updatedTodo,
      message: "todo updated successfully",
    });
  } catch (error) {
    console.log(error);
  }
};

const deleteTodo = async (req: Request, res: Response, next: NextFunction) => {
  const todoId: number = +req.params.todoId;
  try {
    const deletedTodo: boolean | void = await todoServices.deleteTodo(todoId);
    if (!deletedTodo) {
      return res.status(400).json({ success: false, message: "todo delete failed" });
    }
    res
      .status(200)
      .json({ success: true, message: "todo deleted", payload: deletedTodo });
  } catch (error) {
    console.log(error);
  }
};

export { getAllTodos, getSingleTodo, createTodo, updateTodo, deleteTodo };
