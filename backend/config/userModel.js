module.exports = () => {
  const mongoose = require('mongoose');

  const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    words: Array, // Array de tamanho indefinido
  });

  const User = mongoose.model('User', userSchema);

  return {User}

}

