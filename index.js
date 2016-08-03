var express = require("express"),
    app = express(),
    path = require("path");

app.use(express.static(path.join(__dirname + "/static")));
app.use("*", function (req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.listen("127.0.0.1:8000", function() {
  console.log("SERVER IS RUNNING");
});