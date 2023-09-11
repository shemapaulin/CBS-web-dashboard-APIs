import Joi from "joi";


const contactSchema=Joi.object({
    Phone_number : Joi.string().min(9).required(),
    Email : Joi.string().min(2).required(),
   
})

export {contactSchema}