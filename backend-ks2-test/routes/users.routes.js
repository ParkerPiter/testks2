const { Router } = require('express');
const { getAllUsers, getByUserId, createUser, editUser, deleteUser} = require('../controllers/user.controller');


const userRouter = Router();

//Todos los usuarios
userRouter.get('/', getAllUsers);

//Trae los details de un usuario
userRouter.get('/:id', getByUserId);

//Crear un nuevo usuario
userRouter.post('/', createUser);

//Actualiza la información de un usuario
userRouter.put('/:id', editUser);

//Borrar a un usuario
userRouter.delete('/:id', deleteUser);

module.exports = userRouter;