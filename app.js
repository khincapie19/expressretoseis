var express = require("express");
var app = express();

app.set("view engine", "pug");// configuraciòn para unir con pug
app.set("views", "views"); //  decimos donde queremos guardar esos archivos
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
  res.render("new");
});

app.post('/', (req, res) => {
  res.send(`<h1>Hola ${req.body.name}!</h1>`);
});

app.listen(3000, () => console.log('Listening on port 3000!'));
