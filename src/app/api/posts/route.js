import Post from "@/models/Post";
import connect from "@/utils/db";
import { NextResponse } from "next/server";

export const GET = async (req) => {
	const url = new URL(req.url);
	const username = url.searchParams.get("username");

	try {
		await connect();

		const posts = await Post.find(username && { username });

		return new NextResponse(JSON.stringify(posts), { status: 200 });
	} catch (err) {
		return new NextResponse(err, { status: 500 });
	}
};

export const POST = async (req) => {
	const body = await req.json();

	const newPost = new Post(body);

	try {
		await connect();

		await newPost.save();

		return new NextResponse(
			"Post has been created successfully",
			{
				status: 201,
			},
			newPost,
		);
	} catch (err) {
		return new NextResponse(err, { status: 500 });
	}
};
