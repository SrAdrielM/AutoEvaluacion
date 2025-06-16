import taskModel from "../models/taskMdl.js";
 
const taskController = {};

//GET
taskController.getTask = async (req, res) => {
    try {
      const task = await taskModel.find();
      res.json(task);
    } catch (error) {
      res.status(400).json({ message: "Error al obtener las tareas", error });
    }
};

//INSERT
taskController.insertTask = async (req, res) => {
    try {
      const { title, description, completed } = req.body;
      const newTask = new taskModel({title, description, completed});
      await newTask.save()
      res.status(200).json({message: "Tarea guardada exitosamente"})
    } catch (error) {
        res.status(400).json({message: "No se pudo guardar la tarea: " + error})
    }
};

//DELETE
taskController.deleteTask = async (req, res) => {
    try {
      await taskModel.findByIdAndDelete(req.params.id);
      res.status(200).json({message: "Tarea Eliminada correctamente"});
    } catch (error) {
        res.status(400).json({message: "No se pudo eliminar la Tarea: " + error})
    }
};

//PUT
taskController.putTask = async (req, res) => {
    const { title, description, completed } = req.body

    try {
        const updateTask = await taskModel.findByIdAndUpdate(req.params.id,
            { title, description, completed }, { new: true }
        );
        res.status(200).json({message: "Tarea actualizada correctamente"})
    } catch (error) {
        res.status(400).json({message: "Error al tratar de actualizar: "+ error})
    }
};

export default taskController;