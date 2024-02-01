const mongoose = require("mongoose");
const productSchema = mongoose.Schema({
    Name:String,
    Price:Number,
    Brand:String,
    Category:String
});

module.exports = mongoose.model("mobile_details",productSchema);