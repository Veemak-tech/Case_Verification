const { validationResult, body } = require('express-validator');

const Address = require('../models/address');

exports.fetchAll = async (req, res, next) => {
  try {
    const [allPosts] = await Address.fetchAll();
    res.status(200).json(allPosts);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.postAddress = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) return;

  
  const AddressLine1 = req.body.AddressLine1;
  const AddressLine2 = req.body.AddressLine2;
  const City = req.body.City;
  const Landmark = req.body.Landmark;
  const State = req.body.State;
  const Pincode = req.body.Pincode;
  const GEOLocation = req.body.GEOLocation;
  const CreatedBy = req.body.CreatedBy;
  const LastModifiedBy = req.body.LastModifiedBy;
  

  try {
    const post = {
      AddressLine1:AddressLine1,
      AddressLine2:AddressLine2,
      City:City,
      Landmark:Landmark,
      State:State,
      Pincode:Pincode,
      GEOLocation:GEOLocation,
      CreatedBy:CreatedBy,
      LastModifiedBy:LastModifiedBy
    };
    const result = await Address.save(post);
    res.status(201).json({ message: 'Address Added!' });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.deletePost = async (req, res, next) => {
  try {
    const deleteResponse = await Address.delete(req.params.id);
    res.status(200).json(deleteResponse);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
