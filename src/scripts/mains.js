let game;

window.onload = function(){
    screen.orientation.lock("landscape").catch(() => {});
    
    game = new Game()
}
