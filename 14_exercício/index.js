const media = (...numbers) => {
  const soma = numbers.reduce((acumulador, num) => acumulador + num, 0);
  // Para fazer a soma de todos os parâmetros, começando em 0.
  return soma / numbers.length;
};

console.log(`Média Aritmética: ${media(1, 4, 8, 17)}`);

const mediaPonderada = (...entradas) => {
  const soma = entradas.reduce(
    (acumulador, { numero, peso }) => acumulador + numero * peso,
    0
  );
  const somaPesos = entradas.reduce(
    (acumulador, entrada) => acumulador + entrada.peso,
    0
  );
  return soma / somaPesos;
};

console.log(
  `Média Ponderada: ${mediaPonderada(
    { numero: 3, peso: 2 },
    { numero: 8, peso: 2 },
    { numero: 8, peso: 3 },
    { numero: 8, peso: 3 }
  )}`
);

const mediana = (...numeros) => {
  const numerosOrdenados = [...numeros].sort((a, b) => a - b);
  // Para ordenar em ordem crescente
  const meio = Math.floor(numerosOrdenados.length / 2);
  // Para achar o número do meio
  if (numerosOrdenados.length % 2 !== 0) {
    return numerosOrdenados[meio];
  }
  const primeiroNumero = numerosOrdenados[meio - 1];
  const segundoNumero = numerosOrdenados[meio];
  return media(primeiroNumero, segundoNumero);
};

console.log(`Mediana: ${mediana(1, 4, 8, 17, 7)}`);
console.log(`Mediana: ${mediana(3, 6, 9, 17)}`);

const moda = (...numeros) => {
  // [[n , qtd], [n, qtd], [n, qtd]]
  const quatidades = numeros.map((num) => [
    num,
    numeros.filter((n) => num === n).length,
  ]);
  // "map" criar outro array, mas com os números e a quantidade que eles aparecem
  quatidades.sort((a, b) => b[1] - a[1]);
  return quatidades[0][0];
};

console.log(`Moda: ${(1, 1, 4, 4, 4, 8, 17, 17, 17, 4)}`);
