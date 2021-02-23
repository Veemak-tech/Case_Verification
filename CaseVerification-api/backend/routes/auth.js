const express = require('express');

const { body } = require('express-validator');

const router = express.Router();

const User = require('../models/user');

const authController = require('../controllers/auth');
const auth = require('../middleware/auth');

router.post(
  '/signup',
  [
    body('name').trim().not().isEmpty(),
    body('email')
      .isEmail()
      .withMessage('Please enter a valid email.')
      .custom(async (email) => {
        const user = await User.find(email);
        if (user[0].length > 0) {
          return Promise.reject('Email address already exist!');
        }
      })
      .normalizeEmail(),
    body('password').trim().isLength({ min: 7 }),
    body('RoleID').not().isEmpty(),
  ],
  auth,authController.signup
);
router.post('/admin',authController.Adminlogin);
router.post('/login',authController.login);
// debugger
router.get('/',auth, authController.fetchAll);
router.get('/:RoleID',authController.fetchbyname)
router.put('/',authController.Update );
// debugger;
router.get('/:id',auth,authController.fetchbyId)

module.exports = router;
