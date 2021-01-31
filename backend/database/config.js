const mongoose = require('mongoose');

const dbConnection = async () =>{
    try{
        await mongoose.connect(process.env.DB_CONNECTION, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        })
        console.log("Conectado a la bd");
    } catch(e){
        console.error(e);
        throw e;
    }
}

module.exports = {  dbConnection };