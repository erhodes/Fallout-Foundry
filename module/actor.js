/**
 * Extend the base Actor document
 * @extends {Actor}
 */
export class FalloutActor extends Actor {

	prepareData() {

		const val = this.system.vitality;
		const strength = this.system.special.strength.value;

		console.log("preparing actor data " + val + " and " + this.name);
		super.prepareData();
	}

	prepareDerivedData() {
		const actorData = this;
		const systemData = actorData.system;

		const vitality = systemData.vitality;

	}

	async rollSkill(attributeName, skillName) {

		const roll = new Roll('1d20');
		await roll.roll();

		roll.toMessage({
			speaker: ChatMessage.getSpeaker({ actor: this }),
      		flavor: `${attribute.label} Check`
		})
	}
}