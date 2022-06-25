const express = require("express");
const app = express();
const PORT = process.eventNames.PORT || 3000;
const path = require("path");
const methodOverride = require('method-override');

const mainRoutes = require('./routes/mainRoutes');
const productsRoutes = require('./routes/productsRoutes');
const admRoutes = require('./routes/admRoutes');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.static(path.join(__dirname, '../public')));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(methodOverride('_method'));

app.use('/', mainRoutes);
app.use('/products', productsRoutes);
app.use('/adm', admRoutes);

app.listen(PORT, function () { console.log(`Servidor corriendo en el puerto ${PORT}`) });