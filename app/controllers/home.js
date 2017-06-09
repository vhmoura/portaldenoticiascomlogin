module.exports.index = function(application, req, res){
	var connection =  application.config.dbconnection;
	var noticiasModel = new application.app.models.noticiasDAO(connection);

	noticiasModel.getNoticias(function(error, result){
            res.render("home/index", {noticias: result}); 
	});	   
}