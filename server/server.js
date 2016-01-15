/**
 * Created by joelmiller on 1/15/16.
 */
var express = require('express');

var app = express();

app.use(express.static('server/public'));

app.get('/', function(request, response){
	response.sendFile(__dirname + '/public/views/index.html');
});

app.get('/getMyThing', function(request, response){
	var myThing = [{thing1: 'thing2'}, {thing3:'thing4'}];

	response.send(myThing);
});

var server = app.listen(3000, function(){
	var port = server.address().port;
	console.log('listening on port', port);
});