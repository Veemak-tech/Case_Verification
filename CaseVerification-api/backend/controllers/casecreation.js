const { validationResult, body } = require('express-validator');

const Address = require('../models/address');
const casedetails = require('../models/casedetails');
const thirdpartydetails = require('../models/thirdpartydetails');
const insurerdetails = require('../models/insurerdetails');

// const casecreation = require ('../models/casecreation')



// Address----------------------------------------

exports.fetchAll = async (req, res, next) => {
    try {
      const [allPosts] = await Address.fetchAll();
      res.status(200).json(allPosts);
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
  };
  
  exports.postAddress = async (req, res, next) => {
    
    const errors = validationResult(req);
  
    if (!errors.isEmpty()){ 
      //console.log("i am insert");
      // console.log(errors);  
      return;
  
      }
  
    console.log("message");
    const AddressLine1 = req.body.AddressLine1;
    const AddressLine2 = req.body.AddressLine2;
    const City = req.body.City;
    const Landmark = req.body.Landmark;
    const State = req.body.State;
    const Pincode = req.body.Pincode;
    const GEOLocation = req.body.GEOLocation;
    const CreatedBy = req.body.CreatedBy;
    const LastModifiedBy = req.body.LastModifiedBy;
    
  
    try {
      const address = {
        AddressLine1:AddressLine1,
        AddressLine2:AddressLine2,
        City:City,
        Landmark:Landmark,
        State:State,
        Pincode:Pincode,
        GEOLocation:GEOLocation,
        CreatedBy:CreatedBy,
        LastModifiedBy:LastModifiedBy
      };
      const result = await Address.save(address);
      res.status(201).json({ message: 'Address Added!' });
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
  };
  
  exports.deletePost = async (req, res, next) => {
    try {
      const deleteResponse = await Address.delete(req.params.id);
      res.status(200).json(deleteResponse);
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
  };



  // casedetails--------------------------------------------------------------------------------

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
      const caseD = {
        CaseID:CaseID,
        Name:Name,
        Description:Description,
        InsurerVerificationNotes:InsurerVerificationNotes,
        ThirdpartyVerificationNotes:ThirdpartyVerificationNotes,
        CreatedBy:CreatedBy,
        LastModifiedBy:LastModifiedBy
      };
      
      
      const result = await casedetails.save(caseD);
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

// Insurer details-----------------------------------------------------------------

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
    const insDetails = {
      CaseID:CaseID,
      InsurerName:InsurerName,
      PhoneNumber:PhoneNumber,
      AlternativePhoneNumber:AlternativePhoneNumber,
      EmailID:EmailID,
      AddressID:AddressID,
      CreatedBy:CreatedBy,
      LastModifiedBy:LastModifiedBy
    };
    const result = await insurerdetails.save(insDetails);
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




// Third party Details--------------------------------------------------------------------------

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
    const tDetails = {
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
    const result = await thirdpartydetails.save(tDetails);
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


  

  