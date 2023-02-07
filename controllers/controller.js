const { request } = require("express");
const List = require("../models/models");

exports.landing = () => {
  console.log('hi from landing!');
}


exports.CreateList = (request,res) =>{
  var listname = request.body.name ;
  var todo = request.body.todo ;

  console.log(listname);
  var List = require('../models/models')
  var newlist = new List({
    name : listname ,
    todo : todo
  })
  newlist
    .save()
    .then(() => {
        console.log('new list created! name: ',listname);
        console.log('new todo added! todo: ',todo);

    })
    .catch(error => {
        console.log('ERROR', error);
    });
    res.status(200).send("done");
}

exports.EditTodo = (request, res) => {
  var List = require('../models/models');
  var listname = request.body.name;
  var todo = request.body.todo;

  List.updateOne({
    name: listname
  }, {
    $set: {
      todo: todo
    }
  }, (error, docs) => {
    if (error) {
      console.log('error');
    } else {
      console.log('list updated');
    }
  });
};

exports.AddTodo = (request, res) => {
  var List = require('../models/models');
  var listname = request.body.name;
  var todo = request.body.todo;

  List.updateOne({
    name: listname
  }, {
    $push: {
      todo: todo
    }
  }, (error, docs) => {
    if (error) {
      console.log('error');
    } else {
      console.log('todo added');
    }
  });
};

exports.RemoveTodo = (request, res) => {
  var List = require('../models/models');
  var listname = request.body.name;
  var todo = request.body.todo;

  List.updateOne({
    name: listname
  }, {
    $pull: {
      todo: todo
    }
  }, (error, docs) => {
    if (error) {
      console.log('error');
    } else {
      console.log('todo removed');
    }
  });
};


exports.ShowList = (request,res) => {
  var List = require('../models/models');
  var listname = request.body.name;
  List.find({
    name: listname
  },
  (error, docs) => {
    if (error) {
      console.log('error');
    } else {
      console.log('your list: ' ,docs[0]);
    }
  });
}



