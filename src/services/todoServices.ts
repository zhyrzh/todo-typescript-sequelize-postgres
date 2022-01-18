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

export const createTodo = async (todoBody: TodoSchema) => {
  try {
    const createdTodo = await TodoModel.create({
      todo: todoBody.todo,
      isdone: todoBody.isdone,
    });
    console.log(createdTodo, "created todo");
  } catch (error) {}
};
