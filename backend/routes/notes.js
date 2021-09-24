const express= require('express')
const router=express.Router()
const Notes = require("../models/Notes")

const fetchuser=require('../middleware/fetchuser')


//Get  all the notes using GET: "/api/auth/fetchallnotes".  Require login.
router.get('/fecthallnotes', fetchuser,async(req, res)=>{
    const notes= await Notes.find({user: req.user.id})
    res.send({notes})

})

module.exports=router