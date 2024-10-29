const express = require('express');
const cors = require('cors');
const sequelize = require('./db');
const User = require('./models/Users');
const router = require('./routes/principal.routes');

const app = express();
app.use(cors());
app.use(express.json());
const PORT = 3001;

sequelize.sync({ force: false, alter: true })
    .then(() => { 
        console.log('La base de datos y los modelos se han sincronizado correctamente.'); 
    })
    .catch(err => {
        console.error('Error al sincronizar la base de datos:', err);
    })

app.use(router)

app.listen(PORT, ()=>{
    console.log(`Servidor activo y escuchando en el puerto ${PORT}`);
});
