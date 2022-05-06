const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');
//For views and templates using express-handlebars
const exhbs = require('express-handlebars');
//To get directory paths use path library
const path = require('path');

//Create handlebars with helpers
const hbs = exhbs.create();

const app = express();
const PORT = process.env.PORT || 3001;

//express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,'public')));

//handlebar engine setup
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// turn on routes
app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening at ${PORT}`));
});