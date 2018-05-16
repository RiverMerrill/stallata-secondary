const express = require('express');
const app = express();
const path = require('path');
const server = require('http').Server(app);
const gpio = require('onoff').Gpio;
const socket = require('socket.io-client')('http://10.0.0.62:1337');
const sensor = new gpio(2, 'in', 'both');

sensor.watch(function(err, val){
	if(val == 0){
		socket.emit('update', {secondary: true});
	} else{
		socket.emit('update', {secondary: false});
	}
})	
server.listen(1337, _ => console.log('listening'));
