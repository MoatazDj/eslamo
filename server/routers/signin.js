let express=require('express')
let router=express.Router()
let jwt = require('jsonwebtoken')
let bcrypt=require('bcrypt')
//router.use(cors())

router.get(('/'),(req,res,next)=>{
    res.send('welcome to signup page')
})

router.post('/signIn', (req,res,next)=>{
User.findOne({
    where:{
        email:req.body.email
    }
}) .then(user=>{
    if(user){
       if (bcrypt.compareSync(req.body.password, user.password)) {
           let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
               expiresIn : 1440
           })
           res.send(token)
       }
    }
    else{
        res.status(400).json({message: 'user does not exist'})
    }
})
    .catch(err =>{
        res.status(400).json({
            message: 'signup error'
        })
    })
})

module.exports=router