

var mongoose = require('mongoose');
//var bcrypt = require('bcrypt');

var userSchema = mongoose.Schema({

	facebook        : {
		id          : String,
		token       : String,
		email       : String,
		name        : String
	}
});

/*var usersSchema = new Schema ({
	name: { type: String, lowercase: true, required: true },
	email: { type: String, required: true, unique: true },
	password: { type: String, required: true }
});

/*userSchema.pre('save', function(next) {
  var user = this;
  //take password and encrypt it
  bcrypt.genSalt(10, function(err, salt) {
	bcrypt.hash(user.password, salt, function(err, hash) {
	  console.log('Password hash: ', hash);
		user.password = hash;
		next();
	});
  });
});

userSchema.methods.verifyPassword = function(password) {
  var deferred = q.defer();
  var user = this;
  bcrypt.compare(password, user.password, function(err, res) {
	if (err) {
	  deferred.resolve(false);
	} else {
	  deferred.resolve(true);
	}
  });
  return deferred.promise;
};*/

module.exports = mongoose.model('users', userSchema);