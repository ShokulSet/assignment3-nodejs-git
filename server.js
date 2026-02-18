const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Sample data
let hospitals = [
  { id: 1, name: 'Chulalongkorn Hospital', address: 'Bangkok' },
  { id: 2, name: 'Siriraj Hospital', address: 'Bangkok' }
];

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the Hospital API' });
});

// Get all hospitals
app.get('/api/v1/hospitals/', (req, res) => {
  res.status(200).json({ success: true, count: hospitals.length, data: hospitals });
});

// Get single hospital
app.get('/api/v1/hospitals/:id', (req, res) => {
  const hospital = hospitals.find(h => h.id === parseInt(req.params.id));
  if (!hospital) {
    return res.status(404).json({ success: false, message: 'Hospital not found' });
  }
  res.status(200).json({ success: true, data: hospital });
});

// Create hospital
app.post('/api/v1/hospitals/', (req, res) => {
  const newHospital = {
    id: hospitals.length + 1,
    name: req.body?.name || 'New Hospital',
    address: req.body?.address || 'Unknown'
  };
  hospitals.push(newHospital);
  res.status(200).json({ success: true, data: newHospital });
});

// Update hospital
app.put('/api/v1/hospitals/:id', (req, res) => {
  const hospital = hospitals.find(h => h.id === parseInt(req.params.id));
  if (!hospital) {
    return res.status(404).json({ success: false, message: 'Hospital not found' });
  }
  
  hospital.name = req.body?.name || hospital.name;
  hospital.address = req.body?.address || hospital.address;
  
  res.status(200).json({ success: true, data: hospital });
});

// Delete hospital
app.delete('/api/v1/hospitals/:id', (req, res) => {
  const hospitalIndex = hospitals.findIndex(h => h.id === parseInt(req.params.id));
  if (hospitalIndex === -1) {
    return res.status(404).json({ success: false, message: 'Hospital not found' });
  }
  
  hospitals.splice(hospitalIndex, 1);
  res.status(200).json({ success: true, data: {} });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});