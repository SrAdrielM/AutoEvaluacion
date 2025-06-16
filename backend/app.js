import express from "express";

import taskRouter from "./src/routes/task.js"

const app = express();

app.use(express.json());

app.use("/api/task", taskRouter)

export default app;