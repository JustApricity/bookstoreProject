const {Book} = require('../models')
const genres = ['Fiction', 'Non-fiction', 'Fantasy', 'Action & Adventure', 'Mystery', 'Horror & Thriller', 'Romance', 'Graphic Novel & Manga', 'Childrens', 'Memoir & Biographies', 'Cookbook', 'History', 'Self-help', 'Religion & Spirituality'].sort();

//View All
module.exports.viewAll = async function (req, res) {
    const books = await Book.findAll();
    res.render('book/view_all', {books});
}
//profile
module.exports.viewProfile = async function (req, res){
    const book = await Book.findByPk(req.params.id, {
        include: 'authors'
    });
    res.render('book/profile', {book})
}
//render add form
module.exports.renderAddForm = function(req, res){
    const book = {
        title: '',
        author: '',
        genre: genres[0],
        pages: '',
        image: '',
        description: ''
    }
    res.render('book/add', {book, genres});
}
//add
module.exports.addBook = async function(req, res){
    const book = await Book.create( {
        title: req.body.title,
        author: req.body.author,
        genre: req.body.genre,
        pages: req.body.pages,
        image: req.body.pages,
        description: req.body.description
    });
    res.redirect(`/book/profile/${book.id}`);
}
//render edit form
module.exports.renderEditForm = async function(req, res){
    const book = await Book.findByPk(req.params.id);
    res.render('book/edit', {book, genres})
}
//update
module.exports.updateBook = async function(req, res){
    const book = await Book.update( {
        title: req.body.title,
        author: req.body.author,
        genre: req.body.genre,
        pages: req.body.pages,
        image: req.body.image,
        description: req.body.description
    }, {
        where: {
            id: req.params.id
        }
        });
    res.redirect(`/book/profile/${req.params.id}`);
}
//delete
module.exports.deleteBook = async function(req, res) {
    await Book.destroy( {
        where: {
            id: req.params.id
        }
        });
    res.redirect('/book');
}