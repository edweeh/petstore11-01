// AdminPage.js
import React, { useState } from 'react';
import PetList from './Petlist';
import AddPetForm from './Petform';

const Adminpage = () => {
  const [pets, setPets] = useState([]);

  const addPet = (newPet) => {
    setPets([...pets, newPet]);
  };

  const deletePet = (petName) => {
    const updatedPets = pets.filter((pet) => pet.name !== petName);
    setPets(updatedPets);
  };

  return (
    <div>
      <h1>Admin Page</h1>
      <AddPetForm addPet={addPet} />
      <PetList pets={pets} deletePet={deletePet} />
    </div>
  );
};

export default Adminpage;

