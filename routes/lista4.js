const express = require("express");
const router = express.Router();

router.post("/ex1", function (req, res) {
  const { numeros } = req.body;

  let soma = 0;
  for (let n of numeros) {
    soma += n;
  }

  const media = soma / numeros.length;

  res.status(200).json({ media });
});

router.post("/ex2", function (req, res) {
  const { numeros } = req.body;

  let menor = numeros[0];
  let maior = numeros[0];

  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > maior) {
      maior = numeros[i];
    }
    if (numeros[i] < menor) {
      menor = numeros[i];
    }
  }

  res.status(200).json({ menor, maior });
});

router.post("/ex3", function (req, res) {
  let numeros = [];

  for (let i = 1; i <= 10; i++) {
    numeros.push(i);
  }

  res.json({ numeros });
});

router.post("/ex4", (req, res) => {
  const numeros = [];

  for (let i = 10; i >= 1; i--) {
    numeros.push(i);
  }

  res.json({ numeros });
});

router.post("/ex5", (req, res) => {
  const numeros = [];

  let qtd = 0;

  for (let i = 101; qtd < 10; i++) {
    numeros.push(i);
    qtd++;
  }

  res.json({ numeros });
});

router.post("/ex6", (req, res) => {
  const { numeros } = req.body;

  let soma = 0;

  if (numeros.length === 10) {
    for (let i = 0; i < 10; i++) {
      soma += Number(numeros[i]);
    }

    res.status(200).json({ soma });
  } else {
    res.status(400).json({ erro: "Insira apenas 10 números" });
  }
});

router.post("/ex7", (req, res) => {
  const { n } = req.body;

  const numeros = [];

  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      numeros.push(i);
    }
  }

  res.status(200).json({ numeros });
});

router.post("/ex8", (req, res) => {
  const { numeros } = req.body;

  let qtsNegativos = 0;

  if (numeros.length === 10) {
    for (let i = 0; i < 10; i++) {
      if (numeros[i] < 0) {
        qtsNegativos++;
      }
    }

    res.status(200).json({ qtsNegativos });
  } else {
    res.status(400).json({ error: "Insira apenas 10 números" });
  }
});

router.post("/ex9", (req, res) => {
  const { numeros } = req.body;

  let quaisNegativos = [];

  if (numeros.length === 10) {
    for (let i = 0; i < 10; i++) {
      if (numeros[i] < 0) {
        quaisNegativos.push(numeros[i]);
      }
    }

    res.status(200).json({ quaisNegativos });
  } else {
    res.status(400).json({ error: "Insira apenas 10 números" });
  }
});

router.post("/ex10", (req, res) => {
  const { numeros } = req.body;

  let dentroIntervalo = 0;
  let foraIntervalo = 0;

  if (numeros.length === 10) {
    for (let i = 0; i < 10; i++) {
      if (numeros[i] >= 10 && numeros[i] <= 20) {
        dentroIntervalo++;
      } else {
        foraIntervalo++;
      }
    }

    res.status(200).json({ dentroIntervalo, foraIntervalo });
  } else {
    res.status(400).json({ error: "Insira apenas 10 números" });
  }
});

router.post("/ex11", (req, res) => {
  const { numeros } = req.body;

  let soma = 0;

  if (numeros.length === 10) {
    for (let i = 0; i < 10; i++) {
      soma += Number(numeros[i]);
    }

    const media = soma / 10;
    res.json({ media });
  } else {
    res.status(400).json({ error: "Insira apenas 10 números" });
  }
});

router.post("/ex12", (req, res) => {
  const { numeros } = req.body;

  let soma = 0;

  if (numeros.length > 0) {
    for (let i = 0; i < numeros.length; i++) {
      soma += Number(numeros[i]);
    }

    const media = soma / numeros.length;
    res.json({ media });
  } else {
    res.status(400).json({ error: "Insira pelo menos um número" });
  }
});

router.post("/ex13", (req, res) => {
  const { numeros } = req.body;

  const numtriplos = [];

  for (let i = 0; i < numeros.length; i++) {
    const triplo = numeros[i] * 3;
    numtriplos.push(triplo);
  }
  res.status(200).json({ numtriplos });
});

router.post("/ex14", (req, res) => {
  const { numeros } = req.body;

  const numdobro = [];

  if (numeros.length === 30) {
    for (let i = 0; i < 30; i++) {
      const dobro = numeros[i] * 2;
      numdobro.push(dobro);
    }
    res.status(200).json({ numdobro });
  } else {
    res.status(400).json({ error: "Insira apenas 30 números positivos" });
  }
});

router.post("/ex15", (req, res) => {
  const { numeros } = req.body;

  let soma = 0;

  if (numeros.length === 10) {
    for (let i = 0; i < 10; i++) {
      if (numeros[i] < 40) {
        soma += numeros[i];
      }
    }

    res.status(200).json({ soma });
  } else {
    res.status(400).json({ error: "Insira apenas 10 números" });
  }
});

router.post("/ex16", (req, res) => {
  const { numeroMercadorias, valores } = req.body;

  let totalEstoque = 0;

  for (let i = 0; i < valores.length; i++) {
    totalEstoque += parseFloat(valores[i]);
  }

  const mediaValorMercadorias = totalEstoque / parseInt(numeroMercadorias);

  res.status(200).json({ totalEstoque, mediaValorMercadorias });
});

router.post("/ex17", (req, res) => {
  const { valorInicial, valorFinal } = req.body;

  let impares = [];
  let somaImp = 0;

  for (let i = valorInicial; i <= valorFinal; i++) {
    if (i % 2 !== 0) {
      impares.push(i);
      somaImp += i;
    }
  }
  res.json({ impares, somaImp });
});

router.post("/ex18", (req, res) => {
  const { numeros } = req.body;

  if (numeros.length !== 30) {
    return res.status(400).json({ error: "Insira 30 numeros inteiros." });
  }

  let maior = numeros[0];
  let menor = numeros[0];
  let soma = 0;

  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > maior) {
      maior = numeros[i];
    }
    if (numeros[i] < menor) {
      menor = numeros[i];
    }
    soma += numeros[i];
  }

  const media = soma / numeros.length;

  res.status(200).json({ maior, menor, media });
});

router.post("/ex19", (req, res) => {
  const alunos = req.body.alunos;

  const cursos = {
    1: "Sistemas de Informação",
    2: "Ciência da Computação",
    3: "Engenharia Civil",
  };

  let totalAlunosPorCurso = { 1: 0, 2: 0, 3: 0 };

  let alunosEntre20e25PorCurso = { 1: 0, 2: 0, 3: 0 };

  let somaIdadePorCurso = { 1: 0, 2: 0, 3: 0 };

  let totalAlunos = 0;
  let menorMediaIdade = Infinity;
  let cursoMenorMediaIdade = "";

  for (let i = 0; i < alunos.length; i++) {
    const aluno = alunos[i];
    const curso = aluno.curso;
    const idade = aluno.idade;

    totalAlunos++;
    totalAlunosPorCurso[curso]++;

    if (idade >= 20 && idade <= 25) {
      alunosEntre20e25PorCurso[curso]++;
    }

    somaIdadePorCurso[curso] += idade;
  }

  for (let curso in somaIdadePorCurso) {
    const mediaIdade = somaIdadePorCurso[curso] / totalAlunosPorCurso[curso];
    if (mediaIdade < menorMediaIdade) {
      menorMediaIdade = mediaIdade;
      cursoMenorMediaIdade = cursos[curso];
    }
  }

  res.status(200).json({
    totalAlunosPorCurso,
    alunosEntre20e25PorCurso,
    cursoMenorMediaIdade,
  });
});

router.post("/ex20", (req, res) => {
  let tabuada = "";

  for (let i = 1; i <= 10; i++) {
    tabuada += ` Tabuada de ${i}: `;

    for (let j = 1; j <= 10; j++) {
      tabuada += ` ,${i} x ${j} = ${i * j}`;
    }
  }
  res.json(tabuada);
});

router.post("/ex21", (req, res) => {
  const respostas = req.body.respostas;

  let quantidadeDeDez = 0;
  let totalIdade = 0;
  let totalPessoas = 0;
  let quantidadeDeCincoOuMenos = 0;
  let nomePessoaMaisVelha = "";
  let maiorIdade = -1;

  for (let i = 0; i < respostas.length; i++) {
    const resposta = respostas[i];
    const idade = resposta.idade;
    const nome = resposta.nome;
    const nota = resposta.nota;

    if (nota === 10) {
      quantidadeDeDez++;
    }

    totalIdade += idade;
    totalPessoas++;

    if (nota <= 5) {
      quantidadeDeCincoOuMenos++;
    }

    if (idade > maiorIdade) {
      maiorIdade = idade;
      nomePessoaMaisVelha = nome;
    }
  }

  const mediaIdade = totalIdade / totalPessoas;
  const percentualCincoOuMenos =
    (quantidadeDeCincoOuMenos / totalPessoas) * 100;

  res.status(200).json({
    quantidadeDeDez,
    mediaIdade,
    percentualCincoOuMenos,
    nomePessoaMaisVelha,
  });
});

router.post("/ex22", (req, res) => {
  const produtos = req.body.produtos;

  if (!produtos || produtos.length !== 15) {
    return res.status(400).json({ error: "Insira 15 produtos" });
  }

  let maiorPreco = produtos[0].preco;
  let somaPrecos = produtos[0].preco;

  for (let i = 1; i < produtos.length; i++) {
    const preco = produtos[i].preco;

    if (preco > maiorPreco) {
      maiorPreco = preco;
    }

    somaPrecos += preco;
  }

  const mediaPrecos = somaPrecos / produtos.length;

  res.status(200).json({ maiorPreco, mediaPrecos });
});

module.exports = router;
