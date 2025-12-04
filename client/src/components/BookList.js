import React, { useState, useEffect } from 'react';
import axios from 'axios';

function BookList() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios.get('/api/')
            .then(response => {
                setBooks(response.data);
            })
            .catch(error => {
                console.error('Error fetching books:', error);
            });
    }, []);

    return (
        <div>
            <h1>Lista Książek</h1>
            <ul>
                {books.map(book => (
                    <li key={book._id}>
                        <a href={`/book/${book._id}`}>{book.title}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default BookList;