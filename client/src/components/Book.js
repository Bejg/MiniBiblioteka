import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

function Book() {
    const [book, setBook] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        axios.get(`/api/book/${id}`)
            .then(response => {
                setBook(response.data);
            })
            .catch(error => {
                console.error('Error fetching book:', error);
            });
    }, [id]);

    if (!book) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{book.title}</h1>
            <p><strong>Author:</strong> {book.author}</p>
            <p><strong>Year:</strong> {book.year}</p>
            <p><strong>Description:</strong> {book.description}</p>
            <p><strong>Status:</strong> {book.status}</p>
            <Link to={`/book/${id}/edit`}>Edit</Link>
        </div>
    );
}

export default Book;