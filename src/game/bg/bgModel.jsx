import {Model} from "../mvc/Model.jsx";
import {stateMachine} from "../StateMachine.jsx";

export class BgModel extends Model {
    setDefaultValues() {
        this.text = stateMachine.state;
    }

    setWinText(text) {
        this.text = text;
    }
}