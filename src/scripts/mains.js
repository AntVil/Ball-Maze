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


function handleOrientation(event) {
    document.getElementById("console").innerText = `${event.alpha} ${event.beta} ${event.gamma}`;
}

function play() {
    if (DeviceMotionEvent && typeof DeviceMotionEvent.requestPermission === "function") {
        DeviceMotionEvent.requestPermission();
    }

    window.addEventListener("deviceorientation", handleOrientation);
    
};
