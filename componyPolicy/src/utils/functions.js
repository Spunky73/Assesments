const User = require("../models/userSchema");

class MongoQueries {
async findUser(username){
// mongo find logic 
try{
const user = await User.findOne({ firstName: username });
    if (!user) {
      throw new Error({ error: "User not found" });
    }else{
        return user;
    }
}catch (error){
    return error
}
}

async findPolicy(userId){
// find policies using userId
try{
    console.log(userId);
    
const policies = await PolicyInfo.find({ user: userId })
      .populate("policyCategory", "categoryName")
      .populate("company", "companyName")
      .populate("user", "firstName email");
    return policies
}catch(err){
    return err
}

}

}

module.exports = MongoQueries