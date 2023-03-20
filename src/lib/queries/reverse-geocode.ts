import { BASEURL } from "../../config";
import { API_KEY, IReverseGeocodeParams } from "../../types";
import { fetchWithErrorBoundary, toSearchParams } from "../../utilities";

export const reverseGeocode = async (
	APIKEY: API_KEY,
	options: IReverseGeocodeParams
) => {
	const res = await fetchWithErrorBoundary(
		`${BASEURL()}/search/reverse/${APIKEY}/geocode?${toSearchParams(options)}`
	);
	return res?.place || null;
};
