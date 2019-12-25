var request = require("request");

// request('http://www.google.com', function(error, response, body) {
// 	if(error) {
// 		console.log("SOMETHING WENT WRONG!");
// 		console.log(error);
// 	} else {
// 		if(response.statusCode == 200) {
// 			console.log(body);
// 		}
// 	}
// });

request('https://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400', function(error, response, body){
	if(!error && response.statusCode == 200) {
		var parsedData = JSON.parse(body);
		console.log("Sunrise at ...");
		console.log(parsedData.results.sunrise);
		console.log("Sunset at ...");
		console.log(parsedData["results"]["sunset"]);
	}
});