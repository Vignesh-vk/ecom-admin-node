const express = require('express');
const Router = express.Router();
const DB = require("../../models/db")
const HELPERFUNC = require('../../models/commonfunctions');
const jwt = require('jsonwebtoken');

Router.post('/isAuth',function(req,res){
    const response={
        status: 1,
        message: 'Success'
    }
    let login={
        username: req.body.email,
        password: req.body.password
    }
    let privateKey= 'vignesh';

    let token = jwt.sign(login, privateKey, {expiresIn: '1h'});
    response.webToken=token;
    res.send(response)
})

module.exports=Router;
