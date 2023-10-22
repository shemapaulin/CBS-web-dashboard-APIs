import{Router }from 'express'


import { createService, getService, updateService } from '../Controllers/Service.js'
import isSecure from '../middleware/isSecure.js'

const router=Router();

/**
 * @swagger
 * /api/service:
 *   post:
 *     summary: Create a new service
 *     tags: [Service]
 *     description: Add a new service to the database
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
 *             // Define properties for your service creation here
 *     responses:
 *       200:
 *         description: Successfully created service
 * securityDefinitions:
 *   bearerAuth:
 *     type: apiKey
 *     name: Authorization
 *     in: header
 */
router.post("/service", isSecure, createService);

/**
 * @swagger
 * /api/service/{id}:
 *   get:
 *     summary: Get a service by ID
 *     tags: [Service]
 *     description: Retrieve a service by its ID from the database
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the service to be retrieved
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successfully retrieved service
 *         content:
 *           application/json:
 *             example:
 *               result: service
 *     securityDefinitions:
 *       bearerAuth:
 *         type: apiKey
 *         name: Authorization
 *         in: header
 */


router.get("/service/:id", isSecure, getService);

/**
 * @swagger
 * /api/service/{id}:
 *   put:
 *     summary: Update a service
 *     tags: [Service]
 *     description: Update an existing service in the database
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the service to be updated
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
 *               // Define properties for your service update here
 *     responses:
 *       200:
 *         description: Successfully updated service
 * securityDefinitions:
 *   bearerAuth:
 *     type: apiKey
 *     name: Authorization
 *     in: header
 */
router.put("/service/:id", isSecure, updateService);

const serviceRoute=router;

export {serviceRoute}
