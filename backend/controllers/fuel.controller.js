import FuelLog from "../models/fuel.model.js";

export const addFuelLog = async (req, res) => {
  const log = await FuelLog.create(req.body);
  res.json(log);
};

export const getFuelLogs = async (req, res) => {
  const logs = await FuelLog.find();
  res.json(logs);
};