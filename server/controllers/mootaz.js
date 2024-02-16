const db = require("../database/indesx");

const Oneproduct = async (req, res) => {
  const id = req.params.id;

  try {
    const result = await db.Product.findAll({
      where: {
        idproduct: id,
      },
    });
    res.send(result);
  } catch (err) {
    res.status(500).send(err);
  }
};
const Somecategories = async (req, res) => {
  const id = req.params.id;

  try {
    const result = await db.Product.findAll({
      where: {
        category_idcategory: id,
      },
    });
    console.log(result);
    res.send(result);
  } catch (err) {
    res.status(500).send(err);
  }
};
const Images = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await db.Image.findAll({
      where: {
        product_idproduct: id,
      },
    });
    res.send(result);
  } catch (err) {
    res.status(500).send(err);
  }
};
const Allproduct = async (req, res) => {
  try {
    const result = await db.Product.findAll({});
    res.send(result);
  } catch (err) {
    res.status(500).send(err);
  }
};
const Cart = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await db.Cart.findAll({
      where: {
        user_iduser: id,
        status:"encours",
      },
    });
    res.json(result);
  } catch (err) {
    res.status(500).send(err);
  }
};
const Createcart = async (req, res) => {
  const data = req.body;
  const d = await db.Cart.create(data)
    .then((result) => {
      res.send(result.data);
    })
    .catch((err) => {
    console.log(err);;
    });
};
const Updatecart = async (req, res) => {
  const id = req.params.id;
  const data = req.body;
  await db.Cart.update(data, {
    where: {
      idcart: id,
      status: "encours",
    },
  })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};
const Insertcarthasproduct = async (req, res) => {
  const data = req.body;
  const d = await db.CartHasProduct.create(data)
    .then(() => {
      res.json(d);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};
const Productfromcard = async (req, res) => {
  const id = req.params.id;

  try {
    const result = await db.CartHasProduct.findAll({
      where: {
        cart_idcart: id,
      },
    });
    res.send(result);
  } catch (err) {
    res.status(500).send(err);
  }
};
const Removeproductfromcart=async(req,res)=>{
    const { cartid, productid } = req.params;
    await db.CartHasProduct.destroy({
        where:{
            cart_idcart:cartid,
            product_idproduct:productid
            }
        })
    .then((result)=>{
        res.send(result)}).catch((err)=>{
            console.log(err)
        })
}
const Namecategorie = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await db.Category.findAll({
      where: {
        idcategory: id,
      },
    });
    res.send(result);
  } catch (err) {
    res.status(500).send(err);
  }
}

module.exports = {
  Oneproduct,
  Somecategories,
  Images,
  Allproduct,
  Cart,
  Createcart,
  Updatecart,
  Productfromcard,
  Insertcarthasproduct,
  Removeproductfromcart,
  Namecategorie
};
