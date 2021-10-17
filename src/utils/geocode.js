const request = require('request');


const geocode = function(address, callback){
	const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ address +'.json?access_token=pk.eyJ1Ijoic2F3YW5wYXJ1dGhpcHFyIiwiYSI6ImNrdGxibWNuaTF0eWwycm1wOXA4bmdzYTcifQ.NRhYMGzC4TseWqu-kCHV-w'

	request({url:url, json:true}, function(error, response){
		if(error){
			callback('unable to connect to loaction services' , undefined)
		}else if(response.body.features.length == 0){
             callback('Unable to fing location, try another search' , undefined)

		}else{
			callback(undefined, {
				latitude: response.body.features[0].center[1],
				longitude: response.body.features[0].center[0],
				location: response.body.features[0].place_name
			})
		}
	})
}

module.exports = geocode;