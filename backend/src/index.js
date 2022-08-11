const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');

// Settings
const port = process.env.PORT || 4000;
app.set('port', port);

// Middlewares
app.use(express.json());
// dotenv
dotenv.config();
// Cors config Access
const whitelist = ['http://localhost:8080', 'https://mydomain.com'];
const options = {
  origin: (origin, callback) => {
    if(whitelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('no permitido'));
    }
  }
}
app.use(cors(options));

// Routes
app.use(require('./routes/windows'));
// Starting the server

app.listen(app.get('port'), () => {
  console.log('Server on port:', app.get('port'));
});