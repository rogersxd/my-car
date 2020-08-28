class Car {
    constructor(canvas) {
        this.car = new Image();

        this.speed = 5;

        this.canvas = canvas;

        this.x = canvas.width / 3.5;
        this.y = canvas.height / 1.7;
    }

    draw(context) {
        this.car.src = '../../assets/img/car.png';

        this.car.onload = () => {
            context.drawImage(this.car, this.x, this.y, 100, 100 * this.car.height / this.car.width);
        }
    }

    listener() {
        document.addEventListener("keydown", this.controls.bind(this), false);
    }

    controls(event) {
        
        switch (event.key) {
            case "Left":
            case "ArrowLeft":
                if (this.x <= 30) {
                    return;
                }
                this.x -= this.speed;
                break;
            case "Right":
            case "ArrowRight":
                if (this.x >= (this.canvas.width - 130)) {
                    return;
                }
                this.x += this.speed;
                break;
            default:
                return; 
        }

        event.preventDefault();
    }
}

module.exports = Car