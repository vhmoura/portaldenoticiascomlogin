module.exports.formulario_inclusao_noticia = function(application, request, response){
    response.render('admin/form_add_noticia', {validacao: {}, noticia: {}});
};

module.exports.noticias_salvar = function(application, req, res){
		var noticia = req.body;
	   	// validator
	   	req.assert('titulo', 'Titulo é obrigatório').notEmpty();	
	   	req.assert('resumo', 'resumo é obrigatório').notEmpty();
	   	req.assert('resumo', 'resumo deve conter entre 10 e 100').len(10, 100);
	   	req.assert('autor', 'autor é obrigatório').notEmpty();

	   	var errors = req.validationErrors();
	   	console.log(errors);	
	   	if (errors){
	   		res.render('admin/form_add_noticia', {validacao: errors, noticia: noticia});
	   		return;
	   	}

	    var noticiasModel  = new application.app.models.noticiasDAO();

	    noticiasModel.salvarNoticia(noticia, function(error, result){
			res.redirect("/noticias");
		});
}
