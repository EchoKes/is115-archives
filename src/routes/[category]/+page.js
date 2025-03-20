export async function load({ params }) {
	const { category } = params; // Extract category from URL

	// Load all Markdown files (globally)
	const allPosts = import.meta.glob('../../posts/**/*.md');

	// Filter only posts matching the requested category
	const matchingPosts = Object.entries(allPosts)
		.filter(([path]) => path.includes(`/posts/${category}/`)) // Filter by category
		.map(async ([path, resolver]) => {
			const post = await resolver(); // Load the Markdown file
			return {
				meta: post.metadata, // Extract frontmatter (title, date, tags)
				slug: path.split('/').pop().replace('.md', ''), // Extract slug from filename
				category: category
			};
		});

	// Wait for all posts to resolve
	const posts = await Promise.all(matchingPosts);

	return {
		posts: posts.sort((a, b) => new Date(b.meta.date) - new Date(a.meta.date)) // Sort by date
	};
}
