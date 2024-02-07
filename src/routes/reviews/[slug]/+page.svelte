<script lang="ts">
	export let data;
    import RatingsBars from '$lib/components/Ratings_bars.svelte';
    import ImageGallery from '$lib/components/Image_gallery.svelte';
    import TagsCard from '$lib/components/Tags_card.svelte';
    import { PUBLIC_GOOGLE_MAPS_API_KEY } from '$env/static/public';
    const query_string = encodeURIComponent(data.address[0]);
</script>

<article class="bg-pale-green flex flex-col items-center">
    
    <div class="flex flex-col justify-start p-4">
        <h1 class="text-8xl text-royal-green ">{data.shop_name}</h1>
	    <p class="ml-4 mt-1">visited: {data.date}</p>
    </div>

    <div class="flex flex-row space-x-4 m-2 justify-center max-w-5xl">
        <div class="flex flex-col space-y-4 w-2/5">
            <TagsCard tags={data.tags} />
            <RatingsBars scores={data.scores} />
            
        </div>
        <iframe
            class="rounded-md"
            width="600"
            height="450"
            style="border:0"
            loading="lazy"
            title="map"
            allowfullscreen
            referrerpolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps/embed/v1/place?key=${PUBLIC_GOOGLE_MAPS_API_KEY}&q=${query_string}`}>
            <!-- Happy+Lemon+630+Blossom+Hill+Rd+#30,San+Jose,CA+95123 -->
        </iframe>
        <!-- AIzaSyCi_sLwMxiEZSd2d8wTgbASZmw-qxladwQ -->
    </div>
    <div class="h-72 max-w-5xl m-2 px-2 bg-pale-yellow">
        <ImageGallery images={data.imageData} />
    </div>
    <div class="mx-8 max-w-5xl mb-8">
        <svelte:component this={data.content} />
    </div>
    
</article>
