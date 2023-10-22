import Product from "../Models/Product.js";
import prodSchema from "../utils/validations/productSchema.js";
import reportJoiError from "../utils/functions/reportError.js";

const createProduct = async (req, res) => {
  try {
    const inputValidation = prodSchema.validate(req.body);
    if (inputValidation.error) return reportJoiError(inputValidation);
    const { prod_description, prod_sub_description } = req.body;
    const product = await Product.create({
      prod_description,
      prod_sub_description,
    });

    res.status(200).json({
      message: "inserting product successfully",
      result: product,
    });
  } catch (error) {
    console.error("Error inserting data:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await Product.findOne({ where: { id: productId } });

    if (product) {
      res.status(200).json({ result: product });
    } else {
      res.status(404).json({ message: "product not found" });
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
const updateProduct = async (req, res) => {
  try {
    const ProductId = req.params.id;
    const inputValidation = prodSchema.validate(req.body);
    if (inputValidation.error) return reportJoiError(inputValidation, res);
    const { prod_description, prod_sub_description } = req.body;
    const productUpdate = await Product.update(req.body, {
      where: { id: ProductId },
    });

    if (productUpdate) {
      res.status(200).json({
        message: "you have succesfully updated product",
        result: req.body,
      });
    } else {
      res.status(404).send("source not found or no changes made");
    }
  } catch (error) {
    console.log("internal server error", error);
  }
};
export { createProduct, getProduct, updateProduct };
