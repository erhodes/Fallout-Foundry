/**
 * Extend the basic ItemSheet with some very simple modifications
 * @extends {ItemSheet}
 */
export class FalloutItemSheet extends ItemSheet {
      /** @override */
    static get defaultOptions() {
        return foundry.utils.mergeObject(super.defaultOptions, {
            classes: ['boilerplate', 'sheet', 'item'],
            width: 520,
            height: 480,
            tabs: [
                {
                    navSelector: '.sheet-tabs',
                    contentSelector: '.sheet-body',
                    initial: 'description',
                },
            ],
        });
    }

    /** @override */
    get template() {
        return `systems/fallout/templates/item-sheet.html`;
    }

    /** @override */
    async getData() {
        const context = super.getData();

        // Use a safe clone of the item data for further operations.
        const itemData = this.document.toObject(false);

        context.system = itemData.system;

        return context;
    }
}