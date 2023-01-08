// Requires
const { Router } = require('express');
const uploadCloud = require('../config/cloudinary');
const Book = require('../models/Book.model');

//Environment
const router = Router();
require("dotenv").config();


//Create a Book
router.post('/book', async (req, res, next) => {
    const { title, author, synopsis, releaseYear, genre, coverImage } = req.body;

    try {
        const newBook = await Book.create({ title, author, synopsis, releaseYear, genre, coverImage })
        res.status(201).json(newBook);


    } catch (error) {
        next(error)
    }

})

//Update Book
router.put('/updateBook/:bookId', async (req, res, next) => {
    const update = req.body;
    const { bookId } = req.params;

    try {

        const updatedBook = await Book.findByIdAndUpdate(bookId, update, { new: true })
        res.status(201).json(updatedBook)

    } catch (error) {
        next(error)
    }

})

//Delete Book
router.delete('/deleteBook/:bookId', async (req, res, next) => {
    const { bookId } = req.params;

    try {

        await Book.findByIdAndRemove(bookId)
        res.status(201).json({ message: 'Deleted' })

    } catch (error) {
        next(error)
    }

})

//Upload Cover Image
router.put('/book/:bookId/image-upload',
    uploadCloud.single('image'),
    async (req, res, next) => {
        const { bookId } = req.params;
        try {
            const bookCover = await Book.findByIdAndUpdate(
                bookId,
                { coverImage: req.file.path },
                { new: true })
            res.status(200).json(bookCover)
        } catch (error) {
            next(error)
        }

    })

//Searching a Book
router.get('/uniqueBook/:id', async (req, res, next) => {
    const {id} = req.params;
    try {

        const foundedBook = await Book.findById(id)
        res.status(201).json(foundedBook)

    } catch (error) {
        next(error)
    }

})

module.exports = router;