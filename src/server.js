import express from 'express' // them type: module
// const express = require('express')

const app = express()

const port = 8017
const hostName = 'localhost'


app.get('/', (req, res) => {
    res.send('Hello World')
})

app.listen(port, hostName, () => {
    console.log(`Server running at http://${hostName}:${port}/`)
})