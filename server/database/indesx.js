const {DataTypes, Sequelize} = require('sequelize')
const mysql = require('mysql2')

const sequelize = new Sequelize('e-commerce', 'root', 'asd12345hope@@', {
    host:'localhost',
    dialect:'mysql'
})

sequelize.authenticate()
.then(()=>{
    console.log("connection has been successfully established");
})
.catch((err)=>{
    console.log(err);
})


const User = sequelize.define('user', {
    iduser: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING(45),
    lastname: DataTypes.STRING(45),
    email: DataTypes.STRING(45),
    password: DataTypes.STRING(45),
    image: DataTypes.TEXT,
    role: DataTypes.STRING(45)
  });
  

  const Product = sequelize.define('product', {
    idproduct: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    namep: DataTypes.STRING(45),
    descriptionp: DataTypes.TEXT,
    sizep: DataTypes.STRING(45),
    categoryp: DataTypes.STRING(45),
    quantityp: DataTypes.INTEGER,
    ratingp: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    promop: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    }
  });
  

  const Image = sequelize.define('image', {
    idimage: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    imageurl: DataTypes.TEXT
  });
  
  
  const Whislist = sequelize.define('whislist', {
    idwhislist: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    }
  });
  
  
  const Paiement = sequelize.define('paiement', {
    idpaiement: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    }
  });
  
 
  const Cart = sequelize.define('cart', {
    idcart: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    status: DataTypes.STRING(45)
  });
  
  
  const CartHasProduct = sequelize.define('cart_has_product', {
   
  });
  

  User.hasMany(Product, { foreignKey: 'user_iduser' });
  Product.belongsTo(User, { foreignKey: 'user_iduser' });
  
  Product.hasMany(Image, { foreignKey: 'product_idproduct' });
  Image.belongsTo(Product, { foreignKey: 'product_idproduct' });
  
  User.hasMany(Whislist, { foreignKey: 'user_iduser' });
  Whislist.belongsTo(User, { foreignKey: 'user_iduser' });
  Product.hasMany(Whislist, { foreignKey: 'product_idproduct' });
  Whislist.belongsTo(Product, { foreignKey: 'product_idproduct' });
  
  User.hasMany(Paiement, { foreignKey: 'user_iduser' });
  Paiement.belongsTo(User, { foreignKey: 'user_iduser' });
  
  User.hasMany(Cart, { foreignKey: 'user_iduser' });
  Cart.belongsTo(User, { foreignKey: 'user_iduser' });
  
  Cart.belongsToMany(Product, { through: 'cart_has_product', foreignKey: 'cart_idcart' });
  Product.belongsToMany(Cart, { through: 'cart_has_product', foreignKey: 'product_idproduct' });
  
 
  sequelize.sync({ force: false }).then(() => {
    console.log('All is good.');
  }).catch(err => {
    console.error('err :', err);
  });
  
  module.exports = { User, Product, Image, Whislist, Paiement, Cart, CartHasProduct };

