import Service from "../Models/Service.js";
import serviceSchema from "../utils/validations/servicesSchema.js";
import reportJoiError from "../utils/functions/reportError.js";



const createService=async(req,res)=>{
    try {
       const inputValidation=serviceSchema.validate(req.body)
        if(inputValidation.error) return reportJoiError(inputValidation,res);
        const {  Service_title,Service_sub_title } = req.body;

        const service = await Service.create({
            Service_title,
            Service_sub_title
          });
      
          res
            .status(201)
            .json({ message: "Data inserted successfully", data: service });
    } catch (error) {
        console.error("Error inserting data:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}
const getService=async(req,res)=>{

try {
    
    const serviceId= req.body.id;
    const service= await Service.findOne({ where: { id: serviceId } });
   
    if (service) {
      res.status(200).json({ result: service});
    } else {
      res.status(404).json({ message: "service not found" });
    }
} catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ message: "Internal server error" });
}
};

const updateService=async(req,res)=>{
    try {
      const serviceId= req.params.id;
      const inputValidation = serviceSchema.validate(req.body);
      if (inputValidation.error) return reportJoiError(inputValidation, res);
      const { Service_title, Service_sub_title } = req.body;
      const serviceUpdate = await Service.update(req.body, {
        where: { id: serviceId},
      });
  
      if (serviceUpdate) {
        res.status(200).json({
          message: "you have succesfully updated service",
          result: req.body,
        });
      } else {
        res.status(404).send("source not found or no changes made");
      }
  
    } catch (error) {
      console.log("internal server error",error);
    }
  }

export {createService,getService,updateService}