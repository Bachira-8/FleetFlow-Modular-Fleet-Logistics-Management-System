import Vehicle from "../models/vehicle.model.js";
import Trip from "../models/trip.model.js";

export const getDashboard = async (req, res) => {
  const activeFleet = await Vehicle.countDocuments({ status: "on_trip" });
  const maintenanceAlerts = await Vehicle.countDocuments({ status: "in_shop" });
  const totalVehicles = await Vehicle.countDocuments();
  const onTrip = activeFleet;

  const utilizationRate = totalVehicles ? (onTrip / totalVehicles) * 100 : 0;

  const pendingCargo = await Trip.countDocuments({ status: "draft" });

  res.json({
    activeFleet,
    maintenanceAlerts,
    utilizationRate,
    pendingCargo,
  });
};