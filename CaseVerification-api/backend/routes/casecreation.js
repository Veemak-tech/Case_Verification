const express = require('express');

const { body } = require('express-validator');

// const AddressController = require('../controllers/address');
// const casedetailsController = require('../controllers/casedetails');
// const insurerdetailsController = require('../controllers/insurerdetails');
// const thirdpartydetailsController = require('../controllers/thirdpartydetails');
const casecreationController = require('../controllers/casecreation');


const auth = require('../middleware/auth');

const router = express.Router();

// router.get('/', AddressController.fetchAll);
// router.get('/',  casedetailsController.fetchAll);
// router.get('/', insurerdetailsController.fetchAll);
router.get('/', casecreationController.fetchAll)




// Address--------------------------------------------------------------------------------
router.post(
  '/',
  [
    // auth,
    
    body('AddressLine1').trim().not().isEmpty(),
    body('AddressLine2').trim().not().isEmpty(),
    body('City').trim().not().isEmpty(),
    body('Landmark').trim().not().isEmpty(),
    body('State').trim().not().isEmpty(),
    body('Pincode').trim().not().isEmpty(),
    body('GEOLocation').trim().not().isEmpty(),
    body('CreatedBy').trim().not().isEmpty(),
    body('LastModifiedBy').trim().not().isEmpty(),
    
  ],
  casecreationController.postAddress
);

router.delete('/:id', casecreationController.deletePost);
module.exports = router;

// case details-------------------------
router.get('/', casecreationController.fetchAll)

router.post(
    '/',
    [
      // auth,
      
      body('CaseID').trim().not().isEmpty(),
      body('Name').trim().not().isEmpty(),
      body('Description').trim().not().isEmpty(),
      body('InsurerVerificationNotes').trim().not().isEmpty(),
      body('ThirdpartyVerificationNotes').trim().not().isEmpty(),
      body('CreatedBy').trim().not().isEmpty(),
      body('LastModifiedBy').trim().not().isEmpty(),
      
    ],
    casecreationController.postcasedetails
  );
  
  router.delete('/:id', casecreationController.deletePost);
  module.exports = router;


// Insurer Details------------------------
router.get('/', casecreationController.fetchAll)

router.post(
    '/',
    [
      // auth,
      
      body('CaseID').trim().not().isEmpty(),
      body('InsurerName').trim().not().isEmpty(),
      body('PhoneNumber').trim().not().isEmpty(),
      body('AlternativePhoneNumber').trim().not().isEmpty(),
      body('EmailID').trim().not().isEmpty(),
      body('AddressID').trim().not().isEmpty(),
      body('CreatedBy').trim().not().isEmpty(),
      body('LastModifiedBy').trim().not().isEmpty(),
      
    ],
    casecreationController.postinsurerdetails
  );
  
  router.delete('/:id', casecreationController.deletePost);
  module.exports = router;

// Thirdparty details-----------------------------------
router.get('/', casecreationController.fetchAll)

router.post(
    '/',
    [
      // auth,
      
      body('CaseID').trim().not().isEmpty(),
      body('ThirdpartyName').trim().not().isEmpty(),
      body('T_PhoneNumber').trim().not().isEmpty(),
      body('T_AlternativePhoneNumber').trim().not().isEmpty(),
      body('T_EmailID').trim().not().isEmpty(),
      body('T_AddressID').trim().not().isEmpty(),
      body('T_PhotoDocID').trim().not().isEmpty(),
      body('T_AudioDocID').trim().not().isEmpty(),
      body('T_VideoDocID').trim().not().isEmpty(),
      body('T_PhotoWithSelfieDocID').trim().not().isEmpty(),
      body('T_VerificationNotes').trim().not().isEmpty(),
      body('CreatedBy').trim().not().isEmpty(),
      body('LastModifiedBy').trim().not().isEmpty(),
      
    ],
    casecreationController.postthirdpartydetails
  );
  
  router.delete('/:id',  casecreationController.deletePost);

module.exports = router;
