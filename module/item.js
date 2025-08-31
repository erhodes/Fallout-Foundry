export class FalloutItem extends Item {
	get isWeapon() {
		return this.type === "weapon";
	}
}