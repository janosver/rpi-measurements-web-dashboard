const express = require("express");
const exphbs = require('express-handlebars');

const request = require("request");
var dateFormat = require("dateformat");

const app = express();
app.use(express.static(__dirname + "/public"));

const config = require("./config/config.js");
const url = config.rpiMeasurementsApi+'/TempAndHum/'+config.device;

app.set("view engine","hbs");
app.engine ('hbs', exphbs({
  extname: 'hbs',
  defaultLayout: 'index',
  layoutsDir: __dirname+'/views/layouts',
  partialsDir: __dirname+'/views/partials',
}));

app.get("/", (req, res) => {
  request.get(url, (error, response, body) => {
    // get the measurements
    let measurement = JSON.parse(body);
    // format timestamp to be human readable
    measurement.dateTime = dateFormat(measurement.dateTime ,"yyyy-mm-dd HH:MM:ss");
    measurement.multidevice = false;
    // render content
    res.render("main",measurement);
  });
 
});

// set port, listen for requests
app.listen(9000, () => {
  console.log("Server is running on port 9000.");
});