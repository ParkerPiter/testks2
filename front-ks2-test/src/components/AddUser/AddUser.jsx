import { useState } from "react"
import UserList from "../UserList/UserList";

const AddUser = ({goBack}) =>{
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (event) =>{
        event.preventDefault();

        try{
            const response = await fetch('http://localhost:3001/user', 
                { 
                    method: 'POST', 
                    headers: { 
                        'Content-Type': 'application/json', 
                    }, 
                    body: JSON.stringify({ 
                        name, email 
                    }), 
                });
                
                if(!response.ok){
                    throw new Error('Error al crear el usuario');
                }

                const data = await response.json();
                setMessage(`Usuario ${data.name} creado de manera exitosa!`);
                setName('');
                setEmail('');
        }
        catch(error){
            setMessage('Error: No se pudo crear el usuario');
        }
    }

    return(
        <div className="flex justify-between items-center mb-2 p-2 border-b space-x-4">
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nombre: </label>
                    <input className="border-black border-solid bg-gray-400"  type="text" id="name" value={name} onChange={(e)=> setName(e.target.value)} required />
                </div>
                <div>
                    <label htmlFor="email">Email: </label>
                    <input className="border-black border-solid bg-gray-400" type="text" id="email" value={email} onChange={(e)=> setEmail(e.target.value) } required/>
                </div>
                <button  className='bg-green-500 text-white py-1 px-3 rounded' type="submit">Crear usuario</button>
                <button onClick={goBack} className="mb-4 bg-gray-500 text-white py-2 px-4 rounded"> Volver </button>
            </form>
            {message && <p>{message}</p>}
            
        </div>
    )
}

export default AddUser;