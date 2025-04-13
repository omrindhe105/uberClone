const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


const UserSchema = new mongoose.Schema({
    fullName:{
        FirstName :{
            type : String,
            required : true,
            
        },
        LastName :{
            type : String,
            required : true,
            
        }

    },
    email:{
        type : String,
    },
  
    password:{
        type : String,
        select: false,
    },

  
    socketId:{
        type : String,
    }
})

UserSchema.methods.generateAuthToken = function () {
    const jwt = require('jsonwebtoken');
    return jwt.sign(
      { _id: this._id, email: this.email },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );
    return token
  };

UserSchema.methods.comparePassword = async function(){
    return await bcrypt.compare(password, this.password);
}

UserSchema.statics.hashPassword = async function(password) {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
  };

const userModel = mongoose.model('user',UserSchema)

module.exports = userModel;