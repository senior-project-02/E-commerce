const db=require('../database/indesx')


const createProduct=(req,res)=>{
    db.Product.create(req.body).then(()=>{
        res.json('product created')
    })
    .catch((err)=>{
        res.status(500).json(err)
    })
}

const getProduct = (req, res) => {
    db.Product.findAll()
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        res.status(500).json({ err})
    })
}

const updateProduct=(req,res)=>{
    const id=req.params.id
    const newData=req.body
    db.Product.update(newData,{ where:{idproduct:id} })
    .then(()=>{
        res.json('product updated')
    })
    .catch((err)=>{
        res.status(500).json(err)
    })
}

const deleteProduct=(req,res)=>{
   id=req.params.id
   db.Product.destroy({ where:{idproduct:id} })
   .then(()=>{
    res.json('productDelted')
   })
   .catch((err)=>{
    res.status(500).json(err)
   })
}


module.exports={createProduct,getProduct,updateProduct,deleteProduct}