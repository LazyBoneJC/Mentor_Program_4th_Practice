// Model 負責提供資料
const pg_client = require("../conn");

const userModel = {
  add: (user, cb) => {
    // 傳入一個 user object
    pg_client.query(
      "INSERT INTO users(username, password, nickname) VALUES($1, $2, $3)",
      [user.username, user.password, user.nickname],
      (err, results) => {
        if (err) {
          cb(err.stack);
        } else {
          cb(null);
        }
      }
    );
  },
  get: (username, cb) => {
    pg_client.query(
      "SELECT * FROM users WHERE username = $1",
      [username],
      (err, results) => {
        if (err) return cb(err);
        cb(null, results[0]);
      }
    );
  }
};

module.exports = userModel;
