
var express = require('express');
var router = express.Router();
const controllers = require('../controllers/controller');


router.get('/',controllers.landing);

router.post('/CreateList', controllers.CreateList);
router.post('/EditTodo', controllers.EditTodo);
router.post('/AddTodo', controllers.AddTodo);
router.post('/RemoveTodo', controllers.RemoveTodo);
router.post('/ShowList',controllers.ShowList);


module.exports = router;
