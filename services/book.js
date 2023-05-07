const fs = require('fs');

function getAllBooks(){
   return JSON.parse( fs.readFileSync("books.json") )
}

function getBookById(id){
    const books = JSON.parse( fs.readFileSync("books.json") )

    const filteredBook = books.filter( book => book.id === id)

    return filteredBook;
}

function insertBook(newBook){
    const books = JSON.parse( fs.readFileSync("books.json") )
    
    const newBookList = [...books, newBook]

    fs.writeFileSync("books.json", JSON.stringify(newBookList) )

}

function editBook(modifications, id){
    let actualBooks = JSON.parse( fs.readFileSync("books.json") )

    const modifiedIndex = actualBooks.findIndex(book => book.id === id);

    //sobreescrita do que há
    const changedData = {...actualBooks[modifiedIndex], ...modifications}

    //definindo o que será então o objeto modificado
    actualBooks[modifiedIndex] = changedData;

    fs.writeFileSync("books.json", JSON.stringify(actualBooks))
}

function deleteBookById(id){
    
    const books = JSON.parse( fs.readFileSync("books.json") );

    const bookIndex = books.findIndex(book => book.id === id)

    books.splice(bookIndex, 1)

    fs.writeFileSync("books.json", JSON.stringify(books))

}


module.exports = {
    getAllBooks,
    getBookById,
    insertBook,
    editBook,
    deleteBookById
}