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

    boundOutsideEdges(x1, y1, x2, y2){
        let a1 = this.x - this.r;
        let b1 = this.y - this.r;
        let a2 = this.x + this.r;
        let b2 = this.y + this.r;

        if(x1 < this.x && this.x < x2){
            if(y1 < b1 && b1 < y2){
                this.y = y2 + this.r;
                this.ySpeed *= -1;
            }else if(y1 < b2 && b2 < y2){
                this.y = y1 - this.r;
                this.ySpeed *= -1;
            }
        }

        if(y1 < this.y && this.y < y2){
            if(x1 < a1 && a1 < x2){
                this.x = x2 + this.r;
                this.xSpeed *= -1;
            }else if(x1 < a2 && a2 < x2){
                this.x = x1 - this.r;
                this.xSpeed *= -1;
            }
        }
    }

    boundOutsideCorners(x1, y1, x2, y2){
        if(Math.hypot(y1 - this.y, x1 - this.x) < this.r){
            let angle = Math.atan2(y1 - this.y, x1 - this.x);
            this.x = x1 - Math.cos(angle) * this.r;
            this.y = y1 - Math.sin(angle) * this.r;

            let x = this.x - x1;
            let y = this.y - y1;
            let c = -2 * (this.xSpeed * x + this.ySpeed * y) / (x * x + y * y);
            this.xSpeed = this.xSpeed + c * x;
            this.ySpeed = this.ySpeed + c * y;

        }

        if(Math.hypot(y1 - this.y, x2 - this.x) < this.r){
            let angle = Math.atan2(y1 - this.y, x2 - this.x);
            this.x = x2 - Math.cos(angle) * this.r;
            this.y = y1 - Math.sin(angle) * this.r;

            let x = this.x - x2;
            let y = this.y - y1;
            let c = -2 * (this.xSpeed * x + this.ySpeed * y) / (x * x + y * y);
            this.xSpeed = this.xSpeed + c * x;
            this.ySpeed = this.ySpeed + c * y;
        }

        if(Math.hypot(y2 - this.y, x1 - this.x) < this.r){
            let angle = Math.atan2(y2 - this.y, x1 - this.x);
            this.x = x1 - Math.cos(angle) * this.r;
            this.y = y2 - Math.sin(angle) * this.r;

            let x = this.x - x1;
            let y = this.y - y2;
            let c = -2 * (this.xSpeed * x + this.ySpeed * y) / (x * x + y * y);
            this.xSpeed = this.xSpeed + c * x;
            this.ySpeed = this.ySpeed + c * y;
        }

        if(Math.hypot(y2 - this.y, x2 - this.x) < this.r){
            let angle = Math.atan2(y2 - this.y, x2 - this.x);
            this.x = x2 - Math.cos(angle) * this.r;
            this.y = y2 - Math.sin(angle) * this.r;

            let x = this.x - x2;
            let y = this.y - y2;
            let c = -2 * (this.xSpeed * x + this.ySpeed * y) / (x * x + y * y);
            this.xSpeed = this.xSpeed + c * x;
            this.ySpeed = this.ySpeed + c * y;
        }
    }
}
