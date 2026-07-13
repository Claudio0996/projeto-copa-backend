const Fan = require("../model/fanModel");

exports.findByTeam = async (teamId) => {
  return await Fan.find({ teamId });
};

exports.findAll = async () => {
  return await Fan.find({});
};
