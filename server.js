var express = require('express');
var cors = require('cors');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
//var cookieParser = require('cookie-parser');
var flash = require('connect-flash');
//var multer = require('multer');
var passport = require('passport');
var session = require('express-session');
var FacebookStrategy = require('passport-facebook').Strategy;
//var localStrategy = require('passport-local').Strategy;
var app = express();
var countryCtrl = require('./controllers/countryCtrl');

var CtrlLists = require('./controllers/CtrlLists');

var warningCtrl = require('./controllers/warningCtrl');

//require('./config/passport')(passport);

app.use(bodyParser.json());
app.use(cors());


app.use(session({secret: 'i love donuts'}));

app.use(passport.initialize());

app.use(passport.session());

app.use(flash());
passport.use(new FacebookStrategy({
	clientID: '1049716415053026',
	clientSecret: '37171fb52a1a2820e3c3741cfeb42b09',
	callbackURL: 'http://localhost:7000/auth/facebook/callback'
}, function(token, refreshToken, profile, done){
	return done(null, profile);
}));

var requireAuth = function(req, res, next) {
	if (req.isAuthenticated()) {
		return next();
	}
	return res.redirect('/login');
};




app.get('/auth/facebook', passport.authenticate('facebook'));
app.get('/auth/facebook/callback', passport.authenticate('facebook', {
	successRedirect: '/#lists',
	failureRedirect: '/auth/facebook'
}), function(req, res) {
	console.log(req.session);
});

passport.serializeUser(function(user, done) {
	done(null, user);
});

passport.deserializeUser(function(obj, done) {
	done(null, obj);
});

app.get('/login', function(req, res) {
	res.send(JSON.stringify(req.user));
});



app.use(express.static(__dirname + '/public'));

//routes
app.post('/country', countryCtrl.create);
app.get('/country', countryCtrl.read);
app.put('/country/:id', countryCtrl.update);
app.delete('/country/:id', countryCtrl.delete);
//Lists
app.post('/lists', CtrlLists.create);
app.get('/lists', CtrlLists.read);
app.put('/lists/:id', CtrlLists.update);
app.delete('/lists/:id', CtrlLists.delete);

app.get('/travelWarning', warningCtrl.read);
app.post('/travelWarning', warningCtrl.create);

//require('./config/routes.js')(app, passport);


var port = 7000;
var mongoUri = 'mongodb://bert:adminpassword@ds033163.mongolab.com:33163/travel-site';

mongoose.set('debug', true);
mongoose.connect(mongoUri);
mongoose.connection.once('open', function() {
  console.log('connected to mongoDB at: ', mongoUri);
});

app.listen(port, function() {
  console.log('connected to: ', port);
});