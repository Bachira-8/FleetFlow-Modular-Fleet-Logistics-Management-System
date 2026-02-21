import Driver from "../models/driver.model.js";

export const createDriver = async (req, res) => {
  const driver = await Driver.create(req.body);
  res.json(driver);
};

export const getDrivers = async (req, res) => {
  const drivers = await Driver.find();
  res.json(drivers);
};

export const updateDriver = async (req, res) => {
  const driver = await Driver.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(driver);
};

export const suspendDriver = async (req, res) => {
  const driver = await Driver.findById(req.params.id);
  driver.status = "suspended";
  await driver.save();
  res.json(driver);
};