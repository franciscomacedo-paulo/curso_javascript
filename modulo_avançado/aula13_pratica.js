const produtos = [
    { nome: "Notebook Dell", preco: 4200, desconto: 10, categoria: "eletronicos" },
    { nome: "Smartphone Samsung", preco: 2500, desconto: 12, categoria: "eletronicos" },
    { nome: "Smart TV 50", preco: 3200, desconto: 15, categoria: "eletronicos" },
    { nome: "Fone de Ouvido Bluetooth", preco: 350, desconto: 8, categoria: "eletronicos" },
    { nome: "Mouse Gamer", preco: 180, desconto: 5, categoria: "eletronicos" },
  
    { nome: "Camiseta Básica", preco: 70, desconto: 20, categoria: "roupas" },
    { nome: "Calça Jeans", preco: 150, desconto: 10, categoria: "roupas" },
    { nome: "Jaqueta de Couro", preco: 450, desconto: 18, categoria: "roupas" },
    { nome: "Tênis Esportivo", preco: 320, desconto: 7, categoria: "calcados" },
    { nome: "Sandália", preco: 120, desconto: 10, categoria: "calcados" },
  
    { nome: "Livro JavaScript Avançado", preco: 120, desconto: 25, categoria: "livros" },
    { nome: "Livro Clean Code", preco: 140, desconto: 15, categoria: "livros" },
    { nome: "Cadeira Gamer", preco: 980, desconto: 12, categoria: "moveis" },
    { nome: "Mesa para Computador", preco: 650, desconto: 10, categoria: "moveis" },
    { nome: "Luminária de Mesa", preco: 90, desconto: 5, categoria: "casa" }
  ];

  const user_data = document.getElementById('produto')
  const btn_pesquisar = document.querySelector('button')
  const mostrar_resultado = document.getElementsByClassName('result_display')


  