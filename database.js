
const mongoose = require('mongoose');

const mongoURI = ("mongodb+srv://devanandutkarsh7:dev&MongoDB@cluster0.36llg.mongodb.net/devanandutkarsh7");



const userSchema = new mongoose.Schema({
    name:String,
    agr:Number
})

const userModel= mongoose.model("data",userSchema)

const emp1=new userModel({
    name:"dev",
    age:18
})

emp1.save();
//firsty run on terminal mongod 
const connectToMongo=async()=>{
    mongoose.connect(mongoURI );
    console.log('--- connectd with mongoose ---(ds.js)');

}



module.exports =connectToMongo;