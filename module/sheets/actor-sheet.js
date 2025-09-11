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
	getData() {
		const context = super.getData();

		const actorData = context.data.system;

		console.log("actor data " + actorData);

		return context;
	}

	get template() {
		return 'systems/fallout/templates/actor-sheet.html';
	}
}