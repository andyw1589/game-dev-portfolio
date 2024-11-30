<script>
    let { title, description, imageSrc } = $props();
</script>

<a href="https://google.ca">
    <div class="p-3 rounded">
        <h4 class="hovertext">{title}</h4>
        <p class="hovertext">{description}</p>
    </div>
    <img src={imageSrc} class="rounded shadow" alt={title + " icon"} />
</a>

<style>
    a>div {
        position: absolute;
        width: 15vw;
        height: 15vw;
        background-color: rgba(0, 0, 0, 0);
        transition: background-color .2s;
    }

    a>div:hover {
        background-color: rgba(0, 0, 0, 0.5);
    }

    .hovertext {
        color: rgba(255, 255, 255, 0);
        transition: color .2s;
    }

    a>div:hover>.hovertext {
        color: rgba(255, 255, 255, 1);
    }

    img {
        width: 15vw;
        border: 0.2rem solid black;
    }

    @media only screen and (max-width: 750px) {
        img {
            width: 30vw;
        }
    }
</style>
