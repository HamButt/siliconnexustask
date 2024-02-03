const route = require('express').Router();
const userCtrl = require('../controllers/user.controller')
const bodyParser = require('body-parser')
const encoder = bodyParser.urlencoded({extended: false})

route.post('/signUp',encoder, userCtrl.userSignup);
route.post('/signIn',encoder, userCtrl.userLogin);

module.exports = route