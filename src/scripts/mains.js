const UPDATE_RATE_PER_SECOND = 60;
const GAME_RESOLUTION = 100;
const MAP_WIDTH = 16;
const MAP_HEIGHT = 9;
const CANVAS_WIDTH = MAP_WIDTH * GAME_RESOLUTION;
const CANVAS_HEIGHT = MAP_HEIGHT * GAME_RESOLUTION;
const BALL_FRICTION = 0.99;

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
