import { Router } from "express";
import { createProduct, updateProduct,getProduct} from "../Controllers/Product.js";
import isSecure from "../middleware/isSecure.js"




const router=Router();


router.post("/product",isSecure,createProduct);
router.get("/product",isSecure,getProduct);
router.put("/product/:id",isSecure,updateProduct);



const productRoute=router;

export {productRoute}