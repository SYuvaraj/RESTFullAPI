var express = require('express');
var router = express.Router();


//Models
// var Product = require('models/products');
//Routes
router.get('/products',function(req, res){
	res.send('api is working');
});
// Product.methods(['get,'put','post','delete']);


// Return router
module.exports = router;