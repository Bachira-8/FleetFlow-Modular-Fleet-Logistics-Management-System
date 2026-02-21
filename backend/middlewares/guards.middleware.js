import Vehicle from "../models/vehicle.model.js";
import Driver from "../models/driver.model.js";

export const checkVehicleAvailable = async (req, res, next) => {
  const vehicle = await Vehicle.findById(req.body.vehicleId);

  if (!vehicle || vehicle.status !== "available") {
    return res.status(400).json({ message: "Vehicle not available" });
  }

  next();
};

export const checkDriverAvailable = async (req, res, next) => {
  const driver = await Driver.findById(req.body.driverId);

  if (!driver || driver.status !== "on_duty") {
    return res.status(400).json({ message: "Driver not available" });
  }

  next();
};

export const checkLicenseValid = async (req, res, next) => {
  const driver = await Driver.findById(req.body.driverId);

  if (new Date(driver.licenseExpiryDate) < new Date()) {
    return res.status(400).json({ message: "License expired" });
  }

  next();
};