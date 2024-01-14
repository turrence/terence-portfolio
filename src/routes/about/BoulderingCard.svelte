<script>
    export let date = "";
    export let grade =""
    export let video = "";
    export let notes = "";
</script>

<div class="card">
    <h4 class="card-title">{grade}</h4>
        <div class="content">
            <iframe title="video" src={video} allowfullscreen></iframe>
            <p>{date}</p>
            <p>{notes}</p>
        </div>
</div>

<style>

.card {
    flex-basis: 10%;
    padding: 20px;
    border-radius: 20px;
    background-color: var(--color-bg-0);
    text-align: center;
    margin: 10px;
}

iframe {
    aspect-ratio: 3 / 4;
    width: 100%;
    border-radius: 10px;
}


</style>