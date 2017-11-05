var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/otra', function(req, res, next) {
	var user={
		nombre:"alejandro",
		grupo:"061",
		horario: { dia:"miercoles",hora:"2:00pm"}
		
	};
  res.render('otra', user);
});

module.exports = router;
