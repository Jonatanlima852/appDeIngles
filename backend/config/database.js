
const DB_USER = 'jonatanlima852'

const DB_PASSWORD = encodeURIComponent('QF7qd4XqmgcZEtea')

isDatabaseConnected = true

const mongoose = require('mongoose')
const connectToDatabase = async () => {
    // if (mongoose.connection.readyState !== 1) 
    if(isDatabaseConnected){
        await mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@appdeinglescluster.calzkg4.mongodb.net/?retryWrites=true&w=majority`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
        .then(() => {
            console.log('Conexão estabelecida com o MongoDB');
        })
        .catch((error) => {
            console.error('Erro ao conectar com o MongoDB:', error);
        });
    }

    
}
module.exports = (app) => {
    app.connectToDatabase = connectToDatabase;
};
