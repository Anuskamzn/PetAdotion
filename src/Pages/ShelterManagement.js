import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ShelterManagement() {
  const [shelters, setShelters] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/shelters')
      .then(res => {
        setShelters(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h2>Shelter Management</h2>
      <ul>
        {shelters.map(shelter => (
          <li key={shelter.id}>
            <div>{shelter.name}</div>
            <div>{shelter.location}</div>
            {/* Add more shelter details as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShelterManagement;
