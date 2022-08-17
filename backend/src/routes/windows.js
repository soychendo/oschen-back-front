const express = require('express');
const router = express.Router();

// const mysqlConnection = require('../database');
const { db } = require('../firebase');

router.get('/api/v1/windows/', async (req, res) => {
  // mysqlConnection.query('SELECT * FROM exploring', (err, rows, fields) => {
  //   if(!err) {
  //     res.json(rows);
  //   } else {
  //     console.log(err);
  //   }
  // });
  const querySnapshot = await db.collection('exploring').get();

  const explorer = querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
  res.json(explorer);
});

router.get('/api/v1/windows/:id', async (req, res) => {
  const { id } = req.params;
  // mysqlConnection.query('SELECT * FROM exploring WHERE id = ?', [id], (err, rows, fields) => {
  //   if(!err) {
  //     res.json(rows);
  //   } else {
  //     console.log(err);
  //   }
  // });

  const doc = await db.collection('exploring').doc(id).get();

  res.json({
    id: doc.id,
    music: doc.data().music,
    music_mp3: doc.data().music_mp3,
    pictures: doc.data().pictures
  })

});

module.exports = router;