import AboutValues from "../Models/aboutValues.js";
import valuesSchema from "../utils/validations/valuesSchema.js";
import reportJoiError from "../utils/functions/reportError.js";

const createValue = async (req, res) => {
  try {
    const inputValidation = valuesSchema.validate(req.body);
    if (inputValidation.error) return reportJoiError(inputValidation);
    const { Main_title, Value_title, Value_sub_title } = req.body;
    const value = await AboutValues.create({
      Main_title,
      Value_title,
      Value_sub_title,
    });
    res.status(200).json({
      message: "inserting data succefull",
      result: value,
    });
  } catch (error) {
    console.error("Error inserting data:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getValue = async (req, res) => {
  try {
    const valueId = req.params.id;
    const value = await AboutValues.findOne({ where: { id: valueId } });

    if (value) {
      res.status(200).json({ result: value });
    } else {
      res.status(404).json({ message: "value not found" });
    }
  } catch (error) {
    console.log("error fetching value");
    res.status(500).send("internal server error", error);
  }
};

const updateValue = async (req, res) => {
  try {
    const valueId = req.params.id;
    const inputValidation = valuesSchema.validate(req.body);
    if (inputValidation.error) return reportJoiError(inputValidation);
    const { Main_title, Value_title, Value_sub_title } = req.body;
    const value = await AboutValues.update(req.body, {
      where: { id: valueId },
    });
    res.status(200).json({
      message: "you have successfully updated value",
      result: req.body ,
    });
  } catch (error) {
    console.log("error in updating value", error);
  }
};

export { createValue, getValue, updateValue };
