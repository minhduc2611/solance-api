const userController = require("../controllers/UserController");

const router = require("express").Router();

router.post("/add-user", userController.addUser);
router.get("/", userController.getAllUser);

module.exports = router;
