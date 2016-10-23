module.exports = function(){

		var mongoose = require('mongoose')
	,	Schema = mongoose.Schema;

	var modelSchema = Schema({
		nome: {type: String, default:'', require: true}

	});

	return mongoose.model('Model', modelSchema);
}
