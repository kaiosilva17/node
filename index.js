const express = require('express')
const app = express()

app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.get('/hello', function (req, res) {
    res.send("Chegou a resposta")
})

app.get('/nome', function (req, res) {
    res.send("Kaio")
})

app.post('/lista1/ex2', function (req, res) {

    const total = Number(req.body.total)
    const brancos = Number(req.body.brancos)
    const nulos = Number(req.body.nulos)
    const validos = Number(req.body.validos)


    const soma = brancos + nulos + validos

    let retorno = {}
    if (soma > total) {

        retorno = {
            codigo: 'SOMA_ELEITORES',
            mensagem: "A soma dos votos não pode passar o total de eleitores."
        }

        res.status(400).json(retorno)

    } else {

        const perBrancos = brancos / total * 100 + '%'
        const perNulos = nulos / total * 100 + '%'
        const perValidos = validos / total * 100 + '%'

        retorno = { perBrancos, perNulos, perValidos }

        res.status(200).json(retorno)


    }


})


app.listen('3000', function () {

})