const mongoose = require("mongoose");
const DataSchema = mongoose.Schema({
    FoodName:{type:String},
    FoodCode:{type:String},
    FoodImage:{type:String},
    FoodCategory:{type:String},
    QTY:{type:String},
    Price:{type:String},
},{timestamps:true, versionKey:false})

const ProductsModel = mongoose.model("products", DataSchema);

module.exports = ProductsModel;
