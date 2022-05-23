const express = require("express");
const app = express();
const PORT = process.eventNames.PORT || 3000;
const path = require("path");

app.use(express.static("public"));

app.get('/', function (req, res){
  res.sendFile(path.join(__dirname, '/views/index.html'))
});

app.listen(PORT, function() {console.log(`Servidor corriendo en el puerto ${PORT}`)});