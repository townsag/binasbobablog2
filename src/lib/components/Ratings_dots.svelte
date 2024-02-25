
<script lang="ts">
    interface Scores{
        value: number,
        variety: number,
        atmosphere: number,
        quality: number,
        wow: number
    }
    export let scores: Scores;
    export let is_inline: boolean = false;
</script>

<aside class=" bg-slate-50 rounded-md shadow-md max-w-max h-min p-3">
    {#if !is_inline}
    <h3 class="text-xl">Scores</h3>
    {/if}
    <div class="flex flex-wrap space-x-2 items-center">
        {#if is_inline}
        <h3 class="text-xl">Scores</h3>
        {/if}
        <div class=" w-6 h-6 rounded-full flex justify-center items-center bg-red-500">
            <p class="text-red-100">{scores.value}</p>
        </div>
        <div class=" w-6 h-6 rounded-full flex justify-center items-center bg-yellow-400">
            <p class="text-yellow-100">{scores.variety}</p>
        </div>
        <div class=" w-6 h-6 rounded-full flex justify-center items-center bg-green-400">
            <p class="text-green-100">{scores.atmosphere}</p>
        </div>
        <div class=" w-6 h-6 rounded-full flex justify-center items-center bg-blue-500">
            <p class="text-blue-100">{scores.quality}</p>
        </div>
        <div class=" w-6 h-6 rounded-full flex justify-center items-center bg-orange-400">
            <p class="text-orange-100">{scores.wow}</p>
        </div>
    </div>
</aside>