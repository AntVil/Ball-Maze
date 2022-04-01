class Game{
    constructor(){
        this.screenHandler = new ScreenHandler();
        this.inputHandler = new InputHandler();
        this.map = new GameMap();
        
        this.ball = new Ball(
            MAP_WIDTH / 2,
            MAP_HEIGHT / 2,
            MAP_WIDTH / 64,
        );

        this.blocks = [];
        for(let i=0;i<100;i++){
            this.blocks.push(new Block(
                Math.floor(Math.random() * MAP_WIDTH) - 0.5,
                Math.floor(Math.random() * MAP_HEIGHT) - 0.5,
                1,
                1
            ));
        }

        let canvas = document.getElementById("canvas");
        canvas.width = CANVAS_WIDTH;
        canvas.height = CANVAS_HEIGHT;
        this.ctxt = canvas.getContext("2d");

        this.running = false;
    }

    render(){
        this.ctxt.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

        this.ball.render(this.ctxt);

        for(let block of this.blocks){
            block.render(this.ctxt);
        }
    }

    update(){
        if(!this.screenHandler.isPaused()){
            let [xForce, yForce] = this.inputHandler.getForce();
            this.ball.applyForce(xForce, yForce);
            this.ball.updatePosition();
            
            this.ball.boundInside(0, 0, MAP_WIDTH, MAP_HEIGHT);
            
            for(let block of this.blocks){
                let [x1, y1, x2, y2] = block.getBounds();
                this.ball.boundOutsideEdges(x1, y1, x2, y2);
            }
            
            for(let block of this.blocks){
                let [x1, y1, x2, y2] = block.getBounds();
                this.ball.boundOutsideCorners(x1, y1, x2, y2);
            }
        }
    }

    play(){
        this.inputHandler.start();
        this.blocks = this.map.generateMap();
    }

    quit(){
        
    }
}
