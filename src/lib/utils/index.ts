interface PostMetadata {
    [key: string]: any;
  }

export const fetchMarkdownPosts = async () => {
	// const allPostFiles: Record<string, () => Promise<{ metadata: PostMetadata }>> = import.meta.glob('/src/routes/blog/*.md');
    const allPostFiles = import.meta.glob('$lib/content/posts/*.md') as Record<string, () => Promise<{metadata: PostMetadata}>>;
    // console.log(typeof allPostFiles);
    // console.log(Object.keys(allPostFiles));
    // Object.keys(allPostFiles).forEach(key => {
    //     console.log(typeof allPostFiles[key])
    // });
	const iterablePostFiles = Object.entries(allPostFiles);

	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
            // path used to look like /src/routes/reviews/Happy-Lemon-2.md
            // cut down to /reviews/Happy-Lemon-2
            // path looks like /src/lib/content/posts/Happy-Lemon-2.md
            // should look like /reviews/Happy-Lemon-2
			const { metadata } = await resolver();
            const postPath = "/reviews/" + path.slice(23, -3);
			// const postPath = path.slice(11, -3);

			return {
				meta: metadata,
				path: postPath
			};
		})
	);

	return allPosts;
};

