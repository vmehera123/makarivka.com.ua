var express = require("express"),
    app = express(),
    path = require("path");

app.use(express.static(__dirname));
app.use("*", function (req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.listen(8888, function() {
  console.log("SERVER IS RUNNING");
});