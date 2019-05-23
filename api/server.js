// IMPORTS
    const express = require('express')

// ROUTERS
    const zooRouter = require('./zooRouter')

// SERVER
    const server = express()
    server.use(express.json())

// Homepage Routing
    server.get('/', (req,res) => {
        res.json({message: "Web DataBase 2 Challenge"})
    })

// Individual Routes
    server.use('/api/zoo', zooRouter)

// EXPORTS
module.exports = server;