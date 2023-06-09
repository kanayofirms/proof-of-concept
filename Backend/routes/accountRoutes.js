import { Router } from "express";
import * as accountController from "../controllers/accountController.js";
import validateRequestBody from "../middlewares/validateBody.js";
import requiresAuth from "../middlewares/requiresAuth.js";
import registerSchema from "../schemas/accountSchema/registerSchema.js";
import loginSchema from "../schemas/accountSchema/loginSchema.js";

const router = Router();

router.post("/register", validateRequestBody(registerSchema), accountController.register);

router.post("/login", validateRequestBody(loginSchema), accountController.login);

router.post("/logout", accountController.logout);

router.get("/myprofile", requiresAuth, accountController.myprofile);

export default router;