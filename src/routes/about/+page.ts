export async function load({ params }) {
	const post = await import('./about.md');  
	const { article_name, date} = post.metadata;              // all the posts frontmatter properties
	const content = post.default;                       // all the posts content (as html??)
    console.log(post.metadata)
	return {
		content,
		article_name,
		date
	};
}