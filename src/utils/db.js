import mongoose from "mongoose";

mongoose.set("strictQuery", true);

const connect = async () => {
	try {
		await mongoose.connect(process.env.DB_URL);
		console.log("connected to DB");
	} catch (err) {
		throw new Error("failed to connect to DB");
	}
};
export default connect;
