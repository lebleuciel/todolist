const mongoose = require('mongoose');


const ListSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true,'you should enter list name'],
        unique : false
    },
    // todos : {
    //     type : object ,
    //     required : [false,'you can add later'],
    //     unique : false
    // }
});

const List = new mongoose.model('list' , ListSchema);
module.exports = List ;

