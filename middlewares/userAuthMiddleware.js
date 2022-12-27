const jwt = require('jsonwebtoken')
// const Router = require('next/router')
const { parseCookies, setCookie, destroyCookie } = require('nookies')

module.exports =  (req,res,next) => {
    try{
        console.log('got inside middleware ')
        // this code doesnt require headers in the get request thats why im using this
        const parsedCookies = parseCookies({ req });
        const c = parsedCookies.FreeBirdUserToken
        if(!parsedCookies.FreeBirdUserToken) return res.redirect('/login')
        const {userId} = jwt.verify(c,process.env.USER_SECRET)
        req.userId = userId

        //This code do require headers in the get request

        // if(!req.headers.userAuth)  return res.redirect('/login')
        // const {userId} =  jwt.verify(req.headers.userAuth,process.env.USER_SECRET)
        // console.log(userId,'is the userId from middleware')
        // req.userId = userId
         next()
    }catch(err){
        console.log(`${err} is the error in the user auth middleware`)
        return res.redirect('/login')
    }
}