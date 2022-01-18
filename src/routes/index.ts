import { Router, Request, Response, NextFunction } from "express";
import todos from "./todos";

const appRouter = Router();

appRouter.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("Todo app api with typescript, sequelize and postgresql");
});

appRouter.use("/todos", todos);

export { appRouter };
