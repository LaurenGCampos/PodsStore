const produtos = [
  { 
    id: 1, 
    nome: "Pod Black Sheep 30K", 
    preco: 139.90, 
    img: "img/BlackSheep.jpg",
    pagamento: "https://https://go.ironpayapp.com.br/rq0gtlifbf?_gl=1*1ff2deb*_gcl_au*MTgxNzI0ODkyLjE3Njk2MjMwODcuNzk2NDA4NzUwLjE3NzA5NDM1NDkuMTc3MDk0MzU2Mw.com"
  },
  { 
    id: 2, 
    nome: "Oxbar Magic 30K", 
    preco: 159.90, 
    img: "img/oxbar.png",
    pagamento: "https://go.ironpayapp.com.br/rq0gtlifbf?_gl=1*1ff2deb*_gcl_au*MTgxNzI0ODkyLjE3Njk2MjMwODcuNzk2NDA4NzUwLjE3NzA5NDM1NDkuMTc3MDk0MzU2Mw"
  },
  { 
    id: 3, 
    nome: "Airmez", 
    preco: 149.90, 
    img: "img/Airmez.png",
    pagamento: "https://go.ironpayapp.com.br/rq0gtlifbf?_gl=1*1ff2deb*_gcl_au*MTgxNzI0ODkyLjE3Njk2MjMwODcuNzk2NDA4NzUwLjE3NzA5NDM1NDkuMTc3MDk0MzU2Mw"
  },
  { 
    id: 4, 
    nome: "Elfbar 40K", 
    preco: 179.90, 
    img: "img/Elfbar40k.png",
    pagamento: "https://https://go.ironpayapp.com.br/rq0gtlifbf?_gl=1*1ff2deb*_gcl_au*MTgxNzI0ODkyLjE3Njk2MjMwODcuNzk2NDA4NzUwLjE3NzA5NDM1NDkuMTc3MDk0MzU2Mw"
  },
  { 
    id: 5, 
    nome: "Ignite V250", 
    preco: 169.90, 
    img: "img/Ignitev250.png",
    pagamento: "https://go.ironpayapp.com.br/rq0gtlifbf?_gl=1*1ff2deb*_gcl_au*MTgxNzI0ODkyLjE3Njk2MjMwODcuNzk2NDA4NzUwLjE3NzA5NDM1NDkuMTc3MDk0MzU2Mw"
  },
  { 
    id: 6, 
    nome: "Life Pod", 
    preco: 129.90, 
    img: "img/LifePod.png",
    pagamento: "https://go.ironpayapp.com.br/rq0gtlifbf?_gl=1*1ff2deb*_gcl_au*MTgxNzI0ODkyLjE3Njk2MjMwODcuNzk2NDA4NzUwLjE3NzA5NDM1NDkuMTc3MDk0MzU2Mw"
  },
  { 
    id: 7, 
    nome: "Puff Makers", 
    preco: 149.90, 
    img: "img/PUFFMAKERS.png",
    pagamento: "https://go.ironpayapp.com.br/rq0gtlifbf?_gl=1*1ff2deb*_gcl_au*MTgxNzI0ODkyLjE3Njk2MjMwODcuNzk2NDA4NzUwLjE3NzA5NDM1NDkuMTc3MDk0MzU2Mw"
  },
  { 
    id: 8, 
    nome: "Pyne Pod", 
    preco: 159.90, 
    img: "img/PynePod.png",
    pagamento: "https://seulink8.https://go.ironpayapp.com.br/rq0gtlifbf?_gl=1*1ff2deb*_gcl_au*MTgxNzI0ODkyLjE3Njk2MjMwODcuNzk2NDA4NzUwLjE3NzA5NDM1NDkuMTc3MDk0MzU2Mw"
  },
  { 
    id: 9, 
    nome: "Sex Addict", 
    preco: 139.90, 
    img: "img/SexAddict.png",
    pagamento: "https://go.ironpayapp.com.br/rq0gtlifbf?_gl=1*1ff2deb*_gcl_au*MTgxNzI0ODkyLjE3Njk2MjMwODcuNzk2NDA4NzUwLjE3NzA5NDM1NDkuMTc3MDk0MzU2Mw"
  },
  { 
    id: 10, 
    nome: "Waka", 
    preco: 169.90, 
    img: "img/Waka.png",
    pagamento: "https://go.ironpayapp.com.br/rq0gtlifbf?_gl=1*1ff2deb*_gcl_au*MTgxNzI0ODkyLjE3Njk2MjMwODcuNzk2NDA4NzUwLjE3NzA5NDM1NDkuMTc3MDk0MzU2Mw"
  }
];

let carrinho = [];

function carregarProdutos() {
  const lista = document.getElementById("listaProdutos");
  lista.innerHTML = "";

  produtos.forEach(p => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${p.img}" alt="${p.nome}">
      <h4>${p.nome}</h4>
      <p class="preco">R$ ${p.preco.toFixed(2)}</p>

      <button class="btn-add">Adicionar</button>

      <button class="btn-comprar">
        Comprar Agora
      </button>
    `;

    card.querySelector(".btn-add").onclick = () => adicionar(p.id);

    card.querySelector(".btn-comprar").onclick = () => {
      window.open(p.pagamento, "_blank");
    };

    lista.appendChild(card);
  });
}

function adicionar(id) {
  const produto = produtos.find(p => p.id === id);
  if (!produto) return;

  carrinho.push(produto);
  document.getElementById("contador").innerText = carrinho.length;
  atualizarTotal();
}

function atualizarTotal() {
  const total = carrinho.reduce((s, p) => s + p.preco, 0);
  document.getElementById("total").innerText = total.toFixed(2);
}

function abrirCarrinho() {
  document.getElementById("modalCarrinho").style.display = "block";
}

function fecharCarrinho() {
  document.getElementById("modalCarrinho").style.display = "none";
}

function finalizarCompra() {
  if (carrinho.length === 0) {
    alert("Seu carrinho está vazio!");
    return;
  }

  // Link geral do carrinho (caso queira manter)
  window.location.href = "https://go.ironpayapp.com.br/rq0gtlifbf";
}

carregarProdutos();
