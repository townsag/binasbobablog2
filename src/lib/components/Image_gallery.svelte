<script lang="ts">
    export let images: string[];
</script>

<div class="overflow-x-auto flex flex-row bg-inherit h-full w-full space-x-2">
    {#each images as image}
        <img src={image} alt="boba tea shop" class="object-contain py-2 h-full">
    {/each}
</div>