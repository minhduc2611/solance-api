const { Task, Project } = require("../model/model");

const taskController = {
  addATask: async (req, res) => {
    try {
      const newTask = new Task(req.body);
      const saveTask = await newTask.save();
      if (req.body.project) {
        const project = Project.findById(req.body.project);
        await project.updateOne({ $push: { tasks: saveTask._id } });
      }
      res.status(200).json(saveTask);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  getAllTask: async (req, res) => {
    try {
      const allTasks = await Task.find();
      res.status(200).json(allTasks);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

module.exports = taskController;
