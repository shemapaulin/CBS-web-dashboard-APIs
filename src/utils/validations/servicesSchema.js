import Joi from "joi";

const serviceSchema=Joi.object({
    Service_title: Joi.string().required(),
    Service_sub_title : Joi.string().min(2).required(),
   
})


export default  serviceSchema;