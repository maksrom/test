import {BgView} from "./bgView.jsx";
import {BgModel} from "./bgModel.jsx";
import {Ctrl} from "../mvc/Ctrl.jsx";

export class BgCtrl extends Ctrl {
    constructor() {
        super(new BgModel(), new BgView())
    }

    win() {
        this.model.setWinText();
    }
}