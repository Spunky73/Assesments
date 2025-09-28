 const MongoQueries = require("../utils/functions")
const mongoQueries = new MongoQueries()
const getPolicyInfo =async (req,res)=>{
try {
    const username = req.params.username;

    // Find user by firstname
    
    let user = await mongoQueries.findUser(username)
    // Find all policies linked to this user
    console.log("user",user);
    let userId = user._id
    
    const policies = await mongoQueries.findPolicy(userId) 
    console.log(JSON.stringify({policies:policies}));
    
    return res.json({
      user: user.firstName,
      email: user.email,
      policies:policies
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

module.exports = {getPolicyInfo}