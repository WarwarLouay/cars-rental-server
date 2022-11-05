const mongoose = require('mongoose');

function connectDB() {
    mongoose.connect('mongodb://localhost/carsrental', {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });

    const connection = mongoose.connection;

    connection.on('connected', () => {
        console.log('connected to mongoDB...');
    });

    connection.on('error', () => {
        console.log('connection error');
    });
};

connectDB();

module.exports = mongoose;