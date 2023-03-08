const {Author} = require ('../models')

// View all
module.exports.viewAll = async function(req, res){
    const authors = await Author.findAll();
    res.render('author/view_all', {authors});
}
// profile
module.exports.viewProfile = async function (req, res){
    const author = await Author.findByPk(req.params.id, {
        include: 'books'
    });
    res.render('author/profile', {author})
}

//delete
module.exports.deleteAuthor = async function(req, res){
    await Author.destroy( {
        where: {
            id:req.params.id
        }
    });
    res.redirect('/authors');
}

function authorHasBook(author, book) {
    for(let i=0; i<author.books.length; i++) {
        if (book.id === author.books[i].id){
            return true
        }
    }
    return false
}