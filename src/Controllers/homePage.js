import Homepage from "../Models/homePage.js";

import hiroSchema from "../utils/validations/hiroSchema.js";
import reportJoiError from "../utils/functions/reportError.js";

const createHomepage = async (req, res) => {
  try {
    const inputValidation = hiroSchema.validate(req.body);
    if (inputValidation.error) return reportJoiError(inputValidation, res);
    const { hero_description, hero_sub_description } = req.body;

    const homepage = await Homepage.create({
      hero_description,
      hero_sub_description,
    });

    res
      .status(201)
      .json({ message: "Data inserted successfully", data: homepage });
  } catch (error) {
    console.error("Error inserting data:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getHomepage = async (req, res) => {
  const hiroId = req.query.id;

  const hiro = await Homepage.findOne({ where: { id: hiroId } });

  if (hiro) {
    res.json({ result: hiro });
    console.log(hiro);
  } else {
    res.status(404).json({ message: "homepage hiro not found" });
  }
};
const updateHomepage = async (req, res) => {
  try {
    const hiroId = req.params.id;
    const inputValidation = hiroSchema.validate(req.body);
    if (inputValidation.error) return reportJoiError(inputValidation, res);
    const { hero_description, hero_sub_description } = req.body;
    const userUpdate = await Homepage.update(req.body, {
      where: { id: hiroId },
    });

    if (userUpdate) {
      res.status(200).json({
        message: "you have succesfully updated homepage",
        result: req.body,
      });
    } else {
      res.status(404).send("source not found or no changes made");
    }
  } catch (error) {
    console.log("internal server error", error);
  }
};
export { createHomepage, getHomepage, updateHomepage };
