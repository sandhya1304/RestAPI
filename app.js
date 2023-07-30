const express = require("express");                     //1
const app = express();                                  //2
const mongoose = require("mongoose");                   //6
require("dotenv/config")                                //9
const BodyParser = require("body-parser");              //25

app.use(BodyParser.json());  //sending a json data       //26

//middle ware

//import the routes
const postRoute = require('./routes/posts');   //15
const bodyParser = require("body-parser");     //

app.use('/posts',postRoute);  //16 if any request come from this particular route used postRoute file

//middle ware  

//Routes
//GET()->fetch the data, 
//POST()->push the data
//PATCH()->update data, 
//DELETE()->delete the data

app.get('/', (req, res) => {
    res.send("I'm inside the home");       //3
});

// app.get('/posts', (req, res) => {
//     res.send("I'm inside the posts")     //5
// });

//connect the mongodb     
mongoose.connect(process.env.DB_CONNECTION,()=>{     //7  //10 first paste link here write your password and create call back funcyion
    console.log('connected')
}) 


app.listen(3000);                       //4

