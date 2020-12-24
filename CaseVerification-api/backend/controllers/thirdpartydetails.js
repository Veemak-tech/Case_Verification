const { validationResult, body } = require('express-validator');

const thirdpartydetails = require('../models/thirdpartydetails');

exports.fetchAll = async (req, res, next) => {
  try {
    const [allPosts] = await thirdpartydetails.fetchAll();
    res.status(200).json(allPosts);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.postthirdpartydetails = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) return;

  
  const CaseID = req.body.CaseID;
  const ThirdpartyName = req.body.ThirdpartyName;
  const T_PhoneNumber = req.body.T_PhoneNumber;
  const T_AlternativePhoneNumber = req.body.T_AlternativePhoneNumber;
  const T_EmailID = req.body.T_EmailID;
  const T_AddressID = req.body.T_AddressID;
  const T_PhotoDocID = req.body.T_PhotoDocID;
  const T_AudioDocID = req.body.T_AudioDocID;
  const T_VideoDocID = req.body.T_VideoDocID;
  const T_PhotoWithSelfieDocID = req.body.T_PhotoWithSelfieDocID;
  const T_VerificationNotes = req.body.T_VerificationNotes;
  const CreatedBy = req.body.CreatedBy;
  const LastModifiedBy = req.body.LastModifiedBy;
  

  try {
    const post = {
      CaseID:CaseID,
      ThirdpartyName:ThirdpartyName,
      T_PhoneNumber:T_PhoneNumber,
      T_AlternativePhoneNumber:T_AlternativePhoneNumber,
      T_EmailID:T_EmailID,
      T_AddressID:T_AddressID,
      T_PhotoDocID:T_PhotoDocID,
      T_AudioDocID:T_AudioDocID,
      T_VideoDocID:T_VideoDocID,
      T_PhotoWithSelfieDocID:T_PhotoWithSelfieDocID,
      T_VerificationNotes:T_VerificationNotes,
      CreatedBy:CreatedBy,
      LastModifiedBy:LastModifiedBy
    };
    const result = await thirdpartydetails.save(post);
    res.status(201).json({ message: 'Thirdparty Details Added Succesfully 👍' });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.deletePost = async (req, res, next) => {
  try {
    const deleteResponse = await thirdpartydetails.delete(req.params.id);
    res.status(200).json(deleteResponse);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
