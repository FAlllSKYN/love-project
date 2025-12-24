let telaAtual = 0;
const telas = document.querySelectorAll(".tela");
const polaroids = document.querySelectorAll(".polaroid");

function mostrarTela(indice) {
  if (indice < 0 || indice >= telas.length) return;

  telas[telaAtual].classList.remove("ativa");
  telaAtual = indice;
  telas[telaAtual].classList.add("ativa");

  atualizarPolaroids();
}

function proximaTela() {
  mostrarTela(telaAtual + 1);
}

function irParaTela(indice) {
  mostrarTela(indice);
}

function atualizarPolaroids() {
  polaroids.forEach((polaroid, index) => {
    if (index < telaAtual) {
      polaroid.classList.add("visivel");
    } else {
      polaroid.classList.remove("visivel");
    }
  });
}
