import express from "express";
import taskController from "../controllers/taskCtrl.js";

const router = express.Router();

router.route("/")
.get(taskController.getTask)
.post(taskController.insertTask);

router.route("/:id")
.put(taskController.putTask)
.delete(taskController.deleteTask);

export default router;