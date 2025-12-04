const express = require('express');
const path = require('path');
const booksRouter = require('./routes/booksRouter');

const app = express();

app.use(express.static(path.join(__dirname, '..', 'client', 'build')));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api', booksRouter);

app.get(/^(?!\/api).*/, (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
});

module.exports = app;