const livros = require("./database");
const readline = require("readline-sync");

const entradaInicial = readline.question("Deseja buscar um livro:? S/N: ");

if (entradaInicial.toLocaleUpperCase() === "S") {
  console.log("Essas são as categorias disponíveis:");
  console.log(
    "Produtividade -",
    "História brasileira -",
    "Américas -",
    "Tecnologia"
  );

  const entradaCategoria = readline.question("Qual categoria você escolhe?: ");

  const retorno = livros.filter(
    (livro) => livro.categoria === entradaCategoria
  );

  if (retorno[0] === undefined) {
    console.log("Categoria Inválida");
  } else {
    console.table(retorno);
  }
} else {
  const livrosOrdenados = livros.sort((a, b) =>
    a.nome > b.nome ? 1 : b.nome > a.nome ? -1 : 0
  );
  console.log("Esses são todos os livros disponíveis:");
  console.table(livrosOrdenados);
}
