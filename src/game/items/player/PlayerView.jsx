import {View} from "../mvc/View.jsx";

export class PlayerView extends View {
    /** @inheritDoc */
    animate(ctx) {
        ctx.fillStyle = this.model.type;
        ctx.fillRect.apply(ctx, [this.model.position.x, this.model.position.y, this.model.width, this.model.height]);

        if (this.model.fired) {
            this.model.runFire();

            ctx.arc(this.model.firePos[0], this.model.firePos[1] + this.model.width / 2, this.model.width / 2, 0, 2 * Math.PI, false);
            ctx.fillStyle = this.model.type;
            ctx.fill();
        }
    }
}