import express from "express";
import {
  fuelEfficiency,
  totalOperationalCost,
} from "../controllers/analytics.controller.js";

import { authenticate } from "../middleware/auth.middleware.js";
import { allowRoles } from "../middleware/rbac.middleware.js";

const router = express.Router();

router.get("/fuel-efficiency", authenticate, allowRoles("analyst", "fleet_manager"), fuelEfficiency);

router.get("/operational-cost", authenticate, allowRoles("analyst", "fleet_manager"), totalOperationalCost);

export default router;