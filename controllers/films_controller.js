const express = require('express');
const FilmsData = require('../data/films_data.js');
const filmsData = new FilmsData();

const filmsRouter = new express.Router();


// INDEX
filmsRouter.get('/', function (req, res) {
  const allFilms = filmsData.all();
  res.json({films: allFilms});
});


// SHOW
filmsRouter.get('/:id',function (req, res) {
  const index = req.params.id;
  console.log("Film at index:", index, "is:", filmsData.find(index));
  const film = filmsData.find(index);
  res.json({ 'Found Film': film });
});


// CREATE
filmsRouter.post('/', function (req, res) {
  const newFilm = req.body.film; // use insomnia to post the film.
  filmsData.add(newFilm);
  // return all films to show addition
  const allFilms = filmsData.all();
  res.json({films: allFilms});
}); // used the following as POST from Insomnia:
// { "film": {
//   "title": "Death Proof",
//   "director": "Quentin Tarrentino",
//   "reviews": [
//     {
//       "author": "Me",
//       "rating": 9,
//       "comment": "FUNNY, girls, gore and sound track!"
//     }
//   ]
// }
// }


// UPDATE
filmsRouter.put('/:id', function (req, res) {
  const newVersionOfFilm = req.body.film;
  const index = req.params.id;
  filmsData.update(index, newVersionOfFilm);
  // return all films to show update
  const allFilms = filmsData.all();
  res.json({films: allFilms});
}); // used the following as PUT from Insomnia:
// { "film": {
// 			"title": "Get In",
// 			"director": "Jordan Steel",
// 			"reviews": [
// 				{
// 					"author": "Beanie",
// 					"rating": 2,
// 					"comment": "Well that was that huh"
// 				}
// 			]
// 		}
// }


filmsRouter.delete('/:id', function (req, res) {
  const index = req.params.id;
  filmsData.delete(index);
  // return all films to show update
  const allFilms = filmsData.all();
  res.json({films: allFilms});
});


module.exports = filmsRouter;
