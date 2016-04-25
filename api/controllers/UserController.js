/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	'new': function(req, res){
		res.locals.flash = _.clone(req.session.flash);
		res.view();
		res.locals.flash = {};
	},
	create: function (req, res, next){
		User.create(req.params.all(), function userCreated(err, user){
			if(err) {
				var messages = User.validationMessages;
		        var errors = err.Errors;
		        var output = {};

			    Object.keys(errors).forEach(function(field) {
			        output[field] = [];
			        errors[field].forEach(function(error) {
			            output[field].push(messages[field] && messages[field][error.rule] || error.rule);
			        })
			    });
			    console.log(output);
			   	req.session.flash = {
			   		err: output
			   	} 
			    return res.redirect("user/new");
			}
			res.json(user);
		});
	}
};

