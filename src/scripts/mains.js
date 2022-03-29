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

function play(){
    if(typeof DeviceMotionEvent.requestPermission === "function"){
        DeviceMotionEvent.requestPermission()
        .then(permissionState =>{
            if(permissionState === "granted"){
                window.addEventListener("deviceorientation", (event) => {
                    
                    document.getElementById("console").innerText = "";
                    
                    for(let key of Object.keys(event)){
                        document.getElementById("console").innerText += `${key}, `;
                    }
                    //document.getElementById("console").innerText = `${event.alpha} ${event.beta}`;
                });
            }
        })
        .catch((error) => {
            document.getElementById("console").innerText = `errored: ${error}`;
        });
    }else{
        
    }
    console.log("a")
}
