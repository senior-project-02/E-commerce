const router = require('express').Router();




// routes/userRoutes.js

const userController = require('../controllers/auth');



// Route to get user by email 
router.get('/userByEmail/:email',userController.getUserByEmail )


// Route to get user by name 
router.get('/userByName/:name',userController.getUserByName )


//  get all users by role
router.get('/usersByRole/:role',userController.getUserByRole )
// get all user
router.get('/getAllUsers',userController.getAll)
//delete one user
router.delete('/delteuser/:id',userController.deleteUserById)
router.post('/signup',userController.SingUp)
router.get("/login",userController.loginIn)
    

module.exports = router;
