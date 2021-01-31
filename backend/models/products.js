/*const products = {
    info: { count : 1, prev : null, next : null},
    data : [
        {
            _id : 1,
            name: "Camiseta River Plate 2020-2021",
            description: "Camiseta titular River Plate",
            unitCost: 7600,
            thumbnail : "url",
            available : true
        },
    ],
}

module.exports = { products }
*/

const { Schema, model } = require('mongoose');
//el schema va a ser una interfaz, el model genera todo lo del schema y los metodos para interactuar con la bd

const ProductSchema = Schema ({
    name : {
        type: String,
        required : true
    },
    description: {
        type: String
    },
    unitCost: {
        type: Number,
        required : true
    },
    thumbnail : {
        type: String,
        required : true
    },
    available : {
        type: Boolean,
        required : true
    }
})



module.exports = model('Product', ProductSchema); //creo una coleccion Product que implementa el schema de producto