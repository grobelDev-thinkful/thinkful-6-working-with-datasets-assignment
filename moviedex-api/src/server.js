'use strict';

require('dotenv').config();

const app = require('./app');
const { PORT } = require('./config');
const MOVIES = require('../movies-data-small.json');

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.get('/movie', function handleGetMovie(req, res) {
  let response = MOVIES;

  if (req.query.genre) {
    response = response.filter(movie =>
      movie.genre.toLowerCase().includes(req.query.genre.toLowerCase())
    );
  }

  if (req.query.country) {
    response = response.filter(movie =>
      movie.country.toLowerCase().includes(req.query.country.toLowerCase())
    );
  }

  if (req.query.avg_vote) {
    response = response.filter(
      movie => Number(movie.avg_vote) >= Number(req.query.avg_vote)
    );
  }

  res.json(response);
});

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
