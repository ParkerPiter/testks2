const {Sequelize} = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD,{
    host: process.env.DB_HOST,
    dialect: 'postgres'
});

const connectDB = async () =>{
    try{
        await sequelize.authenticate();
        console.log('Conexión con la base de datos, lograda!');
    }
    catch(error){
        console.log('Error al conectar con la base de datos:', error);
    }
};

connectDB();

module.exports = sequelize;