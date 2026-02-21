import express from "express";
import {
  createDriver,
  getDrivers,
  updateDriver,
  suspendDriver,
} from "../controllers/driver.controller.js";

import { authenticate } from "../middleware/auth.middleware.js";
import { allowRoles } from "../middleware/rbac.middleware.js";

const router = express.Router();

router.post("/", authenticate, allowRoles("fleet_manager", "safety_officer"), createDriver);

router.get("/", authenticate, getDrivers);

router.put("/:id", authenticate, allowRoles("fleet_manager", "safety_officer"), updateDriver);

router.patch("/:id/suspend", authenticate, allowRoles("safety_officer"), suspendDriver);

export default router;