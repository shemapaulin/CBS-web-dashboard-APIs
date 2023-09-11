import {Router} from "express"


import {  createHomepage, getHomepage, updateHomepage} from "../Controllers/homePage.js"
import isSecure from "../middleware/isSecure.js";

const router=Router();


router.post("/homePage",isSecure,createHomepage);
router.get("/homePage",isSecure,getHomepage);
router.put("/homePage/:id",isSecure,updateHomepage);



const homeRouter=router;
export {homeRouter};

