// Armazenei no "const mario" a classe mario.
// O querrySelector pegar o elemento, e nesse caso
// pegando uma classe definindo um ponto (.)
const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
const gameover = document.querySelector(".nuvens");

// Estou adicionando meio que uma função nessa constante
// Ela tem a função de adicionar o "jump" na imagem mário
// Ela quem move o mário
const jump = () => {
  mario.classList.add("jump");

  // Função anônima
  setTimeout(() => {
    // Quando a animação terminar, a classe será removida
    // Da imagem do mario
    mario.classList.remove("jump");
    // 800: são 800m/s de tempo para remover a classe
  }, 800);
};

// Loop para verificar se perdeu ou não
const loop = setInterval(() => {
  const pipePosition = pipe.offsetLeft; // Ele acessa o deslocamento esquerdo
  const marioPosition = +window
    .getComputedStyle(mario)
    .bottom.replace("px", ""); // "getComputedStyle" pego o estilo que foi computado no elemento, assim acessando quaquer propriedade css
  // "Replace" subitstitui o primeiro valor para o próximo
  // Exemplo: replace('px', '111') pega o "px" e muda para o 111.
  // O "+" vai converter os valores Strings para números

  // Se a posição do tubo for menor que 120 ele para
  if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 200) {
    // Cacela a animação
    pipe.style.animation = "none";
    pipe.style.left = `${pipePosition}px`;

    // Paralizando o elemento Mario quando perder
    mario.style.animation = "none";
    mario.style.bottom = `${marioPosition}px`;

    // Subistituindo a imagem do Mario após perder
    mario.src = "./img/mario-jump-images/game-over.png";
    mario.style.width = "75px";
    mario.style.left = "50px";

    // Paralizando o elemento Nuvem
    gameover.style.animation = "none";
    gameover.src = "./img/mario-jump-images/game-over-1.png";
    gameover.style.width = "30%";
    gameover.style.left = "30%";
  }
}, 10); // 10 é o tempo = 10mlsegundos

// Ele irá pegar os eventos do teclado e definir
// Qual tecla pegar, logo após o que irá executar
document.addEventListener("click", jump);
