const User = require("../models/users");
const path = require('path');
const fs = require('fs');

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
            let isOk = req.body.password === userToLogin.password ? true : false;
            /* let isOk = bcryptjs.compareSync(req.body.password, userToLogin.password);  */
            if (isOk) {
                delete userToLogin.password;
                req.session.userLoggen = userToLogin;

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
    },
    registerView: function (req, res) {
        res.render('../views/users/register')
    },
    register: (req,res)=>{
        const users = readJsonFile(usersDbPath);

        let user = {
            id : users[users.length-1].id + 1,
            first_name: req.body.name,
            last_name: req.body.lastname,
            user_name: req.body.username,
            email: req.body.email,
            password: req.body.password,
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