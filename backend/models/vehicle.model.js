import mongoose from "mongoose";

const vehicleSchema = new mongoose.Schema(
  {
    name: String,

    model: String,

    licensePlate: {
      type: String,
      unique: true,
      required: true,
      index: true,
    },

    maxCapacityKg: {
      type: Number,
      required: true,
    },

    odometer: {
      type: Number,
      default: 0,
    },

    vehicleType: {
      type: String,
      enum: ["truck", "van", "bike"],
      required: true,
    },

    status: {
      type: String,
      enum: ["available", "on_trip", "in_shop", "retired"],
      default: "available",
    },

    region: String,
  },
  { timestamps: true }
);

export default mongoose.model("Vehicle", vehicleSchema);