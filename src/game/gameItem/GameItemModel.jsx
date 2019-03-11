import {Model} from "../mvc/Model.jsx";

export class GameItemModel extends Model {
    setDefaultValues() {
        this.type = '';
        this.position = {x: 0, y: this.HEIGH/2};
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

    isWin() {
        return this.position.y < 0 || this.position.y > this.HEIGH;
    }
}