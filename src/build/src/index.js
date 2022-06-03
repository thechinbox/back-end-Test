"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.express = void 0;
exports.express = require('express');
const app = (0, exports.express)();
const mongoose = require("mongoose");
const usuarios = require("./routes/user");
require('dotenv').config();
app.set('port', '8080');
app.use(exports.express.json());
app.use('/', usuarios);
app.listen(app.get('port'), () => {
    console.log("Welcome to my API");
});
mongoose
    .connect('mongodb+srv://user1:0gWv6USyxnKovRBo@cluster0.cvp5f.mongodb.net/Subaster?retryWrites=true&w=majority')
    .then(() => console.log("YEP"))
    .catch((error) => console.log(error));
