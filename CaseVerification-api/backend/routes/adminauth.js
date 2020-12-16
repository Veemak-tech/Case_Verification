const express = require('express');

const { body } = require('express-validator');

const router = express.Router();



const adminController = require('../controllers/adminauth');
const admin = require('../models/admin');

router.post(
  '/signup',
  [
    body('name').trim().not().isEmpty(),
    body('email')
      .isEmail()
      .withMessage('Please enter a valid email.')
      .custom(async (email) => {
        const user = await admin.find(email);
        if (user[0].length > 0) {
          return Promise.reject('Email address already exist!');
        }
      })
      .normalizeEmail(),
    body('password').trim().isLength({ min: 7 }),
  ],
  adminController.signup
);

router.post('/login', adminController.login);

module.exports = router;
