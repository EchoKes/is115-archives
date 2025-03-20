<script>
	import { onMount } from 'svelte';
	let { data } = $props();
	import { Copy } from 'lucide-svelte';

	// clipboard copy function
	onMount(() => {
		document.querySelectorAll('code').forEach((codeBlock) => {
			// Create a copy button
			const button = document.createElement('button');
			button.className = 'copy-btn';
			// const icon = document.createElement('span');
			button.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-copy"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>`;

			// Add copy functionality
			button.onclick = () => {
				navigator.clipboard.writeText(codeBlock.innerText);
				button.classList.add('copied');
				button.innerHTML = '✅ Copied!';
				setTimeout(() => {
					button.classList.remove('copied');
					button.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-copy"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>`;
					button.appendChild(icon);
				}, 1500);
			};

			// Insert button into the <pre> container
			const pre = codeBlock.parentElement;
			pre.style.position = 'relative'; // Ensure the button is positioned correctly
			pre.appendChild(button);
		});
	});
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<article>
	<hgroup>
		<h1>{data.meta.title}</h1>
		<p>Published at {data.meta.date}</p>
	</hgroup>

	<div class="tags">
		{#each data.meta.tags as tags}
			<span class="surface-4">&num;{tags}</span>
		{/each}
	</div>

	<div class="prose">
		<data.content />
	</div>
</article>

<style>
	article {
		max-inline-size: var(--size-content-3);
		margin-inline: auto;

		h1 {
			text-transform: capitalize;
		}

		h1 + p {
			margin-top: var(--size-2);
			color: var(--text-2);
		}

		.tags {
			display: flex;
			gap: var(--size-3);
			margin-top: var(--size-7);

			> * {
				padding: var(--size-2) var(--size-2);
				border-radius: var(--radius-round);
			}
		}
	}
</style>
