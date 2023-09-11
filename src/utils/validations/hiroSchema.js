import Joi from "joi";

const hiroSchema=Joi.object({
    hero_description : Joi.string().required(),
    hero_sub_description : Joi.string().min(2).required(),
   
})


export default hiroSchema;