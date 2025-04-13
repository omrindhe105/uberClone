const userModel = require('../Models/User');
const userService = require('../services/user.services');
const { validationResult } = require('express-validator')

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
    res.status(201)


}


