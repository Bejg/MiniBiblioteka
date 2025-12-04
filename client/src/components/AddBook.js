import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddBook() {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [year, setYear] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('available');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('/api/add', { title, author, year, description, status })
            .then(() => {
                navigate('/');
            })
            .catch(error => {
                console.error('Error adding book:', error);
            });
    };

    return (
        <div>
            <h1>Add a New Book</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
                </div>
                <div>
                    <label>Author:</label>
                    <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} required />
                </div>
                <div>
                    <label>Year:</label>
                    <input type="number" value={year} onChange={(e) => setYear(e.target.value)} />
                </div>
                <div>
                    <label>Description:</label>
                    <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
                </div>
                <div>
                    <label>Status:</label>
                    <select value={status} onChange={(e) => setStatus(e.target.value)}>
                        <option value="available">Available</option>
                        <option value="borrowed">Borrowed</option>
                    </select>
                </div>
                <button type="submit">Add Book</button>
            </form>
        </div>
    );
}

export default AddBook;