<script lang='ts'>
    export let tags: string[];
</script>

<div class="bg-slate-50 rounded-md shadow-md h-min">
    <h3 class="text-xl mx-2 mt-2 ">Tags</h3>
    <div class="flex flex-row flex-wrap  w-full pl-2 pt-1">
        {#each tags as tag}
            <div class="p-2 rounded-md bg-slate-200 mb-2 mr-2">{tag}</div>
        {/each}
    </div>
</div>