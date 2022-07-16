const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database');

router.get('/api/v1/windows/', (req, res) => {
  mysqlConnection.query('SELECT * FROM exploring', (err, rows, fields) => {
    if(!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });
});

router.get('/api/v1/windows/:id', (req, res) => {
  const { id } = req.params;
  mysqlConnection.query('SELECT * FROM exploring WHERE id = ?', [id], (err, rows, fields) => {
    if(!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });
});

module.exports = router;