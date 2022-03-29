let game;

window.onload = function(){
    game = new Game();
}

window.onorientationchange  = function(){
    document.getElementsByTagName("html")[0].style.transform = `rotate(${window.orientation + 90}deg)`;
}
