const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel = require('./models/Users')

const app = express()
app.use(cors())
app.use(express.json())
mongoose.connect("mongodb+srv://santhoshm7603_db_user:0xvufyx5anq3yhDP@cluster0.m8lxylq.mongodb.net/crud?retryWrites=true&w=majority&appName=Cluster0")

app.post('/createUser',(req,res)=>{
    UserModel.create(req.body)
    .then(data => res.json(data))
    .catch(err => console.log(err))
})

app.get('/getUser',(req,res)=>{
    UserModel.find({})
    .then(data=>res.json(data))
    .catch(err=>console.log("this is " + err))
})

app.get('/getUser/:id',(req, res)=>{
    const id = req.params.id;
    UserModel.findById(id)
    .then(data=>res.json(data))
    .catch(err=>console.log(err))
})

app.put('/updateUser/:id',(req, res)=>{
    const id = req.params.id;
    UserModel.findByIdAndUpdate({_id: id},{
        name : req.body.name,
        email : req.body.email,
        phone : req.body.phone,
        password : req.body.password,
    })
    .then(data=>res.json(data))
    .catch(err=>console.log(err))
})

app.delete('/deleteUser/:id',(req, res)=>{
    const id = req.params.id;
    UserModel.findByIdAndDelete(id)
    .then(data=>res.json(data))
    .catch(err=>console.log(err))
})


const port = 3000
app.listen(port, ()=>
    {
    console.log(`\n Server is Running on http://localhost:${port}`)
})
