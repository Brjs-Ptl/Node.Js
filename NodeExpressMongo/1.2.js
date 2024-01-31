// -------------Add Data through Mongoose---------
/*
const mongoose = require("mongoose");

const main = async () => {
    await mongoose.connect("mongodb://localhost:27017/e-commerse");
    const productSchema = new mongoose.Schema({
        name:String,
        price:Number,
    });
    const ProductModel = mongoose.model("products",productSchema);
    let data = new ProductModel({name:"Mohan", price:1000});
    let result = await data.save();
    console.log(result);
};
main();
*/



// -----------------------save Multiple Data---------------------

/*
const mongoose = require("mongoose");

const main = async () => {
    await mongoose.connect("mongodb://localhost:27017/e-commerse");
    const productSchema = new mongoose.Schema({
        Name:String,
        Price:Number,
        Brand:String,
        MadeIn:String,        
        Category:String
    });
    const ProductModel = mongoose.model("products",productSchema);
    let data = new ProductModel({
        Name:"New Phone", 
        Price:3500,
        Brand:"nPhone",
        MadeIn:"Bharat",
        Category:"Mobile"
    });
    let result = await data.save();
    console.log(result);
};

main();
*/

// ---------------------CRUD Operation Start-------------------------


const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/e-commerse");

const productSchema = new mongoose.Schema({
    Name:String,
    Price:Number,
    Brand:String,
    MadeIn:String,        
    Category:String
});
const saveInDB = async () => {
    const product = mongoose.model("products",productSchema);
    let data = new product({
        Name:"Bigul", 
        Price:1200,
        Brand:"Bijli Phone",
        MadeIn:"Nepal",
        Category:"Mobile"
    });
    let result = await data.save();
    console.log(result);
};

// saveInDB();

const updateInDB = async () => {
    const product = mongoose.model("products",productSchema);
    let data = await product.updateOne(
        { Name:"Bigul" },            // name of product which you want to update
        {
            $set:{ MadeIn:"Kathmandu", Name:"Nimura" }     // category of selected data which you have to updatte we can update all cateogory
        }
    )
    console.log(data);
}

updateInDB();
