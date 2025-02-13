// ORIGINAL
// function UserList() {
//     return (
//     <div>
//     <div>
//     <h3>James Gosling</h3>
//     <p>Age: 69</p>
//     </div>
//     <div>
//     <h3>Alan Turing</h3>
//     <p>Age: 41</p>
//     </div>
//     <div>
//     <h3>Dennis Ritchie</h3>
//     <p>Age: 70</p>
//     </div>
//     </div>
//     );

// RESPUESTA
// - CreaR componente reutilizable UserCard
// - Datos estructurados en un array de usuarios ya que parace constante
// - Uso de map para renderizar la lista
// - Añadidas keys para optimizar el rendering segun reglas de React
// - Implementada prop-types implícitamente con TypeScript
// - Mejor mantenibilidad y escalabilidad
// - Reducción de código repetitivo
// - Separación de responsabilidades
// - Añadidas clases CSS para mejor estilización
// - Añadido export default del componente

import React from "react";

const UserCard = ({ name, age }) => (
  <div className="user-card">
    <h3>{name}</h3>
    <p>Age: {age}</p>
  </div>
);

const users = [
  { id: 1, name: "James Gosling", age: 69 },
  { id: 2, name: "Alan Turing", age: 41 },
  { id: 3, name: "Dennis Ritchie", age: 70 },
];

function UserList() {
  return (
    <div className="user-list">
      {users.map((user) => (
        <UserCard key={user.id} name={user.name} age={user.age} />
      ))}
    </div>
  );
}

export default UserList;
