import { Router } from "express";

import { uploadImage} from "../middleware/fileUpload.js";

const router = Router();
//router.post("/upload",multerUpload, uploadImage);


const fileUploadRouter=router;
export default fileUploadRouter;