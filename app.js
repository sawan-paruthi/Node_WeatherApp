const express = require("express");
const path = require("path");
const hbs = require("hbs");
const req = require('request');
const geocode = require('./src/utils/geocode');
const forecast = require('./src/utils/forecast');

const app = express();


//paths for Express Config
const publicdirpath = path.join(__dirname, 'public');
const viewspath = path.join(__dirname, 'templates/views');
const partialspath = path.join(__dirname, 'templates/partials');


//handlebars engine and views path
app.set('view engine' , 'hbs');
app.set('views' , viewspath);
hbs.registerPartials(partialspath);

//setup staic directory to serve

app.use(express.static(publicdirpath));

//routes

app.get('/', function(req,res){
  res.render('index', {
    title: 'WeatherApp'
  })
})


app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: 'You must provide an address!'
        })
    }

    geocode(req.query.address, (error, { latitude, longitude, location } = {}) => {
        if (error) {
            return res.send({ error })
        }

        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return res.send({ error })
            }
            console.log(forecastData.current.condition)

            res.send({
                forecast: forecastData,
                location,
                address: req.query.address
            })
        })
    })
})




app.get('/help', function(req,res){
    res.render('help', {
    	helpText: 'Reach here if you need some help' 
    });
});

app.get('/about', function(req,res){
	res.render('about');
})




app.get('*', function(req,res){
	res.render('404')
});



//server
app.listen(3000, function(error){
      if(error){
      	console.log(error);
     }else{
     	console.log("server started");
     }


})