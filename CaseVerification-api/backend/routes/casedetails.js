const express = require('express');

const { body } = require('express-validator');

const casedetailsController = require('../controllers/casedetails');

const auth = require('../middleware/auth');

const router = express.Router();

router.get('/getall', auth, casedetailsController.fetchAll);

router.get('/case/:ID', auth,casedetailsController.fetchById);

router.get('/:pageno/:pagesize', auth, casedetailsController.getpaging);

router.get('/usercase/:pageno/:pagesize/:username', auth, casedetailsController.getpagingbyuserlogged);

router.put('/', auth, casedetailsController.putCasedetails);

router.post('/caseassign', auth,casedetailsController.assignments);

router.get ('/group/questions/:groupid', auth,casedetailsController.getquestions);

router.get ('/group/questionoptions/:ingroupid', auth, casedetailsController.getquestionoptions);

router.get ('/assignments/numberofassignments/users', auth, casedetailsController.getnumofcases);

router.post(
  '/',auth,
  [
     
    
    body('CaseID').trim().not().isEmpty(),
    body('Name').trim().not().isEmpty(),
    body('Description').trim().not().isEmpty(),
    body('InsurerVerificationNotes').trim().not().isEmpty(),
    body('T_VerificationNotes').trim().not().isEmpty(),
    body('ReferenceNumber').trim().not().isEmpty(),
    body('DueDate').trim().not().isEmpty(),
    body('CreatedBy').trim().not().isEmpty(),
    body('LastModifiedBy').trim().not().isEmpty(),
    

    
  ],
  casedetailsController.postcasedetails
);

router.delete('/:id',auth, casedetailsController.deletePost);



module.exports = router;
