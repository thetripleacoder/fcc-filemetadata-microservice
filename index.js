var express = require('express');
var cors = require('cors');
require('dotenv').config();
const multer = require('multer');

// const upload = multer({ dest: process.cwd() + '/public/uploads/' });

var app = express();

app.use(cors());
app.use('/public', express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// Solution for 'INTERNAL SERVER ERROR' issue to disable file uploads to github repo: https://github.com/Oluwatomisin-code/Filemetadata-file_uploader__Freecodecamp-Project/blob/master/server.js
app.post('/api/fileanalyse', multer().single('upfile'), function (req, res) {
  // req.file is the name of your file in the form above, here 'uploaded_file'
  // req.body will hold the text fields, if there were any
  console.log(req.file, req.body);
  res.json({
    name: req.file.originalname,
    type: req.file.mimetype,
    size: req.file.size,
  });
});

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port);
});

//  Export the Express API
module.exports = app;
