'use strict'
let mongoose = require('mongoose');
let jwt = require('jsonwebtoken');



let mongoDb = "mongodb+srv://admin:admin@cluster0-pn5xj.mongodb.net/test?retryWrites=true";

mongoose.connect(mongoDb, {
    useNewUrlParser: true
});

let db = mongoose.connection;


//Esquema del producto
let productSchema = mongoose.Schema({
    id:{
        type: Number,
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        min: 1,
        max: 10000,
        required: true
    },
    categoria: {
        type: String,
        enum: ['Limpieza', 'Dulceria','Abarrotes','Perfumeria','Personal'],
        required: true
    },
    descripcion:{
        type: String,
        required: true
    },
    marca: {
        type: String,
        enum: ['Gaona', 'Dove', 'Dulces'],
        required: true
    },
    codigo: {
        type: String,
        required: true
    },
    existencia:{
        type: Number,
        required: true,
        min: 1,
        max: 99
    },
    url:{
        type: String,
        required: true
    }
});


//Esquema del carrito
let carritoSchema = mongoose.Schema({
  nombre: {
      type: String,
      required: true
  },
  productos: [String],
  cantidad: [Number]
});


//Esquema de Usuario
let userSchema = mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    nombre: {
        type: String,
        required: true
    },
    domicilio: {
        type: String,
        required: true
    },
    fecha: {
        type: Date,
        required: true
    },
    cp: {
        type: Number,
        minlength: 4,
        required: true
    },
    mail: {
        type: String,
        required: true,
        unique: true,
        minlength: 4
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    token: {
        type: String,
        required: true
    },
    rol: {
        type: String,
        enum: ["guest", "user", "admin"],
        required: true,
    }

});

// Esquema de Venta
let ventaSchema = mongoose.Schema({
    carrito:{ 
        type: carritoSchema,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    total: {
        type: Number,
        required: true
    },
    estado: {
        type: Boolean,
        required: true
    }
});


userSchema.methods.generateToken = function () {
    let user = this;
    let token = jwt.sign({
            _id: user._id.toHexString(),
            rol: user.rol
        },
        'claveSecreta', {
            expiresIn: 60 * 60  // 60 segundos * 60
        }).toString();
    return token;
}

userSchema.statics.validarUsuario =  function (mail, password) {
    let User = this;
    console.log(mail + " "+ password);
    return new Promise((resolve, reject) => {
        User.findOne({
            mail: mail, password:password
        }).then((user) => {
            if (user) {
                console.log(user);
                let newToken = user.generateToken();
                User.updateOne({mail:mail},{token:newToken}).then((doc)=>{
                    resolve(newToken)
                }).catch((er)=>{
                    console.log(er);
                    reject({error:"error al actualizar"});
                })
            } else {
                reject({error:"no existe email"})
            }
        }).catch((err) => {
            console.log(err);
            reject({error:"no se encontró"})
        })
    })

}

userSchema.statics.verificarToken = function (token) {
    let User = this; 
    let usr = jwt.decode(token);
    console.log(usr);
    
    return new Promise( (resolve,reject)=> {
        User.findById(usr._id).then((user)=>{
            if(token == user.token){
                jwt.verify(token, 'claveSecreta', (err, decoded) => {
                    if (err) {
                        if (err.name == "TokenExpiredError") {
                            console.log("token expirado");
                        } else {
                            console.log("error al verificar token");
                        }
                        return reject(err);
                    }else{
                        return resolve(decoded);
                    }
                })
            }else{
                return reject({error: "token no es igual al de la base de datos"});
            }
            
        })

    })
         
}

userSchema.statics.verDatosToken = function(token){
    return jwt.decode(token);
}


//Creacion de modelos
let Producto = mongoose.model('productos',productSchema);
let Carrito = mongoose.model('carrito', carritoSchema);
let User = mongoose.model('users', userSchema);
let Venta  = mongoose.model('ventas', ventaSchema);



//Exports
module.exports = {Producto, Carrito, User, Venta}



// let newUser = new User({
//     id: 1,
//     nombre: "Adrián",
//     domicilio: "Cerro del cuatro 123",
//     fecha: new Date(),
//     cp: 45054,
//     mail: "is708376@iteso.mx",
//     password: "jajasies",
//     token: "123",
//     rol: "admin"
// })

// newUser.save().then((doc)=> {
//     console.log(doc);
// }).catch((err)=> {
//     console.log(err);
// })

// let newCarrito = {
//     nombre:"nombre usuario",
//     productos: [
//         "paleta", "agua"
//     ],
//     cantidad: [
//         2, 1
//     ]
// }

// let nCarr = new Carrito(newCarrito);
// nCarr.save().then((doc)=> {
//     console.log(doc);
// }).catch((e)=> console.log(e))

// Carrito.findOne({nombre:"nombre usuario"}, (err, doc)=>{
//     console.log(doc);
//     console.log(doc.productos)
//     console.log(doc.cantidad)
// })

// module.exports = {Carrito}

