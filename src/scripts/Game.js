class Game{
    constructor(){
        this.screenHandler = new ScreenHandler();
        this.inputHandler = new InputHandler();
        this.ball = new Ball();
        let canvas = document.getElementById("canvas");
        canvas.width = CANVAS_WIDTH;
        canvas.height = CANVAS_HEIGHT;
        this.ctxt = canvas.getContext("2d");

        this.ctxt.strokeStyle = "#FF0000";
        this.ctxt.beginPath();
        this.ctxt.moveTo(0, 0);
        this.ctxt.lineTo(30, 30);
        this.ctxt.stroke();
    }

    render(){
        this.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
        this.ball.render(this.ctxt);
    }

    update(){
        let xForce = 0.01 * this.inputHandler.xAngle;
        let yForce = 0.01 * this.inputHandler.yAngle;
        this.ball.applyForce(xForce, yForce);

        this.ball.update();
    }

    play(){
        this.inputHandler.start();
    }

    quit(){
        
    }
}
