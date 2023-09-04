

import User from "../Models/User.js"
import userSchema from "../utils/validations/userSchema.js";
import reportJoiError from "../utils/functions/reportError.js";
import encode from "../utils/functions/encodePassword.js"




const createUserAccount= async(req,res)=>{
    


    try {
        const inputValidation=userSchema.validate(req.body);
        if(inputValidation.error) return reportJoiError(inputValidation,res);
        req.body.password = await encode(req.body.password);
        let password=req.body.password;
        let email= req.body.email;
        let name=req.body.username;
        const userInputs = {
            password,
            email,
            name
          };
          console.log(password);
          console.log(email)
          console.log(name)
        let user = User.create(userInputs)

        if(user) res.status(200).json({
            message: 'you have succesfully created Account',
            result:req.body
        }) 
    } catch (error) {
        console.error(error);
    res.status(500).send(`500 Internal error : ${error}`);
    }
}


export {createUserAccount}