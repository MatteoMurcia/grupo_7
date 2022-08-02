function guestMiddleware(req, res, next) {

    if (req.session.userLogged) {
        return res.redirect('/users/userView')
    }
    next();

}
module.exports = guestMiddleware;