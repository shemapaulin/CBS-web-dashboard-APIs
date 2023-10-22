import {Router} from "express"


import { createUserAccount,userLogin,getUser,getUsers, updateUser, deleteUser } from "../Controllers/user.js"
import isSecure from "../middleware/isSecure.js";


const router=Router();
router.get("/getUser", isSecure ,getUser);
router.get("/getUsers",getUsers)
router.post("/users",createUserAccount);
/**
 * @swagger
 * /api/userLogin:
 *   post:
 *     summary: user login
 *     tags: [user]
 *     description: fetch the user from the MySQL database
 *     parameters:
 *       - name: userCredentials
 *         description: User credentials
 *         in: body
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             username:
 *               type: string
 *             email:
 *               type: string
 *             password:
 *               type: string
 *     responses:
 *       200:
 *         description: Successfully logged in
 */

router.post("/userLogin",userLogin);
router.put("/updateUser/:id", isSecure ,updateUser);
router.delete("/deleteUser/:id", isSecure ,deleteUser);



const userRouter=router;
export default userRouter;