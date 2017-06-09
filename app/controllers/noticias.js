module.exports.noticias = function(application, req, res){
 		var connection = application.config.dbconnection;	
	  var noticiasModel  = new application.app.models.noticiasDAO(connection);

	  noticiasModel.getNoticias(function(error, result){
			res.render("noticias/noticias", {noticias: result});
		});			
}

module.exports.noticia = function(application, req, res){
	  var connection = application.config.dbconnection;	
	  var noticiaModel = new application.app.models.noticiasDAO(connection);
    var url_query = req.query;	
   	var id = url_query._id;
    console.log('id: ' + id); 
	  noticiaModel.getNoticia(function(error, result){
			res.render("noticias/noticia", {noticia: result});
		});
}
