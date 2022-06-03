"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_js_1 = require("../index.js");
const publishC = index_js_1.express.Router();
let publicationS = require("../models/publicationS");
//crear usuario
publishC.post("/publish", (req, res) => {
    publicationS(req.body)
        .save().
        then((data) => res.json(data))
        .catch((err) => res.json(err, 'puta la wea'));
});
module.exports = publishC;
