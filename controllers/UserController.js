const { User } = require("../model/model");

const userController = {
  addUser: async (req, res) => {
    try {
      const user = new User(req.body);
      const saveUser = await user.save();
      res.status(200).json(saveUser);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  getAllUser: async (req, res) => {
    try {
      const allUsers = await User.find();
      res.status(200).json(allUsers);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  updateUser: async (req, res) => {
    try {
      const updateUser = await User.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
      res.status(200).json("User updated");
    } catch (error) {
      res.json(error);
    }
  },
  deleteUser: async (req, res) => {
    try {
      const deleteUser = await User.findOneAndDelete(req.params.id);
      res.status(200).json(deleteUser);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

module.exports = userController;
