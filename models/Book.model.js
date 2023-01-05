const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
    title: { type: String, required: true },
    author: {
        type: String,
        required: true,
    },
    synopsis: { type: String },
    releaseYear: { type: Number, required: true },
    genre: {
        type: String,
    },
    coverImage: {
        type: String,
        default: 'https://www.shortandtweet.com/images/short-and-tweet-default-book-cover.jpg',
    }
});

const BookModel = model("Book", UserSchema);

module.exports = BookModel;
