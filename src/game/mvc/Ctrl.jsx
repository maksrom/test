export class Ctrl {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        this.model.setDefaultValues();
        this.view.setModel(this.model);
    }

    animate(ctx) {
        this.view.animate(ctx)
    }

}