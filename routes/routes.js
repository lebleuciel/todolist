
var express = require('express');
var router = express.Router();
const controllers = require('../controllers/controller');


router.get('/',controllers.landing);

router.post('/createlist', controllers.CreateList);

router.post('/editlist', controllers.EditList);
// router.get('/showlist',controllers.ShowList);


module.exports = router;
