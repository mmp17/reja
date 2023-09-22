console.log("Server started");
const express = require("express");
const res = require("express/lib/response");
const app = express();
const http = require("http");

//1 Entry codes
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//2 Session codes

//3 View codes
app.set("views", "views");
app.set("view engine", "ejs");

//4 Routing codes - BSSR
app.post("/create-item", (req, res) => {
  console.log("req.body", req.body);
  res.json({ test: "success" });
});

app.get("/", (req, res) => {
  // console.log("req.body", req);
  res.render("project");
});

app.get("/hello", (req, res) => {
  res.end(
    "<h1 style='background: lightgrey; text-align: center'>Hello World by MIT7</h1>"
  );
});

app.get("/gift", function (req, res) {
  res.end(`<h1>You are in Gift's Section</h1>`);
});

// const server = http.createServer(app);
// let PORT = 3000;
// server.listen(PORT);

http.createServer(app).listen(3000);
