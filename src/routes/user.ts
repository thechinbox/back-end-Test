let express2= require('express')
const router = express2.Router();
let userS = require("../models/userS");

//crear usuario
router.post("/usuarios", (req:any,res:any)=>{
    userS(req.body)
    .save().
    then((data:any)=>res.json(data))
    .catch((err:any) => res.json(err,'puta la wea'))
})

module.exports = router;