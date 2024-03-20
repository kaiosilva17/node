const express = require("express");
const router = express.Router();

router.post("/ex1", function (req, res) {
  const qtdMinima = Number(req.body.qtdMinima);
  const qtdMaxima = Number(req.body.qtdMaxima);

  const estMedio = (qtdMinima + qtdMaxima) / 2;

  res.json({ estoque_medio: estMedio });
});

router.post("/ex2", function (req, res) {
  const { nome, horasTrabalhadas, valorHora, filhos } = req.body;

  const salarioBruto = horasTrabalhadas * valorHora;
  const bonifacacaoFilhos = 0.03 * salarioBruto * filhos;
  const salarioFinal = salarioBruto + bonifacacaoFilhos;

  res.json({ salarioBruto, bonifacacaoFilhos, salarioFinal });
});

router.post("/ex3", function (req, res) {
  const anos = Number(req.body.anos) * 365;
  const meses = Number(req.body.meses) * 30;
  const dias = Number(req.body.dias);

  const idadeDias = anos + meses + dias;

  res.json({ idade_em_dias: idadeDias });
});

router.post("/ex4", function (req, res) {
  const idadeDias = Number(req.body.idadeDias);

  const anos = idadeDias / 365;
  const meses = (idadeDias % 365) / 30;
  const dias = (idadeDias % 365) % 30;

  res.json({ anos, meses, dias });
});

router.post("/ex5", function (req, res) {
  const n1 = Number(req.body.n1) * 0.2;
  const n2 = Number(req.body.n2) * 0.3;
  const n3 = Number(req.body.n3) * 0.5;

  const media = n1 + n2 + n3;

  res.json({ media });
});

router.post("/ex6", function (req, res) {
  const segundos = Number(req.body.segundos);

  const horas = Math.floor(segundos / 3600);
  const minutos = Math.floor((segundos % 3600) / 60);
  const segundos_restantes = segundos % 60;
  res.json({ horas, minutos, segundos_restantes });
});

router.post("/ex7", function (req, res) {
  const { nome, salarioFixo, vendas, percVendas } = req.body;

  const comissao = vendas * (percVendas / 100);
  const salario = comissao + salarioFixo;

  res.json({ nome, salario });
});

router.post("/ex8", function (req, res) {
  const { nome, distancia, tempo } = req.body;

  const velocidadeMd = distancia / tempo;

  res.json({
    mensagem: `A velocidade média do ${nome} foi ${velocidadeMd} km/h.`,
  });
});

router.post("/ex9", function (req, res) {
  const salario = Number(req.body.salario);

  if (salario >= 1000) {
    res.json({ mensagem: "O funcionário não tem direito a aumento" });
  } else {
    const reajusteSalario = salario * 1.3;
    res.json({ reajusteSalario });
  }
});

module.exports = router;
