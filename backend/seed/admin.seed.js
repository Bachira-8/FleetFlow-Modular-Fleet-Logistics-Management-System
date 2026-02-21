import bcrypt from "bcryptjs";
import User from "../models/user.model.js";

export const seedAdmin = async () => {
  const exists = await User.findOne({ email: "admin@fleet.com" });

  if (!exists) {
    const hash = await bcrypt.hash("admin123", 10);

    await User.create({
      name: "Admin",
      email: "admin@fleet.com",
      passwordHash: hash,
      role: "fleet_manager",
    });

    console.log("Admin created");
  }
};