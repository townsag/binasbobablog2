export async function load({ params }) {
    const post = await import(`../../../lib/content/posts/${params.slug}.md`);  // called params.slug because we named our dynamic route slug
    const imageDataFunc = await import(`../../../lib/generated_image_imports/${params.slug}.ts`);
    // console.log("printing image data func in slug +page.ts");
    // console.log(typeof imageDataFunc);
    // console.log(imageDataFunc);
    // console.log(imageDataFunc.default);
    const imageData = await imageDataFunc.default;
    // console.log("pringing image data in slug +page.ts ");
    // console.log(typeof imageData);
    // console.log(imageData);
    const { shop_name, date, scores, tags, address } = post.metadata;            // all the posts frontmatter properties
	const content = post.default;                       // all the posts content (as html??)
    // console.log(post.metadata);
	return {
		content,
		shop_name,
		date,
        scores,
        imageData,
        tags,
        address
	};
}