const { getAllBooks, getBookById, insertBook } = require("../services/book");

function getBooks(req, res){
    try {
        const books = getAllBooks()
        res.send(books);
    } catch(error){
        res.status(404);
        res.send(error.message);
    }     
    
}

function getBook(req, res){
    try {
        const id = req.params.id

        const book = getBookById(id)
        res.send(book);
    } catch(error){
        res.status(404);
        res.send(error.message);
    }     
    
}

function postBook(req, res){
    try {
        const book = req.body
        
        insertBook(book);

        res.status(201);
        res.send('success');
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

module.exports = {
    getBooks,
    getBook, 
    postBook
}