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

  // Espelhamento
  //   Horizontal
  if(positionX < 0) {
    positionX = grid-1;
  }
  if(positionX >= 20) {
    positionX = 0;
  }
    //Vertical
  if(positionY < 0) {
    positionY = grid-1;
  }

  if (positionY >= grid) {
    positionY = 0;
  }
  
  //Console para arrumar bug da posição 20
    //console.log(positionX, positionY);

  // Configuração da cobra
  ctx.fillStyle = '#00f102';
  for (let index=0; index < snake.length; index ++) {
    ctx.fillRect(snake[index].x*grid, snake[index].y*grid, grid-1, grid-1);
    //colisão da cobra com si mesma
    if (snake[index].x == positionX && snake[index].y == positionY) {
      tam = 3;
    }
  }
  
  // Posicionando a cobra ****** IMPORTANTE/MOVIMENTAÇÃO DA COBRA
  snake.push({x: positionX, y: positionY});
  
  // Apagando posição antiga da cobra/sensação de movimento
  while(snake.length > tam) {
    snake.shift();
  }

  // Configurando a comida
  ctx.fillStyle = "#F1C40F";
  ctx.fillRect(foodX*grid, foodY*grid, grid-1, grid-1);

  // Comendo a comida
  if (positionX == foodX && positionY == foodY) {
    tam++;
    foodX = Math.floor(Math.random()*grid);
    foodY = Math.floor(Math.random()*grid);
  }
}
//Concluido

