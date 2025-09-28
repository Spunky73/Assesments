
const Message = require("../models/message");
let insertMessage =async (body)=>{
    try{
    const { message, day, time } = body;
    const newMessage = new Message({ message, day, time });
    let result = await newMessage.save();
    console.log("result :",result);
    if(result._id){
        result.status =200;
    return result;
    }
    else{
        throw new Error("error while inserting")
    }

    }
    catch(error){
       console.log("error",JSON.stringify(error));
       return error 
    }
    

}

module.exports= {insertMessage}