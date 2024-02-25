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
        <h1 class="text-5xl sm:text-8xl text-royal-green ">{data.shop_name}</h1>
	    <p class="ml-4 mt-1">visited: {data.date}</p>
    </div>

    <div class="flex flex-col lg:flex-row lg:space-x-4 m-2 items-center max-w-5xl h-fit">
        <div class="flex mb-2 flex-col
                    sm:flex-row sm:space-x-2
                    lg:flex-col lg:space-y-4 lg:space-x-0  lg:w-2/5 lg:mb-0">
            <div class="max-w-80 lg:max-w-none"><TagsCard tags={data.tags} /></div>
            <div class="mt-2 lg:mt-0"><RatingsBars scores={data.scores}/></div>
            
            
        </div>
        
        <iframe
            class="rounded-md lg:w-3/5 self-stretch mt-2 h-72 lg:h-auto"
            style="border:0"
            loading="lazy"
            title="map"
            allowfullscreen
            referrerpolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps/embed/v1/place?key=${PUBLIC_GOOGLE_MAPS_API_KEY}&q=${query_string}`}>
        </iframe>
    </div>
    <div class="h-72 max-w-5xl m-2 px-2 bg-pale-yellow">
        <ImageGallery images={data.imageData} />
    </div>
    <div class="mx-8 max-w-5xl mb-8">
        <svelte:component this={data.content} />
    </div>
    
</article>
