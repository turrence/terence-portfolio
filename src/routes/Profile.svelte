<script>
    import profile from '$lib/images/candid.jpg';
    import { GithubBrand, LinkedinBrand } from 'svelte-awesome-icons';
</script>

<div id="profile-box" class="container">
    <div class="row row-cols-2">
        <div class="col-3">
            <img id="pp" src={profile} alt="terence tong" />
        </div>
        <div class="col-9">
            <p>hi! welcome to terence tong's portfolio page</p>
            
            <p>design in progress : )</p>
            <p>one day i will buy a raspberry pi and have a bunch of cool projects</p>

            <a class='hover:outline hover:outline-1 hover:outline-offset-4 rounded-lg' href='https://www.linkedin.com/in/terence-tong/'>
                <LinkedinBrand size='35'/>
            </a>
            <a class='hover:outline hover:outline-1 hover:outline-offset-4 rounded-lg' href='https://github.com/turrence'>
                <GithubBrand size='35'/>
            </a>
        </div>
    </div>

</div>

<style>

#profile-box {
    border: 2px solid #9B26B6;
    border-radius: 25px;
    padding: 20px;
    box-shadow: 10px 20px 40px 5px var(--color-theme-2) ;
}

#pp {
    border-radius: 100%;
    max-width: 100%;
}

</style>