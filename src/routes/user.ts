let express2= require('express')
const usuariosC = express2.Router();
let userS = require("../models/userS");

//crear usuario
usuariosC.post("/signup", (req:any,res:any)=>{
    userS(req.body)
    .save().
    then((data:any)=>res.json(data))
    .catch((err:any) => res.json(err,'puta la wea'))
})

module.exports = usuariosC;