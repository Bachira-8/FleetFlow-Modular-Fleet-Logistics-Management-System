import mongoose from "mongoose";

const driverSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    licenseNumber: {
      type: String,
      required: true,
      unique: true,
    },

    licenseExpiryDate: {
      type: Date,
      required: true,
    },

    licenseCategory: String,

    status: {
      type: String,
      enum: ["on_duty", "off_duty", "suspended", "on_trip"],
      default: "on_duty",
    },

    safetyScore: {
      type: Number,
      default: 100,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Driver", driverSchema);