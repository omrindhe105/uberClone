import captainModel from '../Models/captain.model.js';
import {createCaptain} from '../services/captain.services.js';
 
import { validationResult } from 'express-validator'; // to validate incoming request data
 

export const registerCaptain = async (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.status(400).json({ errors: error.array() });
    }

    try {
        const { fullName, email, password, vehicle } = req.body;
        const hashPassword = await captainModel.hashPassword(password);

        const captain = await createCaptain({
            firstName: fullName.firstName,
            lastName: fullName.lastName,
            email,
            password: hashPassword,
            color: vehicle.color,
            vehicleType: vehicle.vehicleType,
            plateNumber: vehicle.plateNumber,
            capacity: vehicle.capacity
        });

        // const token = createCaptain.generateAuthToken();

        res.status(201).json({  captain });
    } catch (err) {
        res.status(500).json({ error: 'Internal Server Error', details: err.message });
    }
};

export const loginCaptain = async (req, res, next) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.status(400).json({ errors: error.array() });
    }

    const { email, password } = req.body;
   
    const  captain = await captainModel.findOne({ email }).select('+password');
   
     
    if(!captain){
        return res.status(401).json({Message: 'Invalid email or password'});
    }

    const isMatch = await captain.comparePassword(password);
    if(!isMatch){
        return res.status(401).json({Message: 'Invalid email or password'});
    }
    const token = captain.generateAuthToken();
    res.cookie('token', token, { expiresIn: '1h' });
    res.status(200).json({ captain,token });
}

export const getCaptainProfile = async (req, res, next) => {
    res.status(200).json(req.captain)
    console.log( req.captain);
}
   

 export const logOutProfile = async (req, res, next) => {

    res.clearCookie('token');
    res.status(200).json({message:"logout successfully"})
}

