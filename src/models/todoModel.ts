import { INTEGER, Optional, BOOLEAN, STRING, Model } from "sequelize";
import { sequleize } from "../database";

interface TodoAttributes {
  id: number;
  todo: string;
  isdone: boolean;
}

interface TodoCreationAttributes extends Optional<TodoAttributes, "id" | "isdone"> {}

export interface TodoSchema
  extends Model<TodoAttributes, TodoCreationAttributes>,
    TodoAttributes {}

const TodoModel = sequleize.define<TodoSchema>(
  "todos",
  {
    id: {
      type: INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    todo: {
      type: STRING,
      allowNull: false,
    },
    isdone: {
      type: BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    updatedAt: false,
  }
);

export default TodoModel;
