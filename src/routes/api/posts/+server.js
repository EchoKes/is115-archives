import { json } from '@sveltejs/kit';

async function getPosts() {
	let posts = [];

	const paths = import.meta.glob('/src/posts/*/*.md', { eager: true });

	for (const path in paths) {
		const file = paths[path];
		const slug = path.split('/').at(-1)?.replace('.md', '');
		const metadata = file.metadata;
		const post = { ...metadata, slug };
		posts.push(post);
	}
	posts = posts.sort(
		(first, second) => new Date(second.date).getTime() - new Date(first.date).getTime()
	);
	return posts;
}

export async function GET() {
	const posts = await getPosts();
	return json(posts);
}
