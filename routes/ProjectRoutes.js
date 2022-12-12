const projectController = require("../controllers/ProjectController");

const router = require("express").Router();

router.post("/add-project", projectController.addProject);
router.get("/", projectController.getAllProject);

module.exports = router;
