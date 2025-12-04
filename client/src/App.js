import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookList from './components/BookList';
import Book from './components/Book';
import AddBook from './components/AddBook';
import EditBook from './components/EditBook';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/add">Add Book</a>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<BookList />} />
          <Route path="/book/:id" element={<Book />} />
          <Route path="/add" element={<AddBook />} />
          <Route path="/book/:id/edit" element={<EditBook />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;