const User = require('../models/Users');

const getAllUsers = async(req,res) =>{
    try{
        const users = await User.findAll();
        res.status(200).json(users);
    }
    catch(error){
        res.status(500).json({ message: 'Error al obtener los usuarios', error});
    }
}

const getByUserId = async(req,res) =>{
    const {id} = req.params;
    try{
        const user = await User.findByPk(id);
        if(!user){
            return res.status(404).json({message: 'Usuario no encontrado'});
        }
        res.status(200).json(user);
    }
    catch(error){
        res.status(500).json({ message: 'Error al obtener al usuario', error });
    }
}

const createUser = async(req,res) =>{
    const {name, email} = req.body;
    try{
        console.log('Request body:', req.body)
        const existingUser = await User.findOne({
            where: {
                email
            }
        });
        if (existingUser){
            return res.status(400).json({message: 'El email ya está en uso'});
        }

        const newUser = await User.create({
            name, 
            email
        });
        res.status(201).json(newUser);
    }
    catch(error){
        res.status(500).json({message: 'Error al crear el usuario', error});
    }
}

const editUser = async(req,res) =>{
    const {id} = req.params;
    const {name, email} = req.body
    try{
        const user = await User.findByPk(id);
        if(!user){
            return res.status(404).json({message: 'Usuario no encontrado'});
        }

        user.name = name || user.name;
        user.email = email || user.email;

        await user.save();
        res.status(200).json(user);
    }
    catch(error){
        res.status(500).json({message:'Error al actualizar el usuario', error});
    }
}

const deleteUser = async(req,res) =>{
    const {id} = req.params;
    try{
        console.log(req.params)
        const user = await User.findByPk(id);
        if(!user){
            return res.status(404).json({message: 'Usuario no encontrado'});
        }

        await user.destroy();
        res.status(200).json({message:'Usuario eliminado de manera exitosa!'})
    }   
    catch(error){
        res.status(500).json({ message: 'Error al eliminar el usuario', error });
    }
}

module.exports = { getAllUsers, getByUserId, createUser, editUser, deleteUser}