const express = require('express');

const { body } = require('express-validator');

const casedetailsController = require('../controllers/casedetails');

const auth = require('../middleware/auth');

const router = express.Router();

router.get('/',  casedetailsController.fetchAll);

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
  casedetailsController.postcasedetails
);

router.delete('/:id', casedetailsController.deletePost);

module.exports = router;