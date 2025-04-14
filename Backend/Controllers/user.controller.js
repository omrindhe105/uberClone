const userModel = require('../Models/User');
const userService = require('../services/user.services');
const { validationResult } = require('express-validator');
const BlacklistToken = require('../Models/blacklistToken.model')

module.exports.registerUser = async (req, res, next) => {

    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.status(400).json({ errors: error.array() });
    }

    const { fullName, password, email } = req.body;
    const hashPassword = await userModel.hashPassword(password);

    const user = await userService.createUser({
        FirstName: fullName.FirstName,
        LastName: fullName.LastName,
        email,
        password: hashPassword,


    });



    const token = user.generateAuthToken();
    res.status(201).json({ token, user })


}


module.exports.loginUser = async (req, res, next) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.status(400).json({ errors: error.array() });
    }


    const { email, password } = req.body;

    const user = await userModel.findOne({ email }).select('+password');

    if (!user) {
        return res.status(401).json("message:Invalid email or password")
    }

    const isMatch = await user.comparePassword(password);

    if (!isMatch) {
        return res.status(401).json("message:Invalid email or password")
    }

    const token = user.generateAuthToken();
    res.cookie("token", token)
    res.status(200).json({ token, user })
}

module.exports.getUserProfile= async(req,res,next)=>{
    res.status(200).json(req.user)
}

module.exports.logOutProfile= async(req,res,next)=>{

    res.clearCookie('token');
    const token = req.cookies.token || req.headers.authorization.split(' ')[1];
    await BlacklistToken.create({token});
    res.status(200).json({message:"logout successfully"})
}

