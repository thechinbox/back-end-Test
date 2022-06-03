
let mongooseu = require("mongoose")
const userSchema = mongooseu.Schema({
      nombre: {
        type: 'string'
      },
      apellidos: {
        type: 'string'
      },
      correo: {
        type: 'string'
      },
      celular: {
        type: 'Number'
      },
      contraseña: {
        type: 'string'
      },
      fechacreacion: {
        type: 'date'
      }
});
module.exports = mongooseu.model('usuario',userSchema)