const cookies = require('cookie-parser')

function validationLogin(req, res, next) {
    var user = res.cookies.User;
    if (user != undefined) {
        res.locals.islogged = true;
        req.session.userLoggen = user;
        res.locals.userLogged = req.session.userLoggen;
    }

    next();
}
module.exports = validationLogin