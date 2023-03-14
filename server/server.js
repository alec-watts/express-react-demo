const { response } = require('express')
const express = require('express')
const app = express()


app.get('/api', (req, res) => {
    res.json({"users": ["userOne", "uswo", "userThree", "userfor"]})
})

app.listen(5001, () => {
    console.log("Server started on port 5001") 
}) 