const db=require('../database/indesx')
const jwt =require ('jsonwebtoken')
const bcrypt = require('bcryptjs')
const crypto=require ('crypto');






module.exports = {

  // sign in functions 
  getUserByEmail: function (req, res) {
    
     db.User.findOne({ where: { email:req.params.email } }).then((data)=>{
      res.status(200).json(data)
     })
     .catch ((err)=>{console.log(err)}) 
     
    },
      
  

  getUserByName:  function (req, res) {
  
       db.User.findOne({ where: { name:req.params.name} }).then((data)=>{
        res.status(200).json(data)
      })
      .catch ((err)=>{console.log(err)}) 
     
    },

     
    
  

  getUserByRole:  function (req,res ) {
   
      db.User.findAll({ where: {  role:req.params.role  } }).then((data)=>{
        res.status(200).json(data)
      })
      
   .catch ((err)=>{console.log(err);}) 
      
    
  },

  SingUp:  function (req, res) {
    const hashedPassword = bcrypt.hashSync(req.body.password, 8)
    console.log('hashed password', hashedPassword) 
  

    newUser={
      name:req.body.name,
      lastname:req.body.lastname,
      email:req.body.email,
      password:hashedPassword,
      image:req.body.image,
      role :req.body.role
    }
        db.User.create(newUser).then((data)=>{
        res.status(200).send(data)
      })
      
    . catch ((err)=>{
        (res.length > 0) 
        res.json("email used") 
      console.log(err);
    }) 
 
    },

    getAll: function(req,res){
      db.User.findAll({}).then((data)=>{
        res.status(200).send(data)
      })
      
    . catch ((err)=>{
      console.log(err);
    }) 
    },

    deleteUserById: function (req, res) {
        id=req.params.id
        db.User.destroy({where:{iduser:id}}).then(()=>{
            res.json('user deleted')
        })
        .catch((err)=>{
            res.status(500).json(err)
        })
    },
      
    
// Login in functions 

loginIn :function (req, res)  {
    
    const secretKey = crypto.randomBytes(32).toString('hex')
  
    console.log( secretKey,"this is the secretkey");

    const { name, password } = req.body
    db.User.findOne({name})
    .then((user) => {
        if (!user) {
            return res.status(401).json({ error: 'Authentication failed' });
        }
        const passwordMatch =bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ error: 'Authentication failed' });
        }
        try {
          const token = jwt.sign({ userId: user._id }, 'your-secret-key', {
              expiresIn: '1h',
          });
          res.status(200).json({ token });
        } catch (error) {
          res.status(500).json({ error: 'Login failed' });
        }
    })
   
},
// getUserData : (req, res) => {
//   //verify the JWT token generated for the user
//   jwt.verify(req.token, 'privatekey', (err, authorizedData) => {
//     if(err){
//       //If error send Forbidden (403)
//       console.log('ERROR: Could not connect to the protected route');
//       res.sendStatus(403);
//     } else {
//       //If token is successfully verified, we can send the autorized data 
//       res.json({
//         message: 'Successful log in',
//         authorizedData
//       });
//       console.log('SUCCESS: Connected to protected route');
//     }
//   });
// }
  



}

    


