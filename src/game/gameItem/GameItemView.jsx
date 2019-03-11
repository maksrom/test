import {View} from "../mvc/View.jsx";

export class GameItemView extends View {
    animate(ctx) {
        ctx.fillStyle = this.model.type;
        ctx.fillRect.apply(ctx, [this.model.position.x, this.model.position.y, 50, 60]);
    }
}