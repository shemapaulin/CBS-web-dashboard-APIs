import aboutContact from "../Models/aboutContact.js";
import reportJoiError from "../utils/functions/reportError.js";
import { contactSchema } from "../utils/validations/contactsSchema.js";

const createContact = async (req, res) => {
  try {
    const inputValidation = contactSchema.validate(req.body);
    if (inputValidation.error) return reportJoiError(inputValidation);
    const { Phone_number, Email } = req.body;
    const contacts = await aboutContact.create({
      Phone_number,
      Email,
    });
    res.status(200).json({
      message: "inserting data succefull",
      result: contacts,
    });
  } catch (error) {
    console.error("Error inserting data:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getContact=async(req,res)=>{
   try {
    const contactId=req.body.id 
    const contact=await aboutContact.findOne({where:{id:contactId}})

    if (contact) {
        res.status(200).json({ result: contact });
      } else {
        res.status(404).json({ message: "contact not found" });
      }
   } catch (error) {
    console.log("error fetching value");
    //res.status(500).send("internal server error", error);
   }
}

const updateContact=async(req,res)=>{
    try {
      const  contactId=req.params.id
    const inputValidation = contactSchema.validate(req.body);
    if (inputValidation.error) return reportJoiError(inputValidation);
    const { Phone_number, Email } = req.body;
    const contacts = await aboutContact.update(req.body,{
      where:{id:contactId}
    });
    if(contacts){
    res.status(200).json({
      message: "update data succefull",
      result: req.body,
    });
}else{
    res.status(404).json({
        message:"updating data failed"
    })
}
    } catch (error) {
        console.log("internal server error",error);
    }
}

export { createContact,getContact,updateContact };
