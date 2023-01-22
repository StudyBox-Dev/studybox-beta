// to make it run on server side a name of the file must be: '+page.server.svelte'

export async function load(context) {
    const { fetch, params } = context;
    const idx = params.idx;

    const resp = await fetch(`https://jsonplaceholder.typicode.com/posts/${idx}`);
    const post = await resp.json();

    if (!resp.ok) {
        return {
            status: resp.status,
            error: new Error(`Could not fetch the post ${idx}`),
        };
    }

    return { post };
}