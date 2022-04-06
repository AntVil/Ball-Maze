const UPDATE_RATE_PER_SECOND = 120;
const GAME_RESOLUTION = 100;
const MAP_WIDTH = 16;
const MAP_HEIGHT = 9;
const CANVAS_WIDTH = MAP_WIDTH * GAME_RESOLUTION;
const CANVAS_HEIGHT = MAP_HEIGHT * GAME_RESOLUTION;
const BALL_CONSTANT_FRICTION = 0.8;
const BALL_COLLISON_FRICTION = 0.95;
const BLOCK_WIDTH = 0.15;
const WALL_SIZE = 1;
const WALL_CHANCE = 0.8;
const WOOD_TEXTURE_WIDTH = 6779;
const WOOD_TEXTURE_HEIGHT = 4466;
const WOOD_TEXTURE = new Image(WOOD_TEXTURE_WIDTH, WOOD_TEXTURE_HEIGHT);
WOOD_TEXTURE.src = "./images/wood.jpg";
const SHADOW_STRENGTH = 3;
const BALL_TEXTURE = new Image();
BALL_TEXTURE.src = "./images/ball.png";

let game;

window.onload = function(){
    orientationHandle();

    game = new Game();

    setInterval(updateLoop, 1000 / UPDATE_RATE_PER_SECOND);
    requestAnimationFrame(renderLoop);
}

window.onorientationchange = orientationHandle;

function orientationHandle(){
    document.getElementsByTagName("html")[0].style.transform = `rotate(${-window.orientation - 90}deg)`;
}

function updateLoop(){
    game.update();
}

function renderLoop(){
    game.render();
    requestAnimationFrame(renderLoop);
}
