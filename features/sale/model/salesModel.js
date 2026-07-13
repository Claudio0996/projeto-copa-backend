const { Schema, model } = require("mongoose");

const saleSchema = new Schema(
  {
    vendor: {
      type: Schema.Types.ObjectId,
      ref: "Vendors",
      required: true,
    },
    value: {
      type: Number,
    },
    sdrId: {
      type: Schema.Types.ObjectId,
      ref: "SDR",
    },
    realizedAt: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true },
);

module.exports = model("Sales", saleSchema);
