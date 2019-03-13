import {GameItemModel} from "./GameItemModel.jsx";
import {GameItemView} from "./GameItemView.jsx";
import {Ctrl} from "../mvc/Ctrl.jsx";
import {stateMachine} from "../StateMachine.jsx";

export class GameItemCtrl extends Ctrl {
    constructor(type) {
        super(new GameItemModel(), new GameItemView());

        this.model.setType(type);

        // Listen for keydown events
        document.addEventListener('keydown', (e) => {
            if (e.keyCode === 87) {
                this.moveUp();
            }
            if (e.keyCode === 83) {
                this.moveDown();
            }
        });

        stateMachine.observe('onProgress', () => {
            console.log('Progreess in geme item!');
        });
    }

    moveUp() {
        this.model.moveUp();
    }

    moveDown() {
        this.model.moveDown();
    }

    setNewColor() {
        this.model.setRandomColor();
    }

    animate(ctx) {
       super.animate(ctx);

       if (this.model.isWin()) {
           this.model.setDefaultValues();
       }
    }
}