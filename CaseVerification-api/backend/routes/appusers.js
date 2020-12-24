const express = require('express');

const { body } = require('express-validator');

const appusersController = require('../controllers/appusers');

const auth = require('../middleware/auth');

const router = express.Router();

router.get('/', auth, appusersController.fetchAll);

router.post(
  '/',
  [
    auth,
    
    body('Name').trim().not().isEmpty(),
    body('EmailAddress').trim().not().isEmpty(),
    body('UserName').trim().not().isEmpty(),
    body('Password').trim().not().isEmpty(),
    body('IsActive').trim().not().isEmpty(),
    body('IsDeleted').trim().not().isEmpty(),
    body('RoleID').trim().not().isEmpty(),
    body('CreatedBy').trim().not().isEmpty(),
    body('LastModifiedBy').trim().not().isEmpty(),
    
  ],
  appusersController.postappusers
);

router.delete('/:id', auth, appusersController.deletePost);

module.exports = router;
