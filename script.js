const lista = document.getElementById("lista");
const titulo = document.getElementById("titulo");
const enunciado = document.getElementById("enunciado");
const solucaoEl = document.getElementById("solucao");
const solucaoBtn = document.getElementById("solucaoBtn");

let problemas = [];
let atual = null;

// Carregar problemas do JSON
fetch("problemas.json")
  .then(res => res.json())
  .then(data => {
    problemas = data;
    renderLista();
  })
  .catch(err => console.error("Erro ao carregar problemas.json:", err));

function renderLista() {
  lista.innerHTML = "";
  problemas.forEach(p => {
    const btn = document.createElement("button");
    btn.textContent = p.id;
    btn.onclick = () => abrirProblema(p);
    lista.appendChild(btn);
  });
}

function abrirProblema(p) {
  atual = p;
  titulo.textContent = p.id;
  enunciado.innerHTML = p.enunciado;
  solucaoEl.style.display = "none";
  solucaoBtn.style.display = "inline-block";
}

// Mostrar solução
solucaoBtn.onclick = () => {
  if (atual) {
    solucaoEl.innerHTML = atual.solucao;
    solucaoEl.style.display = "block";
  }
};
