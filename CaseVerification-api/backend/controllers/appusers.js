const { validationResult, body } = require('express-validator');

const appusers = require('../models/appusers');

exports.fetchAll = async (req, res, next) => {
  try {
    const [allPosts] = await appusers.fetchAll();
    res.status(200).json(allPosts);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.postappusers = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) return;

  
  const Name = req.body.Name;
  const EmailAddress = req.body.EmailAddress;
  const UserName = req.body.UserName;
  const Password = req.body.Password;
  const IsActive = req.body.IsActive;
  const IsDeleted = req.body.IsDeleted;
  const RoleID = req.body.RoleID;
  const CreatedBy = req.body.CreatedBy;
  const LastModifiedBy = req.body.LastModifiedBy;
  

  try {
    const post = {
      Name:Name,
      EmailAddress:EmailAddress,
      UserName:UserName,
      Password:Password,
      IsActive:IsActive,
      IsDeleted:IsDeleted,
      RoleID:RoleID,
      CreatedBy:CreatedBy,
      LastModifiedBy:LastModifiedBy
    };
    const result = await appusers.save(post);
    res.status(201).json({ message: 'Appusers Added ✌' });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.deletePost = async (req, res, next) => {
  try {
    const deleteResponse = await appusers.delete(req.params.id);
    res.status(200).json(deleteResponse);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
