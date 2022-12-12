const userController = require("../controllers/UserController");

const router = require("express").Router();

router.post("/", userController.addUser);

module.exports = router;
