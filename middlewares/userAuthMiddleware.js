const jwt = require('jsonwebtoken')

module.exports = (req,res,next) => {
    try{
        if(!req.headers.auth) return res.status(401).send('Not authorized')
        
        const [userId] = jwt.verify(req.headers.auth,process.env.USER_SECRET)
        req.userId = userId
        next()
    }catch(err){
        console.log(`${err} is the error in the user auth middleware`)
        return res.status(401).send('Not authorized')
    }
}