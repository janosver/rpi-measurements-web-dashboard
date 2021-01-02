# rpi-measurements-web-dashboard
Web dashboard to view sensor measurements using [rpi-measurements-api](https://github.com/janosver/rpi-measurements-api)

![rpi-measurements-web-dashboard screenshot](https://github.com/janosver/rpi-measurements-web-dashboard/blob/main/screenshot.png)

## Configuration
Create a directory called `config` and within that a file called `config.js` and add the following 
```
module.exports = {
    rpiMeasurementsApi :"http://<url to the rpi-measurements-api>:<port - optional>",
    device: "<name of your device which is taking the measurements>"
  };
```

## Running the web app
```
node app.js
```