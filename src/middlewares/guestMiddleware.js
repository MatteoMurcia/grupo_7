function guestMiddleware(req, res, next) {

    if (req.session.userLoggen) {
        return res.redirect('/users/userView')
    }
    next();

}
module.exports = guestMiddleware;