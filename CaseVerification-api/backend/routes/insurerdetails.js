const express = require('express');

const { body } = require('express-validator');

const insurerdetailsController = require('../controllers/insurerdetails');

const auth = require('../middleware/auth');

const router = express.Router();

router.get('/', insurerdetailsController.fetchAll);

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
  insurerdetailsController.postinsurerdetails
);

router.delete('/:id', insurerdetailsController.deletePost);

module.exports = router;
