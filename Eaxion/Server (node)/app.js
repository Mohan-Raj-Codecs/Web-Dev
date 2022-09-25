var express = require("express");
var path = require("path");
var app = express();
var bodyparser = require('body-parser');
//var routes = require("./routes/routes");
//HTTPS
const https = require("https");
const fs = require("fs");
const options = {
      key: fs.readFileSync("./cert/private.key"),
      cert: fs.readFileSync("./cert/certificate.crt"),
      ca: [
	fs.readFileSync('./cert/ca_bundle.crt')
]
    }

//Port Assign
app.set("port",process.env.PORT || 443)

//Rendering Engine Set
app.set("views", path.join(__dirname, "views"));
app.set("view engine","ejs");

//Introducing Different Routes to App
app.use("/",require("./routes/web"));
app.use("/api",require("./routes/api"));

//Publically Accessible
app.use(express.static('public'));

//Heyya Start Listening :)
https.createServer(options,app).listen(443, ()=>{
    console.log('server is runing at port 443')
  });
//app.listen(app.get("port"),function(){
//  console.log("Server listening to Port "+app.get("port"));
//})

//Error Handling 404 Not Found
app.use((req, res, next) => {
  res.status(404).render('Error');
});