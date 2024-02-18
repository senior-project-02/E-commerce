const router = require('express').Router();
const user =require("../controllers/user")
router.post('/createProduct2',user.createProduct)
router.post('/allprodect',user.getProductAll)
router.post('/imagesof',user.getImageOne)


module.exports = router;