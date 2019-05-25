const db = require ('./dbConfig')

// WHAT AM I IMPORTING TO TALK TO THE DB! AM I WRITING KNEX IN HERE?


module.exports = {
    find,
    
    // findById,
    // add,
    // remove,
    // update
};

function find() {
    return db('name')
}