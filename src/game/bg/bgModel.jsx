import {Model} from "../mvc/Model.jsx";

export class BgModel extends Model {
    setDefaultValues() {
        this.text = 'Play';
    }

    setWinText() {
        this.text = 'win';

        setTimeout(() => this.setDefaultValues(), 1000)
    }
}