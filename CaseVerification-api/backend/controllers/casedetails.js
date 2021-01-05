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
      DueDate: DueDate
    };

    const result = await casedetails.save(case1);
    console.log(case1);
    // var header = result.ResultSetHeader;
    // console.log(result);
    console.log(result[0].insertId);

    var caseid = result[0].insertId;

    //Address

    var address = req.body.insAddress;
    address["GEOLocation"] = Description;
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
    thirdpartyaddress["GEOLocation"] = Description;
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

updateUsers: (req, res) => {
  const body = req.body;
  
  body.password = hashSync(body.password, salt);
  updateUser(body, (err, results) => {
    if (err) {
      console.log(err);
      return;
    }
    return res.json({
      success: 1,
      message: "updated successfully"
    });
  });
};
