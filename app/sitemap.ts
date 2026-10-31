import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = "https://resumecraft-nine.vercel.app";

	const routes = [
		"",
		"/about",
		"/contact",
		"/privacy",
		"/templates",
		"/blog",
		"/builder",
	];

	return routes.map((route) => ({
		url: `${baseUrl}${route}`,
		lastModified: new Date(),
		changeFrequency: "weekly",
		priority: route === "" ? 1 : 0.7,
	}));
}
