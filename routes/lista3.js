const express = require('express')
const router = express.Router()

router.post('/ex1', function (req, res) {

})

router.post('/ex2', function (req, res) {

})

router.post('/ex3', function (req, res) {

})

router.post('/ex4', function (req, res) {

    const { salarioMinimo, horasTrabalhadas, dependentes, horasExtras } = req.body

    const valorHorasTrabalhadas = salarioMinimo * 0.2
    const salarioMes = valorHorasTrabalhadas * horasTrabalhadas
    const valorDependente = dependentes * 32
    const valorHoraExtra = valorHorasTrabalhadas * 1.5 * horasExtras
    const salarioBruto = salarioMes + valorDependente + valorHoraExtra

    let imposto = 0

    if (salarioBruto >= 5000) {
        imposto = salarioBruto * 0.2
    } else if (salarioBruto >= 2000) {
        imposto = salarioBruto * 0.1
    }

    const salarioLiquido = salarioBruto - imposto

    const gratificacao = salarioBruto < 3500 ? 1000 : 500

    const salarioReceber = salarioBruto + salarioLiquido + gratificacao

    res.status(200).json( {salarioBruto, imposto, gratificacao, salarioReceber})
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