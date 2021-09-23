const express = require("express")

const app = express()

app.get('/usuario', (request,response) => {
    
    console.log(request.query.segunda)
    return response.send(request.query.segunda)
})

app.get('/clientes', (request,response) => {
    return response.send("Esses são seus clientes")
})

app.listen (3000)