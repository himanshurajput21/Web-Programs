var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var request = require("request");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.get("/", function(req, res){
	res.render("form");
});


app.get("/results", function(req, res){
	var movie = req.query.movie;
	// console.log(req.body);
	// res.redirect("http://www.omdbapi.com/?s=" + movie + "&apikey=thewdb ");
	request("http://www.omdbapi.com/?s=" + movie +"&apikey=thewdb", function(error, response, body){
		var data = JSON.parse(body);
		res.render("results", {data: data});
	});
});

app.listen(5000, function(){
	console.log("Server Started!");
});