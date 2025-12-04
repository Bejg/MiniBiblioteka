const { getDB } = require('../data/connection');
const { ObjectId } = require('mongodb')

async function getAllBooks() {
  const db = getDB();
  return await db.collection('books').find().toArray();
}

async function getBookbyId(id) {
    const db = getDB();
    return await db.collection('books').findOne({ _id: new ObjectId(id) });
}

async function addBook(title, author, year, description, status) {
    console.log('Adding book with status:', status);
    const db = getDB();
    try {
        const result = await db.collection('books')
        .insertOne({
            title, 
            author, 
            year: year ? Number(year) : null,
            description, 
            status
        });
        return await db.collection('books').findOne({ _id: result.insertedId });
    } catch (error) {
        console.error('Error adding book:', error);
    }
    
}

async function deleteBook(id) {
    const db = getDB();
    await db.collection('books').deleteOne({ _id: new ObjectId(id) });
}

async function updateBook(id, title, author, year, description, status) {
    const db = getDB();
    const result = await db.collection('books')
    .findOneAndUpdate(
        { _id: new ObjectId(id) },
        { $set: { title, author, year, description, status} },
        { returnDocument: 'after' }
    );
    return result.value;
}

async function getBookById(id) {
    const db = getDB();
    return await db.collection('books').findOne({ _id: new ObjectId(id) });
}

async function searchBooks(query) {
    const db = getDB();
    return await db.collection('books').find({ title: { $regex: query, $options: 'i' } }).toArray();
}

module.exports = { getAllBooks, getBookbyId, addBook, deleteBook, updateBook, getBookById, searchBooks };