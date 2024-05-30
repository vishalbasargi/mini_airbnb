const mongoose =require("mongoose");
const Schema=mongoose.Schema;

const listingSchema=new Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        default:'https://unsplash.com/photos/black-and-red-clouds-n20DUSVsUk8',
        set:(v)=>
        v===""
        ?'https://unsplash.com/photos/black-and-red-clouds-n20DUSVsUk8'
        :v,     //deafult image
    },
    price:Number,
    location:String,
    country:String,
});

const Listing=mongoose.model("Listing",listingSchema);
module.exports=Listing;

