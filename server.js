const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/index');

require('events').EventEmitter.defaultMaxListeners = 15;

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', routes);

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/social-network-api');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB successfully');
});

app.listen(PORT, () => console.log(`🌍 Server running on localhost:${PORT}`));
