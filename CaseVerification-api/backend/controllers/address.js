const { validationResult, body } = require("express-validator");

const Address = require("../models/address");

// Get ALL----------------------------------------
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

// PostAddress-----------------------------------
exports.postAddress = async (req, res, next) => {
  console.log("i am here");
  const errors = validationResult(req);

  // if (!errors.isEmpty()){
  //console.log("i am insert");
  // console.log(errors);

  //return;

  //}

  console.log("message");
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
    const insAddress = {
      AddressLine1: AddressLine1,
      AddressLine2: AddressLine2,
      City: City,
      Landmark: Landmark,
      State: State,
      Pincode: Pincode,
      GEOLocation: GEOLocation,
      CreatedBy: CreatedBy,
      LastModifiedBy: LastModifiedBy,
    };
    const result = await Address.save(insAddress);
    res.status(201).json({ message: "Address Added!" });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

// put Address----------------------------------
exports.putAddress = async (req, res, next) => {
  try {
    const putAddressResponse = await Address.update(
      req.body.ID,
      req.body.AddressLine1,
      req.body.AddressLine2,
      req.body.City,
      req.body.Landmark,
      req.body.State,
      req.body.Pincode,
      req.body.GEOLocation,
      req.body.LastModifiedBy
    );
    res.status(200).json(putAddressResponse);
    
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
      console.log("case details updated")
    }
    else{
      console.log("case details updated!")
    }
    next(err);
  }
};

// Delete-----------------------------------------------
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
