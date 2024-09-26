const mongoose = require("mongoose");


const ProductSchema = new mongoose.Schema({
    name : {
        type:String,
        required: true,
        // required: [true, "Please add a name"],
        // unique: true,
        // trim: true,
        // maxlength: [50, "Name can not be more then 50 Characters"]
    },
    desc: {
        type: String, 
    },
    price: {
        type: Number,
        required: true,
    },
    imageUrl: {
        type:String,
    },
});

module.exports = mongoose.model("Product", ProductSchema);