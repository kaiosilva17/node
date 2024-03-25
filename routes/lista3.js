const express = require("express");
const router = express.Router();

router.post("/ex1", function (req, res) {
  const salario = Number(req.body.salario);

  let salarioreajustado = 0;

  if (salario <= 2000) {
    salarioreajustado = salario * 1.5;
  } else {
    salarioreajustado = salario * 1.3;
  }

  res.json({ salarioreajustado });
});

router.post("/ex2", function (req, res) {
  const n1 = Number(req.body.n1);
  const n2 = Number(req.body.n2);
  const n3 = Number(req.body.n3);

  let numeroMaior = 0;

  if (n1 > n2 && n1 > n3) {
    numeroMaior = n1;
  } else if (n2 > n1 && n2 > n3) {
    numeroMaior = n2;
  } else {
    numeroMaior = n3;
  }

  res.json({ mensagem: `O numero maior é: ${numeroMaior}` });
});

router.post("/ex3", function (req, res) {
  const pessoas = Number(req.body.pessoas);
  const chopp = Number(req.body.chopp) * 4.8;
  const cobertura = Number(req.body.cobertura) * 1.5;

  const conta = chopp + cobertura + 17.0;

  const valorPorPessoa = (conta * 1.1) / pessoas;

  res.json({ mensagem: `Cada pessoa da mesa irá pagar ${valorPorPessoa}` });
});

router.post("/ex4", function (req, res) {
  const { salarioMinimo, horasTrabalhadas, dependentes, horasExtras } =
    req.body;

  const valorHorasTrabalhadas = salarioMinimo * 0.2;
  const salarioMes = valorHorasTrabalhadas * horasTrabalhadas;
  const valorDependente = dependentes * 32;
  const valorHoraExtra = valorHorasTrabalhadas * 1.5 * horasExtras;
  const salarioBruto = salarioMes + valorDependente + valorHoraExtra;

  let imposto = 0;

  if (salarioBruto >= 5000) {
    imposto = salarioBruto * 0.2;
  } else if (salarioBruto >= 2000) {
    imposto = salarioBruto * 0.1;
  }

  const salarioLiquido = salarioBruto - imposto;

  const gratificacao = salarioBruto < 3500 ? 1000 : 500;

  const salarioReceber = salarioBruto + salarioLiquido + gratificacao;

  res.status(200).json({ salarioBruto, imposto, gratificacao, salarioReceber });
});

router.post("/ex5", function (req, res) {
  const id = req.body.id;
  const n1 = Number(req.body.n1);
  const n2 = Number(req.body.n2) * 2;
  const n3 = Number(req.body.n3) * 3;
  const ME = Number(req.body.ME);

  const mediaAproveitamento = (n1 + n2 + n3 + ME) / 7;

  if (mediaAproveitamento >= 9) {
    res.json({
      mensagem: `O aluno ${id} tem notas: n1(${n1}), n2(${n2}), n3(${n3}),media de exercicios(${ME}),
        media de aproveitamento: ${mediaAproveitamento}, com conceito A, Aluno Aprovado`,
    });
  } else if (mediaAproveitamento >= 7.5 && mediaAproveitamento < 9.0) {
    res.json({
      mensagem: `O aluno ${id} tem notas: n1(${n1}), n2(${n2}), n3(${n3}),media de exercicios(${ME}), 
        media de aproveitamento: ${mediaAproveitamento}, com conceito B, Aluno Aprovado`,
    });
  } else if (mediaAproveitamento >= 6.0 && mediaAproveitamento < 7.5) {
    res.json({
      mensagem: `O aluno ${id} tem notas: n1(${n1}), n2(${n2}), n3(${n3}),media de exercicios(${ME}), 
        media de aproveitamento: ${mediaAproveitamento}, com conceito C, Aluno Aprovado`,
    });
  } else if (mediaAproveitamento >= 4.0 && mediaAproveitamento < 6.0) {
    res.json({
      mensagem: `O aluno ${id} tem notas: n1(${n1}), n2(${n2}), n3(${n3}),media de exercicios(${ME}), 
        media de aproveitamento: ${mediaAproveitamento}, com conceito D, Aluno Reprovado`,
    });
  } else if (mediaAproveitamento < 4.0) {
    res.json({
      mensagem: `O aluno ${id} tem notas: n1(${n1}), n2(${n2}), n3(${n3}),media de exercicios(${ME}), 
        media de aproveitamento: ${mediaAproveitamento}, com conceito E, Aluno Reprovado`,
    });
  }
});

router.post("/ex6", function (req, res) {
  const sexo = req.body.sexo.toLowerCase();
  const altura = Number(req.body.altura);

  let pesoIdeal = 0;

  if (sexo === "masculino") {
    pesoIdeal = 72.7 * altura - 58;
  } else if (sexo === "feminino") {
    pesoIdeal = 62.1 * altura - 44.7;
  } else {
    res.json({
      mensagem: 'Sexo inválido. Por favor, insira "masculino" ou "feminino".',
    });
    return;
  }

  res.json({ pesoIdeal });
});

router.post("/ex7", function (req, res) {
  const n1 = Number(req.body.n1);
  const n2 = Number(req.body.n2);
  const n3 = Number(req.body.n3);

  let numerosMaiores = 0;

  if (n1 > n3 && n2 > n3) {
    numerosMaiores = n1 + n2;
    res.json({
      mensagem: `Os numeros maiores são: ${n1} e ${n2}. soma: ${numerosMaiores}`,
    });
  } else if (n1 > n2 && n3 > n2) {
    numerosMaiores = n1 + n3;
    res.json({
      mensagem: `Os numeros maiores são: ${n1} e ${n3}. soma: ${numerosMaiores}`,
    });
  } else if (n2 > n1 && n3 > n1) {
    numerosMaiores = n2 + n3;
    res.json({
      mensagem: `Os numeros maiores são: ${n2} e ${n3}. soma: ${numerosMaiores}`,
    });
  }
});

router.post("/ex8", function (req, res) {

    const salario = Number(req.body.salario);
    const codigoCargo = Number(req.body.codigoCargo);
    
  let novoSalario = 0

  if(codigoCargo === 101){
    novoSalario = salario * 1.05
  } else if(codigoCargo === 102){
    novoSalario = salario * 1.075
  } else if(codigoCargo === 103){
    novoSalario = salario * 1.1
  } else {
    novoSalario = salario * 1.15
  }

const diferenca = novoSalario - salario

res.json({
    salario_antigo: salario,
    salario_com_reajuste: novoSalario,
    diferenca_salarial: diferenca
})

});

module.exports = router;
