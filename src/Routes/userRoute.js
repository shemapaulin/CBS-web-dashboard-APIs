import {Router} from "express"


import { createUserAccount } from "../Controllers/user.js"



const router=Router();

router.post("/users",createUserAccount);



const userRouter=router;
export default userRouter;