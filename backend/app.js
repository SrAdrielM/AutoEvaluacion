import express from "express";
import swaggerUi from "swagger-ui-express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

import taskRouter from "./src/routes/task.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const docApi = JSON.parse(fs.readFileSync(path.join(__dirname, "documentation.json"), "utf-8"));

const app = express();
app.use(express.json());

app.use("/api/task", taskRouter);

app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(docApi));

export default app;
