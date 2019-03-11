export class GameItemView {
    constructor(model) {
        this.model = model;
    }

    animate(ctx) {
        ctx.fillStyle = this.model.type;
        ctx.fillRect.apply(ctx, [this.model.position.x, this.model.position.y, 50, 60]);
    }
}