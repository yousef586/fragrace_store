const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const deliverySchema=new Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    country:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    }
    

},{timestamps:true}
);

const delivery=mongoose.model('customers',deliverySchema);

module.exports=delivery;