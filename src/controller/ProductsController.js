const ProductsModel = require("../model/ProductsModel")

// create product

exports.CreateProduct=(req, res)=>{
    let reqBody = req.body;
    ProductsModel.create(reqBody,(err, data)=>{
        if (err){
            res.status(400).json({status:"Fail", data:err})
        }
        else {
            res.status(200).json({status:"Success", data:data})
        }
    })
}



// Read product

exports.ReadProduct=(req, res)=>{
    let Query = {}
    let Projection = "FoodName FoodCode FoodImage FoodCategory QTY Price"
    ProductsModel.find(Query, Projection, (err, data)=>{
        if (err){
            res.status(400).json({status:"Fail", data:err})
        }
        else{
            res.status(200).json({status:"Success", data:data})
        }
    })
}

// Product Read By Id

exports.ReadProductById=(req, res)=>{
    let id = req.params.id;
    let Query = {_id:id}
    let Projection = "FoodName FoodCode FoodImage FoodCategory QTY Price"
    ProductsModel.find(Query, Projection, (err, data)=>{
        if (err){
            res.status(400).json({status:"Fail", data:err})
        }
        else{
            res.status(200).json({status:"Success", data:data})
        }
    })
}



// Update Product

exports.UpdateProduct=(req, res)=>{
    let id = req.params.id;
    let Query = {_id:id}
    let reqBody = req.body
    ProductsModel.updateOne(Query, reqBody, (err, data)=>{
        if (err){
            res.status(400).json({status:"Fail", data:err})
        }
        else {
            res.status(200).json({status:"Success", data:data})
        }
    })
}


// Delete Product

exports.DeleteProduct=(req, res)=>{
    let id = req.params.id
    let Query = {_id:id}
    ProductsModel.deleteOne(Query,(err, data)=>{
        if (err){
            res.status(400).json({status:"Fail", data:err})
        }
        else {
            res.status(200).json({status:"Success", data:data})
        }
    })
}


