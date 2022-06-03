import {express} from '../index.js';

const publishC = express.Router();
let publicationS = require("../models/publicationS");

//crear usuario
publishC.post("/publish", (req:any,res:any)=>{
    publicationS(req.body)
    .save().
    then((data:any)=>res.json(data))
    .catch((err:any) => res.json(err,'puta la wea'))
})

module.exports = publishC;