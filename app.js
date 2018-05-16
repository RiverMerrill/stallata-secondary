const express = require('express');
const app = express();
const path = require('path');
const server = require('http').Server(app);
//const gpio = require('onoff').Gpio;
const socket = require('socket.io')(server);
//const sensor = new gpio(2, 'in', 'both');

sensor.watch(function(err, val){
	if(val == 0){
		socket.emit('update', {occupied: true});
	} else{
		socket.emit('update', {occupied: false});
	}
})	
server.listen(1337, _ => console.log('listening'));
