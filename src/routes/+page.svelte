<svelte:head>
	<title>BinasBobaBlog</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<script lang="ts">
    export let data;
    console.log(data.posts[0]);
    import bubble_tea_budies from '$lib/images/home_page/bubble-tea-budies.png'
</script>

<section class="flex flex-col justify-center items-center flex-1.5 bg-pale-green">
    <div class="flex flex-col justify-start p-4">
        <p class="text-royal-green">Welcome to:</p>
        <h1 class="text-8xl text-royal-green">Bina's Boba Blog</h1>
    </div>
    <div class="flex flex-row max-w-5xl space-x-2 items-center justify-evenly">
        <div class="flex flex-col space-y-2">
            <a href={data.posts[0].path} class="bg-pale-yellow rounded-md shadow-md p-3">
                <p class="text-royal-green text-2xl">Most Recent Review:</p>
                <p class="text-royal-green">{data.posts[0].meta.shop_name}</p>
            </a>
            <a href="/reviews" class="bg-pale-yellow rounded-md shadow-md p-3 text-royal-green text-2xl">All Reviews</a>
        </div>
        <img class="w-1/2" src={bubble_tea_budies} alt="bubble tea budies" />
    </div>
</section>
