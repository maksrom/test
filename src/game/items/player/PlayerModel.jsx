import {Model} from "../mvc/Model.jsx";
import {data} from "../../Data";

export class PlayerModel extends Model {
    /** @inheritDoc */
    setDefaultValues() {
        this.position = {x: 0, y: this.HEIGH/2};
        this.width = this.height = 10;

        this.fired = false;
        this.firePos = [data.fireEl.x, data.fireEl.y];
    }

    /** Sets player type. */
    setType(type) {
        this.type = type;
    }

    /** Move up. */
    moveUp() {
        this.position.y -= 1;
    }

    /** Move down. */
    moveDown() {
        this.position.y += 1;
    }

    fire() {
        this.fired = true;
        data.fireEl.x = this.position.x;
        data.fireEl.y = this.position.y;
        this.firePos = [this.position.x, this.position.y];
    }

    runFire() {
        data.update();
        this.firePos[0] = data.fireEl.x;
    }

    stopFire() {
        this.setDefaultValues();
    }
}