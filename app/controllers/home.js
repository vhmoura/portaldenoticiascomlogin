module.exports.index = function(application, req, res){
	var noticiasModel = new application.app.models.noticiasDAO();

	noticiasModel.getNoticias(function(error, result){
            res.render("home/index", {noticias: result}); 
	});	   
}