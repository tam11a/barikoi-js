import { ErrorResponse } from "./types";

export function toSearchParams(obj: { [key: string]: any }): string {
	const keyValuePairs = [];

	for (const [key, value] of Object.entries(obj)) {
		if (value !== undefined && value !== null) {
			if (Array.isArray(value)) {
				for (const arrayValue of value) {
					keyValuePairs.push(`${key}=${encodeURIComponent(arrayValue)}`);
				}
			} else {
				keyValuePairs.push(`${key}=${encodeURIComponent(value)}`);
			}
		}
	}

	return keyValuePairs.join("&");
}

export async function fetchWithErrorBoundary(url: string): Promise<any> {
	try {
		const response = await fetch(url);

		if (response.status !== 200)
			throw {
				message: "Invalid Response",
				status: response.status,
			};

		const json = await response.json();

		if (json.status !== 200) throw json;

		return json;
	} catch (error) {
		// console.log(error);
		// return {
		// 	success: false,
		// 	...error,
		// };

		throw error as ErrorResponse;
	}
}
