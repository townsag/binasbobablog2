<script lang="ts">
    // export let value_score: number;
    // export let variety_score: number;
    // export let atmosphere_score: number;
    // export let quality_score: number;
    // export let wow_score: number;
    export let scores: any;
</script>

<aside class=" bg-slate-50 rounded-md shadow-md  h-min p-3"> <!-- w-min -->
    <h3 class="text-xl">Scores</h3>
    <!-- <div class="border-t-2 border-gray-200 p-px"></div> -->
    <div class="flex flex-col "> <!-- w-min -->
        <div class="flex flex-row justify-between items-center space-x-2">
            <label for="price score w-8">Value</label>
            <div class="w-32 bg-gray-200 rounded-full">
                <div class="bg-red-500 rounded-full text-xs font-medium 
                text-red-100 text-center p-0.5 leading-none" 
                style="width: {scores.value/5 * 100}%">{scores.value}</div>
            </div>
        </div>
        <div class="flex flex-row justify-between items-center space-x-2">
            <label for="variety score">Variety</label>
            <div class="w-32 bg-gray-200 rounded-full">
                <div class="bg-yellow-400 rounded-full text-xs font-medium 
                text-yellow-100 text-center p-0.5 leading-none" 
                style="width: {scores.variety/5 * 100}%">{scores.variety}</div>
            </div>
        </div>
        <div class="flex flex-row justify-between items-center space-x-2">
            <label for="atmosphere score">Atmosphere</label>
            <div class="w-32 bg-gray-200 rounded-full">
                <div class="bg-green-400 rounded-full text-xs font-medium 
                text-green-100 text-center p-0.5 leading-none" 
                style="width: {scores.atmosphere/5 * 100}%">{scores.atmosphere}</div>
            </div>
        </div>
        <div class="flex flex-row justify-between items-center space-x-2">
            <label for="quality score">Quality</label>
            <div class="w-32 bg-gray-200 rounded-full">
                <div class="bg-blue-500 rounded-full text-xs font-medium 
                text-blue-100 text-center p-0.5 leading-none" 
                style="width: {scores.quality/5 * 100}%">{scores.quality}</div>
            </div>
        </div>
        <div class="flex flex-row justify-between items-center space-x-2">
            <label for="wow score">Wow</label>
            <div class="w-32 bg-gray-200 rounded-full">
                <div class=" bg-orange-400 rounded-full text-xs font-medium 
                text-orange-100 text-center p-0.5 leading-none" 
                style="width: {scores.wow/5 * 100}%">{scores.wow}</div>
            </div>
        </div>

    </div>
</aside>

<!-- <style lang="postcss">
    label {
        min-width: 100px;
    }
</style> -->