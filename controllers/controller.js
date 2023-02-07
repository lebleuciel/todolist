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





// exports.EditList = (request,res) => {
//   var List = require('../models/models')
//   var listname = request.body.name ;
//   var todo = request.body.todo ;

//   List.find({
//       name : listname
//     }, 
//     (error, docs) => {
//       if (error) {
//         console.log('error');
//       } else {
//         List.listname.insertOne({
//           todo : todo
//         });
//       };
//     });
// }






// exports.input = (request,res) => {
  // var yourdata = request.body.data;
  // console.log(yourdata);
  // var Vault = require('../models/models')
  // var newurl = "http://localhost:8000/"+yourdata ;
  // var response = {
  //   message: "heres ur url",
  //   url: newurl
  // };
  // var firstVault = new Vault ({
  //   data : yourdata,
  //   url : newurl
  //   });
  // firstVault
  //   .save()
  //   .then(() => {
  //       console.log('new vault saved');
  //   })
  //   .catch(error => {
  //       console.log('ERROR', error);
  //   });
  //   res.status(200).send(response);
  // }


//   exports.findvault = (request,res) => {
//     var requestinput = request.body.url;
//     var Vault = require('../models/models')
//     Vault.find({
//       url : requestinput 
//     }, 
    
//     (error, docs) => {
//       if (error) {
//         console.log('error');
//       } else {
//         res.send(docs[0].data);
//       }
//     });
//   }
  

// exports.showvault = (request,res) => {
//   console.log("you made it");
//   var requesturl = "http://localhost:8000"+ request.url;
//   console.log(requesturl)
//   var Vault = require('../models/models')
//   Vault.find({
//     url : requesturl
//   }, 
//   (error, docs) => {
//     if (error) {
//       console.log('error');
//     } else {
//       res.send(docs[0].data);
//     }
//   });}





