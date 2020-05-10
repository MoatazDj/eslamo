let express = require('express')
let router = express.Router()
let bcrypt = require('bcrypt')
let Promise = require('bluebird');

let connection = require('../../database/index')

router.get('/', function (req, res) {
	const userData = {
		email: req.query.email,
		attemptedPassword: req.query.password
	}

	console.log('Received Signin GET request from client with ', userData);

	const searchUserQuery = ' SELECT user_id FROM users WHERE email = ?';
	const fetchPassSalt = 'SELECT user_password, salt FROM passwords WHERE user_id = ?';

	connection.query(searchUserQuery, [userData.email], (searchUserErr, user) => {
		if (searchUserErr) {
			console.log('searchUserErr : ', searchUserErr)
		} else {
			if (user.length) {
				const userId = user[0].user_id;
				console.log('User located with id : ', userId, ' Fetching pass and salt ..');
				connection.query(fetchPassSalt, [userId], (fPassErr, passSalt) => {
					if (fPassErr) {
						console.log('fPassErr : ', fPassErr);
					} else {
						if (passSalt.length) {
							const {
								user_password,
								salt
							} = passSalt[0];
							console.log('PassSalt found, comparing attempted pass ..\n', user_password, '\n', salt)
							bcrypt.compare(userData.attemptedPassword, user_password, (compareErr, passwordsMatch) => {
								if (compareErr) {
									console.log('compareErr : ', compareErr);
								} else {
									if (passwordsMatch) {
										console.log('Correct credientials');
									} else {
										console.log('Wrong crediantials');
									}
								}
							});
						} else {
							console.log('PassSalt not found for userId : ', userId);
						}
					}
				})
			} else {
				console.log('User not found');
			}
		}
	});
});

// router.get('/', function(request, response) {
// 	if (request.session.loggedin) {
// 		response.send('Welcome back, ' + request.session.email + '!');
// 	} else {
// 		response.send('Please login to view this page!');
// 	}
// 	response.end();
// });

// else{
// 	res.send({
// 		 "code":204,
// 		 "success":"Email and password does not match"
// 	})
//   }

module.exports = router