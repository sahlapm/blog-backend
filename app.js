

const express = require('express');
var app=new express();
app.use(express.json());
app.use(express.urlencoded({extented:false}));
var morgan = require('morgan')
app.use(morgan('dev'));
const cors=require('cors');
app.use(cors());
const mongoose=require('mongoose');
const blog = require('./routes/api/blogData');
const login = require('./routes/api/loginData');

mongoose.set("strictQuery", false);
mongoose.connect('mongodb+srv://sahla:sahlaAtlas@cluster0.2wlvq8k.mongodb.net/BlogDB?retryWrites=true&w=majority',
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use('/api/blog',blog);
app.use('/api/login',login);

const path = require('path');
app.use(express.static(path.join(__dirname,'/build')));
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname
    ,'/build/index.html')); });
//Running server at port 8082
app.listen(8082,()=>
{
    console.log("Server listening to port 8082");
}
)