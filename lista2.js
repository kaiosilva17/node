const express = require('express')
const router = express.Router()

router.post('/ex1', function (req, res) {

    const { nome, horasTrabalhadas, valorHora, filhos } = req.body

    const salarioBruto = horasTrabalhadas * valorHora
    const bonifacacaoFilhos = 0.03 * salarioBruto * filhos
    const salarioFinal = salarioBruto + bonifacacaoFilhos


    res.json({ salarioBruto, bonifacacaoFilhos, salarioFinal })
})

router.post('/ex2', function (req, res) {

})

router.post('/ex3', function (req, res) {

})

router.post('/ex4', function (req, res) {

})

router.post('/ex5', function (req, res) {

})

router.post('/ex6', function (req, res) {

})

router.post('/ex7', function (req, res) {

})

router.post('/ex8', function (req, res) {

})

router.post('/ex9', function (req, res) {

})

module.exports = router