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
const whitelist = ['http://127.0.0.1:8080', 'https://oschen.netlify.app', 'http://192.168.100.43:4000/api/v1/windows/'];
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