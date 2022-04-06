class Block{
    constructor(x, y, width, height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    renderShadow(ctxt, stepX, stepY){
        let x1 = (this.x - this.width / 2) * GAME_RESOLUTION;
        let x2 = x1 + this.width * GAME_RESOLUTION;
        let y1 = (this.y - this.height / 2) * GAME_RESOLUTION;
        let y2 = y1 + this.height * GAME_RESOLUTION;
        
        let corners = [];
        if(stepX < 0){
            if(stepY < 0){
                corners = [
                    [x1 + stepX, y1 + stepY],
                    [x2 + stepX, y1 + stepY],
                    [x2, y1],
                    [x2, y2],
                    [x1, y2],
                    [x1 + stepX, y2 + stepY],
                ];
            }else{
                corners = [
                    [x1, y1],
                    [x2, y1],
                    [x2, y2],
                    [x2 + stepX, y2 + stepY],
                    [x1 + stepX, y2 + stepY],
                    [x1 + stepX, y1 + stepY],
                ];
            }
        }else{
            if(stepY < 0){
                corners = [
                    [x1, y1],
                    [x1 + stepX, y1 + stepY],
                    [x2 + stepX, y1 + stepY],
                    [x2 + stepX, y2 + stepY],
                    [x2, y2],
                    [x1, y2],
                ];
            }else{
                corners = [
                    [x1, y1],
                    [x2, y1],
                    [x2 + stepX, y1 + stepY],
                    [x2 + stepX, y2 + stepY],
                    [x1 + stepX, y2 + stepY],
                    [x1, y2],
                ];
            }
        }
        
        ctxt.beginPath();
        ctxt.moveTo(corners[0][0], corners[0][1]);
        for(let corner of corners){
            ctxt.lineTo(corner[0], corner[1]);
        }
        ctxt.fill();

    }

    render(ctxt){
        ctxt.drawImage(
            WOOD_TEXTURE,

            (this.x - this.width / 2) / MAP_WIDTH * WOOD_TEXTURE_WIDTH,
            (this.y - this.height / 2) / MAP_HEIGHT * WOOD_TEXTURE_HEIGHT,
            this.width / MAP_WIDTH * WOOD_TEXTURE_WIDTH,
            this.height / MAP_HEIGHT * WOOD_TEXTURE_HEIGHT,

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