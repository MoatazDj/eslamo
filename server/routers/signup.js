const express = require('express')
const router = express.Router()

const bcrypt = require('bcrypt')
const connection = require('../../database/index')
//router.use(cors())

router.get(('/'), (req, res, next) => {
    res.send("welcome to signup page")
})


router.post('/', (req, res, next) => {
    const userData = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        password: req.body.password,
        email: req.body.email,
        gender: req.body.gender,
        phone_number: req.body.phone_number
    }

    console.log('Received Signup POST request from client with ',userData);

    // const searchUserQuery = ' SELECT email FROM users WHERE email = ?'
    // const addUserQuery = `INSERT INTO users(first_name, last_name , email, gender , phone_number) VALUES(?,?,?,?,?)`;
    // const addPassword = `INSERT INTO passwords(user_password,salt,user_id) VALUES(?,?,?)`;
    // const userInfo = [userData.first_name, userData.last_name, userData.email, userData.gender, userData.phone_number]
    // const salt = bcrypt.genSaltSync(28, "a");

    // connection.query(searchUserQuery, [userData.email], (err, result) => {
    //     console.log(3)
    //     console.log("result  " + result)
    //     if (err) console.log("err2 " + err)
    //     else {
    //         console.log(4)
    //         console.log("result  " + result)
    //         if (result.length > 0) {
    //             res.json({
    //                 message: 'user exist'
    //             })

    //         } else {
    //             connection.query(addUserQuery, userInfo, (err, resl) => {
    //                 console.log(5)
    //                 console.log("result555  " + resl)
    //                 if (err) console.log('err5 ' + err)
    //                 // resl => {
    //                 console.log('resl ' + salt)
    //                 // crypto.pbkdf2(userData.password, salt,4, 28, 'sha512' ,(err,hash) => {
    //                 bcrypt.hash(userData.password, salt, (err, hash) => {
    //                     if (err) console.log('errhash' + hash)
    //                     console.log('ok ' + hash)
    //                     connection.query(addPassword, [hash, salt, resl.insertId], (error, resPass) => {
    //                         if (error) console.log('errPAssword ' + error)
    //                         console.log(resPass)
    //                         // resPass => {
    //                         console.log('add sucess')
    //                         res.json({
    //                             message: 'user created successfully'
    //                         })
    //                         // }
    //                     })
    //                 })
    //                 // }
    //             })
    //         }
    //     }
    // })
})
module.exports = router
