import Vehicle from "../models/vehicle.model.js";

export const createVehicle = async (req, res) => {
  const vehicle = await Vehicle.create(req.body);
  res.json(vehicle);
};

export const getVehicles = async (req, res) => {
  const vehicles = await Vehicle.find();
  res.json(vehicles);
};

export const updateVehicle = async (req, res) => {
  const vehicle = await Vehicle.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(vehicle);
};

export const deleteVehicle = async (req, res) => {
  await Vehicle.findByIdAndDelete(req.params.id);
  res.json({ message: "Vehicle deleted" });
};

export const toggleOutOfService = async (req, res) => {
  const vehicle = await Vehicle.findById(req.params.id);
  vehicle.status = vehicle.status === "retired" ? "available" : "retired";
  await vehicle.save();
  res.json(vehicle);
};