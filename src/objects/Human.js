class Human {
    constructor(canvas, image) {
        this.human = new Image();

        this.speed = 5;

        this.canvas = canvas;

        this.x = -1000;
        this.y = -300;

        this.imageHuman = image;
    }

    draw(context, size) {
        this.human.src = `../../assets/img/${this.imageHuman}`;

        this.human.onload = () => {
            context.drawImage(this.human, this.x, this.y, size, size * this.human.height / this.human.width);
        }
    }
}

module.exports = Human