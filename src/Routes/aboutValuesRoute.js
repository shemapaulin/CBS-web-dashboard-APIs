import { Router } from "express";

import { createValue, getValue, updateValue } from "../Controllers/aboutValues.js";
import isSecure from "../middleware/isSecure.js";

const router = Router();

/**
 * @swagger
 * /api/value:
 *   post:
 *     summary: Create a new value
 *     tags: [value]
 *     description: Add a new value to the database
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: value Credentials
 *         description: value credentials
 *         in: body
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             // Define properties for your value creation here
 *     responses:
 *       200:
 *         description: Successfully created value
 * securityDefinitions:
 *   bearerAuth:
 *     type: apiKey
 *     name: Authorization
 *     in: header
 */
router.post("/value", isSecure, createValue);
/**
 * @swagger
 * /api/value/{id}:
 *   get:
 *     summary: Get a value by ID
 *     tags: [value]
 *     description: Retrieve a value by its ID from the database
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the value to be retrieved
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successfully retrieved value
 *         content:
 *           application/json:
 *             example:
 *               result: value
 *     securityDefinitions:
 *       bearerAuth:
 *         type: apiKey
 *         name: Authorization
 *         in: header
 */
router.get("/value/:id", isSecure, getValue);

/**
 * @swagger
 * /api/value/{id}:
 *   put:
 *     summary: Update a value
 *     tags: [value]
 *     description: Update an existing value in the database
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the value to be updated
 *         schema:
 *           type: string
 *       - name:  value Credentials
 *         description: value credentials
 *         in: body
 *         required: true
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               // Define properties for your value update here
 *     responses:
 *       200:
 *         description: Successfully updated value
 * securityDefinitions:
 *   bearerAuth:
 *     type: apiKey
 *     name: Authorization
 *     in: header
 */
router.put("/value/:id",isSecure,updateValue);

const valueRoute = router;
export { valueRoute };
