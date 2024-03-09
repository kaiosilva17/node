const express = require('express')
const router = express.Router()

router.post('/ex1', function (req, res) {

    const n1 = Number(req.body.n1)
    const n2 = Number(req.body.n2)
    const n3 = Number(req.body.n3)
    const n4 = Number(req.body.n4)

    let retorno = {}
    if (n1 > 10 || n2 > 10 || n3 > 10 || n4 > 10) {

        retorno = {
            codigo: 'NOTA_INVALIDA',
            mensagem: "As notas so podem ter o valor máximo de 10"
        }

        res.status(400).json(retorno)

    }
    else {
        const media = (n1 + n2 + n3 + n4) / 4

        if (media >= 7) {
            console.log("Aluno Aprovado!")
        } else if (media >= 5) {
            console.log("Aluno de Recuperação!")
        } else {
            console.log("Aluno Reprovado!")
        }
    }

})


router.post('/ex2', function (req, res) {

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

module.exports = router