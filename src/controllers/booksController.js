const booksModel = require('../models/booksModel');

async function getAll(req, res) {
  const books = await booksModel.getAllBooks();
  res.json(books);
}



async function postAdd(req, res) {  
  const { title, author, year, description, status } = req.body;
  const newBook = await booksModel.addBook(title, author, year, description, status);
  res.status(201).json(newBook);
}

async function deleteBook(req, res) {
  await booksModel.deleteBook(req.params.id);
  res.status(204).send();
}



async function postEdit(req, res) {
  const id = req.params.id;
  const { title, author, year, description, status } = req.body;
  const updatedBook = await booksModel.updateBook(id, title, author, year, description, status);
  res.json(updatedBook);
}

async function getBook(req, res) {
  const book = await booksModel.getBookById(req.params.id);
  res.json(book);
}

async function searchBooks(req, res) {
  const query = req.query.q;
  const books = await booksModel.searchBooks(query);
  res.json(books);
}

module.exports = { getAll, postAdd, deleteBook, postEdit, getBook, searchBooks };