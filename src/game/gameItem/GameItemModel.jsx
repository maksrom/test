export class GameItemModel {
    constructor() {
        this.type = '';
        this.position = {x: 0, y: 0};
    }

    setType(type) {
        this.type = type;
    }

    setRandomColor() {
        const color = Math.floor(Math.random() * 1000000);
        this.type = `#${color}`;
    }

    moveUp() {
        this.position.y -= 1;
    }

    moveDown() {
        this.position.y += 1;
    }
}