// Import document classes.
import { FalloutActor } from "./actor.js";
import { FalloutItem } from "./item.js";
// Import sheet classes.
import { FalloutActorSheet } from "./sheets/actor-sheet.js"
import { FalloutItemSheet } from "./sheets/item-sheet.js"
// Import helper/utility classes and constants.
import { preloadHandlebarsTemplates } from "./helpers/templates.js";

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
	CONFIG.Item.sheetClass = FalloutItemSheet;

	// Register sheet application classes
	foundry.documents.collections.Actors.unregisterSheet('core', foundry.appv1.sheets.ActorSheet);
		foundry.documents.collections.Actors.registerSheet("fallout", FalloutActorSheet, {
			types: ["npc"],
			makeDefault: true
		});
	foundry.documents.collections.Items.unregisterSheet('core', foundry.appv1.sheets.ItemSheet);
		foundry.documents.collections.Items.registerSheet("fallout", FalloutItemSheet, {
			makeDefault: true
		});

	// Preload Handlebars templates
	return preloadHandlebarsTemplates();
});

Hooks.on("ready", () => {
	console.log("Fallout system is ready!");
});