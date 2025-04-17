const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const captainSchema = new mongoose.Schema({
     fullName:{
        firstName:{
           type:String,
           required:true,
           minlength:[2, 'First Name should be at least 2 characters long'],
           maxlength:20
        },
        lastName:{
          type:String,
           required:true,
           minlength:[2, 'Last Name should be at least 2 characters long'],
           maxlength:20
     }
    },
    email:{
        type:String,
        required:true,
        unique:true,
      
    },
    password:{
        type:String,
        required:true,
        minlength:[6, 'Password should be at least 6 characters long'],
        select: false
    },
    soketId:{
        type: String,
    },

    status:{
        type: String,
        enum:['available', 'notAvailable'],
        default:'notAvailable'
    },
    vehicle:{
        color:{
            type: String,
            required:true
        },
        capacity:{
            type: Number,
            required:true
        },
        plateNumber:{
            type: String,
            required:true
        },
        vehicleType:{
            type: String,
            required:true,
            enum:['car', 'bike', 'auto'],
             set: value => value.toLowerCase()
        }

    },
    location:{
          lat:{
            type: Number,
        
          },
          lng:{
            type: Number,
            
          }
    }
})

// jwt token generation middleware for each user instance
captainSchema.methods.generateAuthToken = function () {
    const jwt = require('jsonwebtoken');
    const token = jwt.sign({_id :this._id}, process.env.JWT_SECRET, { expiresIn: '1d' });
    return token;
   
}
// bcrypt password comparison middleware
captainSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password, this.password);
}
// bcrypt password hashing middleware
captainSchema.statics.hashPassword = async function(password) {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
}; 



const Captain = mongoose.model('Captain', captainSchema);

module.exports = Captain;