const { Project } = require("../model/model");

const projectController = {
  addProject: async (req, res) => {
    try {
      const project = new Project(req.body);
      const saveProject = await project.save();
      res.status(200).json(saveProject);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  getAllProject: async (req, res) => {
    try {
      const allProjects = await Project.find();
      res.status(200).json(allProjects);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  updateProject: async (req, res) => {
    try {
      await Project.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
      res.status(200).json("Project updated");
    } catch (error) {
      res.json(error);
    }
  },
  deleteProject: async (req, res) => {
    try {
      const deleteProject = await Project.findOneAndDelete(req.params.id);
      res.status(200).json("Project deleted");
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

module.exports = projectController;
