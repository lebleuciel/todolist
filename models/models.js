const mongoose = require('mongoose');


const ListSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true,'you should enter list name'],
        unique : false
    },
    todo :{
        type : String,
        required : [true,'you should enter what you want to do'],
    }
});


const List = new mongoose.model('list' , ListSchema);
module.exports = List ;

