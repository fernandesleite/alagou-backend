const express = require("express");
const mongoose = require('mongoose');
const routes = require('./routes');
const app = express();
const bodyParser = require('body-parser');


let mongoDB = process.env.MONGODB_URI;
mongoose.connect(mongoDB,{useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection to Database Failed"));
db.on("open", console.error.bind(console, "Connection to Database was successfully established"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', routes);

app.listen(process.env.PORT || 3000,  () => {
  console.log("Servidor em execução")});
