const express = require("express");
const mongoose = require('mongoose');
const routes = require('./routes');
const app = express();
const bodyParser = require('body-parser');


const url = "mongodb://localhost/myapp";
let mongoDB = process.env.MONGODB_URI || url;
mongoose.connect(mongoDB,{useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on("error", console.error.bind(console, "Erro na Ligação ao MongoDB"));
db.on("open", console.error.bind(console, "connected"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', routes);

app.listen(8888,  () => {
  console.log("Servidor em execução")});
