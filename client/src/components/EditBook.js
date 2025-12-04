import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function EditBook() {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [year, setYear] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('available');
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`/api/book/${id}`)
            .then(response => {
                const { title, author, year, description, status } = response.data;
                setTitle(title);
                setAuthor(author);
                setYear(year);
                setDescription(description);
                setStatus(status);
            })
            .catch(error => {
                console.error('Error fetching book:', error);
            });
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`/api/book/${id}/edit`, { title, author, year, description, status })
            .then(() => {
                navigate(`/book/${id}`);
            })
            .catch(error => {
                console.error('Error updating book:', error);
            });
    };

    return (
        <div>
            <h1>Edit Book</h1>
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
                <button type="submit">Update Book</button>
            </form>
        </div>
    );
}

export default EditBook;