const UPDATE_RATE_PER_SECOND = 60;
const GAME_RESOLUTION = 100;

let game;
let can;
let c;

window.onload = function(){
    orientationHandle();

    can = document.getElementById("canvas");
    c = can.getContext("2d");

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
