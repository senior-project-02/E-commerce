const router = require('express').Router();
const seller = require('../controllers/seller')
router.post('/createProduct',seller.createProduct)
router.get('/AllProduct',seller.getProduct)
router.put('/updateProduct/:id',seller.updateProduct)
router.delete('/deleteProduct/:id',seller.deleteProduct)
router.put('/manageStock/:id',seller.manageStock)
router.put('/managePrice/:id',seller.managePrice)
router.post('/createImage/:id',seller.createImage)
router.get('/getAllImages/:id',seller.getImages)
router.delete('/deleteImage/:idProduct/:idImage',seller.deleteImage)
router.put('/updateImage/:idProduct/:idImage',seller.updateImage)
module.exports = router;