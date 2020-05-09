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
        user_first_name: req.body.user_first_name,
        user_last_name: req.body.user_last_name,
        password: req.body.password,
        email: req.body.email,
        gender: req.body.gender,
        phone_number: req.body.phone_number
    }

    console.log('Received Signup POST request from client with ', userData);

    const searchUserQuery = ' SELECT email FROM users WHERE email = ?'
    const addUserQuery = `INSERT INTO users(user_first_name, user_last_name , email, gender , phone_number) VALUES(?,?,?,?,?)`;
    const addPassword = `INSERT INTO passwords(user_password,salt,user_id) VALUES(?,?,?)`;
    const userInfo = [userData.user_first_name, userData.user_last_name, userData.email, userData.gender, userData.phone_number]
    const salt = bcrypt.genSaltSync(10, "a");

    connection.query(searchUserQuery, [userData.email], (err, result) => {
        if (err) console.log("err2 " + err)
        else {
            if (result.length > 0) {
                res.json({
                    message: 'user exist'
                })

            } else {
                connection.query(addUserQuery, userInfo, (err, resl) => {
                    if (err) console.log('err5 ' + err)
                    bcrypt.hash(userData.password, salt, (err, hash) => {
                        if (err) console.log('errhash' + hash)
                        connection.query(addPassword, [hash, salt, resl.insertId], (error, resPass) => {
                            if (error) console.log('errPAssword ' + error)
                            res.json({
                                message: 'user created successfully'
                            })
                        })
                    })
                })
            }
        }
    })
})
module.exports = router