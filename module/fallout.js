//Import Modules
import { FalloutActor } from "./actor.js";
import { FalloutItem } from "./item.js";
import { FalloutActorSheet } from "./sheets/actor-sheet.js"


Hooks.on("init", () => {
	console.log("init")

	game.fallout = {
		FalloutActor,
		FalloutItem
	};

	// Register our custom document classes with the Foundry system.
	CONFIG.Actor.documentClass = FalloutActor;
	CONFIG.Item.documentClass = FalloutItem;

	CONFIG.Actor.sheetClass = FalloutActorSheet;

	// Register sheet application classes
	foundry.documents.collections.Actors.unregisterSheet('core', foundry.appv1.sheets.ActorSheet);
		foundry.documents.collections.Actors.registerSheet("fallout", FalloutActorSheet, {
			types: ["npc"],
			makeDefault: true
		});

	// return preloadHandlebarsTemplates();
});

Hooks.on("ready", () => {
	console.log("Fallout system is ready!");
});