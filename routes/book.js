const { Router } = require('express');
const { getBooks } = require('../controllers/book')

const router = Router();

router.get('/', getBooks)

router.post('/', (req, res) => {
    
})

router.delete('/', (req, res) => {
    
})

router.patch('/', (req, res) => {
    
})



module.exports = router 