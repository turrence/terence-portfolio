<script>
	import Profile from './Profile.svelte';
</script>

<svelte:head>
	<title>Terence Tong</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="profile">
	<Profile />
</div>



<style>
	.profile {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

</style>
