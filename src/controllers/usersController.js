const User = require("../models/users");
const path = require('path');
const fs = require('fs');
const bcrypt = require('bcryptjs');
const cookies = require('cookie-parser')


const usersDbPath = path.join(__dirname, "../db/users.json");

const readJsonFile = (path) => {
    const data = fs.readFileSync(path, "utf-8");
    const dataParsed = JSON.parse(data);
    return dataParsed;
}


const controller = {

    loginProcess: (req, res) => {
        let userToLogin = User.findByField('email', req.body.email);

        if (userToLogin) {
            let isOk = bcrypt.compareSync(req.body.password, userToLogin.password);
            if (isOk) {
                delete userToLogin.password;
                req.session.userLogged = userToLogin;
                // console.log(req.body.chkRecordame)
                if (req.body.chkRecordame) {
                    res.cookie('usercookie', req.body.email, { maxAge: (1000 * 60) * 2 })
                }

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
                user: req.session.userLogged
            })
    },
    login: (req, res) => {

        res.render('users/login');

    },
    logout: (req, res) => {
        res.clearCookie('usercookie')
        req.session.destroy();
        return res.redirect('/');
    },
    registerView: function (req, res) {
        res.render('../views/users/register')
    },
    register: (req, res) => {
        const users = readJsonFile(usersDbPath);
        const passHasheada = bcrypt.hashSync(req.body.password, 10)

        let user = {
            id: users[users.length - 1].id + 1,
            first_name: req.body.name,
            last_name: req.body.lastname,
            user_name: req.body.username,
            email: req.body.email,
            password: passHasheada,
            category: "user",
            image: req.file?.filename || 'default.jpg'
        }
        users.push(user)
        newUsers = JSON.stringify(users)
        fs.writeFileSync(usersDbPath, newUsers)
        return res.redirect('../')

    }
}

module.exports = controller