function getBooks(req, res){
    try {
        res.send("Hello, world!");
    } catch(error){
        res.status(404);
        res.send(error.message);
    }     
    
}

module.exports = {
    getBooks
}