const { validationResult, body } = require("express-validator");

const casedetails = require("../models/casedetails");
const Address = require("../models/address");
const insurerdetails = require("../models/insurerdetails");
const thirdpartydetails = require("../models/thirdpartydetails");

exports.fetchAll = async (req, res, next) => {
  try {
    const [allPosts] = await casedetails.fetchAll();
    res.status(200).json(allPosts);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.fetchById = async (req, res, next) => {
  // debugger;
  try {
    const [SinglePost] = await casedetails.fetchById(req.params.ID);

    res.status(200).json(SinglePost);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

// case details
exports.postcasedetails = async (req, res, next) => {
  const errors = validationResult(req);

  // if (!errors.isEmpty()) return;
  const CaseID = req.body.CaseID;
  const Name = req.body.Name;
  const Description = req.body.Description;
  const InsurerVerificationNotes = req.body.InsurerVerificationNotes;
  const T_VerificationNotes = req.body.T_VerificationNotes;
  const CreatedBy = 1; //req.body.CreatedBy;
  const LastModifiedBy = 2; // req.body.LastModifiedBy;
  const ReferenceNumber = req.body.ReferenceNumber;
  const DueDate = req.body.DueDate;

  try {
    const case1 = {
      CaseID: CaseID,
      Name: Name,
      Description: Description,
      InsurerVerificationNotes: InsurerVerificationNotes,
      T_VerificationNotes: T_VerificationNotes,
      CreatedBy: CreatedBy,
      LastModifiedBy: LastModifiedBy,
      ReferenceNumber: ReferenceNumber,
      DueDate: DueDate,
    };

    const result = await casedetails.save(case1);
    console.log(case1);
    // var header = result.ResultSetHeader;
    // console.log(result);
    console.log(result[0].insertId);

    var caseid = result[0].insertId;

    //Address

    var address = req.body.insAddress;
    address["GEOLocation"] = "109.89,100.9";
    address["CreatedBy"] = CreatedBy;
    address["LastModifiedBy"] = LastModifiedBy;

    console.log(address);
    const result1 = await Address.save(address);

    var insureraddressid = result1[0].insertId;

    // Insurer Details
    var InsurerDetails = req.body.insDetails;

    InsurerDetails["CaseID"] = caseid;
    InsurerDetails["CreatedBy"] = CreatedBy;
    InsurerDetails["LastModifiedBy"] = LastModifiedBy;
    InsurerDetails["AlternativePhoneNumber"] = "999999999";
    InsurerDetails["AddressID"] = insureraddressid;

    console.log(InsurerDetails);
    const result2 = await insurerdetails.save(InsurerDetails);

    // Thirdparty Details
    console.log("third party detail");
    var ThirdpartyDetails = req.body.tpartyDetails;
    var thirdpartyaddress = req.body.tpartyAddress;
    console.log(thirdpartyaddress);
    thirdpartyaddress["GEOLocation"] = "109.23.2,100.23.3";
    thirdpartyaddress["CreatedBy"] = CreatedBy;
    thirdpartyaddress["LastModifiedBy"] = LastModifiedBy;
    const tpaddressresult = await Address.save(thirdpartyaddress);
    var thirdpartyaddressid = tpaddressresult[0].insertId;

    ThirdpartyDetails["CaseID"] = caseid;
    ThirdpartyDetails["T_AlternativePhoneNumber"] = "8888888888";
    ThirdpartyDetails["T_AddressID"] = thirdpartyaddressid;
    ThirdpartyDetails["T_PhotoDocID"] = "550443";
    ThirdpartyDetails["T_AudioDocID"] = "550444";
    ThirdpartyDetails["T_VideoDocID"] = "550445";
    ThirdpartyDetails["T_PhotoWithSelfieDocID"] = "550446";
    ThirdpartyDetails["CreatedBy"] = CreatedBy;
    ThirdpartyDetails["LastModifiedBy"] = LastModifiedBy;

    console.log(req.body.ThirdpartyDetails);
    const result3 = await thirdpartydetails.save(ThirdpartyDetails);

    res.status(201).json({ message: "casedetails Added 👌" });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.deletePost = async (req, res, next) => {
  try {
    const deleteResponse = await casedetails.delete(req.params.id);
    res.status(200).json(deleteResponse);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

// put working

// exports.putCasedetails = async (req, res, next) => {

//   try {
//     const putResponse = await casedetails.update(
//       req.body.CaseID,
//       req.body.Name,
//       req.body.Description,
//       req.body.InsurerVerificationNotes,
//       req.body.T_VerificationNotes,
//       req.body.ReferenceNumber,
//       req.body.DueDate,
//       req.body.LastModifiedBy
//     );

//     res.status(200).json(putResponse);
//     console.log("Case details Updated !!!!")
//   } catch (err) {
//     if (!err.statusCode) {
//       err.statusCode = 500;
//     }
//     next(err);
//   }
// };

// test put
exports.putCasedetails = async (req, res, next) => {
  try {
    // debugger;
    const putResponse = {
      CaseID: req.body.CaseID,
      Name: req.body.Name,
      Description: req.body.Description,
      InsurerVerificationNotes: req.body.InsurerVerificationNotes,
      T_VerificationNotes: req.body.T_VerificationNotes,
      ReferenceNumber: req.body.ReferenceNumber,
      DueDate: req.body.DueDate,
      LastModifiedBy: req.body.LastModifiedBy,
    };

    const result = await casedetails.update(putResponse);
    console.log(putResponse);

    console.log(result[0].insertId);
    var caseid = result[0].insertId;

    var insureraddressidput = result[0].insertId;

// debugger;
    // Insurer Details
    var updateinsurardetails = req.body.insDetails;

   // updateinsurardetails["ID"]=req.body.insDetails.ID,
    updateinsurardetails["CaseID"]=req.body.insDetails.ID,
    updateinsurardetails["InsurerName"]=req.body.insDetails.InsurerName,
    updateinsurardetails["PhoneNumber"]=req.body.insDetails.PhoneNumber,
    updateinsurardetails["AlternativePhoneNumber"]="212121212",
    updateinsurardetails["EmailID"]=req.body.insDetails.EmailID,
     updateinsurardetails["AddressID"]=req.body.insDetails.I_AddressID

    const insurerput = await insurerdetails.update(updateinsurardetails);
    console.log(insurerput);

    // Address Insurer
    var updateinsaddress = req.body.insAddress;
    // debugger;

     updateinsaddress["ID"]=req.body.insAddress.I_AddressID,
     updateinsaddress["AddressLine1"]=req.body.insAddress.I_AddressLine1,
     updateinsaddress["AddressLine2"]=req.body.insAddress.I_AddressLine2,
     updateinsaddress["City"]=req.body.insAddress.I_City,
     updateinsaddress["State"]=req.body.insAddress.I_State,
     updateinsaddress["Pincode"]=req.body.insAddress.I_Pincode,
     updateinsaddress["Landmark"]=req.body.insAddress.I_Landmark

    const insaddressput = await Address.updateinsurerAddress(updateinsaddress);
    console.log(insaddressput);


    // thirdparty details
    var updateTpartydet = req.body.tpartyDetails;
    // debugger;

    updateTpartydet["CaseID"]=req.body.tpartyDetails.ID,
    updateTpartydet["ThirdpartyName"]=req.body.tpartyDetails.ThirdpartyName,
    updateTpartydet["T_PhoneNumber"]=req.body.tpartyDetails.T_PhoneNumber,
    updateTpartydet["T_EmailID"]=req.body.tpartyDetails.T_EmailID,
    updateTpartydet["T_VerificationNotes"]=req.body.tpartyDetails.T_VerificationNotes

    const tpartydetput = await thirdpartydetails.updatetpartydetails(updateTpartydet);
    console.log(updateTpartydet);

    // tparty address
    var updatetpartyAddress = req.body.tpartyAddress;
    // debugger;
    updatetpartyAddress["ID"]=req.body.tpartyAddress.T_AddressID,
    updatetpartyAddress["AddressLine1"]=req.body.tpartyAddress.T_AddressLine1,
    updatetpartyAddress["AddressLine2"]=req.body.tpartyAddress.T_AddressLine2,
    updatetpartyAddress["City"]=req.body.tpartyAddress.T_City,
    updatetpartyAddress["State"]=req.body.tpartyAddress.T_State,
    updatetpartyAddress["Pincode"]=req.body.tpartyAddress.T_Pincode,
    updatetpartyAddress["Landmark"]=req.body.tpartyAddress.T_Landmark

    const tpartyaddressput = await Address.updatetpAddress(updatetpartyAddress);
    console.log(updatetpartyAddress);

    // console.log(updateinsurardet);
    // const result2 = await insurerdetails.update(updateinsurardet);

    //res.status(200).json(updateinsurardet)
     res.status(200).json(putResponse);
    console.log("Case details Updated !!!!");
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
