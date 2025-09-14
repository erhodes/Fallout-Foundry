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

		systemData.bloodied = systemData.attributes.damage.value > (systemData.special.endurance.value);

	}

	async rollSkill(attributeName, skillName) {

		const roll = new Roll('1d20');
		await roll.roll();

		roll.toMessage({
			speaker: ChatMessage.getSpeaker({ actor: this }),
      		flavor: `${attribute.label} Check`
		})
	}

	applyDamage(damage) {
		console.log(`Applying ${damage} damage to actor ${this.name}`);
		this.system.attributes.damage.value += damage;
		if (this.system.attributes.damage.value > this.system.special.endurance.value) {
			this.system.bloodied = true;
		} else {
			this.system.bloodied = false;
		}
		console.log(`New damage value: ${this.system.attributes.damage.value} and bloodied: ${this.system.bloodied}`);
	}
}