import Joi from "joi";

const valuesSchema=Joi.object({
    Main_title : Joi.string().required(),
    Value_title: Joi.string().min(2).required(),
    Value_sub_title: Joi.string().min(6).required(),
})


export default valuesSchema;