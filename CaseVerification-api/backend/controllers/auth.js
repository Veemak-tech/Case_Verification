const { validationResult } = require('express-validator');

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/user');

const Roles = require('../models/roles')


exports.signup = async (req, res, next) => {
 console.log(" its work");
 
  
   const errors = validationResult(req);

   if (!errors.isEmpty()) return;

  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  const RoleID=req.body.RoleID;

  try {
    const hashedPassword = await bcrypt.hash(password, 12);

    const userDetails = {
      name: name,
      email: email,
      password: hashedPassword,
      RoleID: RoleID,
    };

    const result = await User.save(userDetails);

    res.status(201).json({ message: 'User registered!' });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
exports.fetchAll = async (req, res, next) => {
  try {
    const [allPosts] = await User.fetchAll();
    res.status(200).json(allPosts);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

// exports.update = (req, res) =>{
//   const user=new User(req.body);
//   console.log("update user",user);
//   if(req.body.constructor===Object && Object.keys(req.body).length===0)
//   {
//     res.send(400).send({success:false,message:"please fill all fields"});

//   }
//   else{
//   User.(req.params.id,user,(Error,user)=>{
//       if(Error)res.send(Error);
//       res.json({status:true,message:"success"});
//       console.log(user);
//     })
//   }
// }


exports.Update = async (req, res, next) => {
  console.log(" its work");
  
   
    const errors = validationResult(req);
 
    if (!errors.isEmpty()) return;
   const id =req.body.id;
   const name = req.body.name;
   const email = req.body.email;
   const password = req.body.password;
   const RoleID=req.body.RoleID;
 
   try {
     const hashedPassword = await bcrypt.hash(password, 12);
 
     const userDetails = {
       id: id,
       name: name,
       email: email,
       password: hashedPassword,
       RoleID: RoleID,
     };
 
     const result = await User.update(userDetails);
 
     res.status(201).json({ message: 'User updated!' });
   } catch (err) {
     if (!err.statusCode) {
       err.statusCode = 500;
     }
     next(err);
   }
 }; 


exports.login = async (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  try {
    const user = await User.find(email);

    if (user[0].length !== 1) {
      const error = new Error('A user with this email could not be found.');
      error.statusCode = 401;
      throw error;
    }

    const storedUser = user[0][0];

    const isEqual = await bcrypt.compare(password, storedUser.password);

    if (!isEqual) {
      const error = new Error('Wrong password!');
      error.statusCode = 401;
      throw error;
    }

    const token = jwt.sign(
      {
        email: storedUser.email,
        userId: storedUser.id,
      },
      'secretfortoken',
      { expiresIn: '1h' }
    );
    res.status(200).json({ token: token, userId: storedUser.id });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};


