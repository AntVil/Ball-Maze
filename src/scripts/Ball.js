class Ball{
    constructor(x, y, r){
        this.x = x;
        this.y = y;
        this.r = r;
        this.xSpeed = 0;
        this.ySpeed = 0;
    }

    render(ctxt){
        ctxt.fillStyle = "#0000FF";
        ctxt.beginPath();
        ctxt.arc(
            this.x * GAME_RESOLUTION,
            this.y * GAME_RESOLUTION,
            this.r * GAME_RESOLUTION,
            0,
            2*Math.PI
        );
        ctxt.fill();
    }

    applyForce(xForce, yForce){
        this.xSpeed += xForce;
        this.ySpeed += yForce;
    }

    applyFriction(friction){
        this.xSpeed *= friction;
        this.ySpeed *= friction;
    }

    updatePosition(){
        this.x += this.xSpeed;
        this.y += this.ySpeed;
    }

    boundInside(x1, y1, x2, y2){
        if(this.x - this.r < x1){
            this.x = x1 + this.r;
            this.xSpeed *= -1;
        }

        if(this.y - this.r < y1){
            this.y = y1 + this.r;
            this.ySpeed *= -1;
        }

        if(this.x + this.r > x2){
            this.x = x2 - this.r;
            this.xSpeed *= -1;
        }

        if(this.y + this.r > y2){
            this.y = y2 - this.r;
            this.ySpeed *= -1;
        }
    }
}