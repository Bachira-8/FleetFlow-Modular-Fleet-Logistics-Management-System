import express from "express";
import {
  createTrip,
  completeTrip,
  getTrips,
} from "../controllers/trip.controller.js";

import { authenticate } from "../middleware/auth.middleware.js";
import { allowRoles } from "../middleware/rbac.middleware.js";

import {
  checkVehicleAvailable,
  checkDriverAvailable,
  checkLicenseValid,
} from "../middleware/guards.middleware.js";

const router = express.Router();

router.post(
  "/",
  authenticate,
  allowRoles("dispatcher", "fleet_manager"),
  checkVehicleAvailable,
  checkDriverAvailable,
  checkLicenseValid,
  createTrip
);

router.post(
  "/:id/complete",
  authenticate,
  allowRoles("dispatcher", "fleet_manager"),
  completeTrip
);

router.get("/", authenticate, getTrips);

export default router;