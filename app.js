const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({
    extended:true
}));

app.get("/", function(req, res) {
    res.render("index");
})

app.get("/tournaments", function(req, res) {
    res.render("tournaments");
})

app.get("/projects", function(req, res) {
    res.render("projects");
})

app.get("/about", function(req, res) {
    res.render("about");
})

app.listen(3000, function() {
    console.log("Server started on port 3000");
})