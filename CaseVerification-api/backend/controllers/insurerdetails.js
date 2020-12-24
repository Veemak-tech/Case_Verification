const { validationResult, body } = require('express-validator');

const insurerdetails = require('../models/insurerdetails');

exports.fetchAll = async (req, res, next) => {
  try {
    const [allPosts] = await insurerdetails.fetchAll();
    res.status(200).json(allPosts);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.postinsurerdetails = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) return;

  
  const CaseID = req.body.CaseID;
  const InsurerName = req.body.InsurerName;
  const PhoneNumber = req.body.PhoneNumber;
  const AlternativePhoneNumber = req.body.AlternativePhoneNumber;
  const EmailID = req.body.EmailID;
  const AddressID = req.body.AddressID;
  const CreatedBy = req.body.CreatedBy;
  const LastModifiedBy = req.body.LastModifiedBy;
  

  try {
    const post = {
      CaseID:CaseID,
      InsurerName:InsurerName,
      PhoneNumber:PhoneNumber,
      AlternativePhoneNumber:AlternativePhoneNumber,
      EmailID:EmailID,
      AddressID:AddressID,
      CreatedBy:CreatedBy,
      LastModifiedBy:LastModifiedBy
    };
    const result = await insurerdetails.save(post);
    res.status(201).json({ message: 'Insurer Details Added Succesfully 👍😎' });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.deletePost = async (req, res, next) => {
  try {
    const deleteResponse = await insurerdetails.delete(req.params.id);
    res.status(200).json(deleteResponse);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
