import {GameItemModel} from "./GameItemModel.jsx";
import {GameItemView} from "./GameItemView.jsx";
import {Ctrl} from "../mvc/Ctrl.jsx";

export class GameItemCtrl extends Ctrl {
    constructor(type) {
        super(new GameItemModel(), new GameItemView());

        this.model.setType(type);
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