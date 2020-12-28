const express = require('express');

const { body } = require('express-validator');

const AddressController = require('../controllers/address');

const auth = require('../middleware/auth');

const router = express.Router();

router.get('/', AddressController.fetchAll);

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
  AddressController.postAddress
);

router.delete('/:id', AddressController.deletePost);

module.exports = router;
