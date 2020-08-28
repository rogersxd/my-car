const Scene = require("./Scene");
const Car = require("./Car");
const PoliceCar = require("./PoliceCar");

class GameService {
    constructor() {
        this.speed = 50;
        this.delta = 1;

        this.score = 0;

        this.canvas = document.getElementById('scene');
        this.context = this.canvas.getContext('2d');

        this.car = new Car(this.canvas);
        this.policeCarLeft = new PoliceCar(this.canvas, 'police-car.png');
        this.policeCarRight = new PoliceCar(this.canvas, 'police-car-right.png');

        this.policeCarLeft.y = -300;
        this.policeCarRight.y = -1200;

        this.scene = new Scene();
    }

    init() {
        console.log('INIT GAME...')

        this.update();

        this.car.listener();
    }

    update() {
        if (this.policeCarLeft.y < (this.car.y + 100)) {
            if (this.policeCarLeft.y >= this.car.y && (this.policeCarLeft.x + 222) >= this.car.x) {
                return;
            }
        }
        if (this.policeCarRight.y < (this.car.y + 100)) {
            if (this.policeCarRight.y >= this.car.y && this.car.x >= (this.policeCarRight.x - 51)) {
                return;
            }
        }

        this.scene.y = this.delta * this.speed % this.scene.background.width;

        this.context.save();
        this.context.translate(0, this.scene.y);

        this.scene.draw(this.context);
        this.car.draw(this.context);

        if (this.policeCarLeft.y > this.canvas.height) {
            this.policeCarLeft.y = -300;
        }

        if (this.policeCarRight.y > this.canvas.height) {
            this.policeCarRight.y = -1200;
        }

        setTimeout(() => {
            this.policeCarLeft.x = -100;
            this.policeCarLeft.draw(this.context, 250);

            this.policeCarRight.x = 180;
            this.policeCarRight.draw(this.context, 350);
        }, 5000);
     
        this.policeCarLeft.y += this.score * 0.001;
        this.policeCarRight.y += this.score * 0.001;

        this.context.restore();

        this.delta++;

        this.score = this.delta;

        document.getElementById('score').innerText = this.score;

        requestAnimationFrame(() => this.update());
    }
}

module.exports = GameService