import mongoose from "mongoose";

const maintenanceSchema = new mongoose.Schema(
  {
    vehicleId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Vehicle",
      required: true,
    },

    description: String,

    cost: Number,

    serviceDate: {
      type: Date,
      default: Date.now,
    },

    status: {
      type: String,
      enum: ["open", "completed"],
      default: "open",
    },
  },
  { timestamps: true }
);

export default mongoose.model("MaintenanceLog", maintenanceSchema);