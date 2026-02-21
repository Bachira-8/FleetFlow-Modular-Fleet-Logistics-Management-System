import express from "express";

import authRoutes from "./routes/auth.routes.js"
import vehicleRoutes from "./routes/vehicle.routes.js"
import driverRoutes from "./routes/driver.routes.js"
import tripRoutes from "./routes/trip.routes.js"
import maintenanceRoutes from "./routes/maintenance.routes.js"
import fuelRoutes from "./routes/fuel.routes.js"
import dashboardRoutes from "./routes/dashboard.routes.js"
import analyticsRoutes from "./routes/analytics.routes.js"

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/vehicles", vehicleRoutes);
router.use("/drivers", driverRoutes);
router.use("/trips", tripRoutes);
router.use("/maintenance", maintenanceRoutes);
router.use("/fuel", fuelRoutes);
router.use("/dashboard", dashboardRoutes);
router.use("/analytics", analyticsRoutes);

export default router;