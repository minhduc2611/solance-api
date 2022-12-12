const taskController = require("../controllers/TaskController");

const router = require("express").Router();

router.post("/add-task", taskController.addATask);
router.get("/", taskController.getAllTask);

module.exports = router;
