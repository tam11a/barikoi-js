import Barikoi from "../dist/index.js";

const x = async () => {
	const BKoi = new Barikoi("NDQ0OTo0RlVHVlBYTVU5");
	const res = await BKoi.ReverseGeocode({
		longitude: "90.36744611263278",
		latitude: "23.81970957278533",
	});
	console.log(res);
};
x();
