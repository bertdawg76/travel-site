var express = require('express');
var cors = require('cors');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var countryCtrl = require('./controllers/countryCtrl');

var app = express();

app.use(bodyParser.json());
app.use(cors());


//app.use(express.static(__dirname + '/public'));


app.post('/country', countryCtrl.create);
app.get('/country', countryCtrl.read);
app.put('/country/:id', countryCtrl.update);
app.delete('/country/:id', countryCtrl.delete);


var port = 7000;
var mongoUri = 'mongodb://localhost:27017/travel-site';

mongoose.set('debug', true);
mongoose.connect(mongoUri);
mongoose.connection.once('open', function() {
  console.log('connected to mongoDB at: ', mongoUri);
});

app.listen(port, function() {
  console.log('connected to: ', port);
});