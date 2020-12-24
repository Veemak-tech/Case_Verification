const { validationResult } = require('express-validator');

const Roles = require('../models/roles');

exports.fetchAll = async (req, res, next) => {
  try {
    const [allPosts] = await Roles.fetchAll();
    res.status(200).json(allPosts);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.postRoles = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) return;

  
  const Name = req.body.Name;
  const IsActive = req.body.IsActive;

  try {
    const post = {
      
      Name: Name,
      IsActive: IsActive,
    };
    const result = await Roles.save(post);
    res.status(201).json({ message: 'Roled!' });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.deletePost = async (req, res, next) => {
  try {
    const deleteResponse = await Roles.delete(req.params.id);
    res.status(200).json(deleteResponse);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
