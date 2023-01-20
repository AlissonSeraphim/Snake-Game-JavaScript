window.onload = function() {
  canvas = document.getElementById('canvas');
  ctx = canvas.getContext('2d');

  //variáveis
  snake = [];
  positionX = 10;
  positionY = 10;
  foodX = 15;
  foodY = 15;
  velX = 0;
  velY = 0;
  grid = 20;
  tam = 3;

  //  Chamada da função jogo a cada 100 milisegundos
  setInterval(jogo, 100)

  // Controles
  document.addEventListener('keydown', function(e){
    switch(e.key) {
      // Seta direita = 39
      case 'ArrowRight':
        velX = 1;
        velY = 0;
        break;
      // Seta esquerda = 37
      case 'ArrowLeft':
        velX = -1;
        velY = 0;
        break;
      // Seta cima = 38 (regra do eixo Y ao contrario da algebra para cima = - / para baixo = +)
      case 'ArrowUp':
        velX = 0;
        velY = -1;
        break;
      // Seta baixo = 40
      case 'ArrowDown':
        velX = 0;
        velY = 1;
        break;
    }

  })
}

function jogo () {
  //  Configuração da tela
  ctx.fillStyle = '#2980B9';
  
  //  Distância borda h, distancia borda v, largura, altura
  ctx.fillRect(0,0, canvas.width, canvas.height);
  
  // Deslocamento da cobra
  positionX += velX;
  positionY += velY;

  // Posicionando a cobra
  snake.push({x: positionX, y: positionY});

  // Configuração da cobra
  ctx.fillStyle = '#00f102';
  for (let index=0; index < snake.length; index +=1) {
    ctx.fillRect(snake[index].x*grid, snake[index].y*grid, grid-1, grid-1);
  }
}