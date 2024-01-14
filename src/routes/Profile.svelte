<script>
    import profile from '$lib/images/profile-pic.jpg';
    import { GithubBrand, LinkedinBrand } from 'svelte-awesome-icons';
</script>

<div id="profile-box" class="container">
    <div class="row row-cols-2">
        <div class="col-3">
            <img id="pp" src={profile} alt="terence tong" />
        </div>
        <div class="col-9">
            <p>Hi! Welcome to Terence Tong's portfolio page</p>

            <p>
                I'm Software Engineer whose worked at companies such as NASA JPL, Amazon, and a startup company, Route. 
                My experience is primarily backend, but I can definitely work frontend.
            </p>
            
            <p>here are some of the <a href="/projects">projects</a> i worked on</p>

            <p>here is my <a href="/resume">resume</a></p>

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
    border: 2px solid var(--color-theme-2);
    border-radius: 25px;
    padding: 20px;
    background: var(--color-bg-0);
    box-shadow: 10px 20px 40px 5px var(--color-theme-2) ;
}

#pp {
    border-radius: 100%;
    max-width: 100%;
}

</style>