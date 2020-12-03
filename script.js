var express = require('express');
var app = express();
var fs = require('fs');
const multer = require('multer');
const path = require('path');


app.get('/', function (req, res) {
  res.sendFile('/Users/pjher/WebWorkspace/FirmaDocuments/index.html');
 // C:/Users/pjher/WebWorkspace/FirmaDocuments/index.html
});

app.listen(3000, function () {
  console.log('listening to port 3000! ');
});



