import { error } from '@sveltejs/kit';
export async function load({ params }) {
	try {
		const post = await import(`../../../posts/${params.category}/${params.slug}.md`);

		return {
			content: post.default,
			meta: post.metadata
		};
	} catch (e) {
		error(404, `Could not find ${params.category} and ${params.slug}.`);
	}
}
