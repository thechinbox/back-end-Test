const region = express.Router();
let regionS = require("../models/regionS");

//crear usuario
region.post("/upregion", (req:any,res:any)=>{
    userS(req.body)
    .save().
    then((data:any)=>res.json(data))
    .catch((err:any) => res.json(err))
})

module.exports = region;