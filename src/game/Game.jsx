export class Game {
    constructor() {
        this.canvas = document.getElementById('game');
        this.ctx = this.canvas.getContext('2d');

        this.canvas.width = 300;
        this.canvas.height = 300;

        this.ctx.fillStyle = 'blue';
        this.ctx.fillRect(20, 20, 30, 50);

        this.cat = new Image();
        this.cat.src = './static/cat.jpeg';
        this.cat.onload = () => {
            this.ctx.drawImage(this.cat, 40, 40);
        }
    }
}