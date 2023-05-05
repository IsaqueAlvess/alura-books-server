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

module.exports = {
    getAllBooks,
    getBookById,
    insertBook
}