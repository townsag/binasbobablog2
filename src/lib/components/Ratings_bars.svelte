<script lang="ts">
    interface BarInfo {
        percentage: number,
        bar_color: string,
        text_color: string,
    }
    

	export let scores: any;
	let score_bars_info: BarInfo[] = [
		{ percentage: (scores.value / 5) * 100, bar_color: 'bg-red-500', text_color: 'text-red-100' },
        { percentage: (scores.variety / 5) * 100, bar_color: 'bg-yellow-400', text_color: 'text-yellow-100' },
        { percentage: (scores.atmosphere / 5) * 100, bar_color: 'bg-green-400', text_color: 'text-green-100' },
        { percentage: (scores.quality / 5) * 100, bar_color: 'bg-blue-500', text_color: 'text-blue-100' },
        { percentage: (scores.wow / 5) * 100, bar_color: 'bg-orange-400', text_color: 'text-orange-100' }
	];
</script>

<aside class=" bg-slate-50 rounded-md shadow-md h-min p-3">
	<!-- w-min -->
	<h3 class="text-xl">Scores</h3>
	<!-- <div class="border-t-2 border-gray-200 p-px"></div> -->
	<div class="flex flex-row space-x-2">
		<div class="flex flex-col max-w-max">
			{#each ['Value', 'Variety', 'Atmosphere', 'Quality', 'Wow'] as category_name}
				<p class="h-6">{category_name}</p>
			{/each}
		</div>
		<div class="flex flex-col w-full">
			<!-- ToDo: I think this could be rewritten with a for loop and a list of object literals -->
			{#each score_bars_info as bar_info}
				<div class="h-6 flex items-center">
					<div class="min-w-32 w-full bg-gray-200 rounded-full">
						<div
							class="{bar_info.bar_color} rounded-full text-xs font-medium
                        {bar_info.text_color} text-center p-0.5 leading-none"
							style="width: {bar_info.percentage}%"
						>
							{scores.value}
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</aside>
