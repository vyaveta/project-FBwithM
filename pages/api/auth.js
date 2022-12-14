const express = require('express')
const router = express.Router()
const UserModel = require('../../models/UserModel')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const isEmail = require('validator/lib/isEmail')

router.post('/' , async(req,res) => {
    try{
        const { email , password } = req.body
        if(!isEmail(email)) return res.status(401).send('Invalid email')
        if(password.length < 6) return res.status(401).send('Password must be atleast 6 characters')

        const user = await UserModel.findOne({email:email.toLowerCase()}).select('+password')
        if(!user) return res.status(401).send('Account does not exists')

        const isPassword = await bcrypt.compare(password, user.password)
        if(!isPassword) return res.status(401).send('Incorrect Password')

        const payload = {userId: user._id}
        jwt.sign(payload,process.env.USER_SECRET,{expiresIn:'365d'},(err, token) => {
            if(err) throw err
            res.status(200).json(token)
        })

    }catch(err){
        console.log(`${err} , is the error that occured in while creating the user`)
        return res.status(500).send('Server error')
    }
})
