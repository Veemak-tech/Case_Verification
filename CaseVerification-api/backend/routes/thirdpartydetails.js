const express = require('express');

const { body } = require('express-validator');

const thirdpartydetailsController = require('../controllers/thirdpartydetails');

const auth = require('../middleware/auth');

const router = express.Router();

router.get('/', auth, thirdpartydetailsController.fetchAll);

router.post(
  '/',
  [
    auth,
    
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
  thirdpartydetailsController.postthirdpartydetails
);

router.delete('/:id', auth, thirdpartydetailsController.deletePost);

module.exports = router;
