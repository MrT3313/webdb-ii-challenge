const knex = require ('knex')

const configOptions = require('../api/knex').development;


module.exports = knex(configOptions);