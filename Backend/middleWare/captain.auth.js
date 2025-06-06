const captainModel = require('../Models/captain.model');
const jwt = require('jsonwebtoken');
const bcrypt  = require('bcrypt');


module.exports.captainAuth = async (req, res, next) => {
   try {
       const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
       if (!token) {
           return res.status(401).json({ message: 'Authentication token is missing' });
       }

    //    const isBlacklist = await  userModel.findOne({token:token});
    //    if(isBlacklist){
    //        return res.status(401).json({message:"unauthorized"})
    //    }

       const decoded = jwt.verify(token, process.env.JWT_SECRET);

     
       req.captain = await captainModel.findById(decoded._id);
      
   
     
       if (!req.captain) {
           return res.status(404).json({ message: 'User not found' });
       }

       next();
   } catch (error) {
       res.status(401).json({ message: 'Invalid token' });
   }
}