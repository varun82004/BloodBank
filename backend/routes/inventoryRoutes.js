import express from "express";
import authMiddleware from "../middlewares/authMiddleware.js";
import {
  createInventoryController,
  getInventoryController,
  getDonarsController,
  getHospitalController,
  getOrgnaisationController,
  getOrgnaisationForHospitalController,
  getInventoryHospitalController,
  getRecentInventoryController,
} from "../controllers/inventoryController.js";

const router = express.Router();

// ADD INVENTORY || POST
router.post("/create-inventory", authMiddleware, createInventoryController);

// GET ALL BLOOD RECORDS
router.get("/get-inventory", authMiddleware, getInventoryController);

// GET RECENT BLOOD RECORDS
router.get("/get-recent-inventory", authMiddleware, getRecentInventoryController);

// GET HOSPITAL BLOOD RECORDS
router.post("/get-inventory-hospital", authMiddleware, getInventoryHospitalController);

// GET DONOR RECORDS
router.get("/get-donars", authMiddleware, getDonarsController);

// GET HOSPITAL RECORDS
router.get("/get-hospitals", authMiddleware, getHospitalController);

// GET ORGANISATION RECORDS
router.get("/get-orgnaisation", authMiddleware, getOrgnaisationController);

// GET ORGANISATION RECORDS FOR HOSPITAL
router.get("/get-orgnaisation-for-hospital", authMiddleware, getOrgnaisationForHospitalController);

export default router;
