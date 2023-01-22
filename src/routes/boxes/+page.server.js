export async function load(context) {
    const { fetch } = context;

    const resp = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await resp.json();

    if (!resp.ok) {
        return {
            status: resp.status,
            error: new Error('Could not fetch the posts'),
        };
    }

    return { posts };
}