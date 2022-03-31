class Block{
    constructor(x, y, width, height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    render(ctxt){
        ctxt.fillRect(
            (this.x - this.width / 2) * GAME_RESOLUTION,
            (this.y - this.height / 2) * GAME_RESOLUTION,
            this.width * GAME_RESOLUTION,
            this.height * GAME_RESOLUTION
        );
    }

    getBounds(){
        return [
            this.x - this.width / 2,
            this.y - this.height / 2,
            this.x + this.width / 2,
            this.y + this.height / 2
        ]
    }
}