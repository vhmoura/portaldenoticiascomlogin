var express = require('express');
var app = express();

var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var passport = require('passport');
//var passportlocal = require('passport-local');
var session = require('express-session');
var flash = require('connect-flash');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/PortalNoticias');


require('./passport')(passport);

app.set('view engine', 'ejs');
app.set('views', './app/views');
app.use(express.static('./app/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressValidator());
app.use(session({ secret: 'ilovescotchscotchyscotchscotch' })); 
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

require('./../app/routes/login')(app, passport);
require('./../app/routes/signup')(app, passport);


// definindo as rotas numa tacada só
consign()
	.include('app/routes')
	.then('app/models')
	.then('app/controllers')
	.into(app);

module.exports = app;
