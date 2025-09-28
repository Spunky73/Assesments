
const {insertMessage} = require("../services/insertMessage")
const createMessage = async (req,res)=>{
    console.log(JSON.stringify({file:"messageController"}));
    try {
        let body = req.body
        console.log("body ",JSON.stringify(body));
        const { message, day, time } = body;

    if (!message || !day || !time) {
      return res.status(400).json({ error: "Message, day, and time are required" });
    }
    let response = await insertMessage(body); // function call
    if(response?.status===200){
    return res.status(201).json({sucess:true,data:[response]});
    }
    else{
        return res.status(400).json({sucess:false,data:[], error: "somethig went wrong!..." });
    }

  } catch (err) {
    console.error("Error creating message:", err);
    res.status(500).json({ error: "Server error" });
  }
}
module.exports={createMessage}