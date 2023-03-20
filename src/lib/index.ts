import { API_KEY, IReverseGeocodeParams } from "../types";
import { reverseGeocode } from "./queries/reverse-geocode";

class Barikoi {
	private APIKEY: API_KEY;

	constructor(APIKEY: API_KEY) {
		this.APIKEY = APIKEY;
	}

	async ReverseGeocode(options: IReverseGeocodeParams): Promise<any> {
		return reverseGeocode(this.APIKEY, options);
	}
}

export default Barikoi;
