<script lang="ts">
    export let data;
</script>
<article class="flex flex-col bg-pale-green items-center">
    <div class="flex flex-col justify-start p-4">
        <h1 class="text-8xl text-royal-green ">{data.article_name}</h1>
	    <!-- <p class="ml-4 mt-1">Authored: {data.date}</p> -->
    </div>
    <!-- <h2 class="text-3xl text-royal-green m-8">The Ranking System:</h2> -->
    <div class="mx-8 mb-8 max-w-5xl">
        <svelte:component this={data.content} />
    </div>
</article>