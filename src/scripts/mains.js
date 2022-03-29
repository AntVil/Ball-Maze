let game;
let can;
let c;

window.onload = function(){
    orientationHandle();

    if(typeof DeviceMotionEvent.requestPermission === "function"){
        DeviceMotionEvent.requestPermission()
        .then(permissionState =>{
            if(permissionState === "granted"){
                window.addEventListener("devicemotion", (event) => {
                    document.getElementById("console").innerText = `${event.alpha} ${event.beta}`;
                });
            }
        })
        .catch(() => {
            document.getElementById("console").innerText = "errored";
        });
    }else{
        
    }

    can = document.getElementById("canvas");
    c = can.getContext("2d");

    game = new Game();
}

window.onorientationchange = orientationHandle;

function orientationHandle(){
    document.getElementsByTagName("html")[0].style.transform = `rotate(${-window.orientation - 90}deg)`;
}

