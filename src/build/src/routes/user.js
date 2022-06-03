"use strict";
let express2 = require('express');
const usuariosC = express2.Router();
let userS = require("../models/userS");
//crear usuario
usuariosC.post("/signup", (req, res) => {
    userS(req.body)
        .save().
        then((data) => res.json(data))
        .catch((err) => res.json(err, 'puta la wea'));
});
module.exports = usuariosC;
