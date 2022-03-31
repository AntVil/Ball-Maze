class Game{
    constructor(){
        this.xBound = CANVAS_WIDTH / GAME_RESOLUTION;
        this.yBound = CANVAS_HEIGHT / GAME_RESOLUTION;
        this.screenHandler = new ScreenHandler();
        this.inputHandler = new InputHandler();
        
        this.ball = new Ball(
            this.xBound / 2,
            this.yBound / 2,
            (this.xBound * this.yBound) / (9 * 16 * 2),
        );

        let canvas = document.getElementById("canvas");
        canvas.width = CANVAS_WIDTH;
        canvas.height = CANVAS_HEIGHT;
        this.ctxt = canvas.getContext("2d");

        this.running = false;
    }

    render(){
        this.ctxt.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

        this.ball.render(this.ctxt);
    }

    update(){
        if(!this.screenHandler.isPaused()){
            let [xForce, yForce] = this.inputHandler.getForce();
            this.ball.applyForce(xForce, yForce);
            this.ball.applyFriction(BALL_FRICTION);
            this.ball.updatePosition();
            this.ball.boundInside(0, 0, this.xBound, this.yBound);
        }
    }

    play(){
        this.inputHandler.start();
    }

    quit(){
        
    }
}
