


module.exports = function(app){

	var controller = app.controllers.controller;
	app.post('/create', controller.create);
	app.put('/update', controller.update);
	app.delete('/delete',controller.delete);
	app.get('/search',controller.search);
	app.get('/get/:id',controller.get);

}
