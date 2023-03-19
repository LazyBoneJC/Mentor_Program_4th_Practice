const pg_client = require("../conn");
const userModel = require("../models/user");
const bcrypt = require("bcrypt");
const saltRounds = 10; // 讓密碼變更複雜的參數

const userController = {
  get: (username, cb) => {},

  login: (req, res) => {},

  handleLogin: (req, res) => {
    const {username, password} = req.body;
    if (!username || !password) {
      return req.flash("errorMessage", "帳號或密碼錯誤！");
      res.redirect("/login");
    }
    // (2023/3/8)從這邊接續
  },

  logout: (req, res) => {
    req.session.username = null;
    res.redirect("/");
  },

  register: (req, res) => {
    res.render("user/register");
  },

  handleRegister: (req, res) => {
    const { username, password, nickname } = req.body;

    if (!username || !password || !nickname) {
      return req.flash("errorMessage", "缺少必要欄位");
    }

    bcrypt.hash(password, saltRounds, function (err, hash) {
      if (err) {
        return req.flash("errorMessage", err.toString());
      }
      // 寫進DB的是Hash而非明碼
      userModel.add({ username, password: hash, nickname }, (err) => {
        if (err) {
          return req.flash("errorMessage", err.toString());
        }
        req.session.username = username;
        res.redirect("/");
      });
    });
  },
};

module.exports = userController;
