import Barikoi from "../dist/index.js";

const BKoi = new Barikoi("YOUR_API_KEY_HERE");

const x = async () => {
	const res = await BKoi.ReverseGeocode({
		longitude: "90.36744611263278",
		latitude: "23.81970957278533",
	});
	console.log(res);
};
x();
