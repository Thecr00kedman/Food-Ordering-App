import mongoose from "mongoose";




export const partnerschema = mongoose.Schema({
          name:{
               type:String,
               required:true,
               min:3
      
          },
          email:{
               type:String,
               required:true,
               unique:true
      
          },
          password:{
              type:String,
              required:true,
              min:5
      
          },
          image:{
               type:String,
               required:true,
               min:5,
          },
          landmark:{
               type:String,
               required:'true',
               min:5,
          },
          address:{
               type:String,
               required:'true',
               min:5,
          },
          categories:{
               type:String,
               required:'true',
               min:5,
          },
          origin:{
               type:String,
               required:'true',
               min:5,
          },
          products:{type:Array,ref:"Products"}
          
})

const Partner = mongoose.model('Partner',partnerschema)

export default Partner;