let fotos = []
let indiceAtual = 0

function mostrarFoto() {
  if (fotos.length === 0) return;
  const foto = fotos[indiceAtual]
  document.getElementById("foto").src = foto.img
  document.getElementById("descricao").textContent = foto.legenda
  document.getElementById("data").textContent = foto.data
}

function avancar() {
  if (indiceAtual < fotos.length - 1) {
    indiceAtual++
    mostrarFoto()
  }
}

function voltar() {
  if (indiceAtual > 0) {
    indiceAtual--
    mostrarFoto()
  }
}

fetch("http://localhost:3000/Fotos")
  .then(res => res.json())
  .then(data => {
    fotos = data
    mostrarFoto()
  })
  .catch(error => {
    document.getElementById("descricao").textContent = "Erro ao carregar imagens.";
    console.error("Erro na API:", error)
  });


document.getElementById("button1").addEventListener("click", () => {
  indiceAtual = 0
  mostrarFoto()
})

document.getElementById("button2").addEventListener("click", () => {
  indiceAtual = 1
  mostrarFoto()
})
document.getElementById("button3").addEventListener("click", () => {
  indiceAtual = 2
  mostrarFoto()
})

document.getElementById("button4").addEventListener("click", () => {
  indiceAtual = 3
  mostrarFoto()
})
