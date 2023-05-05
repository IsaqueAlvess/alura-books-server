const { Router } = require('express');
const { getBooks, getBook } = require('../controllers/book')

const router = Router();

router.get('/', getBooks)


router.get('/:id', getBook)


router.post('/', (req, res) => {
    
})

router.delete('/', (req, res) => {
    
})

router.patch('/', (req, res) => {
    
})



module.exports = router 