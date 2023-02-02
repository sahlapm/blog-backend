const mongoose=require('mongoose');
const LoginSchema=mongoose.Schema(
    {
        username: {
            type: String,
            required: true
          },
        password : {
          type: String,
          required: true
        },
       
    }
);
var LoginModel=mongoose.model('Logins',LoginSchema);
module.exports={LoginModel}