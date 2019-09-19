const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const http = require('http');
const api = require('./routes/api')
mongoose = require('mongoose');
cors = require("cors");

mongoose.Promise = global.Promise;
const username = "bjnhv13", password = "bjnhv!23" // save in config later
// setup mongo connection with mongoose middlewere
mongoose.connect(`mongodb+srv://${username}:${password}@skeleton-react-db-eapz0.mongodb.net/fullstack?retryWrites=true&w=majority`,
  {
     useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(
  () => {console.log('Database is connected') },
  err => { console.log('Can not connect to the database'+ err)}
);
  
const port = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use( function(req, res, next) { // allow CORS frpm local machine
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:4200");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
  next();
});


app.use("/api", api); // route for users

app.get("/test", (req, res) => {
  console.log("got get request");
    res
      .send({msg:"hello world im testing my fullstack tripplite app"});
})


app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
