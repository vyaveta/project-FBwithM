const jwt = require('jsonwebtoken')
// const Router = require('next/router')

module.exports = (req,res,next) => {
    try{
        //This code do require headers in the get request
        console.log(req.headers,'is the req headers')
        if(!req.headers.freebirdusertoken)  return res.redirect('/login')
        const {userId} =  jwt.verify(req.headers.freebirdusertoken,process.env.USER_SECRET)
        console.log(userId,'is the userId from middleware')
        req.userId = userId
         next()
    }catch(err){
        console.log(`${err} is the error in the user auth middleware`)
        return res.redirect('/login')
    }
}