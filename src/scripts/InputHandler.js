class InputHandler{
    constructor(){
        this.xOrientation = 0;
        this.yOrientation = 0;
        this.orientationSensitivity = document.getElementById("orientationSensitivity");
    }

    start(){
        if (DeviceMotionEvent && typeof DeviceMotionEvent.requestPermission === "function") {
            DeviceMotionEvent.requestPermission();
        }
    
        window.addEventListener("deviceorientation", event => {
            this.xOrientation = -event.beta / 90;
            this.yOrientation = event.gamma / 90;
        });
    }

    getForce(){
        let sensitivity = parseFloat(this.orientationSensitivity.value);
        return [
            this.xOrientation * sensitivity,
            this.yOrientation * sensitivity
        ];
    }
}
