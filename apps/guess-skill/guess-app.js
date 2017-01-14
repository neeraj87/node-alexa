var alexa = require('alexa-app');
var app = new alexa.app('guess-skill');

app.launch(function(req, res){
	res.say('Welcome to PDC. Guess a number from 1 to 10');
});

module.exports = app;
