let game;
let can;
let c;

window.onload = function(){
    orientationHandle();

    can = document.getElementById("canvas");
    c = can.getContext("2d");

    game = new Game();
}

window.onorientationchange = orientationHandle;

function orientationHandle(){
    document.getElementsByTagName("html")[0].style.transform = `rotate(${-window.orientation - 90}deg)`;
}

window.addEventListener("deviceorientation", function(event) {
    let xAngle = event.beta;
    let yAngle = event.gamma;

    c.strokeStyle = "#00FF00";
    
    c.beginPath();
    c.moveTo(can.width/2, can.height/2);
    c.lineTo(can.width/2 + 10*Math.cos(xAngle), can.height/2 + 10*Math.sin(xAngle));
    c.stroke();

    c.strokeStyle = "#FF0000";

    c.beginPath();
    c.moveTo(can.width/2, can.height/2);
    c.lineTo(can.width/2 + 10*Math.cos(yAngle), can.height/2 + 10*Math.sin(yAngle));
    c.stroke();

    console.log(rotateDegrees, leftToRight, frontToBack)
}, true);
