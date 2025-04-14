const express = require('express');
const router = express.Router();
const {body} = require("express-validator")
const {registerUser} =  require('../Controllers/user.controller');
const {loginUser,getUserProfile,logOutProfile} = require('../Controllers/user.controller');
const { authUser } = require('../middleWare/auth.middlware');




 router.post("/register", registerUser);
 router.post("/login",[
    body('email').isEmail().withMessage("invalid email")
 ], loginUser);

 router.get("/userProfile",authUser, getUserProfile)
 router.get("/logout",authUser, logOutProfile)


module.exports = router