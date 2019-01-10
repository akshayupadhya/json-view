export class Utils {
	static isObject(json) {
		if (typeof json === "object" && !(json instanceof Array)) {
			return true;
		} else {
			return false;
		}
	}
	static isArray(json) {
		if (typeof json === "object" && json instanceof Array) {
			return true;
		} else {
			return false;
		}
	}
}
