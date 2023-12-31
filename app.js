console.log("Server started");
const express = require("express");
const app = express();
const fs = require("fs");

// MonGoDB connect
const mongodb = require("mongodb");
const db = require("./server").db();

let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
  if (err) {
    console.log("ERROR:", err);
  } else {
    user = JSON.parse(data);
  }
});

//1 Entry codes
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//2 Session codes

//3 View codes
app.set("views", "views");
app.set("view engine", "ejs");

//4 Routing codes - BSSR
app.post("/create-item", function (req, res) {
  console.log("user entered /create-item");
  console.log(req.body);
  const new_reja = req.body.reja;
  // Code with MongoDB
  const newReja = req.body.reja;
  db.collection("plans").insertOne({ reja: newReja }, (err, data) => {
    if (err) {
      console.log(err);
      res.end("Something went wrong");
    } else {
      console.log(data.ops);
      res.json(data.ops[0]);
      // res.end("Successfully added");
    }
  });
  // res.json({ test: "success" });
});

app.get("/", (req, res) => {
  console.log("user entered /");
  db.collection("plans")
    .find()
    .toArray((err, data) => {
      if (err) {
        console.log("Error", err);
        res.end("Something went wrong");
      } else {
        console.log("Data", data);
        res.render("plan", { items: data });
      }
    });
  // console.log("req.body", req);
  // res.render("project");
});

app.post("/delete-item", function (req, res) {
  const id = req.body.id;

  db.collection("plans").deleteOne(
    { _id: new mongodb.ObjectId(id) },
    function (err, data) {
      if (data) {
        res.json({ state: "Deleted" });
      } else {
        err;
      }
    }
  );
});

app.post("/edit-item", (req, res) => {
  const data = req.body;
  db.collection("plans").findOneAndUpdate(
    {
      _id: new mongodb.ObjectID(data.id),
    },
    { $set: { reja: data.new_input } },
    function (err, data) {
      if (data) {
        res.json({ state: "Edited" });
      } else {
        err;
      }
    }
  );
});

app.post("/delete-all", (req, res) => {
  if (req.body.delete_all) {
    db.collection("plans").deleteMany(function (err, data) {
      if (data) {
        res.json({ state: "All plans are deleted" });
      } else {
        err;
      }
    });
  }
});

app.get("/author", (req, res) => {
  res.render("author", { user: user });
});

app.get("/hello", (req, res) => {
  res.end(
    "<h1 style='background: lightgrey; text-align: center'>Hello World by MIT7</h1>"
  );
});

app.get("/gift", function (req, res) {
  res.end(`<h1>You are in Gift's Section</h1>`);
});

module.exports = app;
