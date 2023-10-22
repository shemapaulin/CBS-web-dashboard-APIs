import { Router } from "express";
import { createProduct, updateProduct,getProduct} from "../Controllers/Product.js";
import isSecure from "../middleware/isSecure.js"




const router=Router();

/**
 * @swagger
 * /api/product:
 *   post:
 *     summary: Create a new product
 *     tags: [product]
 *     description: Add a new product to the database
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: product Credentials
 *         description: product credentials
 *         in: body
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             // Define properties for your product creation here
 *     responses:
 *       200:
 *         description: Successfully created service
 * securityDefinitions:
 *   bearerAuth:
 *     type: apiKey
 *     name: Authorization
 *     in: header
 */
router.post("/product",isSecure,createProduct);


/**
 * @swagger
 * /api/product/{id}:
 *   put:
 *     summary: Update a product
 *     tags: [product]
 *     description: Update an existing product in the database
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the product to be updated
 *         schema:
 *           type: string
 *       - name: productCredentials
 *         description: product credentials
 *         in: body
 *         required: true
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               // Define properties for your product update here
 *     responses:
 *       200:
 *         description: Successfully updated product
 * securityDefinitions:
 *   bearerAuth:
 *     type: apiKey
 *     name: Authorization
 *     in: header
 */
router.put("/product/:id",isSecure,updateProduct);



const productRoute=router;

export {productRoute}