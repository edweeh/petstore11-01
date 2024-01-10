import React from 'react';

const Deletelist = ({ pets, deletePet }) => {
  return (
    <ul>
      {pets.map((pet) => (
        <li key={pet.name}>
          {pet.name} <button onClick={() => deletePet(pet.name)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default Deletelist;