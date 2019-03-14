import {Model} from "../mvc/Model.jsx";
import {data} from "../../Data";

export class TextModel extends Model {
    /** @inheritDoc */
    setDefaultValues() {
        this.text = '';
        this.w = data.FULL_WIDTH / 2;
        this.h = data.FULL_HEIGH / 2;

    }

    /** Sets text. */
    setText(text) {
        this.text = text;
    }
}