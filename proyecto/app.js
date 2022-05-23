const express = require("express");
const app = express();
const PORT = process.eventNames.PORT || 3000;
const path = require("path");

app.use(express.static("public"));

app.get('/', function (req, res){
    res.sendFile(path.join(__dirname, '/views/index.html'))
<<<<<<< HEAD
=======
});

app.get('/detalle', function (req, res){
    res.sendFile(path.join(__dirname, '/views/detalle.html'))
>>>>>>> e96fb6ba5bf9c0c8f495b82dc3164b07bb5892d2
});

app.listen(PORT, function() {console.log('Servidor corriendo en el puerto ${PORT}')});