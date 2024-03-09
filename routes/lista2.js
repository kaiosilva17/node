const express = require('express')
const router = express.Router()

router.post('/ex1', function (req, res) {

    const { nome, horasTrabalhadas, valorHora, filhos } = req.body

    const salarioBruto = horasTrabalhadas * valorHora
    const bonifacacaoFilhos = 0.03 * salarioBruto * filhos
    const salarioFinal = salarioBruto + bonifacacaoFilhos


    res.json({ salarioBruto, bonifacacaoFilhos, salarioFinal })
})

module.exports = router