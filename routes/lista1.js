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
            retorno = {
                codigo: 'APROVADO',
                mensagem: "O aluno foi aprovado"
            }

            res.status(200).json(retorno)

        } else if (media >= 5) {
            retorno = {
                codigo: 'RECUPERACAO',
                mensagem: "O aluno está de recuperação"
            }

            res.status(200).json(retorno)

        } else {
            retorno = {
                codigo: 'REPROVADO',
                mensagem: "O aluno foi reprovado"
            }

            res.status(200).json(retorno)

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

router.post('/ex3', function (req, res) {

    const salario = Number(req.body.salario);
    const reajuste = Number(req.body.reajuste);

    const salario_final = salario + (salario * reajuste) / 100;
    const reajuste_valor = (salario * reajuste) / 100;

    res.status(200).json(
        {
            codigo: "NOVO_SALARIO",
            mensagem:"O salário foi reajustado",
            salario: salario_final,
            reajuste: reajuste_valor

        }
    )
})

router.post('/ex4', function (req, res) {

    const custo_fabrica = Number(req.body.custo_fabrica)
    const custo_consumidor = custo_fabrica + (custo_fabrica * 0.28) + (custo_fabrica * 0.45)

    res.status(200).json(
        {
           custo_de_fabrica: custo_fabrica,
           custo_consumidor,
        }
    )
})

router.post('/ex5', function (req, res) {

    const custo_fabrica = Number(req.body.custo_fabrica);
    const distribuidor = Number(req.body.distribuidor)/100;
    const imposto = Number(req.body.imposto)/100;
    const custo_consumidor = custo_fabrica + (distribuidor * custo_fabrica) + (imposto * custo_fabrica);

    res.status(200).json(
        {
            custo_fabrica: custo_fabrica,
            PercDistribuidor: distribuidor,
            PercImpostos: imposto,
            custo_consumidor,   
        }
    )
})

router.post('/ex6', function (req, res) {

    const carros_vendidos = Number(req.body.carros_vendidos);
    const comissao_carros = Number(req.body.comissao_carros);
    const valor_vendas = carros_vendidos * comissao_carros
    const salario_fixo = Number(req.body.salario_fixo);
    const valor_carro_vendido = valor_vendas * 0.05;

    const salario =  valor_vendas + salario_fixo + valor_carro_vendido

    res.status(200).json(
        {carros_vendidos, valor_vendas, salario_fixo, valor_carro_vendido, salario}
    )
      
})

router.post('/ex7', function (req, res) {

    const nota1 = Number(req.body.nota1) * 0.4;
    const nota2 = Number(req.body.nota2) * 0.6;
    const media = nota1 + nota2

    res.status(200).json(
        {  media,}
    )
    

})

router.post('/ex8', function (req, res) {

    const raio = Number(req.body.raio);
    const altura = Number(req.body.altura);
    const volume = 3.14 * (raio ** 2) * altura

    res.status(200).json(
        { raio, altura, volume,}
    )

})

router.post('/ex9', function (req, res) {

    const n1 = Number(req.body.n1);
    const n2 = Number(req.body.n2);
    const n3 = (n1 + n2) * n1

    res.status(200).json(
        { n1, n2, n3 }
    )
    console.log("O valor da soma dos números multiplicados pelo primeiro numero é " + n3)

})

module.exports = router