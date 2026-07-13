const Sales = require("../model/salesModel");

exports.create = async (salesData) => {
  const sales = await Sales.create(salesData);

  return await Sales.findById(sales._id).populate("vendor").populate("sdrId");
};

exports.findAll = async (page, limit) => {
  const hasPagination = page !== undefined && limit !== undefined;
  let query = Sales.find({}).populate("vendor").populate("sdrId").sort({"createdAt": -1});
  if (hasPagination) {
    query = query.skip((page - 1) * limit).limit(limit);
  }
  return {
    data: await query,
    total: await Sales.countDocuments({}),
  };
};

exports.findByPeriod = async (page, limit, startDate, endDate) => {
  const filter = { realizedAt: { $gte: startDate, $lte: endDate } };
  const hasPagination = page !== undefined && limit !== undefined;
  let query = Sales.find(filter).populate("vendor").populate("sdrId");
  if (hasPagination) {
    query = query.skip((page - 1) * limit).limit(limit);
  }
  return {
    data: await query,
    total: await Sales.countDocuments(filter),
  };
};

exports.updateById = async (id, data) => {
  return await Sales.findByIdAndUpdate(id, data, { new: true });
};


exports.findByVendor = async(vendorId) =>{
  const filter = {vendor: vendorId};
  const query = Sales.find(filter).populate("vendor");
  return {
    data: await query,
    total: await Sales.countDocuments(filter)
  }
}