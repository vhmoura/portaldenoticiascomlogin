module.exports = function(application, passport) 
{
    application.get('/login', function(req, res) {

        // render the page and pass in any flash data if it exists
        res.render('login/login', { message: req.flash('loginMessage') }); 
    });
    
application.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });



function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on 
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}
        
}