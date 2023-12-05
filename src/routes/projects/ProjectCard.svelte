<script>
    export let projectName = "";
    export let projectDescripton = "";
    export let projectLink = "";
    export let projectImage = ""; 
    import { GithubBrand } from 'svelte-awesome-icons';
</script>

<div class="col-4">
    <div class="card">
        <h5 class="card-title">{projectName}</h5>
        <img class="card-img-top" src={projectImage} alt="project"/>
        <p>{projectDescripton}</p>
        <a href={projectLink}><GithubBrand size='35'/></a>
    </div>
</div>

<style>

.col-4 {
    text-align: center;
}
.card {
    padding: 20px;
    border-radius: 20px;
    background-color: var(--color-bg-0);
}

img {
    max-width:100%;
    max-height:100%;
    border-radius: 30px;
    padding: 10px;
}
</style>