const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const contactRoutes = require('./routes/contactRoutes');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 5000;

mongoose.connect('mongodb+srv://jmishra21032003:jaggy@cluster0.bb2jc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => console.log('Database connected'))
    .catch((err) => console.log(err));

app.use('/api', contactRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
