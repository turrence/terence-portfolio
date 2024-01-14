<svelte:head>
	<title>Terence Tong | About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<script lang="ts">
	import type { PageData } from "./$types";
	import BoulderingCard from "./BoulderingCard.svelte"

    export let data: PageData;
	console.log(data)
</script>

<div class="text-column">
	<h1>Terence Tong</h1>

	<h2>climbing since 2021</h2>
</div>
	<div class="container">
	{#each data.data as entry}
		<div class="item">
			<BoulderingCard date={entry.date} video={entry.video} grade={entry.grade} notes={entry.notes}/>
		</div>
	{/each}
	</div>


<style>
	.container {
		width: 100%;
		display: flex;
		flex-flow: row wrap;
		justify-content: space-around;
		gap: 10px 0px;
	}
</style>