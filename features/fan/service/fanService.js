const FanRepository = require("../repository/fanRepository");

exports.findByTeam = async (teamId) => {
  return await FanRepository.findByTeam(teamId);
};

exports.findAll = async () => {
  return await FanRepository.findAll();
};
