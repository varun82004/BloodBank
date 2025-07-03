import express from "express";
import {
  registerController,
  loginController,
  currentUserController,
} from "../controllers/authController.js";
import authMiddleware from "../middlewares/authMiddleware.js";


const router = express.Router();

// REGISTER || POST
router.post("/register", registerController);

// LOGIN || POST
router.post("/login", loginController);

// GET CURRENT USER || GET
router.get("/current-user", authMiddleware, currentUserController);

export default router;
