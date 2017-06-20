module.exports = function(application, passport) 
{
application.get('/signup', function(req, res) {

        // render the page and pass in any flash data if it exists
        res.render('signup.ejs', { message: req.flash('signupMessage') });
    });

//    application.post('/signup', passport.authenticate('local-signup', {
//         successRedirect : '/', // redirect to the secure profile section
//         failureRedirect : '/signup', // redirect back to the signup page if there is an error
//         failureFlash : true // allow flash messages
//     }));


}