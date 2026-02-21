import mongoose from "mongoose";

const tripSchema = new mongoose.Schema(
  {
    vehicleId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Vehicle",
      required: true,
    },

    driverId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Driver",
      required: true,
    },

    cargoWeight: {
      type: Number,
      required: true,
    },

    origin: String,

    destination: String,

    status: {
      type: String,
      enum: ["draft", "dispatched", "completed", "cancelled"],
      default: "draft",
    },

    startOdometer: Number,

    endOdometer: Number,
  },
  { timestamps: true }
);

export default mongoose.model("Trip", tripSchema);