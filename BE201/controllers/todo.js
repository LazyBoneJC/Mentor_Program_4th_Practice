// Controller 負責去 Model 拿資料並 Render
const todoModel = require("../models/todo");

// function checkPermmision(req) {
//   return req.query.admin === "1";
// }

const todoController = {
  getAll: (req, res) => {
    // if (!checkPermmision(req)) return res.end();
    todoModel.getAll((err, results) => {
      if (err) {
        console.log(err);
      } else {
        // console.log(results.rows);
        res.render("todos", {
          todos: results.rows,
        });
      }
    });
  },

  get: (req, res) => {
    // if (!checkPermmision(req)) return res.end();
    const id = req.params.id;
    todoModel.get(id, (err, results) => {
      if (err) {
        console.log(err);
      } else {
        // console.log(results.rows[0]);
        res.render("todo", {
          todo: results.rows[0],
        });
      }
    });
  },

  addTodo: (req, res) => {
    res.render("addTodo");
  },

  newTodo: (req, res) => {
    const p0 = req.body.pressure;
    const t0 = req.body.temperature;
    const ts = req.body.timestamp;
    todoModel.add([p0, t0, ts], (err) => {
      if (err) return console.log(err);
      res.redirect("/todos");
    });
  },
};

module.exports = todoController;
