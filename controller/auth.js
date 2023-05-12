const _ = require("lodash");
const User = require("../models/user");

// render the register page
module.exports.renderRegister = (req, res) => {
  res.render("auth/register");
};

// store user's data in DB and login
module.exports.register = async (req, res, next) => {
  try {
    let { name, username, password } = req.body;
    name = _.startCase(_.camelCase(name));
    const user = new User({ name, username });
    const registeredUser = await User.register(user, password);
    req.login(registeredUser, (err) => {
      if (err) return next(err);
      res.redirect("/");
    });
  } catch (e) {
    req.flash("error", "Enter the details correctly!");
    res.redirect("/register");
  }
};