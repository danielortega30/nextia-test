// ORIGINAL
// import { useEffect, useState } from "react";
// function UserComponent({ userId }) {
//   const [user, setUser] = useState(null);
//   useEffect(() => {
//     getUsers();
//   }, [user]);
//   const getUsers = () => {
//     fetch(`https://api.example.com/users/${userId}`)
//       .then((response) => response.json())
//       .then((data) => setUser(data));
//   };
//   return user ? <div>{user.name}</div> : <p>Loading...</p>;
// }

// RESPUESTA
// - Dependencia incorrecta en useEffect ([user]) que causa un loop infinito
// - No maneja errores en la petición
// - userId no está en las dependencias del useEffect
// - La función getUsers se recrea en cada render

import { useEffect, useState } from "react";

function UserComponent({ userId }) {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://api.example.com/users/${userId}`);
        if (!response.ok) throw new Error("Failed to fetch user");
        const data = await response.json();
        setUser(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [userId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!user) return null;

  return <div>{user.name}</div>;
}

export default UserComponent;
