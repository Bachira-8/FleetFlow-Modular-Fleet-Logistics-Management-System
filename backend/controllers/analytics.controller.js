import FuelLog from "../models/fuel.model.js";
import Trip from "../models/trip.model.js";
import MaintenanceLog from "../models/maintenance.model.js";

export const fuelEfficiency = async (req, res) => {
  const trips = await Trip.find({ status: "completed" });
  const fuelLogs = await FuelLog.find();

  let totalDistance = 0;
  let totalFuel = 0;

  trips.forEach(t => {
    totalDistance += (t.endOdometer || 0) - (t.startOdometer || 0);
  });

  fuelLogs.forEach(f => {
    totalFuel += f.liters;
  });

  res.json({ efficiency: totalDistance / totalFuel });
};

export const totalOperationalCost = async (req, res) => {
  const fuel = await FuelLog.aggregate([{ $group: { _id: null, total: { $sum: "$cost" } } }]);
  const maintenance = await MaintenanceLog.aggregate([{ $group: { _id: null, total: { $sum: "$cost" } } }]);

  res.json({
    fuelCost: fuel[0]?.total || 0,
    maintenanceCost: maintenance[0]?.total || 0,
  });
};