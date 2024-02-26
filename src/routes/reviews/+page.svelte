<script lang="ts">
    export let data;
    import RatingsDots from "$lib/components/Ratings_dots.svelte";
</script>


<section class="bg-pale-green flex flex-col p-8 max-w-5xl">
    <h1 class="text-5xl text-royal-green px-2 mb-2  w-full">Reviews:</h1>
    <ul class="p-2 space-y-4 w-full">
        {#each data.posts as post}
            <li class="flex flex-col bg-pale-yellow rounded-md shadow-sm p-3 max-w-max
                        sm:flex-row sm:space-x-2 sm:items-center sm:max-w-none sm:justify-between">
                <div class="flex flex-col space-y-1">
                    <a href={post.path} class="text-3xl text-royal-green">{post.meta.shop_name}</a>
                    <p class=" text-royal-green">Reviewed: {post.meta.date}</p>
                </div>
                <div class="mt-2 sm:mt-0">
                    <RatingsDots scores={post.meta.scores} is_inline={true}/>
                </div>
            </li>
        {/each}
    </ul>
</section>
