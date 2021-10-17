const request = require('request');

const forecast = function(latitude, longitude, callback){

	     const url = 'http://api.weatherapi.com/v1/current.json?key=386b7693f1934bfca1a71230211509&q=' + latitude + ',' + longitude + '&aqi=no';
         
         request({url: url}, function(error, response){
                 if(error){
                	callback('unable to connect to weather services', undefined)

                 }else if(response.body.error){
                 	callback('unable to connect', undefined);

                 }else{
                 	callback(undefined,  JSON.parse(response.body))
                 }
        });

}

module.exports = forecast;





