import Trip from "../models/trip.model.js";
import Vehicle from "../models/vehicle.model.js";
import Driver from "../models/driver.model.js";

export const createTrip = async (req, res) => {
  const { vehicleId, driverId, cargoWeight } = req.body;

  const vehicle = await Vehicle.findById(vehicleId);
  const driver = await Driver.findById(driverId);

  if (!vehicle || vehicle.status !== "available")
    return res.status(400).json({ message: "Vehicle not available" });

  if (!driver || driver.status !== "on_duty")
    return res.status(400).json({ message: "Driver not available" });

  if (new Date(driver.licenseExpiryDate) < new Date())
    return res.status(400).json({ message: "License expired" });

  if (cargoWeight > vehicle.maxCapacityKg)
    return res.status(400).json({ message: "Exceeds capacity" });

  const trip = await Trip.create(req.body);

  vehicle.status = "on_trip";
  driver.status = "on_trip";

  await vehicle.save();
  await driver.save();

  res.json(trip);
};

export const completeTrip = async (req, res) => {
  const { endOdometer } = req.body;

  const trip = await Trip.findById(req.params.id);

  trip.status = "completed";
  trip.endOdometer = endOdometer;

  await trip.save();

  const vehicle = await Vehicle.findById(trip.vehicleId);
  const driver = await Driver.findById(trip.driverId);

  vehicle.status = "available";
  vehicle.odometer = endOdometer;

  driver.status = "on_duty";

  await vehicle.save();
  await driver.save();

  res.json(trip);
};

export const getTrips = async (req, res) => {
  const trips = await Trip.find().populate("vehicleId driverId");
  res.json(trips);
};