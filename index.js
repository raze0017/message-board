const path = require("node:path");

const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];
app.get("/", (req, res) => {
  res.render("index", { title: "message board", messages: messages });
});
app.get("/new", (req, res) => {
  res.render("form");
});

app.post("/new", (req, res) => {
  const { user, messageText } = req.body;
  messages.push({
    text: messageText,
    user: user,
    added: new Date(),
  });
  res.redirect("/");
});
app.listen(3000, () => {
  console.log("running at 3000");
});
