import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PetAdoption() {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/pets')
      .then(res => {
        setPets(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h2>Pet Adoption</h2>
      <ul>
        {pets.map(pet => (
          <li key={pet.id}>
            <div>{pet.name}</div>
            <div>{pet.type}</div>
            <div>{pet.breed}</div>
            {/* Add more pet details as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PetAdoption;
