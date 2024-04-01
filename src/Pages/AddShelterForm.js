const express = require('express');
const router = express.Router();
const Shelter = require('../models/Shelter');

// POST route to add a new shelter
router.post('/add', async (req, res) => {
  const { name, location } = req.body;

  try {
    // Create a new shelter instance
    const newShelter = new Shelter({ name, location });
    // Save the shelter to the database
    await newShelter.save();
    res.status(201).json(newShelter);
  } catch (error) {
    console.error('Error adding shelter:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
