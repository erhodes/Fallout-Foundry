/**
 * Extend the basic ActorSheet
 * @extends {ActorSheet}
 */
export class FalloutActorSheet extends foundry.appv1.sheets.ActorSheet {

	static get defaultOptions() {
		return foundry.utils.mergeObject(super.defaultOptions, {
			classes: ["sheet", "actor"],
			template: "systems/fallout/templates/actor/actor-sheet.html",
			width: 600,
			height: 600,
			tabs: [{ navSelector: ".sheet-tabs", contentSelector: ".sheet-body", initial: "features" }]
		});
	}

	/** @override */
	async getData() {
		const context = super.getData();

		console.log(context);

		// // Just for testing: add a laser property to the context
		// context.laser = 12;

	    // // Use a safe clone of the actor data for further operations.
    	const actorData = this.document.toObject(false);


	    // // Add the actor's data to context.data for easier access, as well as flags.
	    context.system = actorData.system;
	    // context.flags = actorData.flags;

		return context;
	}

	get template() {
		return 'systems/fallout/templates/actor-sheet.html';
	}

	/** @override */
	activateListeners(html) {
		super.activateListeners(html);

		html.on('click', '.deal-damage', this._onDealDamage.bind(this));

		// html.on('click', '.deal-damage', (ev) => {
		// 	console.log("Deal damage button clicked");
		// })
	}

	_onDealDamage(event) {
		console.log("Deal damage button clicked");
	}
}