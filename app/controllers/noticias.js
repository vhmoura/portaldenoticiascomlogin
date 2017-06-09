module.exports.noticias = function(application, req, res){
	  var noticiasModel  = new application.app.models.noticiasDAO();

	  noticiasModel.getNoticias(function(error, result){
			res.render("noticias/noticias", {noticias: result});
		});			
}

module.exports.noticia = function(application, req, res){
	  var noticiaModel = new application.app.models.noticiasDAO();
    var url_query = req.query;	
   	var id = url_query.id;
    console.log('id: ' + id); 
	  noticiaModel.getNoticia(id, function(error, result){
			res.render("noticias/noticia", {noticia: result});
		});
}
