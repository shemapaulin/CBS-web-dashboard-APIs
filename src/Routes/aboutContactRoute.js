import { Router } from "express";

import {
  createContact,
  getContact,
  updateContact,
} from "../Controllers/aboutContact.js";
import isSecure from "../middleware/isSecure.js";

const router = Router();

router.post("/contact", isSecure, createContact);
router.get("/contact", isSecure, getContact);
router.put("/contact/:id", isSecure, updateContact);

const contactsRouter = router;
export { contactsRouter };
