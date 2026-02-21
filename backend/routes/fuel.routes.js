import express from "express";
import {
  addFuelLog,
  getFuelLogs,
} from "../controllers/fuel.controller.js";

import { authenticate } from "../middleware/auth.middleware.js";
import { allowRoles } from "../middleware/rbac.middleware.js";

const router = express.Router();

router.post("/", authenticate, allowRoles("fleet_manager", "analyst"), addFuelLog);

router.get("/", authenticate, getFuelLogs);

export default router;