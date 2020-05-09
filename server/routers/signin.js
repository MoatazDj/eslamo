let express=require('express')
let router=express.Router()
let bcrypt = require('bcrypt')

let connection = require('../../database/index')

router.get('/', function(req,res){
	var email= req.body.email;
	var password = req.body.password;
	connection.query('SELECT * FROM users WHERE email = ?',[email], async function (error, results, fields) {
	  if (error) {
		res.send({
		  "code":400,
		  "failed":"error ocurred"
		})
	  }else{
		if(results.length >0){
		  const comparision = await bcrypt.compare(password, results[0].password)
		  if(comparision){
			  res.send({
				"code":200,
				"success":"login sucessfull"
			  })
		  }
		  else{
			res.send({
				 "code":204,
				 "success":"Email and password does not match"
			})
		  }
		}
		else{
		  res.send({
			"code":206,
			"success":"Email does not exits"
			  });
		}
	  }
	  });
  })

// router.get('/', function(request, response) {
// 	if (request.session.loggedin) {
// 		response.send('Welcome back, ' + request.session.email + '!');
// 	} else {
// 		response.send('Please login to view this page!');
// 	}
// 	response.end();
// });


module.exports=router