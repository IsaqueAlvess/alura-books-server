const { Router } = require('express');
const { getAllFavorites, postFavorite, deleteFavorite } = require('../controllers/favorite');

const router = Router();

router.get('/', getAllFavorites)   //Get All

router.post('/:id', postFavorite)  //Post (insert) Book

router.delete('/:id', deleteFavorite)   //Delete Book (Hard delete)

module.exports = router 