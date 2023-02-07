
var express = require('express');
var router = express.Router();
const controllers = require('../controllers/controller');


router.get('/',controllers.landing);

router.post('/createlist', controllers.CreateList);
// router.post('/createitem',controllers.CreateItem);
// router.post('/edititem', controllers.EditItem);
// router.get('/showlist',controllers.ShowList);


module.exports = router;
