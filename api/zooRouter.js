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

    router.get("/:id", async (req,res) => {
        console.log("zooRouter GET/:id")
        const { id } = req.params
        
        knex_DBversion('zoos')
            .where({ id })
                .then( animal => {
                    console.log(animal)
                    res.status(200).json(animal)
                })
                .catch( () => {
                    res.status(500).json({ error: "could not GET/:id individual animal"})
                })
    })
// - POST - //
    // ACCEPTED SHAPE
        // {
        //     "name": "UPDATED TACO"
        // }
    router.post("/", async (req, res) => {
        console.log("zooRouter POST/")
        knex_DBversion('zoos')
            .insert(req.body)
                .then(results => 
                    res.status(201).json(results))
                .catch( () => {
                    res.status(500).json({ error: "could not post new animal"})
                })
    })

// - PUT - *** *** *** NOT WORKING *** *** *** //
    // ACCEPTED SHAPE
        //
        //
        //

    router.put("/:id", async (req, res) => {
        console.log("zooRouter PUT/:id")
        const { id } = req.params
        
        
        // V1
            console.log(req.body)
            console.log(id)
        //V2
            const updateObject = {
                "id": id,
                "name": req.body.name
            }
            console.log(updateObject)

        knex_DBversion('zoos')
            .where({ id })
            
            //V1
                // .update(id, req.body)

            // V2
                // .update(updateObject)

            // V3
                // .update({
                //     "id": id, 
                //     "name": req.body
                // })
            
            // V4
                .update(req.body)


            .then( results => {
                console.log(results)

                if (results) {
                    res.status(200).json(results)
                } else {
                    res.status(404).json({ message: "animal not found"})
                }
            })
            .catch( () => {
                res.status(500).json({ error: "could not update animal"})
            })
    } )

// - DELETE - //
    router.delete("/:id", async (req, res) => {
        console.log("zooRouter DELETE/:id")
        const { id } = req.params

        knex_DBversion('zoos')
            .where({ id })
            .del()
                .then( results => {
                    if (results) {
                        res.status(200).json({ message: "animal successfully deleted"})
                    } else {
                        res.status(404).json({ error: "animal not found"})
                    }
                })
                .catch( () => {
                    res.status(500).json({error: "unable to delete animal"})
                })
    })

// EXPORTS
module.exports = router 