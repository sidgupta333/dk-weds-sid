var express = require("express");

var app = express();
app.use(express.static('public'));

// app.get('/', () => {})


var server = app.listen(8081, function() {
    var port = server.address().port;
    console.log("Server started at http://localhost:%s", port);
});