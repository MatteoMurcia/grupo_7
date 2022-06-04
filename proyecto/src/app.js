const express = require("express");
const app = express();
const PORT = process.eventNames.PORT || 3000;
const path = require("path");
const mainRoutes = require('./routes/mainRoutes')

app.set('views engine', 'ejs')

app.use(express.static(path.join(__dirname, '../public')));

app.use('/', mainRoutes);
app.use('/login', mainRoutes);
app.use('/carrito', mainRoutes);
app.use('/detalle', mainRoutes);
app.use('/register', mainRoutes);


app.listen(PORT, function() {console.log(`Servidor corriendo en el puerto ${PORT}`)});