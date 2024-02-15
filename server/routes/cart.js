const router = require('express').Router();
const controller=require('../controllers/mootaz')
router.get('/oneproduct/:id',controller.Oneproduct)
router.get('/image/:id',controller.Images)
router.get('/someproduct/:id',controller.Somecategories)
router.get('/product',controller.Allproduct)
router.get('/cart/:id',controller.Cart)
router.post('/createcart',controller.Createcart)
router.put('/updatecart/:id',controller.UpdateCart)
router.post('/carthasp',controller.Insertcarthasproduct)
router.get('/carthasp/:id',controller.Productfromcard)
router.delete("/removeproduct/:cartid/:productid",controller.Removeproductfromcart);

module.exports = router;