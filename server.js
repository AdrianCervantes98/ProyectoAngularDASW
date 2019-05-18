'use strict'

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3003;
const cors = require('cors');

let jsonParser = bodyParser.json();
let {
    Producto, Carrito, User, Venta
} = require('./mongodb/mongodb-connect')

// let corsOption = {
//     origin: `http://127.0.0.1:${port}`
// }

function autenticar(req,res, next){
    let token = req.get('x-auth');
    if(!token){
        res.status(401).send({error: "no hay token"});
        return;
    }
    console.log("hola"); 

    User.verificarToken(token).then((user)=>{
        console.log("Token verificado ...");
        req.userid = user._id;
        next();
    }).catch((err)=>{
        res.status(401).send(err);
    });

}


//Middlewares
// app.use(cors(corsOption));
app.use(express.static(__dirname + '/public'))
app.use(cors());
app.use(jsonParser);

//FUNCIONES CON PRODUCTOS
app.route('/api/productos')
//Obtención de todos los productos ---David
    .get(
         (req, res) => {
        //Filtrado por nombre
        let nombre = req.query.nombre;
        if(nombre){
            //Nombre correspondiente del req con el nombre de la db
            Producto.find({nombre:nombre},{_id:0},(err,docs) => {
                if(err){
                    res.status(400).send({error: 'El nombre no existe'})
                }else{
                    res.send(docs);
                }
            })
        }else{
            //Búsqueda de todos los productos
            Producto.find({}, {
                _id: 0
            }, (err, docs) => {
                if (err) {
                    res.status(400).send();
                } else {
                    res.send(docs);
                }
            })
        }
    }) //Fin función de get
    //Agregar un nuevo producto ----Quenet
    .post((req, res) => {
        let body = req.body;
        let id = body.id;
        if (body.id && body.nombre && body.precio && body.categoria && body.descripcion && body.marca && body.existencia && body.codigo && body.url) {
            let newProducto = new Producto(body);
            newProducto.save((err, doc) => {
                if (doc) {
                    console.log(doc);
                    res.status(201).json(doc);
                } else {
                    res.status(400).send();
                }
            });
        } else {
            res.status(400).send({
                error: 'Faltan atributos en el body'
            });
        }
    }) //Fin de la función de post
    .patch((req, res) => {
        let body = req.body;
        let id = body.id;
        //Modificación con el $set y con el new: true regresa el campo actualizado
        Producto.findOneAndUpdate({id:id}, {$set: {nombre:body.nombre, precio:body.precio, 
            categoria:body.categoria, descripcion:body.descripcion, marca: body.marca, 
            codigo:body.codigo, existencia:body.existencia, url:body.url}}, {new: true}, (err, doc)=>{
                if(err){
                    res.status(404).send({error: "No se encontró"})
                } else{
                    res.status(200).send({ok: "Modificado"})
                }
            })
    });//Fin de Patch
    

    //FUNCIONES CON PRODUCT ID
    app.route('/api/producto/:id')
        .get((req, res) => {
            //Id que se manda
            let id = req.params.id;
            //Criterio de búsqueda y función.
            Producto.findOne({id:id}, (err, doc) =>{
                if(err){
                    res.status(404).send({error: 'No se encontro el id'});
                }else{
                    res.status(200).send(doc);
                }
            })
        })
    .delete((req, res) => {
        let id = req.params.id;
        Producto.findOneAndDelete({id:id}, (err, doc) => {
            if(err){
                res.status(404).send({Informacion: "No existe el producto"});
            }else{
                res.status(200).send(doc);
            }
        })
    }) //Fin de la función delete


    //FUNCIONES DE CARRITO NOMBRE USUARIO
    app.route('/api/carrito/:nombre')
        .get((req, res) => {
            //Parametro de nombre
            let nombre = req.params.nombre;
            //Búsqueda por nombre ocultado el id
            Carrito.find({nombre:nombre}, {
                _id: 0
            }, (err, docs) => {
                if (err) {
                    res.status(400).send();
                } else {
                    res.send(docs);
                }
            })
        })
    //Nuevo carrito para el usuario
    .post((req, res) => {
        let body = req.body;
        //Validación que se manden los campos requeridos en carrito y en [] porque son arreglos
        if (body.nombre && [body.productos] && [body.cantidad]) {
            let newCarrito = new Carrito(body);
            newCarrito.save((err, doc) => {
                if (doc) {
                    console.log(doc);
                    res.status(201).json(doc);
                } else {
                    res.status(400).send();
                }
            });
        } else {
            res.status(400).send({
                error: 'Faltan atributos en el body'
            });
        }
    })
    //Eliminación del carrito
    .delete((req, res) =>{
        let nombre = req.params.nombre;
        Carrito.findOneAndDelete({nombre:nombre}, (err, doc) => {
            if(err){
                res.status(404).send({Informacion: "Usuario inexistente"});
            }else{
                res.status(200).send(doc);
            }
        }) 
    }) 
    

    //FUNCIONES DE USUARIO MAIL USER
    app.route('/api/usuario/:mail')
        .get((req, res) => {
            let mail = req.params.mail;
            User.find({mail:mail}, {
                _id: 0
            }, (err, docs) => {
                if (err) {
                    res.status(400).send();
                } else {
                    res.send(docs);
                }
            })
        })
    .patch(autenticar, (req, res) => {
            let body = req.body;
            let mail = req.params.mail;
            //Modificación con el $set y con el new: true regresa el campo actualizado
            User.findOneAndUpdate({mail:mail}, {$set: {nombre:body.nombre, domicilio:body.domicilio, 
                fecha:body.fecha, cp:body.cp, mail: body.mail, 
                password:body.password}}, {new: true}, (err, doc)=>{
                    if(err){
                        res.status(404).send({error: "No se encontró"})
                    } else{
                        res.status(200).send(doc);
                    }
                })
        })//Fin de Patch
    

    //FUNCIONES DE USUARIOS
    app.route('/api/usuarios')
    .get((req, res) => {
        //Filtrado por nombre
        let nombre = req.query.nombre;
        if(nombre){
            //Nombre correspondiente del req con el nombre de la db
            User.find({nombre:nombre},{_id:0},(err,docs) => {
                if(err){
                    res.status(400).send({error: 'El nombre no existe'})
                }else{
                    res.send(docs);
                }
            })
        }else{
            //Búsqueda de todos los usuarios
            User.find({}, {
                _id: 0
            }, (err, docs) => {
                if (err) {
                    res.status(400).send();
                } else {
                    res.send(docs);
                }
            })
        }
    }) //Fin función de get
    .post((req, res) => {
        let body = req.body;
        if (body.id && body.nombre && body.domicilio && body.fecha && body.cp && body.mail && body.password && body.rol) {
            let newUser = new User(body);
            newUser.save((err, doc) => {
                if (doc) {
                    console.log(doc);
                    res.status(201).json(doc);
                } else {
                    res.status(400).send();
                }
            });
        } else {
            res.status(400).send({
                error: 'Faltan atributos en el body'
            });
        }
    }) //Fin de la función de post
  

    //FUNCIONES DE LOGIN Y LOGOUT
    app.route('/api/user/login')
    .post( async (req,res)=>{
        console.log(req.body);
        let body = req.body;
        if(body.mail && body.password){
            try{
                
                let token = await User.validarUsuario(body.mail, body.password);
                res.set('x-auth',token);
                res.send();
                
            } catch(err){
                console.log(err);
                res.status(400).send(err);
            }
        }else{
            res.status(400).send({error:"falta email o password"})
        }

    })   

app.route('/api/user/logout')    
    .get((req, res)=>{
       let token = req.get('x-auth');
       if(!token){
           console.log("no existe token");
           res.status(400).send({error: "falta header con token"})
           return;
       }    

       // * SE ASUME QUE SI HAY TOKEN
       let datosUsuario = User.verDatosToken(token);
       console.log(datosUsuario);
       if(datosUsuario && datosUsuario._id){
           
           User.updateOne({_id:datosUsuario._id},{token: "123"}).then((doc)=>{
              res.send(doc);
           }).catch((err)=>{
               console.log(err);
               res.status(404).send();
           })
       }
    })

    // FUNCIONES DE VETAS
app.route('/api/ventas')
.get((req, res) => {
    let data = req.query.nombre;
    if (data) {
        Venta.find({ "carrito.nombre": data }, (err, doc) => {

            if (err)
                res.status(400).send({
                    error: 'No hay datos para mostrar'
                })
            else
                res.status(200).send(doc);

        })
    } else {
        // Si no se manda el nobre mostramos todas las ventas
        Venta.find({}, (err, doc) => {

            if (err)
                res.status(400).send({
                    error: 'No hay datos para mostrar'
                })
            else
                res.status(200).send(doc);

        });
    }
}).post((req, res) => {
    let body = req.body

    if (body.carrito && body.date && body.total && body.estado) {
        let newV = new Venta(body);
        newV.save((err, doc) => {
            if (doc) {
                console.log(doc);
                res.status(201).json(doc);
            } else {
                res.status(400).send();
            }
        });
    } else {
        res.status(400).send({
            error: 'Faltan atribitos'
        })
    }
})


// FUNCIONES DE INVENTARIO
app.route('/api/inventario')
.get((req, res) => {
    Producto.find({}, {
        _id: 0
    }, (err, docs) => {
        if (err) {
            res.status(400).send();
        } else {
            res.send(docs);
        }
    })

}).patch((req, res) => {
    let body = req.body;
    let id = body.id;
    Producto.findOneAndUpdate({ id: id }, {
        $set: {
            nombre: body.nombre, precio: body.precio,
            categoria: body.categoria, descripcion: body.descripcion, marca: body.marca,
            codigo: body.codigo, existencia: body.existencia, url: body.url
        }
    }, { new: true }, (err, doc) => {
        if (err) {
            res.status(404).send({ error: "No se encontró" })
        } else {
            res.status(200).send({ ok: "Modificado" })
        }
    })
}).delete((req, res) => {
    let id = req.params.id;
    Producto.findOneAndDelete({ id: id }, (err, doc) => {
        if (err) {
            res.status(404).send({ Informacion: "No existe el producto" });
        } else {
            res.status(200).send(doc);
        }
    })
})

app.route('/api/inventario/:marca')
.get((res,req)=>{
    let marca = req.params.marca
    Producto.find({marca: marca},(err,docs)=>{
        if(err)
            res.status(404).send({
                error: 'No hay resultados'
            })
        else
            res.status(200).send(docs);
    })
})





app.listen(port, () => console.log(`Example app listening on port http:/127.0.0.1:${port}!`));