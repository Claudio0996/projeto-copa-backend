const { Schema, model } = require("mongoose");

const FanModel = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    teamId: {
      type: Schema.Types.ObjectId,
      ref: "Team",
      required: true,
    },
  },
  { timestamps: true },
);

module.exports = model("Fan", FanModel);
