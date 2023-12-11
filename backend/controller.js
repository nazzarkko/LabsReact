const db = require('./db');

const getAllAircrafts = (req, res) => {
  const { sortBy, sortDirection, search } = req.query;
  let query = 'SELECT * FROM aircrafts';

  if (search) {
    query += ` WHERE model LIKE '%${search}%'`;
  }

  if (sortBy) {
    query += ` ORDER BY ${sortBy} ${sortDirection === 'desc' ? 'DESC' : 'ASC'}`;
  }

  db.query(query, (err, results) => {
    if (err) {
      console.error('Error in choosing aircrafts: ' + err.stack);
      res.status(500).send('Error server');
      return;
    }
    res.json(results);
  });
};


const getAircraftById = (req, res) => {
  const id = req.params.id;

  db.query('SELECT aircrafts WHERE id = ?', [id], (err, results) => {
    if (err) {
      console.error('Error fetching aircraft:', err);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }

    if (results.length === 0) {
      return res.status(404).json({ error: 'Aircraft not found' });
    }

    res.json(results[0]);
  });
};



module.exports = {
  getAllAircrafts,
  getAircraftById,
};
