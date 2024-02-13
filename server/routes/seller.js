const router = require('express').Router();
const seller = require('../controllers/seller')
router.post('/createProduct',seller.createProduct)
router.get('/AllProduct',seller.getProduct)
router.put('/updateProduct/:id',seller.updateProduct)
router.delete('/deleteProduct/:id',seller.deleteProduct)

module.exports = router;