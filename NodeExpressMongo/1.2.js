const mongoose = require("mongoose");

const main = async () => {
    await mongoose.connect("mongodb://localhost:27017/e-commerse");
    const ProductSchema = new mongoose.Schema({
        name:String,
        price:Number,
        
    });
    const ProductModel = mongoose.model("products",ProductSchema);
    let data = new ProductModel({name:"Mohan", price:1000});
    let result = await data.save();
    console.log(result);
};

main();