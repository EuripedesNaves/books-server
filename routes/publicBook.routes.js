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

//Searching unique Book
router.get('/uniqueBook', async (req, res, next) => {

    try {

        //READ - Retornar carta específica
        const { bookName } = req.body;

        const searchBook = await Book.findOne({ bookName })
        res.status(201).json(searchBook)

    } catch (error) {
        next(error)
    }

})



module.exports = router;