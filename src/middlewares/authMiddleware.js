function authMiddleware(req, res, next) {

    if (!req.session.userLoggen) {
        return res.redirect('/login')
    }
    next();

}
module.exports = authMiddleware;