class PoliceCar {
    constructor(canvas, image) {
        this.car = new Image();

        this.speed = 5;

        this.canvas = canvas;

        this.x = -1000;
        this.y = -300;

        this.imageCar = image;
    }

    draw(context, size) {
        this.car.src = `../../assets/img/${this.imageCar}`;

        this.car.onload = () => {
            context.drawImage(this.car, this.x, this.y, size, size * this.car.height / this.car.width);
        }
    }
}

module.exports = PoliceCar