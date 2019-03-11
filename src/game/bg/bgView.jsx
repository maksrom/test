import {View} from "../mvc/View.jsx";

export class BgView extends View {
    animate(ctx) {
        ctx.fillText(this.model.text, this.model.WIDTH / 2, this.model.HEIGH/ 2);
    }
}