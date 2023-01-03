//const { response } = require("express");
const express = require("express");
var multer = require('multer');
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
var upload = multer();
//const userPAge = require('client/src/user.js');
const app = express();

app.set('view engine', 'pug')
app.set('views','./views');

app.use(bodyParser.json()); 

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true })); 
//form-urlencoded

// for parsing multipart/form-data
app.use(upload.array()); 
app.use(express.static('public'));

mongoose.connect("mongodb://localhost:27017/users", {
    useNewUrlParser: true
});

var otherPersonSchema = mongoose.Schema({
    name: String,
    email: String
})

var userSchema = mongoose.Schema({
    name: String,
    comment: String,
})

var personSchema = mongoose.Schema({
    name: String,
    age: Number,
    nationality: String
 });

 let Person = mongoose.model("Person", personSchema);
 let userAccount = mongoose.model("userDetails", userSchema)

app.get("/api", (req, res) => {
   userAccount.find(function(err, ress) {
    res.json({"users": ress})
    })
})

app.get("/create",  (req, res) => {
    res.render("success");
})

app.post('/create', (req, res) => {
    if (req.body.name == "" || req.body.name.length > 20 || req.body.comment == "" || req.body.comment.length > 300 || req.body.name.length < 3) {
        res.render("success", {
            result: "Failed to post comment"
        });
    } else {
        userAccount.insertMany([{name: req.body.name, comment: req.body.comment}])
        res.render("success", {
            result: "Successfully posted comment"
        });
    }
    
});

app.listen(5000)