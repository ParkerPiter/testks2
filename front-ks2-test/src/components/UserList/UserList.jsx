import { useState, useEffect } from "react";
import UserItem from "../UserItem/UserItem";
import AddUser from "../AddUser/AddUser";

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedUserId, setSelectedUserId] = useState(null);
    const [showAddUser, setShowAddUser] = useState(false);

    useEffect(()=>{
        const fetchUsers = async () =>{
            try {
                const response = await fetch('http://localhost:3001/user');
                if(!response.ok){
                    throw new Error('Error al cargar los usuarios');
                }
                const data = await response.json();
                setUsers(data);
            }
            catch(error){
                setError(error.message);
            }
            finally{
                setLoading(false);
            }
            
        };

        fetchUsers();
    }, [])

    const handleDelete = async (userId) => { 
        try {
            const response = await fetch(`http://localhost:3001/user/${userId}`,
                {
                    method: 'DELETE', 
                });
                if(!response.ok){
                    throw new Error('Error al eliminar el usuario');
                }
                setUsers(users.filter(user => user.id !== userId));
            }
            catch (error){
                setError(error.message);
            }
    }

    if(loading){
        return <p>Cargado usuarios...</p>;
    }

    if(error){
        return <p>{error}</p>;
    }

    if (selectedUserId){ 
        return <UserItem userId={selectedUserId} goBack={() => setSelectedUserId(null)} />; 
    }

    if (showAddUser){ 
        return <AddUser goBack={() => setShowAddUser(false)} />; 
    }

    return(
        <div className="flex flex-col items-center justify-center min-h-screen">
            <button className="bg-blue-500 text-white py-1 px-3 rounded" onClick={() => setShowAddUser(true)}>Crear Usuario</button>
            <p>Lista de Usuarios:</p>
            {
                users.length === 0 ? (
                    <p>No hay usuarios por el momento.</p> 
                        ) : ( 
                            <ul>
                                {users.map(user => ( 
                                    <li className="flex justify-between items-center mb-2 p-2 border-b space-x-4" key={user.id} onClick={() => setSelectedUserId(user.id)}>
                                        <span className="flex-1" onClick={() => setSelectedUserId(user.id)}>{user.name}</span>
                                        <button className="bg-green-500 text-white py-1 px-3 rounded" onClick={() => setSelectedUserId(user.id)}>Ver</button> 
                                        <button className="bg-red-500 text-white py-1 px-3 rounded" onClick={() => handleDelete(user.id)}>Eliminar usuario</button>
                                    </li> 
                                ))}
                            </ul>
                        )
            }
        </div>
        
    );
}

export default UserList;