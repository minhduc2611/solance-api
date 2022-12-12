const { User } = require("../model/User");

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
};

module.exports = userController;
