<svelte:head>
	<title>Terence Tong | Projects</title>
</svelte:head>

<script>
	import ProjectCard from './ProjectCard.svelte';
	import spotifyLifeSnapshot from './static/spotify-life-snapshot_480x480.png'
	import spotifyMusicDistributor from './static/spotify-music-distributor-480x480.png'	

	const projectsDone = [
		{
			projectName: "spotify life snapshot playlists",
			projectLink: "",
			projectGithub: "https://github.com/turrence/spotify-new-music-sorter",
			projectImage: spotifyLifeSnapshot,
			projectDescription: "an application that creates new playlists that are automatically populated with songs that you recently discovered" ,
		},
		{
			projectName: "spotify music distributor",
			projectLink: "",
			projectGithub: "https://github.com/turrence/spotify-music-distributor",
			projectImage: spotifyMusicDistributor,
			projectDescription: "an application that creates a machine learning model from your playlists to streamline the process of adding new songs to existing playlists",
		},
		{
			projectName: "automatic deployment guide with Jenkins and Docker",
			projectLink: "https://docs.google.com/document/d/17DYM6d1DhCHMfAKaTC3IXFHmoLdrq9xnKeRpzCetou0/edit?usp=sharing",
			projectGithub: "https://github.com/turrence/archistar-project",
			projectImage: "",
			projectDescription: "a step-by-step guide on how to create a Jenkins pipeline that pushes and pulls images from Docker",
		},
	]
</script>

<div class="main">
	<h1>Projects</h1>
	
	<div>
		<h2>Here are some of the projects that I've worked on:</h2>
		<div class="container">
			<div class="row">
				{#each projectsDone as {projectName, projectLink, projectGithub, projectImage, projectDescription}}
					<ProjectCard projectName={projectName} 
						projectLink={projectLink} 
						projectGithub={projectGithub}
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