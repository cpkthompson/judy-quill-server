var express = require("express");
var bodyParser = require('body-parser');


const { convertHtmlToDelta } = require('node-quill-converter');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3000, () => {
    console.log("Server running on port 3000");
});

app.post('/', function(req, res) {
    var caseHtmlString = req.body.case;
    res.json(convertHtmlToDelta(caseHtmlString))
});