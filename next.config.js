/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		// domains: ["images.pexels.com"],

		remotePatterns: [
			{
				protocol: "https",
				hostname: "**",
			},
		],
	},
	swcMinify: true,
};

module.exports = nextConfig;
