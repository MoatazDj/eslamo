let express=require('express')
let router=express.Router()

let bcrypt=require('bcrypt')
//router.use(cors())

router.get(('/'),(req,res,next)=>{
    res.send('welcome to signup page')
})

router.post('/signUp', (req,res,next)=>{
const userData={
    firstname:req.body.firstname,
    lastname:req.body.lastname,
    password:req.body.password,
    email:req.body.email,
    gender:req.body.gender,
    phone_number:req.body.phone_number
}

User.findOne({//User is the model User=require(./database......)
    where:{
        email:req.body.email
    }
}) .then(user=>{
    if(!user){
       bcrypt.hash(userData.password,10,(err,hash)=>{
           if(err){
               return err
           }
           else{
               userData.password=hash;
               User.create(userData)
                    .then(user=>{
                        res.status(200).json({message:'user created successfully'})
                    })
                    .catch( err=>{
                        res.status(401).json({ message:' error user'})
                    })    
           }
       }) 
    }
    else{
        res.status(500).json({message: 'user already exist'})
    }
})
    .catch(err =>{
        res.status().json({
            message: 'signup error'
        })
    })
})

module.exports=router