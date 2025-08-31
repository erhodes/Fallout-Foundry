//Import Modules
import { FalloutActor } from "./actor.js";
import { FalloutItem } from "./item.js";

class FalloutSystem {


	// A method to register our custom sheets
	static registerSheets() {
		foundry.documents.collections.Actors.registerSheet("fallout", FalloutActorSheet, {
			types: ["npc"],
			makeDefault: true
		});
	}
}

class FalloutActorSheet extends foundry.appv1.sheets.ActorSheet {
	/** @override */
	getData() {
		const context = super.getData();

		const actorData = context.data.system;
		const str = actorData.vitality;

		console.log("getting sheet data strength " + str);

		return context;
	}

	get template() {
		return 'systems/fallout/templates/actor-sheet.html';
	}
}

Hooks.on("init", () => {
	console.log("init")
	// Register our custom document classes with the Foundry system.
	CONFIG.Actor.documentClass = FalloutActor;
	CONFIG.Item.documentClass = FalloutItem;

	CONFIG.Actor.sheetClass = FalloutActorSheet;
});

Hooks.on("ready", () => {
	FalloutSystem.registerSheets();
	console.log("Fallout system is ready!");
});