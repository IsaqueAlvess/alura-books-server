const fs = require('fs');

function getAllFavoriteBooks(){
   return JSON.parse( fs.readFileSync("favorites.json") )
}

function deleteFavoriteById(id){
    const books = JSON.parse( fs.readFileSync("favorites.json") )

    const filteredBooks = books.filter(books => books.id !== id);  //Soft delete

    fs.writeFileSync("favorites.json", JSON.stringify(filteredBooks))

}

function insertFavorite(id){
    const allBooks = JSON.parse( fs.readFileSync("books.json") )
    const favoriteBooks = JSON.parse( fs.readFileSync("favorites.json") )

    const newFavoriteList = [...favoriteBooks, allBooks.find(book => book.id === id)]
    
    fs.writeFileSync("favorites.json", JSON.stringify(newFavoriteList))

}


module.exports = {
    getAllFavoriteBooks,
    deleteFavoriteById,
    insertFavorite
}