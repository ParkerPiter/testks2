import { useState, useEffect } from 'react';

const UserItem = ({ userId, goBack }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`http://localhost:3001/user/${userId}`);
        if (!response.ok) {
          throw new Error('Error al cargar el usuario');
        }
        const data = await response.json();
        setUser(data);
        setName(data.name);
        setEmail(data.email);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [userId]);

  const handleEdit = async () => {
    try {
      const response = await fetch(`http://localhost:3001/user/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email }),
      });

      if (!response.ok) {
        throw new Error('Error al actualizar el usuario');
      }

      const data = await response.json();
      setUser(data);
      setMessage('Usuario actualizado con éxito');
      setIsEditing(false);
    } catch (error) {
      setMessage('Error: No se pudo actualizar el usuario');
    }
  };

  if (loading) {
    return <p>Cargando usuario...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="flex justify-between items-center mb-2 p-2 border-b space-x-4">
      {user ? (
        <div>
          {isEditing ? (
            <div>
              <label htmlFor="name">Nombre:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button onClick={handleEdit}>Guardar</button>
              <button onClick={() => setIsEditing(false)}>Cancelar</button>
            </div>
          ) : (
            <div>
              <h2>{user.name}</h2>
              <p>{user.email}</p>
              <button className='bg-green-500 text-white py-1 px-3 rounded' onClick={() => setIsEditing(true)}>Editar</button>
              <button className='bg-blue-500 text-white py-1 px-3 rounded' onClick={goBack}>Volver</button>
              {message && <p>{message}</p>}
            </div>
          )}
        </div>
      ) : (
        <p>Usuario no encontrado</p>
      )}
    </div>
  );
};

export default UserItem;
