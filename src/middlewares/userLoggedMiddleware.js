const User = require('../models1/users')



function userLoggedMiddleware(req, res, next) {
    res.locals.islogged = false;

    let emailInCookie = req.cookies.usercookie;
    let userFromCookie = User.findByField('email', emailInCookie);

    if (userFromCookie) {
        req.session.userLogged = userFromCookie;
    }


    if (req.session && req.session.userLogged) {
        res.locals.islogged = true;
        res.locals.userLogged = req.session.userLogged
    }

    next();
}
module.exports = userLoggedMiddleware