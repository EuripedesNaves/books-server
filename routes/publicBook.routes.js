// Requires
const { Router } = require('express');
const Book = require('../models/Book.model');

//Environment
const router = Router();
require("dotenv").config();



//Searching all Books
router.get('/allBooks', async (req, res, next) => {

    try {
        const books = await Book.find()
        res.status(201).json(books)

    } catch (error) {
        next(error)
    }

})

//Searching a Book
/*router.get('/uniqueBook/:bookId', async (req, res, next) => {
    const { bookId } = req.params;
    try {

        const foundedBook = await Book.findById(bookId)
        res.status(201).json(foundedBook)

    } catch (error) {
        next(error)
    }

})*/



module.exports = router;