
const {fileData} = require("../services/uploadSevices")
const uploadFile = async (req,res)=>{
    console.log(JSON.stringify({file:"upload file"}));
    try {
        let body = req.body
        console.log("body ",JSON.stringify(body));

    if (!body || !body?.path) {
      return res.status(400).json({ error: "file path is required" });
    }
    let response = await fileData(body); // function call
    if(response){
    return res.status(201).json({sucess:true,data:response});
    }
    else{
        return res.status(400).json({sucess:false,data:[], error: "somethig went wrong!..." });
    }

  } catch (err) {
    console.error("Error creating message:", err);
    res.status(500).json({ error: "Server error" });
  }
}
module.exports={uploadFile}