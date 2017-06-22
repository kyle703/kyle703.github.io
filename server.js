/* Load dependency */
var express = require('express');
var app = express();
var router = express.Router();

/* Store views in current working directory */
var path = __dirname + '/views/';

/* HTTP request type */
router.use(function(req, res, next) {
    console.log("/" + req.method);
    next();
});

router.get("/", function(req, res) {
    res.sendFile(path + "index.html");
});

/* Use the defined Route for index */
app.use("/", router);

/* Incoming request does not match the Route */
app.use("*", function(req, res) {
    res.sendFile(path + "404.html");
});

app.listen(8008, function() {
    console.log("Server successfully started.");
});
