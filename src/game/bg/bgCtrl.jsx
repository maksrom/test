import {BgView} from "./bgView.jsx";
import {BgModel} from "./bgModel.jsx";
import {Ctrl} from "../mvc/Ctrl.jsx";
import {stateMachine} from "../StateMachine.jsx";

window.stateMachine = stateMachine;

export class BgCtrl extends Ctrl {
    constructor() {
        super(new BgModel(), new BgView());

        stateMachine.observe('onBegin', () => {
            this.model.setWinText('Game is started');
        });

        stateMachine.observe('onProgress', () => {
            this.model.setWinText('Game is progress');
        });

        stateMachine.observe('onEnd', () => {
            this.model.setWinText('Game is finish');
        });
    }

    win() {
        this.model.setWinText();
    }
}