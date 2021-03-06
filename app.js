const express = require('express');
const app = express();
const path = require('path');
const server = require('http').Server(app);
const gpio = require('onoff').Gpio;
const socket = require('socket.io')(server);
const sensor = new gpio(2, 'in', 'both');

socket.on('connection', _ => {
	console.log('connected2');
	sensor.read((err, val) => {
		if(val == 0){
			socket.emit('update', {occupied: true});
		} else{
			socket.emit('update', {occupied: false});
		}
	})
})
	
sensor.watch(function(err, val){
	if(val == 0){
		socket.emit('update', {occupied: true});
	} else{
		socket.emit('update', {occupied: false});
	}
})	
server.listen(1337, () => console.log('listening'));
