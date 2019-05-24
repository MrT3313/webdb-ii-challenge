const knex = require ('knex')

const configOptions = require('../knex').development;

module.exports = knex(configOptions);