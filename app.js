var app = require('./config/server');

// entry points
//var rotaHome = require('./app/routes/home')(app);
//var rotaNoticias = require('./app/routes/noticias')(app);
//var rotaInclusaoNoticias = require('./app/routes/formulario_inclusao_noticias')(app);


app.listen(3000, function()
{
   console.log("server on");  
});