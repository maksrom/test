import {Model} from "../mvc/Model.jsx";
import {data} from "../../Data";

export class EnemyModel extends Model {
    /** @inheritDoc */
    setDefaultValues() {
        this.type = '';
        this.position = {x: data.enemyEl.x, y: data.enemyEl.y};
        this.width = data.enemyEl.w;
        this.height = data.enemyEl.h;
    }

    /** Sets player type. */
    setType(type) {
        this.type = type;
    }
}