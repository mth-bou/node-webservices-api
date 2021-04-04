const mongoose = require('mongoose');

const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

// Permet de vérifier qu'une adresse email est unique grâce au plugin mongoose-unique-validator
userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);
