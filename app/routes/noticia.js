module.exports = function(app)
{
	app.get('/noticia', function(req, res)
	{
	    var connection = app.config.dbconnection;	
	    var noticiaModel = new app.app.models.noticiasDAO(connection);
	    noticiaModel.getNoticia(function(error, result){
			res.render("noticias/noticia", {noticia: result});
		});
	});
};