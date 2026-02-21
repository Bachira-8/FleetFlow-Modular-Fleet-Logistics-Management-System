import express from "express";
import {
  createServiceLog,
  closeServiceLog,
} from "../controllers/maintenance.controller.js";

import { authenticate } from "../middleware/auth.middleware.js";
import { allowRoles } from "../middleware/rbac.middleware.js";

const router = express.Router();

router.post("/", authenticate, allowRoles("fleet_manager"), createServiceLog);

router.patch("/:id/close", authenticate, allowRoles("fleet_manager"), closeServiceLog);

export default router;