 var mongoose = require('mongoose');
 var connection;

 module.exports = function(uri) {
 	if(!connection) {
		connection = mongoose.connect(uri);
	}

	mongoose.connection.on('connected', function() {
		console.log('Mongoose! Conectado em ' + uri);
	});

	mongoose.connection.on('disconnected', function() {
		console.log('Mongoose! Desconectado de ' + uri);
	});

	mongoose.connection.on('error', function(erro) {
		console.log('Mongoose! Erro na conexão: ' + erro);
	});

	return connection;
 }