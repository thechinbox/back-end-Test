"use strict";
const region = express.Router();
let regionS = require("../models/regionS");
//crear usuario
region.post("/upregion", (req, res) => {
    userS(req.body)
        .save().
        then((data) => res.json(data))
        .catch((err) => res.json(err));
});
module.exports = region;
