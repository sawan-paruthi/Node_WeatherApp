const req = require('request');

const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

// const url = 'http://api.weatherapi.com/v1/current.json?key=386b7693f1934bfca1a71230211509&q=28.6,77.2&aqi=no';

geocode('new delhi, india', function(error,data){
	if(error){
		 return console.log(error);
	}else{
		const latitude = data.latitude;;
		const longitude = data.longitude;

		forecast(latitude, longitude, function(error, fdata){
	         if(error){
		          return  console.log(error)
	          }else{
	          	console.log(data.location);
		        console.log(fdata);
	          }
})
	}





}) 





