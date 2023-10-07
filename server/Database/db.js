import mongoose from "mongoose"


const Connection =async() => {
    const URL = `mongodb+srv://aditya22950:dR188kY66FBdQsQe@foodzone.qzj8k9g.mongodb.net/?retryWrites=true&w=majority`
    try {
       await mongoose.connect(URL,{useUnifiedTopology:true, useNewUrlParser:true});
        console.log('Database Connected Successfully')
        
    } catch (error) {
        console.log("error while connecting to the database")
    }

}

export default Connection