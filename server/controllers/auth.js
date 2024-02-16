const db=require('../database/indesx')
const jwt =require ('jsonwebtoken')
const bcrypt = require('bcryptjs')
const crypto=require ('crypto');




const secretKey = crypto.randomBytes(32).toString('hex');

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



loginIn: async function (req, res) {
  try {
    const userResults = await db.User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!userResults) {
      return res.json('Invalid email');
    }
    console.log('Outside getUserByEmail:', userResults);
    const isPasswordValid = bcrypt.compareSync(req.body.password, userResults.password);
    if (!isPasswordValid) {
      res.json('Invalid Password');
    } else {
      const token = jwt.sign({ email: userResults.email, username: userResults.username ,iduser: userResults.iduser }, secretKey, { expiresIn: '1h' });
      res.json({ token: token });
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json(error);
  }
},




updateUser: async function (req, res) {

  try {
      const { name, password, newPassword } = req.body;
      console.log(req.body,"this is the body");
    const userToUpdate = await db.User.findOne({
      where: {
        name: req.body.name,
      },
    });
    console.log( userToUpdate.password,"heloooooo");
    if (!userToUpdate) {
      return res.status(404).json({ error: 'User not found' });
    }

    const isPasswordValid =await bcrypt.compare(password, userToUpdate.password);
 console.log(isPasswordValid,"jjjjjjjjjjjjjjjj");
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid Password' });

    }
    const  hashedNewPassword = await bcrypt.hashSync(newPassword, 10);
    await userToUpdate.update({name},{ password : hashedNewPassword }) ;
    console.log(hashedNewPassword,"hash pass");
     return res.status(200).json({userToUpdate:'Password updated successfully'});
    } catch (error) {
      console.error('Error updating password:', error);
      return res.status(500).json({ message: 'Internal server error' });
  }
}


}

    


