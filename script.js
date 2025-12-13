const listaDiv = document.getElementById("lista");
const titulo = document.getElementById("titulo");
const enunciado = document.getElementById("enunciado");
const mostrarSolBtn = document.getElementById("mostrarSolBtn");
const solucao = document.getElementById("solucao");

let problemas = [];
let atual = null;

fetch("problemas.json")
  .then(res => res.json())
  .then(data => {
    problemas = data;
    renderLista();
  });

function renderLista() {
  listaDiv.innerHTML = "";
  problemas.forEach(p => {
    const btn = document.createElement("button");
    btn.textContent = p.title;
    btn.onclick = () => abrirProblema(p);
    listaDiv.appendChild(btn);
  });
}

function abrirProblema(p) {
  atual = p;
  titulo.textContent = p.title;
  enunciado.textContent = p.statement;
  solucao.textContent = p.solution;
  mostrarSolBtn.style.display = "inline-block";
  solucao.style.display = "none";
}

mostrarSolBtn.onclick = () => {
  solucao.style.display = solucao.style.display === "none" ? "block" : "none";
  renderMathInElement(solucao, { delimiters: [{left:"$", right:"$"}] });
};
