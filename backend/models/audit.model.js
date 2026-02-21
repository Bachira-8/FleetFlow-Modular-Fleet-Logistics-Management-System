import mongoose from "mongoose";

const auditSchema = new mongoose.Schema(
  {
    action: String,

    entity: String,

    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export default mongoose.model("AuditLog", auditSchema);