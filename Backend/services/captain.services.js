const mongoose = require('mongoose');
const captainModel = require('../Models/captain.model');

module.exports.createCaptain = async ({ firstName, lastName, email, password, color, vehicleType, plateNumber, capacity }) => {
    if (!firstName || !lastName || !email || !password || !color || !vehicleType || !plateNumber || !capacity) {
        return { status: 400, message: "Invalid details" };
    }

    // Check if the captain already exists
    const isExistCaptain = await captainModel.findOne({ email });
    if (isExistCaptain) {
        return { status: 400, message: "Email already exists" };
    }

    // Create the captain
    const captain = await captainModel.create({
        fullName: {
            firstName,
            lastName
        },
        email,
        password,
        vehicle: {
            color,
            vehicleType,
            plateNumber,
            capacity
        }
    });

    return { status: 201, message: "Captain created successfully", captain };
};