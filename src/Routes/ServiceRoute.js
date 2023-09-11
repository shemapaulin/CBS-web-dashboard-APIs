import{Router }from 'express'


import { createService, getService, updateService } from '../Controllers/Service.js'
import isSecure from '../middleware/isSecure.js'

const routes=Router();


routes.post("/service",isSecure,createService);
routes.get("/service",isSecure,getService);
routes.put("/service/:id",isSecure,updateService);



const serviceRoute=routes;

export {serviceRoute}
