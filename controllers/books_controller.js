const express = require('express');
const BooksData = require('../data/books_data.js');

const booksData = new BooksData();
const booksRouter = new express.Router();


// INDEX
booksRouter.get('/', function (req, res) {
  const allBooks = booksData.all();
  res.json({books: allBooks});
});


// SHOW
booksRouter.get('/:id',function (req, res) {
  const index = req.params.id;
  console.log("Book at index:", index, "is:", booksData.find(index));
  const book = booksData.find(index);
  res.json({ 'Found Book': book });
});


// CREATE
booksRouter.post('/', function (req, res) {
  const newBook = req.body.book; // use insomnia to post the book. with KEY book  { book: xxx }
  booksData.add(newBook);
  // return all books to show addition
  const allBooks = booksData.all();
  res.json({books: allBooks});
}); // used the following as POST from Insomnia:
// { "book": {
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
booksRouter.put('/:id', function (req, res) {
  const newVersionOfBook = req.body.book;
  const index = req.params.id;
  booksData.update(index, newVersionOfBook);

  // return all books to show update
  const allBooks = booksData.all();
  res.json({books: allBooks});
}); // used the following as PUT from Insomnia:
// { "book": {
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



booksRouter.delete('/:id', function (req, res) {
  const index = req.params.id;
  booksData.delete(index);
  // return all books to show update
  const allBooks = booksData.all();
  res.json({books: allBooks});
});


module.exports = booksRouter;
