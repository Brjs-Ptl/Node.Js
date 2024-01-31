const mongoose = require("mongoose");

const main = async () => {
    await mongoose.connect("mongodb://localhost:27017/e-commerse");
    const ProductSchema = new mongoose.Schema({
        Name:String,
        Price:Number,
        Brand:String,
        MadeIn:String,        
        Category:String
    });
    const ProductModel = mongoose.model("products",ProductSchema);
    let data = new ProductModel({
        Name:"Zt100", 
        Price:1000,
        Brand:"Zen Phone",
        MadeIn:"Bharat",
        Category:"Mobile"
    });
    let result = await data.save();
    console.log(result);
};

main();