//const User = require("../models1/users");
const path = require('path');
const fs = require('fs');
const bcrypt = require('bcryptjs');
const cookies = require('cookie-parser');
const db = require('../database/models');
const { Op } = require("sequelize");
const { stringify } = require("querystring");
const { parse } = require('path');

const usersDbPath = path.join(__dirname, "../db/users.json");

const readJsonFile = (path) => {
    const data = fs.readFileSync(path, "utf-8");
    const dataParsed = JSON.parse(data);
    return dataParsed;
}


const controller = {

    loginProcess: (req, res) => {

        db.User.findOne({
            where: { email: req.body.email }
        })
            .then(userToLogin => {
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
                            msg: 'No se encuentra el email en nuestra base de datos'
                        }
                    }

                })
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
        const passHasheada = bcrypt.hashSync(req.body.password, 10)
        db.User.create({
            first_name: req.body.name,
            last_name: req.body.lastname,
            user_name: req.body.username,
            email: req.body.email,
            password: passHasheada,
            category_user: req.body.category,
            images: req.file?.filename || 'default.jpg'

        })
            .then(() => {
                return res.redirect('../')
            })
            .catch(error => res.send(error))
        // const users = readJsonFile(usersDbPath);
    },
    listUser: function (req, res) {
        db.User.findAll()
            .then(usuarios => res.render('../views/users/userList', { usuarios }))
    },
    update: function (req, res) {
        db.User.findByPk(req.params.id)
            .then(user => res.render('../views/users/userUpdate', { user }))
    },

    update_save: function (req, res) {
        //return console.log(req.body.name)
        db.User.update({

            first_name: req.body.name,
            last_name: req.body.lastname,
            user_name: req.body.username,
            email: req.body.email,
            category_user: req.body.category,
            images: req.file?.filename || req.body.images
        },

            { where: { user_id: req.params.id } }
        )
            .then(() => {
                return res.redirect("/users/list")
            })
            .catch(error => res.send(error))
        // const users = readJsonFile(usersDbPath);
    },

    userView: function (req, res) {
        db.User.findByPk(req.params.id)
            .then(user => res.render('../views/users/userView', { user }))
    },



    borrar: function (req, res) {
        db.User.destroy({

            where: {
                user_id: req.params.id
            }
        });
        res.redirect("/users/list")
    }

}

module.exports = controller