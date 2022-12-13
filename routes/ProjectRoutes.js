const projectController = require("../controllers/ProjectController");

const router = require("express").Router();

router.post("/add-project", projectController.addProject);
router.get("/", projectController.getAllProject);
router.put("/update-project/:id", projectController.updateProject);
router.delete("/delete-project/:id", projectController.deleteProject);

module.exports = router;
