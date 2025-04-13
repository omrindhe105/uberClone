const userModel = require('../Models/User')

module.exports.createUser = async({FirstName,LastName,email,password,}) =>{
    if(!FirstName || !LastName || !email || !password  ){
        return {status:400,message:"Please fill all the fields."}

    }

    const user = userModel.create({
        fullName:{
            FirstName,
            LastName
        },
        email,
        password,
    


    })

    return user;
}