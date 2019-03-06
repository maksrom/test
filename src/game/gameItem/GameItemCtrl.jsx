import {GameItemModel} from "./GameItemModel.jsx";
import {GameItemView} from "./GameItemView.jsx";

export class GameItemCtrl {
    constructor(type) {

        this.model = new GameItemModel();
        this.view = new GameItemView(this.model);

        this.model.setType(type);
    }

    setNewColor() {
        this.model.setRandomColor();
    }

    animate(ctx) {
       this.view.animate(ctx);
    }
}