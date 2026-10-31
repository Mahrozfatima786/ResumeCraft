// import type { MetadataRoute } from "next";

// export default function sitemap(): MetadataRoute.Sitemap {
// 	const baseUrl = "https://resumecraft-nine.vercel.app";

// 	const routes = [
// 		"",
// 		"/about",
// 		"/contact",
// 		"/privacy",
// 		"/templates",
// 		"/blog",
// 		"/builder",
// 	];

// 	return routes.map((route) => ({
// 		url: `${baseUrl}${route}`,
// 		lastModified: new Date(),
// 		changeFrequency: "weekly",
// 		priority: route === "" ? 1 : 0.7,
// 	}));
// }
import type { MetadataRoute } from "next";
import { articles } from "@/lib/data";

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

	const staticPages: MetadataRoute.Sitemap = routes.map((route) => ({
		url: `${baseUrl}${route}`,
		lastModified: new Date(),
		changeFrequency: "weekly",
		priority: route === "" ? 1 : 0.7,
	}));

	const blogPages: MetadataRoute.Sitemap = articles.map((article) => ({
		url: `${baseUrl}/blog/${article.slug}`,
		lastModified: new Date(),
		changeFrequency: "monthly",
		priority: 0.7,
	}));

	return [...staticPages, ...blogPages];
}
