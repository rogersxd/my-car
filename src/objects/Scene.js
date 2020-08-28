class Scene {
    constructor() {
        this.background = new Image();

        this.x = 0;
        this.y = 0;

    }

    draw(context) {
        this.background.src = '../../assets/img/road.jpg';

        this.background.onload = () => {
            context.drawImage(this.background, this.x, this.y);
        }
    }
}

module.exports = Scene