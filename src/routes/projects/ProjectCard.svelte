<script>
    export let projectName = "";
    export let projectDescripton = "";
    export let projectLink = "";
    export let projectImage = ""; 
    export let projectGithub = "";
    import { GithubBrand, LinkSolid } from 'svelte-awesome-icons';
</script>

<div class="cardWrapper">
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
                    <a href={projectLink}><LinkSolid size='35'/></a>    
                {/if}
            </div>
        </div>
    </div>
</div>

<style>
.cardWrapper {
    flex: 0 0 calc(33.33% - 20px);
    margin: 10px;
    align-self: center
}

.links {
    margin-bottom: 30px;
}

.card {
    padding: 20px;
    border-radius: 20px;
    background-color: var(--color-bg-0);
    margin-bottom: 10px;
    text-align: center;
}

img {
    max-width:100%;
    max-height:100%;
    border-radius: 30px;
    padding: 10px;
}
</style>