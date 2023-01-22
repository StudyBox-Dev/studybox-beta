<script>
    export let data;
</script>

<h2>Boxes</h2>

{#each data.posts as post}
    <li>
        <a sveltekit:prefetch href={`/box/${post.id}`}>{post.title}</a>
    </li>
{/each}
