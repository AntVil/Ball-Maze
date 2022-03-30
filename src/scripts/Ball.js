class Ball{
    constructor(){
        this.x = 0;
        this.y = 0;
        this.xSpeed = 0;
        this.ySpeed = 0;
    }

    render(ctxt){
        ctxt.strokeStyle = "#0000FF";
        ctxt.beginPath();
        ctxt.arc(this.x, this.y, 5, 0, 2*Math.PI);
        ctxt.stroke();
    }

    applyForce(xForce, yForce){
        this.xSpeed += xForce;
        this.ySpeed += yForce;
    }

    update(){
        this.x += this.xSpeed;
        this.y += this.ySpeed;
    }
}