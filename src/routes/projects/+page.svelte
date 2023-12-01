<svelte:head>
	<title>Terence Tong | Projects</title>
</svelte:head>

<script>
	import ProjectCard from './ProjectCard.svelte';
	import spotifyLifeSnapshot from './static/spotify-life-snapshot.png'

	const projectsDone = [
		{
			projectName: "spotify life snapshot playlists",
			projectLink: "https://github.com/turrence/spotify-new-music-sorter",
			projectImage: spotifyLifeSnapshot,
			projectDescription: "this is a description",
		},
		{
			projectName: "spotify music distributor",
			projectLink: "https://github.com/turrence/spotify-music-distributor",
			projectImage: "",
			projectDescription: "this is a description of the music distributor",
		},
	]
</script>

<div class="main">
	<h1>Projects</h1>
	
	<div>
		<h2>Here are a list of projects that I've worked on:</h2>
		<div class="container">
			<div class="row">
				{#each projectsDone as {projectName, projectLink, projectImage, projectDescription}}
					<ProjectCard projectName={projectName} 
						projectLink={projectLink} 
						projectDescripton={projectDescription}
						projectImage={projectImage}>
					</ProjectCard>	
				{/each}
			</div>	
		</div>
	</div>
	<div>
		<h2>Here are some projects that I've contributed to:</h2>
		<ul>
			<li><a href="https://github.com/jaasonw/job-website">job website for new entry level software engineers</a></li>
			<li><a href="https://github.com/selynna/liquid-hacks">hackathon valorant fantasy league</a></li>
		</ul>
	</div>
	<div>
		<h1>Project Concepts</h1>
		<ul>
			<li><h2>Unbiased Political Information</h2></li>
			<p>
				This idea revolves around getting data directly from the <a href="https://gpo.congress.gov/">congress API</a> to report on policy without the bias of any corporation. This 
				project would make reading the primary source of our congressional hearings as simple as possible. This project involves summarizing
				information from those hearings and presenting them in an easily digestable format.
			</p>
		</ul>
		<ul>
			<li><h2>Correlation between Walkability Score and Mesasures of Happiness in the US</h2></li>
				<a href="https://catalog.data.gov/dataset/walkability-index1">walkability index</a>
				<p>need link for Measures of Happiness in the US
		</ul>
	</div>
</div>



<style>
	.container {
		margin: 30px;
	}
	h1 {
		color: var(--color-theme-2);
	}
	.main {
		padding-top: 50px;
	}
</style>