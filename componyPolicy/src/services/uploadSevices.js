
const csv = require('csvtojson');
const Data = require("../models/userDataSchema");
const fileData =async (body)=>{
    try{
        let filePath = body?.path
         jsonData = await csv().fromFile(filePath);
         if (jsonData.length === 0) throw new Error("No data found in file");
        else{
            console.log(JSON.stringify(jsonData));
            const result = await Data.insertMany(jsonData);
            console.log("Inserted:", result);
            return result
        }
    }
    catch(error){
       console.log("error",JSON.stringify(error));
       return error 
    }
    

}

module.exports= {fileData}