import { Router } from "express";

import { createValue, getValue, updateValue } from "../Controllers/aboutValues.js";
import isSecure from "../middleware/isSecure.js";

const router = Router();

router.post("/value", isSecure, createValue);
router.get("/value", isSecure, getValue);
router.put("/value/:id",isSecure,updateValue);

const valueRoute = router;
export { valueRoute };
