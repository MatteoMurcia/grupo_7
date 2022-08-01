const express = require("express");
const app = express();
const PORT = process.eventNames.PORT || 3000;
const path = require("path");
const methodOverride = require('method-override');
const session = require("express-session");
const cookies = require('cookie-parser')


const mainRoutes = require('./routes/mainRoutes');
const productsRoutes = require('./routes/productsRoutes');
const admRoutes = require('./routes/admRoutes');
const usersRoutes = require('./routes/usersRoutes');
const validationLogin = require("./middlewares/validationLogin");
const userLoggedMiddleware = require('./middlewares/userLoggedMiddleware');

app.use(cookies())

app.use(session({
    secret: "Esto es un secreto",
    resave: false,
    saveUninitialized: false,
}));


app.use(userLoggedMiddleware);
//app.use(validationLogin);

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.static(path.join(__dirname, '../public')));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(methodOverride('_method'));

app.use('/', mainRoutes);
app.use('/products', productsRoutes);
app.use('/adm', admRoutes);
app.use('/users', usersRoutes);


app.listen(PORT, function () { console.log(`Servidor corriendo en el puerto ${PORT}`) });