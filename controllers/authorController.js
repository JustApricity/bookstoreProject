const {Author} = require ('../models')

// View all
module.exports.viewAll = async function(req, res){
    const authors = await Author.findAll();
    res.render('author/view_all', {authors});
}
// profile
//left off here, slide 13
// render add

// add

// render edit

// edit

//delete