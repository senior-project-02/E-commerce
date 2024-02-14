const db=require('../database/indesx')

const bcrypt = require('bcryptjs')



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
    }
      
    
// sign in functions 
    
  }






    


