const express = require('express');
const router = express.Router(); // detectar peticiones a un endpoint específico

const { allProducts, oneProduct, create} = require("./../controllers/products");

/* const { Router } = require('express');
const router = new Router()*/


router.get('/', allProducts)
router.post('/', create)
router.get('/:id', oneProduct)



module.exports = router;