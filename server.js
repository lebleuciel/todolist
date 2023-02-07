const host = 'localhost';
const port = 8000;
const app = require('./app');
const requestListener = function (req, res) {};
const mongoose = require('mongoose');
const dotenv = require('dotenv');
require('dotenv').config({ path: './config.env' });

//to fix strict query error
mongoose.set("strictQuery", false);


const DB = process.env.DATABASE.replace ( 
    '<PASSWORD>',
    process.env.DATABASE_PASSWORD
);


mongoose.connect( DB , {
    useNewUrlParser: true,
    // useCreateIndex : true,
    // useFindAndModify : false
}).then(con =>{
    // console.log(con.connection);
    console.log('connection succesful');
    app.listen(port, host, () => {
        console.log(`Server is running on http://${host}:${port}`);
    });
});










