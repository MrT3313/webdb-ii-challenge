// IMPORTS
const express = require('express');

// Importing Models for DB
    // const Animals = require('../data/zooModel');

const knex_DBversion = require('../data/dbConfig')

// Router
    const router = express.Router();

// - GET - //
    router.get("/", async (req,res) => {
        console.log("zooRouter GET/")

        knex_DBversion('zoos')
            .then(animals => {
                console.log(animals)
                res.status(200).json(animals)
            })
            .catch(err => {
                console.log(err)
                res.status(500).json({ error: "could not GET/ animals"})
            })
    })
// - POST - //

// - PUT - //

// - DELETE - //


// EXPORTS
module.exports = router 