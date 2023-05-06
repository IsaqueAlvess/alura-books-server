const { getAllBooks, getBookById, insertBook, editBook, deleteBookById } = require("../services/book");

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

        if(id && Number(id)){
            const book = getBookById(id)
            res.send(book);
        }else{
            res.status(422);
            res.send('Invalid ID')
        }
    } catch(error){
        res.status(500).send(error.message);
    }     
}

function postBook(req, res){
    try {
        const book = req.body;

        if(req.body.name && req.body.id){
            insertBook(book);
            res.status(201).send('success');
        }else{
            res.status(422);
            res.send('Name is required')
        }        
    } catch (error) {
        res.status(500).send(error.message);
    }
}

function patchBook(req, res){
    try {
        const id = req.params.id;
        const body = req.body

        if(id && Number(id)){
            const book = editBook(id)
            res.send(book);

            editBook(body, id)
            res.status(200).send('Edited with success');
        }else{
            res.status(422);
            res.send('Invalid ID')
        }          
    } catch (error) {
        res.status(500).send(error.message);
    }
}

function deleteBook(req, res) {
    try {
        const id = req.params.id;

        if(id && Number(id)){
            deleteBookById(id)
            res.status(200).send('Deleted successfully');
        }else{
            res.status(422);
            res.send('Invalid ID')
        }
    } catch (error) {
        res.status(404).send(error.message);
    }
}

module.exports = {
    getBooks,
    getBook, 
    postBook,
    patchBook,
    deleteBook
}