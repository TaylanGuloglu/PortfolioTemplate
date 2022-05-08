const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session')
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');
const methodOverride = require('method-override');

const pageRoute = require('./routes/pageRoute');
const projectRoute = require('./routes/projectRoute');

const app = express();

//Db Connection
mongoose
  .connect('mongodb://localhost/freelance-db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //useFindAndModify: false,
    //useCreateIndex: true
  })
  .then(() => {
    console.log('SUCCESSFUL DB CONNCECTION');
  });

//Template Engine
app.set('view engine', 'ejs');

///Middlewares
app.use(express.static('public'));
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(
  session({
    secret: 'my_keyboard_cat',
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({ mongoUrl: 'mongodb://localhost/freelance-db' }),
  })
);
app.use(flash());
app.use((req, res, next) => {
  res.locals.flashMessages = req.flash();
  next();
});
app.use(
  methodOverride('_method', {
    methods: ['POST', 'GET'],
  })
);

//Routes
app.use('/', pageRoute);
app.use('/portfolio', projectRoute);
app.use('/add', projectRoute)
//app.use('/portfolio', projectRoute);



//SERVER PORT
const port = 3000;
app.listen(port, () => {
  console.log(`Server listen port ${port}...`);
});
