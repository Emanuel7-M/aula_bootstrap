let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;

let snake = [];
snake[0] = {
    x:8 * box,
    y:8 * box
}

let direction = "right";
let food = {
    x: Math.floor(Math.ramdom() * 15 + 1) * box,
    y: Math.floor(Math.ramdom() * 15 + 1) * box,
}
// Passo1: Fundo
function criarBG() {
    ctx.fillStyle = "lightpink"; // cor de fundo
    ctx.fillRect = (0,0,16 * box, 16* box);
}
// Passo2: Criar a cobrinha
function criarCobrinha() {
   for(i = 0 ; i < snake.length ; i++ ){
       context.fillStyle = "pink";
       context.fillRect(snake[i].x, snake[i].y, box, box)
   }
}
// Criar a comida
function drawFood() {
    context.fillStyle = "red";
    context.fillRect(food.x, food.y, box, box); 
}
document.addEventListener("keydown", update);
// Faz a cobrinha não sumir
function update (event) {
    if(event.keyCode == 37 && direction != "right") direction = "left";
    if(event.keyCode == 38 && direction != "down") direction = "up";
    if(event.keyCode == 39 && direction != "left") direction = "right";
    if(event.keyCode == 40 && direction != "up") direction = "down";
}
// Inicia o jogo
    function iniciarJogo() {
        let snakeX = snake[0].x;
        let snakeY = snake[0].y;
         for(i = 1; 1 < snake.length; i++) {
             if(snake[0].x == snake[i].x && snake[0].y == snake[i].y){
                 clearInterval(jogo);
                 alert ('Gamer Over');
             }
         }   

        if(snake[0].x > 15 * box && direction =="right") snake[0].x = 0;
        if(snake[0].x < 0 && direction == "left") snake[0].x = 16 * box;
        if(snake[0].y > 15 * box && direction == "down") snake[0].y = 0;
        if(snake[0].y < 0 && direction == "up") snake[0].y = 16 * box;
       
        drawFood()
    if(direction == "right") snakeX += box;
    if(direction == "left") snakeX -= box;
    if(direction == "up") snakeY -= box;
    if (direction == "down") snakeY += box;
    if(snakeX != food.x || snakeY != food.y);
    {
        
    }
     else {food.x;Math.floor(Math.ramdom() * 15 + 1) * box,;
        food.y ; Math.floor(Math.ramdom() * 15 + 1) * box;

    }
    snake.pop(); 
    let newHead = {
        x:snakeX,
        y:snakeY
    }
    snake.unshift(newHead);
      } 
      let jogo = setInterval(iniciarJogo, 100);