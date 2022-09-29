const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');
const flash = require('connect-flash');
const session = require('express-session');
const MySQLStore = require('express-mysql-session');
const orm = require('./config/database.orm');

const { database } = require('./keys');

//initializations
const app = express();

//settings
app.set('port', process.env.PORT || 3500);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    defaultlayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',
    helpers: require('./lib/handlebars')
}));
app.set('view engine', '.hbs');

//Middlewares
app.use(session({
    secret: 'faztmysqlnodemysql',
    resave: false,
    saveUninitialized: false,
    store: new MySQLStore(database)
  }));
app.use(flash());
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());


//Global variables
app.use((req, res, next) => {
    app.locals.success = req.flash('success');
    next();
});

//routes
app.use(require('./routes'));
app.use(require('./routes/authentication'));
app.use('/dts',require('./routes/dts.routes'));
app.use('/players',require('./routes/players.routes'));




//public
app.use(express.static(path.join(__dirname, 'public')));

//starting the server
app.listen(app.get('port'), () => {
    console.log('Server is in port', app.get('port'));
});