const express = require('express')
const router = express.Router()
const Promise = require('bluebird')
const bcrypt = require('bcrypt')
const connection = require('../../database/index')

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
  const addUserQuery = `INSERT INTO users(user_first_name, user_last_name, email, gender , phone_number) VALUES(?,?,?,?,?)`;
  const addPassword = `INSERT INTO passwords(user_password,salt,user_id) VALUES(?,?,?)`;
  const userInfo = [userData.user_first_name, userData.user_last_name, userData.email, userData.gender, userData.phone_number]

  const saltRounds = 10;
  connection.query(searchUserQuery, [userData.email], (searchErr, result) => {
    if (searchErr) {
      console.log("searchErr " + searchErr)
    } else {
      if (result.length > 0) {
        res.json({
          message: 'user exist'
        })
      } else {
        console.log('Generating salt ..');
        bcrypt.genSalt(saltRounds, (genSaltErr, salt) => {
          if (genSaltErr) {
            console.log('genSaltErr : ', genSaltErr);
          } else {
            console.log('hashing password');
            bcrypt.hash(userData.password, salt, (hashErr, hash) => {
              if (hashErr) {
                console.log('hashErr : ', hashErr)
              } else {
                console.log('adding new user to database');
                connection.query(addUserQuery, userInfo, (addUserErr, addUserRes) => {
                  if (addUserErr) {
                    console.log('addUserErr : ', addUserErr);
                  } else {
                    console.log('Adding password info to database');
                    connection.query(addPassword, [hash, salt, addUserRes.insertId], (addPassErr, addPassRes) => {
                      if (addPassErr) {
                        console.log('addPassErr : ', addUser);
                      } else {
                        console.log('new user created successfully');
                        res.json({
                          message: 'user created successfully'
                        }).end();
                      }
                    });
                  }
                });
              }
            });
          }
        });



        // connection.query(addUserQuery, userInfo, (err, resl) => {
        //   if (err) {
        //     console.log('err adding new user ' + err) 
        //   } else {
        //     bcrypt.genSalt(saltRounds, (err, salt) => {
        //       if (err)
        //       bcrypt.hash(userData.password, salt, (err, hash) => {
        //         if (err) {
        //           console.log('errhash' + hash);
        //         } else {
        //           console.log('adding new password')
        //           connection.query(addPassword, [hash, salt, resl.insertId], (error, resPass) => {
        //             if (error) { 
        //               console.log('errPAssword ' + error) 
        //             } else {
        //               console.log('new user created successfully');
        //               res.json({
        //                 message: 'user created successfully'
        //               })
        //               res.end()
        //             }
        //           })
        //         }
        //       })
        //     })
        //   }
        // })
      }
    }
  })
})
module.exports = router