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
    likes: Number,
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
        userAccount.insertMany([{name: req.body.name, comment: req.body.comment, likes: 0}])
        res.render("success", {
            result: "Successfully posted comment"
        });
    }
    
});

//let prevLikes = 1;

/*app.get('/like/:name', (req, res) => {
    userAccount.findOne({name: req.params.name}, function(err, user) {
        if (err) console.log(err);
        let prevLikes = user.likes;
    })
});*/


app.post('/like/:name', (req, res) => {
    userAccount.findOneAndUpdate({name: req.params.name}, {$inc: {likes: 1}}, function(err) {
        if (err) {
            res.render("liked", {
                result: "Failed to like post"
            })
        } else {
            res.render("liked", {
                result: "Successfully liked post"
            })
        }
    })
})

app.listen(5000)