import {Router} from "express"


import { createUserAccount,userLogin,getUser,getUsers } from "../Controllers/user.js"
import isSecure from "../middleware/isSecure.js";


const router=Router();
router.get("/getUser", isSecure ,getUser);
router.get("/getUsers",getUsers)
router.post("/users",createUserAccount);
router.post("/userLogin",userLogin);



const userRouter=router;
export default userRouter;