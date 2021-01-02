const { validationResult, body } = require('express-validator');

const casedetails = require('../models/casedetails');
const Address = require('../models/address');

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
  const ThirdpartyVerificationNotes = req.body.ThirdpartyVerificationNotes;
  const CreatedBy = 1; //req.body.CreatedBy;
  const LastModifiedBy = 2; // req.body.LastModifiedBy;
  

  try {
    const case1 = {
      CaseID:CaseID,
      Name:Name,
      Description:Description,
      InsurerVerificationNotes:InsurerVerificationNotes,
      ThirdpartyVerificationNotes:ThirdpartyVerificationNotes,
      CreatedBy:CreatedBy,
      LastModifiedBy:LastModifiedBy
    };
    
    
    const result = await casedetails.save(case1);

    //Address

      var address = req.body.insAddress;
      address["GEOLocation"] = Description;
      address["CreatedBy"] = CreatedBy;
      address["LastModifiedBy"] = LastModifiedBy;

      console.log(address);
       const result1 = await Address.save(address);

    res.status(201).json({ message: 'casedetails Added 👌' });
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
