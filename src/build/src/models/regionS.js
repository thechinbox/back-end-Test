"use strict";
let mongooseR = require("mongoose");
const regionSchema = mongooseR.Schema({
    nombre: {
        type: 'string'
    }
});
module.exports = mongooseR.model('region', userSchema);
