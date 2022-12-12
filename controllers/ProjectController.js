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
};

module.exports = projectController;
