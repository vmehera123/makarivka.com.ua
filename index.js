var express = require("express"),
    app = express(),
    path = require("path");

app.use(express.static(path.join(__dirname + "/static")));

app.get("/", function (req, res) {
	res.sendFile(path.resolve(__dirname, "./views/index.html"));
});

app.get("/about", function (req, res) {
	res.sendFile(path.resolve(__dirname, "./views/about.html"));
});

app.get("/robots.txt", function (req, res) {
	res.sendFile(path.resolve(__dirname, "./robots.txt"));
});

app.get("/sitemap.xml", function (req, res) {
    res.sendFile(path.resolve(__dirname, "./sitemap.xml"));
});

app.listen(8000, function() {
  	console.log("SERVER IS RUNNING");
});