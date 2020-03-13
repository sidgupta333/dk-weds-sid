var express = require("express");

var app = express();
app.use(express.static('public'));

// app.get('/', () => {})


var server = app.listen(process.env.PORT || 5000, function() {
    var port = server.address().port;
    console.log(`Server started at ${server}, ${port}`);
});