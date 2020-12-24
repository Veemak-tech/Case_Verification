const express = require('express');

const { body } = require('express-validator');

const rolesController = require('../controllers/roles');

const auth = require('../middleware/auth');

const router = express.Router();

router.get('/', auth, rolesController.fetchAll);

router.post(
  '/',
  [
    auth,
    
    body('Name').trim().not().isEmpty(),
    body('IsActive').trim().not().isEmpty(),
  ],
  rolesController.postRoles
);

router.delete('/:name', auth, rolesController.deletePost);

module.exports = router;
