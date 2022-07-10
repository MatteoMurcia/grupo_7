function userLoggedMiddleware(req, res, next) {
    res.locals.islogged = false;

    if (req.session && req.session.userLoggen) {
        res.locals.islogged = true;
        res.locals.userLogged = req.session.userLoggen
    }

    next();
}
module.exports = userLoggedMiddleware