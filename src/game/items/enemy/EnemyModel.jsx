import {Model} from "../mvc/Model.jsx";
import {data} from "../../Data";

export class EnemyModel extends Model {
    /** @inheritDoc */
    setDefaultValues() {
        this.position = {x: data.enemyEl.x, y: data.enemyEl.y};
        this.width = data.enemyEl.w;
        this.height = data.enemyEl.h;
        this.win = false;
    }

    /** Sets player type. */
    setType(type) {
        this.type = type;
    }

    /** Sets win state. */
    setWin() {
        this.win = true;
    }
}