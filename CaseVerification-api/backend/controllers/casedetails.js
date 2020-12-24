const { validationResult, body } = require('express-validator');

const casedetails = require('../models/casedetails');

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

exports.postcasedetails = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) return;

  const CaseID = req.body.CaseID;
  const Name = req.body.Name;
  const Description = req.body.Description;
  const InsurerVerificationNotes = req.body.InsurerVerificationNotes;
  const ThirdpartyVerificationNotes = req.body.ThirdpartyVerificationNotes;
  const CreatedBy = req.body.CreatedBy;
  const LastModifiedBy = req.body.LastModifiedBy;
  

  try {
    const post = {
      CaseID:CaseID,
      Name:Name,
      Description:Description,
      InsurerVerificationNotes:InsurerVerificationNotes,
      ThirdpartyVerificationNotes:ThirdpartyVerificationNotes,
      CreatedBy:CreatedBy,
      LastModifiedBy:LastModifiedBy
    };
    const result = await casedetails.save(post);
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
