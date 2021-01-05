const { validationResult, body } = require("express-validator");

const Post = require("../models/post");
const usersModel = require("../models/post");

exports.fetchAll = async (req, res, next) => {
  try {
    const [allPosts] = await Post.fetchAll();
    res.status(200).json(allPosts);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

// post
exports.postPost = async (req, res, next) => {
  const errors = validationResult(req);

  // if (!errors.isEmpty()) return;
  console.log("I am working...");

  const title = req.body.title;
  const body = req.body.body;
  const user = req.body.user;

  try {
    const post = {
      title: title,
      body: body,
      user: user,
    };
    const result = await Post.save(post);

    res.status(201).json({ message: "Posted!" });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

// put

exports.putPost = (req, res) => {
  const postreqdata = new usersModel(req.body);
  console.log("postreqdata update", postreqdata);
  // checking null
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.send(400).send({ success: false, message: "Please fill all fields" });
  } else {
    usersModel.putPost(req.params.id, postreqdata, (err, usermodel) => {
      if (err) res.send(err);
      res.json({ status: true, message: "post table updated!!!!!!" });
    });
  }
};

// delete
exports.deletePost = async (req, res, next) => {
  try {
    const deleteResponse = await Post.delete(req.params.id);
    res.status(200).json(deleteResponse);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
