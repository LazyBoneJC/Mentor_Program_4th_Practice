// Model 負責提供資料
const pg_client = require("../conn");
// const todos = ["first todo", "second todo", "third todo"];

const todoModel = {
  getAll: (cb) => {
    pg_client.query("SELECT * FROM pg_test", (err, res) => {
      if (err) {
        // console.log(err.stack);
        cb(err.stack);
      } else {
        cb(null, res);
      }
    });
  },
  get: (id, cb) => {
    pg_client.query("SELECT * FROM pg_test WHERE id = $1", [id], (err, res) => {
      if (err) {
        // console.log(err.stack);
        cb(err.stack);
      } else {
        cb(null, res);
      }
    });
  },
  add: (data, cb) => {
    pg_client.query("INSERT INTO pg_test(pressure, temperature, ts) VALUES($1, $2, $3)", data, (err, res) => {
      if (err) {
        cb(err.stack);
      } else {
        cb(null);
      }
    });
  },
};

module.exports = todoModel;
