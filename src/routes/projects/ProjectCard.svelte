<script>
    export let projectName = "";
    export let projectDescripton = "";
    export let projectLink = "";
    export let projectImage = ""; 
    export let projectGithub = "";
    import { GithubBrand, LinkSolid } from 'svelte-awesome-icons';
</script>

<div class="col-4">
    <div class="card">
        <h4 class="card-title">{projectName}</h4>
        <div class="content">
            {#if projectImage != ""}
                <img class="card-img-top" src={projectImage} alt="project"/>
            {/if}
            <p>{projectDescripton}</p>
            <div class="links">
                {#if projectGithub != ""}
                    <a href={projectGithub}><GithubBrand size='35'/></a>    
                {/if}
                {#if projectLink != ""}
                    <a href={projectGithub}><LinkSolid size='35'/></a>    
                {/if}
            </div>
        </div>
    </div>
</div>

<style>

.col-4 {
    text-align: center;
}

.links {
    margin-bottom: 30px;
}

.card {
    padding: 20px;
    border-radius: 20px;
    background-color: var(--color-bg-0);
    /* height: 500px; */
}

img {
    max-width:100%;
    max-height:100%;
    border-radius: 30px;
    padding: 10px;
}
</style>