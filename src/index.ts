const express= require('express')
const app = express();
const mongoose = require("mongoose")
const rutas = require("./routes/user")

require('dotenv').config();

app.set('port','8080')
app.use(express.json())
app.use('/',rutas)
app.listen(app.get('port'), () => {
   console.log("Welcome to my API");
})

mongoose
.connect('mongodb+srv://user1:0gWv6USyxnKovRBo@cluster0.cvp5f.mongodb.net/Subaster?retryWrites=true&w=majority')
.then(()=>console.log("YEP"))
.catch((error:any)=> console.log(error)
)

