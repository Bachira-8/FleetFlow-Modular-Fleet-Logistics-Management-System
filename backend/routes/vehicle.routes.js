import express from "express";
import {
  createVehicle,
  getVehicles,
  updateVehicle,
  deleteVehicle,
  toggleOutOfService,
} from "../controllers/vehicle.controller.js";

import { authenticate } from "../middleware/auth.middleware.js";
import { allowRoles } from "../middleware/rbac.middleware.js";

const router = express.Router();

router.post("/", authenticate, allowRoles("fleet_manager"), createVehicle);

router.get("/", authenticate, getVehicles);

router.put("/:id", authenticate, allowRoles("fleet_manager"), updateVehicle);

router.delete("/:id", authenticate, allowRoles("fleet_manager"), deleteVehicle);

router.patch("/:id/toggle", authenticate, allowRoles("fleet_manager"), toggleOutOfService);

export default router;