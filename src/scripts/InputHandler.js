class InputHandler{
    constructor(){
        this.xAngle = 0;
        this.yAngle = 0;
    }

    start(){
        if (DeviceMotionEvent && typeof DeviceMotionEvent.requestPermission === "function") {
            DeviceMotionEvent.requestPermission();
        }
    
        window.addEventListener("deviceorientation", event => {
            this.xAngle = -event.beta;
            this.yAngle = event.gamma;
        });
    }
}
