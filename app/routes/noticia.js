module.exports = function(app)
{
	app.get('/noticia', function(req, res)
	{
	    var noticiaModel = new app.app.models.noticiasDAO();
		var url_query = req.query;	
		var id = url_query.id;
		console.log('id: ' + id); 		
	    noticiaModel.getNoticia(id, function(error, result){
			res.render("noticias/noticia", {noticia: result});
		});
	});
};