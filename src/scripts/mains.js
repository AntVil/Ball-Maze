let game;

window.onload = function(){
    orientationHandle();

    game = new Game();
}

window.onorientationchange = orientationHandle;

function orientationHandle(){
    document.getElementsByTagName("html")[0].style.transform = `rotate(${window.orientation - 90}deg)`
}

window.addEventListener("deviceorientation", function(event) {
    // alpha: rotation around z-axis
    var rotateDegrees = event.alpha;
    // gamma: left to right
    var leftToRight = event.gamma;
    // beta: front back motion
    var frontToBack = event.beta;

    console.log(rotateDegrees, leftToRight, frontToBack)
}, true);


