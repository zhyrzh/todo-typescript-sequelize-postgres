import express from "express";
import { sequleize } from "./database";
import { appRouter } from "./routes/index";

const app = express();

app.use(express.json());
app.use(appRouter);

sequleize.sync().then(() => {
  app.listen(5000, () => console.log(`Server listening on port 5000`));
});
