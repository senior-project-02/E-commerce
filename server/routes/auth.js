const router = require('express').Router();




// routes/userRoutes.js

const userController = require('../controllers/auth');




router.get('/userByEmail/:email',userController.getUserByEmail )
router.get('/userByName/:name',userController.getUserByName )
router.get('/usersByRole/:role',userController.getUserByRole )
router.get('/getAllUsers',userController.getAll)
router.delete('/delteuser/:id',userController.deleteUserById)
router.post('/signup',userController.SingUp)
router.get("/login",userController.loginIn)
// router.get('/user/data',userController.getUserData);

module.exports = router;
