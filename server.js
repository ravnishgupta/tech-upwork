const path = require('path');
const express = require('express');
const session = require('express-session');
const exhbs = require('express-handlebars');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;



const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: 'hjdhkjkng8dnsb9hsg676hjg',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({db: sequelize})
};

app.use(session(sess));

const hbs = exhbs.create();

//express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,'public')));

//handlebar engine setup
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// turn on routes
app.use(require('./controllers/'));

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening at ${PORT}`));
});