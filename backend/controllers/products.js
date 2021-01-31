
//const {products} = require("./../models/products.js")
const Product = require('./../models/products')
const allProducts = (req,res) =>{
    console.log('GET de todos los productos')
    res.json({message : "Productos"})
}

const oneProduct = (req,res) => {
    console.log(req.params);
    res.json({message : `Buscaste ${req.params.id}`})
}

const create = async(req,res) => {
    try{
        const product = new Product(req.body);
        const data = await product.save();
        console.log(data);
        res.json({message: "Producto creado"})
    }catch(e){
        console.error(e)
        res.status(500).json({message : e})
    }
    
}

module.exports = {allProducts, oneProduct, create};