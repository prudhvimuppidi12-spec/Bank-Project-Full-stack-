const jwt = require("jsonwebtoken");

module.exports = (req,res,next)=>{
  const token = req.headers["authorization"];
  if(!token) return res.status(403).json("No token");

  try{
    const verified = jwt.verify(token,"banksecret");
    req.user = verified;
    next();
  }catch{
    res.status(400).json("Invalid token");
  }
};