"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongoose = exports.express = void 0;
exports.express = require('express');
exports.mongoose = require("mongoose");
const app = (0, exports.express)();
const usuarios = require("./routes/user");
const publicaciones = require("./routes/publication");
require('dotenv').config();
app.set('port', '8080');
app.use(exports.express.json());
app.use('/', usuarios);
app.use('/', publicaciones);
app.listen(app.get('port'), () => {
    console.log("Welcome to my API");
});
exports.mongoose
    .connect('mongodb+srv://user1:0gWv6USyxnKovRBo@cluster0.cvp5f.mongodb.net/Subaster?retryWrites=true&w=majority')
    .then(() => console.log("YEP"))
    .catch((error) => console.log(error));
