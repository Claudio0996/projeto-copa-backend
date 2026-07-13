const FanService = require("../service/fanService");

exports.findAllFans = async (req, res, next) => {
  const fans = await FanService.findAll();

  return res.status(201).json({
    data: fans,
    message: "Torcedores retornados com sucesso",
    succes: true,
  });
};
