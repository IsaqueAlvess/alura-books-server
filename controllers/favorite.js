const { getAllFavoriteBooks, insertFavorite, deleteFavoriteById } = require("../services/favorite");


function getAllFavorites(req, res){
    try {
        const books = getAllFavoriteBooks()
        res.send(books);
    } catch(error){
        res.status(404);
        res.send(error.message);
    }         
}

function postFavorite(req, res){
    try {
        const id = req.params.id;
        insertFavorite(id);

        res.status(201).send('success');
    } catch (error) {
        res.status(500).send(error.message);
    }
}

function deleteFavorite(req, res) {
    try {
        const id = req.params.id;

        deleteFavoriteById(id)
        res.status(200).send('Deleted successfully');

    } catch (error) {
        res.status(404).send(error.message);
    }
}

module.exports = {
    getAllFavorites,
    postFavorite,
    deleteFavorite
}
