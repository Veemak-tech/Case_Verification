const express = require('express');

const { body } = require('express-validator');

const postsController = require('../controllers/posts');

// const auth = require('../middleware/auth');

const router = express.Router();

router.get('/', postsController.fetchAll);

router.post(
  '/',
  
  [
    
    body('title').trim().isLength({ min: 5 }).not().isEmpty(),
    body('body').trim().isLength({ min: 10 }).not().isEmpty(),
    body('user').trim().not().isEmpty(),
  ],
  
  postsController.postPost
  
);

router.put('/', postsController.putPost);


router.delete('/:id', postsController.deletePost);



module.exports = router;
