const { Router } = require('express');
const { getBooks, getBook, postBook, patchBook, deleteBook } = require('../controllers/book')

const router = Router();

router.get('/', getBooks)   //Get All

router.get('/:id', getBook) //Get Book By Id

router.post('/', postBook)  //Post (insert) Book

router.patch('/:id', patchBook)  //Edit Book
    

router.delete('/:id', deleteBook)   //Delete Book (Hard delete)



module.exports = router 