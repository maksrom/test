import {Model} from "../mvc/Model.jsx";
import {stateMachine} from "../StateMachine.jsx";

export class BgModel extends Model {
    setDefaultValues() {
        this.text = '';
    }

    setWinText(text) {
        this.text = text;
    }
}