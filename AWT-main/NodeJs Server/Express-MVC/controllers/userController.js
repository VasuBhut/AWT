const userController = {
  getLogin(req, res) {
    res.render("login");
  },
  getRegister(req, res) {
    res.render("register");
  },
  postRegister(req, res) {
    const user = req.body;
    // const userId = UserModel.createUser(user);
    // res.send(`User is registered with the id ${userId}`)
    res.send(`User is registered with the id`);
  },
};

module.exports = userController;
