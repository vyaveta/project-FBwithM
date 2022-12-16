const express = require('express')
const router = express.Router()
const UserModel = require('../../models/UserModel')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const isEmail = require('validator/lib/isEmail')

router.post('/' , async (req,res) => {
    try{
        console.log('no error until now')
        const { email , password } = req.body
        if(!isEmail(email)) return res.json({status: false, msg: 'Enter a valid email'})
        if(password.length < 6) return res.json({status: false, msg: 'Invalid password'})
        console.log('no error until now')
        const user = await UserModel.findOne({email:email.toLowerCase()}).select('+password')
        if(!user) return res.json({status: false,msg: 'Account does not exists'})
        console.log('no error until now')
        const isPassword = await bcrypt.compare(password, user.password)
        if(!isPassword) return res.json({status: false, msg: 'Incorrect Password'})

        const payload = {userId: user._id}
        jwt.sign(payload,process.env.USER_SECRET,{expiresIn:'365d'},(err, token) => {
            if(err) throw err
            res.status(200).json({status: true,token})
        })
    }catch(err){
        console.log(`${err} , is the error that occured in while creating the user`)
        return res.status(500).json({status: false, msg: 'Server Error!'})
    }
})

module.exports = router