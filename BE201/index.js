const express = require("express");
const app = express();
const port = 5001;

const pg_client = require("./conn");
const bodyParser = require("body-parser");
const session = require("express-session");
const flash = require("connect-flash");

const todoController = require("./controllers/todo");
const userController = require("./controllers/user");

app.set("view engine", "ejs"); // 將 View Engine 設定為 EJS
app.use(bodyParser.urlencoded({ extended: false })); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(flash());

// Express session
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
  })
);

// 使用 session & flash 都會用到 session，所以這個 Middleware 要放在 app.use(session()) 底下
// 建立一個 Middleware，把資訊放在 req.locals 這個地方，locals 裡面的資訊就能在 view 裡面拿到。
// 記得是用 res.locals 而非 req.locals
app.use((req, res, next) => {
  res.locals.username = req.session.username;
  res.locals.errorMessage = req.flash("errorMessage");
  next(); // 記得 call next() 不然 request 會卡住
});

// 把權限管理的 Middleware 功能寫成 function
function checkPermmision(req, res, next) {
  if (req.query.admin === "1") {
    next(); // 把控制權交給下一個 Middleware
  } else {
    res.end("Permission denied.");
  }
}

app.post("/todos", todoController.newTodo);
app.get("/todos", todoController.getAll);
app.get("/todos/:id", todoController.get);
app.get("/addTodo", todoController.addTodo);

app.get("/", (req, res) => {
  res.render("index");
});
app.get("/login", userController.login);
app.post("/login", userController.handleLogin);
app.get("/logout", userController.logout);
app.get("/register", userController.register);
app.post("/register", userController.handleRegister);

app.listen(port, () => {
  // Connect to PostgreSQL
  pg_client.connect((err) => {
    if (err) {
      console.error("Connection error:", err.stack);
    } else {
      console.log("Successfully connected to PostgreSQL.");
    }
  });

  console.log(`Express app listening on port ${port}`);
});
