# rpi-measurements-web-dashboard
Web dashboard to view sensor measurements using [rpi-measurements-api](https://github.com/janosver/rpi-measurements-api)

![rpi-measurements-web-dashboard screenshot](https://github.com/janosver/rpi-measurements-web-dashboard/blob/main/screenshot.png)

## Configuration
Create a directory called `config` and within that a file called `config.json` and add the following 
```
{
  "rpiMeasurementsApi" :"http://<url to the rpi-measurements-api>:<port - optional>",
  "device" : "<name of your device which is taking the measurements>"
  "port" : "<port number on which the web app should run>"
}
```

Example `config.json` file
```
{
  "rpiMeasurementsApi" : "http://raspberrypi:8000",
  "device" : "raspberrypizero",
  "port" : "9000"
}
```

## Running the web app
```
node app.js
```

In your browser open http://raspberrypi:9000 to see the Sensor Dashboard