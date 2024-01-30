import { Router } from "express";
import { createHomepage, getHomepage, updateHomepage } from "../Controllers/homePage.js";
import isSecure from "../middleware/isSecure.js";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Homepage
 *   description: Operations related to the homepage
 */

/**
 * @swagger
 * /api/homePage:
 *   post:
 *     summary: Add data to the homepage
 *     tags: [Homepage]
 *     description: Add data to MySQL database for the homepage
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: userCredentials
 *         description: User credentials
 *         in: body
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             hero_description:
 *               type: string
 *             hero_sub_description:
 *               type: string
 *     responses:
 *       200:
 *         description: Successfully added data
 * securityDefinitions:
 *   bearerAuth:
 *     type: apiKey
 *     name: Authorization
 *     in: header
 */

router.post("/homePage",  createHomepage);

/**
 * @swagger
 * /api/homePage:
 *   get:
 *     summary: Get homepage hero
 *     tags: [Homepage]
 *     description: Get data from MySQL database for the homepage
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the data to be retrieved
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successfully retrieved homepage data
 *     securityDefinitions:
 *       bearerAuth:
 *         type: apiKey
 *         name: Authorization
 *         in: header
 */
router.get("/homePage",  getHomepage);
/**
 * @swagger
 * /api/homePage/{id}:
 *   put:
 *     summary: Update hero on the homepage
 *     tags: [Homepage]
 *     description: Update data in MySQL database for the homepage
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the data to be updated
 *         schema:
 *           type: string
 *       - name: userCredentials
 *         description: User credentials
 *         in: body
 *         required: true
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               age:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Successfully updated data
 * securityDefinitions:
 *   bearerAuth:
 *     type: apiKey
 *     name: Authorization
 *     in: header
 */
router.put("/homePage/:id", isSecure, updateHomepage);

const homeRouter = router;
export { homeRouter };
