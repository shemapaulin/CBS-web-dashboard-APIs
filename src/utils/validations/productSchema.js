import Joi from "joi";

const prodSchema=Joi.object({
    prod_description : Joi.string().required(),
    prod_sub_description : Joi.string().min(2).required(),
   
})


export default prodSchema;