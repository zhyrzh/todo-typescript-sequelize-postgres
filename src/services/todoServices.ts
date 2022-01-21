import { sequleize } from "../database";
import TodoModel, { TodoSchema } from "../models/todoModel";

export const getAllTodos = async () => {
  try {
    const todos = await TodoModel.findAll();
    return todos;
  } catch (error) {
    console.log("Database Error: ", error);
  }
};

export const getSingleTodo = async (todoId: number): Promise<TodoSchema | undefined> => {
  try {
    const requestedTodo = await TodoModel.findByPk(todoId);
    if (requestedTodo) {
      return requestedTodo;
    } else {
      return undefined;
    }
  } catch (error) {
    console.log("Database Error: ", error);
  }
};

export const createTodo = async (
  todoBody: TodoSchema
): Promise<TodoSchema | undefined> => {
  try {
    const createdTodo = await TodoModel.create({
      todo: todoBody.todo,
    });
    if (createdTodo) {
      return createdTodo;
    } else {
      return undefined;
    }
  } catch (error) {
    console.log("Database Error: ", error);
  }
};

export const updateTodo = async (
  todoId: number,
  todo: string
): Promise<boolean | undefined> => {
  try {
    const updatedTodo: [number, TodoSchema[]] = await TodoModel.update(
      { todo: todo },
      {
        where: {
          id: todoId,
        },
      }
    );
    return updatedTodo[0] >= 1 ? true : false;
  } catch (error) {
    console.log("Database Error: ", error);
  }
};

export const deleteTodo = async (todoId: number): Promise<boolean | undefined> => {
  try {
    const deletedTodo = await TodoModel.destroy({
      where: {
        id: todoId,
      },
    });
    return deletedTodo >= 1 ? true : false;
  } catch (error) {
    console.log("Database Error: ", error);
  }
};
