<script>
	export let data;
	import * as config from '$lib/config';
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<section>
	<h2>Posts in {data.posts[0].category}</h2>
	<ul class="posts">
		{#each data.posts as post}
			<li class="post">
				<a href="/{post.category}/{post.slug}" class="title">{post.meta.title}</a>
				<p class="date">{post.meta.date}</p>
				<p class="tags">{post.meta.tags}</p>
			</li>
		{/each}
	</ul>
</section>

<style>
	.posts {
		display: grid;
		gap: 2rem;
	}

	.post {
		max-inline-size: var(--size-content-3);
	}

	.post:not(:last-child) {
		border-bottom: 1px solid var(--border);
		padding-bottom: var(--size-7);
	}

	.title {
		font-size: var(--font-size-fluid-3);
		text-transform: capitalize;
	}

	.date {
		color: var(--text-2);
	}
</style>
