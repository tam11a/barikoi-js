export type API_KEY = string;

export type pTypes =
	| "admin"
	| "fuel"
	| "others"
	| "agricultural"
	| "government"
	| "recreation"
	| "bank"
	| "healthcare"
	| "religious place"
	| "commercial"
	| "hotel"
	| "residential"
	| "construction"
	| "industry"
	| "shop"
	| "education"
	| "landmark"
	| "transportation"
	| "food"
	| "office"
	| "utility";

export interface ICoordinate {
	longitude: number;
	latitude: number;
}

export interface IReverseGeocodeParams extends ICoordinate {
	/* 
        Coordinate is required 
        but all other params are optional. 
        Any additional parameters with value true 
        will be counted. 
     */

	district?: boolean;
	post_code?: boolean;
	country?: boolean;
	sub_district?: boolean;
	union?: boolean;
	pauroshova?: boolean;
	location_type?: boolean;
	division?: boolean;
	address?: boolean;
	area?: boolean;
	bangla?: boolean;
}

export interface IGeocodeParams {
	/* 
        Place ID
     */
	place_id: number;
}

export interface IAutocompleteParams {
	/* 
        The Query String
     */
	q: string;
	/*
        Autocomplete API With City Filter 
        returns a place's id, longitude, 
        latitude, address, city, area, postCode, 
        pType & uCode within the city given.
     */
	city?: string;
	/* 
        Barikoi Post Office Autocomplete API 
        will return only post offices holding 
        place's id, longitude, latitude, address, 
        city, area, postCode, pType & uCode in 
        response. 
     */
	post_office?: boolean;
	/*
        Barikoi Industrial Autocomplete API 
        will return only industrial places 
        holding place's id, longitude, latitude, 
        address, city, area, postCode, pType 
        & uCode in response.
     */
	industrial?: boolean;
	/*
        Barikoi Bangla Autocomplete API will return 
        places holding place's id, longitude, latitude, 
        address, address_bn, city, city_bn, area, 
        area_bn, postCode, pType & uCode in response. 
     */
	bangla?: boolean;
}

export interface INearbyParams extends ICoordinate {
	ptype?: pTypes;
	distance: number; // in km (Kilometres)
	limit: number;
}

export interface IDistanceParams {
	source: ICoordinate;
	target: ICoordinate;
}

export interface ErrorResponse {
	message: string;
	status: number;
}
