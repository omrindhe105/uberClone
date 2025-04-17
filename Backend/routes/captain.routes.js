const express = require('express');
const router = express.Router();
const {body} = require("express-validator");
const { registerCaptain, loginCaptain ,getCaptainProfile , logOutProfile} = require('../Controllers/captain.controller'); // Ensure loginCaptain is imported

const {captainAuth} = require('../middleWare/captain.auth')




router.post("/register", [
    body('!fullName.firstName').isEmpty().withMessage("invalid first name"),
    body('!fullName.lastName').isEmpty().withMessage("invalid last name"),
    body('email').isEmail().withMessage("invalid email"),
    body('password').isLength({min: 6}).withMessage("password must be at least 6 characters long"),
    
    body('vehicle.vehicleType').isIn(['car', 'bike', 'auto']).withMessage("invalid vehicle type")
], registerCaptain);


router.post("/login", [
    body('email').isEmail().withMessage("Invalid email"),
    body('password').isLength({ min: 6 }).withMessage("Password must be at least 6 characters long")
], loginCaptain);

router.get("/captainProfile", captainAuth ,getCaptainProfile);

router.get("/logout", captainAuth, logOutProfile)





module.exports = router;