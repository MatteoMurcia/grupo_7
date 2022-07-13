const User = require("../models/users");


const controller = {

    loginProcess: (req, res) => {
        let userToLogin = User.findByField('email', req.body.email);

        if (userToLogin) {
            let isOk = req.body.password === userToLogin.password ? true : false;
            /* let isOk = bcryptjs.compareSync(req.body.password, userToLogin.password);  */
            if (isOk) {
                delete userToLogin.password;
                req.session.userLoggen = userToLogin;
                res.cookie('User',userToLogin)
                return res.redirect('userView');

            }
            return res.render('users/login', {
                errors: {
                    email: {
                        msg: 'Las credenciales son invalidas'
                    }
                }

            })

        }
        return res.render('users/login', {
            errors: {
                email: {
                    msg: 'No se encuetra el email en nuestra base de datos'
                }
            }

        })
    },
    profile: (req, res) => {

        return res.render("users/userView",
            {
                user: req.session.userLoggen
            })
    },
    login: (req, res) => {

        res.render('users/login');

    },
    logout: (req, res) => {
        req.session.destroy();
        return res.redirect('/');
    }
}

module.exports = controller