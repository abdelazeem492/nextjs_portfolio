import { mongoose } from "mongoose";

const { Schema } = mongoose;

const postSchema = new Schema(
	{
		title: {
			type: String,
			required: true,
		},
		desc: {
			type: String,
			required: true,
		},
		img: {
			type: String,
			required: true,
		},
		user: {
			name: { type: String, required: true },
			img: { type: String },
		},
	},
	{
		timestamps: true,
	},
);

//If the Post collection does not exist create a new one.
export default mongoose.models.Post || mongoose.model("Post", postSchema);
