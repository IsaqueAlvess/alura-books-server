const { Router } = require('express');
const { getBooks, getBook, postBook } = require('../controllers/book')

const router = Router();

router.get('/', getBooks)   //Get All

router.get('/:id', getBook) //Get Book By Id

router.post('/', postBook)  //Post (insert) Book

router.delete('/', (req, res) => {  //Delete Book (Hard delete)
    
})

router.patch('/', (req, res) => {   //Edit Book
    
})



module.exports = router 