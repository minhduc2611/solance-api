const userController = require("../controllers/UserController");

const router = require("express").Router();

router.post("/add-user", userController.addUser);
router.get("/", userController.getAllUser);
router.put("/update-user/:id", userController.updateUser);
router.delete("/delete-user/:id", userController.deleteUser);

module.exports = router;
