import express from "express";
import authMiddleware from "../middlewares/authMiddleware.js";
import { bloodGroupDetailsContoller } from "../controllers/analyticsController.js";

const router = express.Router();

// GET BLOOD DATA
router.get("/bloodGroups-data", authMiddleware, bloodGroupDetailsContoller);

export default router;
