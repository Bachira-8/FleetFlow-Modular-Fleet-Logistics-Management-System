import MaintenanceLog from "../models/maintenance.model.js";
import Vehicle from "../models/vehicle.model.js";

export const createServiceLog = async (req, res) => {
  const log = await MaintenanceLog.create(req.body);

  await Vehicle.findByIdAndUpdate(req.body.vehicleId, { status: "in_shop" });

  res.json(log);
};

export const closeServiceLog = async (req, res) => {
  const log = await MaintenanceLog.findById(req.params.id);

  log.status = "completed";
  await log.save();

  await Vehicle.findByIdAndUpdate(log.vehicleId, { status: "available" });

  res.json(log);
};